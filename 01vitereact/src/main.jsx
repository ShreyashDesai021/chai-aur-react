import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

function MyApp(){
  return (
    <div>
      <h1>Custom App | chai</h1>
    </div>
  )
}

// the above HTML syntax is parsed into somewhat below React syntax:

const ReactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit Google'
}

//SO question arises if we run the above react syntax directly we should get same result
//Lets try to run it

const anotherElement = (
  <a href='https://google.com' target='_blank'>Visit Google</a>
)

const anotherUser = "chai user" //evaluated expression

const reactElement2 = React.createElement( //lets make a element with predefine syntax for React elements
  'a', // first para must be tag
  {href: 'https://google.com', target: '_blank'},  //second para musst be object
  'click me to visit google', // third para is text
  anotherUser // using the evaluted expression // hence this must be evaluted expression as it appears directly on the browser and it is not evalauted
             //afterall reactElement2 is a object and in object we dont pass if() else we only pass key: value that are evaluated already
)

createRoot(document.getElementById('root')).render( // starts the rendering directly// what is rendering?  
  
    // <MyApp /> //it is a function that is been executed by this syntax
    // MyApp() // the above can also be written directly as this because after all we are executing a js function
    //<ReactElement/> but ReactElement is a object and not function so its execution should be not this way
    // ReactElement //but this will also not run as we our running custom ReactElement using default render
    
    //anotherElement // this runs properly because we have written the anotherElement
                // as expected by the default render
    reactElement2

)  
