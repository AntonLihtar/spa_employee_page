import * as React from 'react';
import classes from "./Radio.module.css"

export default function Radio(props) {

    return (
      <div
        className={classes.form}
        onChange={e=> props.setStatus(e.target.value)}
      >
          <p>Статус:</p>
          <label><input name="status" type="radio" value="" defaultChecked={true}/> Все</label>
          <label><input name="status" type="radio" value="true"/> В архиве</label>
          <label><input name="status" type="radio" value="false"/> Не архивированы</label>
      </div>
    );
}