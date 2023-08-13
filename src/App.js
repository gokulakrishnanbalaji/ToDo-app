import React, {useState, useEffect} from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import AddTask from "./AddTask";
import SearchTask from "./SearchTask";

function App(){

    const API_URL = 'http://localhost:3500/items'

    const [ items, setItems] = useState([])

    const [newItem , setnewItem] = useState('')

    const [searchItem , setSearchItem] = useState('')

    const [ isFetchError ,  setisFetchError] = useState(null)

    const [ isLoading , setIsLoading] = useState(true)

    const handlecheckbox = (id) => {
        const new_items = items.map( (item) =>
            item.id === id ? {...item , checked:!item.checked} : item
        )
        setItems(new_items)
    }

    const deleteItem = (id) => {
        console.log("hi")
        const new_items = items.filter((item) =>
            item.id !== id
        )
        setItems(new_items)
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
    }

    useEffect(() => {
        const fetchItems = async() => {
            try{
                const response = await fetch(API_URL)
                if(!response.ok){
                    throw Error('Data Not Received')
                }
                const listItems = await response.json()
                setItems(listItems)
                setisFetchError(null)
            }catch(err){
                setisFetchError(err.message)
            }finally{
                setIsLoading(false)
            }
        }
        setTimeout(()=>{
            (async() => await fetchItems())()
        },2000)

        
    },[])

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
          <main>
            {isFetchError && <p>Error : {isFetchError}</p>}
            {isLoading && <p>Data is loading !!</p>}
            {!isFetchError && !isLoading && <Content
                items={items.filter( (item) => (item.item.toLowerCase()).includes(searchItem.toLowerCase()))}
                handlecheckbox={handlecheckbox}
                deleteItem={deleteItem}
            />}
          </main>
         <Footer
            length = {items.length}
         />
      </div>


  )
}

export default App;