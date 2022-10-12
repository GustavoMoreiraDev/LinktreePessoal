import React from 'react';
import { ImHome } from 'react-icons/im';
import './style.css';

const Footer = () => {
    
    const infosFooter = {
        copyright: '2022 Direitos Reservados - Gustavo Moreira',
        portfolio: 'https://gustavomoreiradev.github.io/Portifolio/',
    }

    return (
        <>
            <footer className='rodape-wrapper'>
                <a title="Clique e saiba mais" href={`${infosFooter.portfolio}`} target={'blank'}> 
                    <ImHome/> Portfolio
                </a>
                <p>&copy;{`${infosFooter.copyright}`}</p>
            </footer>
        </>
    )
}

export default Footer;