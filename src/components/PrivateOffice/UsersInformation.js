import { useState } from "react";
import firebase from 'firebase';

const storage = firebase.storage();

const UsersInformation = () => {
  const [image, setImage] = useState('');
  const [Url, setUrl] = useState('');
  
  const upload = () => {
    if (image == null) {
      return;
    }  
    storage.ref(`/images/${image.name}`).put(image)
      .on("state_changed", () => {
        storage.ref("images").child(image.name).getDownloadURL()
          .then((url) => {
            setUrl(url);
          })
      });
  }
  return(
        <>
        <input type="file" 
        onChange={(e) => { setImage(e.target.files[0]) }} />
        <button onClick={upload}>Загрузить</button>
        <br />
        <img src={Url}/>
    </>
    )
}
export default UsersInformation;