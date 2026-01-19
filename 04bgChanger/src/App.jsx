import { useState } from "react"


function App() {
  const [color,setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-200"
        style={{backgroundColor: color}} /* This color is the variable but here we don't need to use{color}*/ 
        >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className = "flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button 
            onClick={() => setColor("red")} /*onClick expects a function: The onClick prop in React expects to be passed a function itself, not the return value of a function. 
Directly calling a function with parameters: If you directly call a function with parameters, like setColor('red'), React executes this function immediately when the component renders, not when the button is clicked. This is because you are passing the result of the setColor('red') execution to onClick, not the function itself. 
Using a callback function: To pass parameters and ensure the function is executed only on click, you wrap the function call in an arrow function (a callback function). This passes a new function to onClick, which then executes setColor('red') only when the button is clicked. */
            className = "outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "red"}}
            >Red</button>
            <button 
            onClick={() => setColor("green")}
            className = "outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "green"}}
            >Green</button>
            <button 
            onClick={() => setColor("blue")}
            className = "outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "blue"}}
            >Blue</button>
          </div>
          </div>  
      </div>
    </>
  )
}

//Why does it become olive again when we refresh the page?

export default App
