import {useState} from "react"
import styles from "./index.module.css"
import Container from "../components/container/Container"
import Titulo from "../components/titulo/Titulo"
import Content from "../components/content/Content"
import Input from "../components/input/Input"
import Button from "../components/Button/Button"


function HomePage(){
  const [search,setSearch] = useState("")
  const [text,setText] = useState("")
  const [list,setList] = useState([])
 

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

  const filterTasks = list.filter((task) => {
    return task.includes(search)
  })

  return(
    <>
      <Titulo titulo="Lista de Tarefas"/>

      <Input 
          placeholder="pesquisar" 
          value={search} 
          onChange={(e)=>{setSearch(e.target.value)}}
       />


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

            filterTasks.map((task,pos)=>{
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