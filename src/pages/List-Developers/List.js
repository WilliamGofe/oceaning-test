import styled from "styled-components"
import React from 'react'
import Header from '../../components/Header'

const Div = styled.div `


`


function List() {

   
const jsonTarefa = window.localStorage.getItem('infos');

const dados = JSON.parse(jsonTarefa);

console.log(dados)
    return (
        <div>
           <Header/> 
            List
        </div>
    )
}
export default List