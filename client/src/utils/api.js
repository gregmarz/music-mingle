export const addArtist = (userData) => {
  return fetch("/api/artists", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
};

export const addVenue = (userData) => {
  return fetch("/api/venues", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
};

export const artistLogin = (userData) => {
  return fetch("/api/artists/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
};

export const venueLogin = (userData) => {
  return fetch("/api/venues/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
};
