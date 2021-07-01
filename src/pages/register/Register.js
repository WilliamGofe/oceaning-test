import styled from "styled-components"
import React, { useState } from 'react'
import Header from "../../components/Header"
import { DivMasterBanner,IconArrow } from '../../themes/banner/Themas_Banner'
import { Div1, Div2, Button_styled} from '../../themes/All_Themas'
import { useHistory } from "react-router-dom"

export const SubTextAling = styled.p`
padding-top: 17px;
color:#78748C;
width: 690px;
height: 68px;
left: 375px;
top: 456px;
font-weight: 500;
font-size: 20px;
line-height: 34px;
`
export const Div_input_button = styled.div`
display: flex;
align-items: center;
`
export const Div_input_text = styled.div `
margin-top:-150px;
`
export const Div_button= styled.div `
margin-bottom:-200px ;
`



function Register() {
  const history = useHistory()
  const [input_name, setInput_name] = useState('inputStyled')
  const [inputValue, setInputValue] = useState('')
  const [p_hidden, setP_hidden] = useState('hidden')
  const handleInput = (e) => {
      setInputValue(e.target.value)
  }

  const renderizaçãoCondicional = () => {
    if (!inputValue) {
      setInput_name('inputIncorrect')
      setP_hidden('not_hidden')
    }else{
      window.localStorage.setItem('nome',inputValue)
      history.push('/skill')
      
    }
  }

const pressButtonEnter = (e) => {
 if(e.key === "Enter"){
   if (!inputValue) {
    setInput_name('inputIncorrect')
    setP_hidden('not_hidden')
  }else{
    window.localStorage.setItem('nome',inputValue)
    history.push('/skill')
 }
  }
}

console.log(inputValue)

  return (
    <div>
      <Header />
      <DivMasterBanner className='text'>

        <Div1>Vamos começar</Div1>
        <Div2>Como devemos te chamar?</Div2>
        <SubTextAling>Nos diga como devemos te chamar e qual é o seu e-mail para que possamos te enviar novidades</SubTextAling>
     
      <Div_input_button>
        <Div_input_text>
                <input className='text' id={input_name}
          placeholder='Digite seu nome'
          onChange = {handleInput}
          value = {inputValue}
          onKeyUp = {pressButtonEnter}
        ></input>
        <p className = 'text' id = {p_hidden}>Preencha essa campo</p>
        </Div_input_text>
        <Div_button>
            <Button_styled onClick = {renderizaçãoCondicional}>CONTINUAR<IconArrow src ='https://cdn1.iconfinder.com/data/icons/feather-2/24/arrow-right-256.png'></IconArrow></Button_styled>
        </Div_button>
  
    
      </Div_input_button>
  
      </DivMasterBanner>
      
    </div>

  )
}
export default Register