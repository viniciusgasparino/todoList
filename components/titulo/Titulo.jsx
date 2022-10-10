import styles from "./Titulo.module.css" 

function Titulo({titulo}){
  return(
    <>
      <h1 className={styles.h1}>
        {titulo}
      </h1>
    </>
  )
}

export default Titulo