import React from 'react'
import ListItems from "./listItems.js";

const Content = ({items,handlecheckbox,deleteItem}) => {

    return (
    <main>
        {(items.length) ? (
            <ListItems
                items = {items}
                handlecheckbox={handlecheckbox}
                deleteItem={deleteItem}
            />
        )
        :( <p>No Tasks pending</p>)
        }

    </main>
  )
}

export default Content