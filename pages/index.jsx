import {useState} from "react"

function HomePage(){
  const [text,setText] = useState("")
  const [list,setList] = useState(["tarefa1","tarefa2"])


  function adicionar(){
    
  }

  return(
    <>
      <h1>Lista de tarefas</h1>

      <div>
        <ul>
          <li></li>
        </ul>
      </div>

      <div>
        <input 
          placeholder="adicione uma tarefa" 
          value={text} 
          onChange={(e)=>{setText(e.target.value)}}
        />
        <button onClick={adicionar}>++++</button>
      </div>

      <p>{text}</p>

    </>
  )
}

export default HomePage