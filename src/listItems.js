import React from 'react'
import LineList from "./lineList";


const ListItems = ({items, handlecheckbox, deleteItem}) => {
    return (
        <ul>
            {
                items.map( (item) => (
                    <LineList
                        item={item}
                        handlecheckbox={handlecheckbox}
                        deleteItem={deleteItem}
                        key={item.id}
                    />
                ))
            }
        </ul>
    )
}
export default ListItems
