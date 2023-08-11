import React from 'react'
import {FaPlus} from "react-icons/fa";

const AddTask = ({newItem, setnewItem, handleSubmit}) => {
    return (
        <form className="addForm" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add Task"
                autoFocus
                value={newItem}
                onChange={(e) => setnewItem(e.target.value)}
            />

            <button
                type="submit"
            >
                <FaPlus />
            </button>
        </form>
    )
}
export default AddTask
