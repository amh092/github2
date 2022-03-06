import React,{useState} from 'react'
//SVG
import Search from '../Svgs/Search'
import styles from './SearchSection.module.css'






const SearchSection = (props) => {
    
   const [user, setUser] = useState('')

   const changeUser = (user) => {
        setUser(document.getElementById('textArea').value )
   
       
   }

  
   
   props.setUser(user)
    return (
        <div  className={`${styles['search-section']} ${styles[props.mode]}`}>
           <Search/> 
           <textarea id={'textArea'} placeholder={'Search GitHub username…'}  className={styles[props.mode]} onInput={changeUser}/>
           <button className={`${styles['search-btn']} ${styles[props.mode]}` } onClick={props.action} > search</button>
        </div>
    )
}
export default SearchSection