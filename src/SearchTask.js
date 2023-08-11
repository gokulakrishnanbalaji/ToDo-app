import React from 'react'

const SearchTask = ({searchItem,setSearchItem}) => {
    return (
        <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
            <input type="text"
                placeholder="Search"
                   autoFocus
                   value={searchItem}
                   onChange={(e) => setSearchItem(e.target.value)}

            />
        </form>
    )
}
export default SearchTask
