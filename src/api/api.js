import data from "../assets/employees.json"
import moment from 'moment'

const getEmployees = () => {
    return new Promise(function (resolve, reject) {
        //Имитируем запрос к серверу.
        Array.isArray(data)
          ? setTimeout(() => resolve([...data]), 500)
          : reject("Database Error")
    }).then(result => {
        return result
    }).catch((err) => {
        console.error(err);
        return []
    })
}

export const employeesAPI = {

    async getEmployeesSortName() {
        return new Promise((resolve) => {
            getEmployees().then(res => {
                res.sort((a, b) => {
                    if (a.name > b.name) {
                        return 1;
                    }
                    if (a.name < b.name) {
                        return -1;
                    }
                    return 0;
                })
                resolve(res)
            })
        })
    },

    async getEmployeesSortBirthday() {
        return new Promise((resolve) => {
            getEmployees().then(res => {
                res.sort((a, b) => moment(a.birthday, 'DD.MM.') - moment(b.birthday, 'DD.MM.'))
                resolve(res)
            })
        })
    },

    async getProfile(id) {
        return new Promise((resolve) => {
            //получаем обьект с данными работника
            getEmployees().then(res => {
                const profile = res.filter(el => {
                    return (el.id).toString() === id})
                resolve(profile[0])
            })
        })
    }

}