import { useState } from 'react'
const projectIdeas = [
  'weather-app',
  'calculator',
  'To-do list',
  'Tic-tac-toe',
  'rock-paper-scissors'
]
let shippedList =[];

function Button({children,onClick}){
  return <button onClick={onClick} className="text-arial border rounded-sm w-24 h-10 m-4 p-2 bg-gray-200">
    {children}</button>

}
function App(){
  let [shippedList,setShippedList]=useState([])
  function updateShippedList(){
    setShippedList([...shippedList,projectIdeas[projectIndex]]);
    updateIndex();

  }
  
  let [projectIndex,setProjectIndex] = useState(0);
  function updateIndex(){
    if(projectIndex < projectIdeas.length){
  
      setProjectIndex(projectIndex +1);}
   
  }
  return(
    <>
    <h1 className="text-4xl font-bold text-blue-500">Ship it or Skip it</h1>
    <div className ="card p-8  bg-white max-w-md border border-gray-500 rounded-lg" >
  {projectIndex < projectIdeas.length?(
    <>
  <p>Would you like to make a {projectIdeas[projectIndex]} ?</p>
   <Button onClick={updateShippedList}>Ship it</Button>
   <Button onClick={updateIndex} >Skip it</Button>
   </>
  ):(
    <p>You're Done!</p>
  )}
   </div>
   {shippedList.map(idea =>(<p key={idea}>{idea}</p>))}
  
    </>
  )
}
export default App