import React from 'react'
import "./App.css"
import { motion } from "motion/react"

const App = () => {
  return (
    <div>
      <motion.div className="box"
      initial={{
        x:0
      }}
      animate={{
        x:[500, 200 , 1000],
        y:[0, 200 , 0],
        transition:{duration:2, delay:1 , repeat:2}
      }}
      
      ></motion.div>
      <motion.div 
      
      animate={{
        x:1000,
        y:-100,
        transition:{duration:5 , repeat:2 , ease:"anticipate"}
      }}
      className='circle'></motion.div>
    </div>
  )
}

export default App
