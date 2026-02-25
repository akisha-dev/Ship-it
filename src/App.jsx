const projectIdeas = [
  'weather-app',
  'calculator',
  'To-do list',
  'Tic-tac-toe',
  'rock-paper-scissors'
]
function App(){
  return(
    <>
    <h1 className="text-4xl font-bold text-blue-500">Ship it or Skip it</h1>
    <div className ="card p-8  bg-white max-w-md border border-gray-500 rounded-lg" >

  <p>Would you like to make a {projectIdeas[0]} ?</p>
     
   <button>  Ship it</button>
   <button>Skip it</button>
   </div>
  
    </>
  )
}
export default App