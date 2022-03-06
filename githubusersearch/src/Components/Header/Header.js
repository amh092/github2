import {useState} from 'react'
import Moon from './../Svgs/Moon'
import Sun from './../Svgs/Sun'
import styles from './Header.module.css'
const Header = (props) => {

    const [mode, setMode] = useState('dark')


    const switchMode = () => {
        if( mode == 'light'){

            setMode('dark')
        }
       else if (mode == 'dark'){
           setMode('light')
       }
       props.changMode(mode)
    }
    return (
        <div>
            <header>
                <h1 className={ styles[mode]}> devfinder</h1>
                 <div className={styles['switch-mode']} onClick={switchMode} >
                   
                    { mode == "dark" &&  ( <h1 className={ styles[mode]} >dark</h1>)}
                    { mode == "dark" &&  (<Moon/>)}
                    { mode == "light" &&  ( <h1 className={ styles[mode]} >Light</h1>)}
                    { mode == "light" &&  (<Sun/>)}                    
                 </div>

            </header>
        </div>
    )
}

export default Header
