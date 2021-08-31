import { useState } from "react";
import firebase from 'firebase';
import classes from './Account.module.css'
import Loader from "../Comman/Loader";

const storage = firebase.storage();

const UsersInformation = () => {
  const [image, setImage] = useState(null);
  const [Url, setUrl] = useState('https://iconape.com/wp-content/png_logo_vector/avatar-4.png');
  const [addPhoto, setAddPhoto] = useState(false);
  const [loaded, setLoaded] = useState(true);
  
  const upload = () => {
    setLoaded(false);
    if (image == null) {
      return;
    }  
    storage.ref(`/images/${image.name}`).put(image)
      .on("state_changed", () => {
        storage.ref("images").child(image.name).getDownloadURL()
          .then((url) => {
            setUrl(url);
            setLoaded(true);
          })
      });
  }
  return(
        <>
        <div className={classes.img_button}>
        {addPhoto ? <> 
          <input type="file" 
          onChange={(e) => { setImage(e.target.files[0]) }} />
          <button onClick={upload}>Загрузить</button> 
         </> : 
         <>
         <button onClick={() => setAddPhoto(true)}>Добавить фото</button>
         </>} </div>
        <br />
        <img src={Url}/>
    </>
    )
}
export default UsersInformation;