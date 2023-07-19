import { useContext, useState } from "react";
import axios from "axios";
import { Context } from "../../context/Context"
import "./write.css";


export default function Write() {
  
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  // const [file, setFile] = useState("null")
  const { user } = useContext(Context)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      description, 
    }
    try {

      await axios.post("../posts/" +user._id, newPost);

    } catch (error) {
      
    }
  }
  
  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input id="fileInput" type="file" style={{ display: "none" }} />
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
            onChange={e => setDescription(e.target.value)}
          />
        </div>
        <button className="writeSubmit" type="submit">Publish</button>
      </form>
    </div>
  );
}