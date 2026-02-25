const projectIdeas = [
  'weather-app',
  'calculator',
  'To-do list',
  'Tic-tac-toe',
  'rock-paper-scissors'
]
function Button({children}){
  return <button className="text-arial border rounded-sm w-24 h-10 m-4 p-2 bg-gray-200">
    {children}</button>

}
function App(){
  return(
    <>
    <h1 className="text-4xl font-bold text-blue-500">Ship it or Skip it</h1>
    <div className ="card p-8  bg-white max-w-md border border-gray-500 rounded-lg" >

  <p>Would you like to make a {projectIdeas[0]} ?</p>
   <Button>Ship it</Button>
   <Button>Skip it</Button>

   </div>
  
    </>
  )
}
export default App