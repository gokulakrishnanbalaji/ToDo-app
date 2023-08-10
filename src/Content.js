import React from 'react'
import {useState} from "react";
import { FaTrashCan } from "react-icons/fa6";

const Content = () => {

    const [ items, Setitems] = useState(
        [
            {
                id:1,
                checked:true,
                item:"Udemy NLP"
            },
            {
                id:2,
                checked:true,
                item:"Mern stack"
            },
            {
                id:3,
                checked:true,
                item:"Neetcode"
            },
        ]
    )

    return (
    <main>
        <ul>
            {
                items.map( (item) => (
                    <li>
                        <input
                            type="checkbox"
                            checked={item.checked}
                        />
                        <label>
                            {item.item}
                        </label>
                        <button>
                            <FaTrashCan />
                        </button>
                    </li>
                ))
            }
        </ul>
    </main>
  )
}

export default Content