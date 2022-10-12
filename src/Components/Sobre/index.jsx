import React from "react";
import './style.css';


const Sobre = () => {
  
    const InfoSobre = {
        titulo: 'Jornada Profissional',
        descricao01: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae non tenetur ipsa velit itaque? A iste impedit nobis tempora nulla, facere pariatur corporis non illum voluptate architecto repellat maiores sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae non tenetur ipsa velit itaque? A iste impedit nobis tempora nulla, facere pariatur corporis non illum voluptate architecto repellat maiores sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae non tenetur ipsa velit itaque? A iste impedit nobis tempora nulla, facere pariatur corporis non illum voluptate architecto repellat maiores sint.',
        descricao02: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae non tenetur ipsa velit itaque? A iste impedit nobis tempora nulla, facere pariatur corporis non illum voluptate architecto repellat maiores sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae non tenetur ipsa velit itaque? A iste impedit nobis tempora nulla, facere pariatur corporis non illum voluptate architecto repellat maiores sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae non tenetur ipsa velit itaque? A iste impedit nobis tempora nulla, facere pariatur corporis non illum voluptate architecto repellat maiores sint.',
    }
  return (
    <>
      <section className="sobre-wrapper">
        <div className="sobre-info-wrapper">
            <h3>{`${InfoSobre.titulo}`}</h3>
            <p>{`${InfoSobre.descricao01}`}</p>
            <p>{`${InfoSobre.descricao02}`}</p>
        </div>
      </section>
    </>
  );
};

export default Sobre;
