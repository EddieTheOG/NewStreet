import { useState } from 'react';
import axios from 'axios';
import API from '../api/api';

export default function PersonRemove() {
//   let state = {
//     id: ''
//   }

  const [currentId, setCurrentId] = useState('')

  function handleChange(e) {
    setCurrentId(e.target.value);
  }

//   handleSubmit = async event => {
//     event.preventDefault();

//     const response = await API.delete(`users/${this.state.id}`);
//     console.log(response);
//   }
  const handleSubmit = async (a) => {
    a.preventDefault();
    const response = await API.delete(`users/${currentId}`);
    console.log(response);
  }

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Person ID:
            <input type="number" name="id" onChange={handleChange} />
          </label>
          <button type="submit">Delete</button>
        </form>
      </div>
    )
}