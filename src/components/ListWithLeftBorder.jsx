import React from 'react';
import '../compnents-styling/list-styles.css';

const ListWithLeftBorder = ({taskName}) => {
  return (
    <>
       <li className="complete-item list-item">
          {taskName}
        </li>
    </>
  )
}

export default ListWithLeftBorder;