import React, { useState } from "react";

/* import Auth from "../utils/auth";
import { useMutation } from '@apollo/client';
import { ARTIST_LOGIN } from '../utils/mutations'; */

const ArtistLogin = () => {
  /*   const [artistLogin, { error }] = useMutation(ARTIST_LOGIN);
  const [userFormData, setUserFormData] = useState({ email: "", password: "" });

  const handleChange = (event) => {
    const { email, value } = event.target;
    setUserFormData({ ...userFormData, [email]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault(); */

/*     // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } */

/*     try {
      const mutationResponse = await artistLogin({
        variables: { email: userFormData.email, password: userFormData.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }

    setUserFormData({
      email: "",
      password: "",
    });
  }; */

  return (
    <div className="container my-1">

      <h2>Login</h2>
      <form>
        <div className="flex-row space-between my-2">
          <label htmlFor="email">Email:</label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"

          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="pwd">Password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
          />
        </div>

        <div className="flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default ArtistLogin;











