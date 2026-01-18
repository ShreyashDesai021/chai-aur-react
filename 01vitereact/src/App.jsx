import Chai from "./Chai"

function App() {
  const username = "chai aur code"

  return (
    //<Chai />
    // <h1>Hi how are u?</h1> // this is not allowed because we can only return only tag in jsx
    // hence we wrap all the element in a <div> </div> and then return , this <div> become so common that now we use fragment <> </>
    // to return multiple tags enclosed within them
   /* <>
   <Chai/>
   <h1></h1>
   <p></p>
  </> */

  <>
   <Chai />
   <h1>chai aur react {username}</h1> {/* {username} is called "evaluated expression" i.e. it is not javascript it is the final outcome of the javascript*/}  
   {/* <h1>chai aur react {if(true) username}</h1> // this is invaild because we must give evaluated expression. Reason? See in main.jsx file */}
   <p>test para</p>
  </>
  )
}

export default App
