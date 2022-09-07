# music-mingle

[![License: MIT](https://img.shields.io/badge/License-MIT-red.svg)](https://opensource.org/licenses/MIT)

Music Mingle is a simple way to connect artists/bands to available venues looking for entertainment.

## Technologies

| Tools |
| ----- |

| [Node.js](https://nodejs.org/en/)
| [Express.js](https://expressjs.com/)
| [Bcrypt](https://www.npmjs.com/package/bcrypt)
| [JWT](https://jwt.io/)
| [Leaflet](https://leafletjs.com/)
| [MongoDB](https://www.mongodb.com/docs/)
| [Mongoose](https://mongoosejs.com/docs/api.html)
| [React](https://reactjs.org/docs/getting-started.html)
| [Apollo](https://www.apollographql.com/docs/)

## Snippets

### Example of our react routes

![Routes](assets/Screenshot%202022-09-06%20145900.png)

### Login Route

```
login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
```

### Creating New User

```
addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
```

which also makes use of our JWT that can be seen here

```
authMiddleware: function ({ req }) {
    // allows token to be sent via req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
    }

    return req;
  },
  signToken: function ({ firstName, email, _id }) {
    const payload = { firstName, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
```

## Installation

Fortunately, our site is posted on Heroku, for free! at [this link](https://music-mingle-deploy.herokuapp.com/)

## CSS

We used no real CSS frameworks, all of our css was hand written. But there may be implementation of styled-frameworks

## Credits

- [Greg](https://www.linkedin.com/in/greg-marzec/)
- [Shmuel](https://www.linkedin.com/in/shmuel-hoffman-254b0223b/)
- [Dylan](https://www.linkedin.com/in/dylan-kreisman-3752b1160/)
