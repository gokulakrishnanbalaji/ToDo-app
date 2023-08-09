import React from 'react'

const Content = () => {
    const crush_name = "variable";

    function decide(){
      const verbs = ['love', 'hate', 'don\'t care about']
      const pos = Math.floor(Math.random()*3)
      return verbs[pos];
    }

  return (
    <div>
        <p>I {decide()} {crush_name}</p>
    </div>
  )
}

export default Content