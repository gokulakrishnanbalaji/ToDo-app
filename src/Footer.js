import React from 'react'

const Footer = ({length}) => {
    return (
        <footer>
            <p>{length} Task {length <= 1? "list" : "lists"}</p>
        </footer>
    )
}
export default Footer;