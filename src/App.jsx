import { useState } from "react"

function App() {

  const [color,setColor]=useState('olive')

  return (
    <>
     <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>

     <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-xl  px-3 py-2 rounded-3xl bg-white">
      <button
      className="outline-none px-4 py-1 rounded-full text-white shadow-xl " style={{backgroundColor:"red"}}
      onClick={()=>setColor("red")}
      >Red</button>
      <button
      className="outline-none px-4 py-1 rounded-full text-white shadow-xl" style={{backgroundColor:"green"}}
      onClick={()=>setColor("green")}
      >Green</button>
      <button
      className="outline-none px-4 py-1 rounded-full text-white shadow-xl" style={{backgroundColor:"blue"}}
      onClick={()=>setColor("blue")}
      >Blue</button>
       <button
      className="outline-none px-4 py-1 rounded-full text-white shadow-xl" style={{backgroundColor:"olive"}}
      onClick={()=>setColor("olive")}
      >Olive</button>
       <button
      className="outline-none px-4 py-1 rounded-full text-white shadow-xl" style={{backgroundColor:"gray"}}
      onClick={()=>setColor("gray")}
      >Gray</button>
       <button
      className="outline-none px-4 py-1 rounded-full shadow-xl text-black" style={{backgroundColor:"yellow"}}
      onClick={()=>setColor("yellow")}
      >Yellow</button>
       <button
      className="outline-none px-4 py-1 rounded-full text-white shadow-xl" style={{backgroundColor:"pink"}}
      onClick={()=>setColor("pink")}
      >Pink</button>
      <button
      className="outline-none px-4 py-1 rounded-full text-white shadow-xl" style={{backgroundColor:"purple"}}
      onClick={()=>setColor("purple")}
      >Purple</button>
      <button
      className="outline-none px-4 py-1 rounded-full shadow-xl text-black" style={{backgroundColor:"lavender"}}
      onClick={()=>setColor("lavender")}
      >Lavender</button>
      <button
      className="outline-none px-4 py-1 rounded-full shadow-xl text-black" style={{backgroundColor:"white"}}
      onClick={()=>setColor("white")}
      >White</button>
      <button
      className="outline-none px-4 py-1 rounded-full text-white shadow-xl" style={{backgroundColor:"black"}}
      onClick={()=>setColor("black")}
      >Black</button>
      </div>
     </div>
     </div>
    </>
  )
}

export default App
