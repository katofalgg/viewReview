import React from "react";
import { useState } from "react";


const NewReview: React.FC  = (e) => {
    const [searchEntry, setsearchEntry] = useState('')
    const handleChange = (e) =>  {
        setsearchEntry(e.target.value)
    }
    
    const handleSubmit = (e) =>  {
        
    }
    return( 
        <>
        <form onSubmit={handleSubmit}>
        <label>
          <textarea value={searchEntry} onChange={handleChange} />
        </label>
        <input type="submit" value="Отправить" />
      </form>
        </>
    )
}
export default NewReview;