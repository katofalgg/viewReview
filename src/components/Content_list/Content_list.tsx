import classes from './Content_list.module.css'
import Content from './Content'
import React, { useState } from 'react'
import Button from '../Comman/Button'
import { SSL_OP_NETSCAPE_CHALLENGE_BUG } from 'constants'

const Content_list: React.FC = () => {
    const [category, setCategory] = useState<string>('');
    const [page, setPage] = useState(1);
    return (
    <>          
      <Content category={category} page={page}/>
      <Button style={classes.button} name={"Показать ещё"} onClick={() => setPage(page + 1)}/>
    </>    
    )
}
export default Content_list;