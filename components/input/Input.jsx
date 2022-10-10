import styles from "./Input.module.css"

function Input({...children}){
  return(
    <>
      <input className={styles.input}
        {...children}
      />
    </>
  )
}

export default Input