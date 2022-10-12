import * as React from "react"
import { Head } from "../Components/Seo"

import Main from "../Components/Main"
import MenuTop from "../Components/menuSuperior"
import Sobre from "../Components/Sobre"
import Footer from "../Components/Footer"

const IndexPage = () => {
  
  return (
    <>
      <Head tituloPage={'Gustavo Moreira | Dev Front End'}/>
      <Main menuSuperior={<MenuTop/>}/>
      <Sobre/>
      <Footer/>
    </>
  )
}

export default IndexPage