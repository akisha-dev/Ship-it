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
  return <button onClick={onClick} className="mt-12 rounded-xl 
ml-4 mr-8
  bg-emerald-500 hover:bg-emerald-600 
text-white font-medium 
transition-all duration-200 
hover:scale-105 active:scale-95
p-5">
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
    <div className="min-h-screen flex flex-col items-center pt-20 
bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">

    <h1 className="text-4xl font-bold text-blue-500 mb-18">Ship it or Skip it</h1>
    <div >
  {projectIndex < projectIdeas.length?(
    <>
  <p className='mt-4 text-center p-8  bg-white max-w-md h-57 border border-gray-500 rounded-lg'>Would you like to make a {projectIdeas[projectIndex]} ?</p>
   <Button onClick={updateShippedList}>Ship it</Button>
   <Button onClick={updateIndex} >Skip it</Button>
   </>
  ):(
    <p className='flex text-center p-8  bg-white border border-gray-500 rounded-lg'>You're Done!</p>
  )}
   </div>
   <div className='mt-8 border-1 p-4 bg-white rounded-lg'>
    <h1>Your shipped list:</h1>
   {shippedList.map(idea =>(<p key={idea}>{idea}</p>))}
  </div>
    </div>
  )
}
export default App