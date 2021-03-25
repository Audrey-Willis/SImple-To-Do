//setting toggle mode for individual items

import React from "react";
import { ItemStyles } from "./Styles/ItemStyles";

const Item = (props) => {

  return (
    <ItemStyles>
    <ul>
    <li
      className={`item${props.item.completed ?  " completed" : ""}`}
      onClick={() =>
        props.dispatch({ type: "TOGGLE_COMPLETED", payload: props.item.id})
        
      }  >
      {props.item.item}
      </li>
      </ul>
    </ItemStyles>
  );
};

export default Item;
