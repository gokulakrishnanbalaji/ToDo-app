import React from 'react'
import {FaPlus} from "react-icons/fa";
import { useRef } from 'react';

const AddTask = ({newItem, setnewItem, handleSubmit}) => {

    const inputRef = useRef()
    return (
        <form className="addForm" onSubmit={handleSubmit}>
            <input
                type="text"
                ref={inputRef}
                placeholder="Add Task"
                autoFocus
                value={newItem}
                onChange={(e) => setnewItem(e.target.value)}
            />

            <button
                type="submit"
                onClick={()=> inputRef.current.focus()}
            >
                <FaPlus />
            </button>
        </form>
    )
}
export default AddTask
