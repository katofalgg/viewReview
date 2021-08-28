import classes from './Content_list.module.css'
import Content from './Content'
import React, { useState } from 'react'
import Button from '../Comman/Button'


const Content_list: React.FC = () => {
    const [page, setPage] = useState(1);
    return (
    <>          
      <Content page={page}/>
      <Button style={classes.button} name={"Показать ещё"} onClick={() => setPage(page + 1)}/>
    </>    
    )
}
export default Content_list;