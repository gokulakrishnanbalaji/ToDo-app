import React from 'react'
import {FaTrashCan} from "react-icons/fa6";

const LineList = ({item, handlecheckbox, deleteItem}) => {
    return (
        <li className="item" >
            <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handlecheckbox(item.id)}
            />
            <label
                onDoubleClick={() => handlecheckbox(item.id)}
                style={(item.checked) ? {textDecoration:'line-through'} : null}
            >
                {item.item}
            </label>

            <FaTrashCan
                role="button"
                tabIndex="0"
                onClick={()=>deleteItem(item.id)}
            />

        </li>
    )
}
export default LineList
