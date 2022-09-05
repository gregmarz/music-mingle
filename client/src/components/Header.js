import React from "react";
import { ReactDOM } from "react-dom";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// import Auth from "../..utils";
Modal.setAppElement("#root");

function Header() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Login"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Login</h2>
        <button onClick={closeModal}>close</button>
        <div>Are You logging in as an Artist or Venue?</div>
        <a href="/artist-login">Artist</a>
        <br></br>
        <a href="venue-login">Venue</a>
      </Modal>
    </div>
  );
}

export default Header;
