import React from 'react'

const Content = () => {
    const crush_name = "variable";

    function decide(){
      const verbs = ['love', 'hate', 'don\'t care about']
      const pos = Math.floor(Math.random()*3)
      return verbs[pos];
    }

    const sayHi = (name) => {
        console.log(`hi ${name}`)
    }

  return (
    <main>
        <p>I {decide()} {crush_name}</p>
        <button onClick={() => sayHi("gokul")}> Press me </button>
    </main>
  )
}

export default Content