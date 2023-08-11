import React, {useState} from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import AddTask from "./AddTask";
import SearchTask from "./SearchTask";

function App(){
    const [ items, setItems] = useState(localStorage.getItem('todo_list') ?
        JSON.parse(localStorage.getItem('todo_list')) : []
    )

    const [newItem , setnewItem] = useState('')

    const [searchItem , setSearchItem] = useState('')

    const handlecheckbox = (id) => {
        const new_items = items.map( (item) =>
            item.id === id ? {...item , checked:!item.checked} : item
        )
        setItems(new_items)
        localStorage.setItem('todo_list' , JSON.stringify(new_items))
    }

    const deleteItem = (id) => {
        console.log("hi")
        const new_items = items.filter((item) =>
            item.id !== id
        )
        setItems(new_items)
        localStorage.setItem('todo_list' , JSON.stringify(new_items))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!newItem.length) return
        addItem(newItem)
        setnewItem('')
    }

    const addItem = (item) => {
        const id = items.length ? items[items.length -1 ].id + 1 : 1
        const tmpItem = {
            id:id,
            checked: false,
            item: item
        }
        const listItems=[...items, tmpItem]
        setItems(listItems)
        localStorage.setItem('todo_list', JSON.stringify(listItems))
    }

  return (
      <div className={"App"}>
         <Header />
          <AddTask
            newItem={newItem}
            setnewItem = {setnewItem}
            handleSubmit={handleSubmit}
          />
          <SearchTask
              searchItem={searchItem}
              setSearchItem = {setSearchItem}
          />
          <Content
            items={items.filter( (item) => (item.item.toLowerCase()).includes(searchItem.toLowerCase()))}
            handlecheckbox={handlecheckbox}
            deleteItem={deleteItem}
          />
         <Footer
            length = {items.length}
         />
      </div>


  )
}

export default App;