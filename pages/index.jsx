import {useState} from "react"
import styles from "./index.module.css"
import Container from "../components/container/Container"
import Titulo from "../components/titulo/Titulo"
import Content from "../components/content/Content"
import Input from "../components/input/Input"
import Button from "../components/Button/Button"


function HomePage(){
  const [text,setText] = useState("")
  const [list,setList] = useState(["tarefa1","tarefa2"])


  function adicionar(){
    if(text){
      setList([...list,text])
      setText("")
    }else{
      alert("insira um valor")
      return
    } 
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
          <Input 
            placeholder="adicione uma tarefa" 
            value={text} 
            onChange={(e)=>{setText(e.target.value)}}
          />
          <Button onClick={adicionar}>+</Button>
        </Content>

        <Content>
          {
            list.map((task,pos)=>{
              return(
                <div className={styles.div} key={`item-${pos}`}>
                  <li>{task}<span onClick={()=>{apagar(pos)}}>X</span></li>
                </div>
              ) 
            })
          }
        </Content>
      </Container>  
 
      

    </>
  )
}

export default HomePage