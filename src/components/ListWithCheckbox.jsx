import React from 'react';
import '../compnents-styling/list-styles.css';

const ListWithCheckbox = ({taskName, checkHandler, id}) => {
  return (
    <>
       <li className="incomplete-item list-item" value={id}>
          {taskName}
          <input type="checkbox" className="checkbox" onChange={checkHandler}></input>
        </li>
    </>
  )
}

export default ListWithCheckbox;