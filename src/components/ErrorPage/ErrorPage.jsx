import React from 'react';
import {Link} from "react-router-dom";

const ErrorPage = () => {
    return (
      <div>
          <h3>Страница не найдена, нажмите ссылку чтобы вернуться на главную</h3>
          <p>
              <Link to={"/"}>на главную</Link></p>
      </div>
    );
};

export default ErrorPage;