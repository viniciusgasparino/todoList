import {useState} from "react"
import Container from "../components/container/Container"
import Titulo from "../components/titulo/Titulo"
import Content from "../components/content/Content"
 

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
      <Titulo titulo="Lista de Tarefas"/>

      <Container>
        <Content>
          <input 
            placeholder="adicione uma tarefa" 
            value={text} 
            onChange={(e)=>{setText(e.target.value)}}
          />
          <button onClick={adicionar}>+</button>
        </Content>

        <Content>
          {
            list.map((task,pos)=>{
              return(
                <ul key={`item-${pos}`}>
                  <li>{task}<span onClick={()=>{apagar(pos)}}>X</span></li>
                </ul>
              ) 
            })
          }
        </Content>
      </Container>  
 
      

    </>
  )
}

export default HomePage