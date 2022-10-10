import {useState} from "react"
import Container from "../components/container/Container"
 

function HomePage(){
  const [text,setText] = useState("")
  const [list,setList] = useState(["tarefa1","tarefa2"])


  function adicionar(){
    setList([...list,text])
    setText("")
  }

  const apagar = (pos) => {
    setList(list.filter((item,i) =>
        pos != i
      )
    )
  }

  return(
    <>
      <h1>Lista de tarefas</h1>

    <Container>
      <div>
        <input 
          placeholder="adicione uma tarefa" 
          value={text} 
          onChange={(e)=>{setText(e.target.value)}}
        />
        <button onClick={adicionar}>+</button>
      </div>
      
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
    </Container>  
 
      

    </>
  )
}

export default HomePage