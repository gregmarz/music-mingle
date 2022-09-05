import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_ARTIST } from '../utils/mutations';

function Artistsignup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addArtist] = useMutation(ADD_ARTIST);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addArtist({
      variables: {
        userName: formState.userName,
        email: formState.email,
        password: formState.password,
        genre: formState.genre,
        groupNumber: formState.groupNumber,
        link: formState.link,
        number: formState.number,
      },
    });
    const token = mutationResponse.data.addArtist.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container my-1">

      <h2>Signup</h2>
      <form onSubmit={handleFormSubmit}>
      <div className="flex-row space-between my-2">
          <label htmlFor="userName">Username:</label>
          <input
            placeholder="Username"
            name="userName"
            type="text"
            id="userName"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="email">Email:</label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="pwd">Password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="genre">Genre:</label>
          <input
            placeholder="genre"
            name="genre"
            type="text"
            id="genre"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="groupNumber">Group-Number:</label>
          <input
            placeholder="groupNumber"
            name="groupNumber"
            type="text"
            id="groupNumber"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="link">Link:</label>
          <input
            placeholder="link"
            name="link"
            type="text"
            id="link"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="number">Number:</label>
          <input
            placeholder="number"
            name="number"
            type="text"
            id="number"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Artistsignup;
