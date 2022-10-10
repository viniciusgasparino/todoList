import {useState} from "react"

function HomePage(){
  const [text,setText] = useState("")
  const [list,setList] = useState(["tarefa1","tarefa2"])


  function adicionar(){
    setList([...list,text])
    setText("")
  }

  const apagar = (pos) => {
    console.log("Apagando" + pos)
  }

  return(
    <>
      <h1>Lista de tarefas</h1>

      <div>
        {
          list.map((task,pos)=>{
             return(
              <ul key={`item-${pos}`}>
                <li>{task}<span onClick={()=>{apagar(pos)}}>X</span></li>
              </ul>
             ) 
          })
        }
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