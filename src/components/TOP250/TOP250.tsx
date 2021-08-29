import classes from '../Comman/Comman.module.css'
import Content from './Content'
import React, { useState } from 'react'
import Button from '../Comman/Button'
import s from './TOP250.module.css'

const Content_list: React.FC = () => {
    const [page, setPage] = useState(1);
    return (
    <div className={s.order}>  
    
    <Content page={page}/>
    <Button style={classes.button} name={"Показать ещё"} onClick={() => setPage(page + 1)}/>
      
    </div>    
    )
}
export default Content_list;