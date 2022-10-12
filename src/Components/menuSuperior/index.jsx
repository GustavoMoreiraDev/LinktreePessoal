import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import "./style.css";

const MenuTop = () => {

  const InfoMenuTop = {
    facebook: 'https://www.facebook.com/gustavo.moreiramoreira.33633/',
    linkedin: 'https://www.linkedin.com/in/gustavo-moreira-aa488418b/',
    instagram: 'https://www.instagram.com/gust4_s4ntos/',
  }

  return (
    <>
      <div className="mt-position">
        <main className="mt-container">
          <div className="mt-control">
            <a href="/" target={"blank"}>
              <BsThreeDotsVertical />
            </a>
          </div>
          <div className="mt-redes-sociais">
            <a href={`${InfoMenuTop.linkedin}`} target={"blank"}>
              <FaLinkedin />
            </a>
            <a href={`${InfoMenuTop.instagram}`} target={"blank"}>
              <FaInstagram />
            </a>
            <a href={`${InfoMenuTop.facebook}`} target={"blank"}>
              <FaFacebook />
            </a>
          </div>
        </main>
      </div>
    </>
  );
};

export default MenuTop;
