import Chai from "./Chai"

function App() {
  
  return (
    <Chai />
    // <h1>Hi how are u?</h1> // this is not allowed because we can only return only tag in jsx
    // hence we wrap all the element in a <div> </div> and then return , this <div> become so common that now we use fragment <> </>
    // to return multiple tags enclosed within them
   /* <>
   <Chai/>
   <h1></h1>
   <p></p>
  </> */
  )
}

export default App
