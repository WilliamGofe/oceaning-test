import styled from "styled-components"
import React, { useEffect, useState } from 'react'
import Header from "../../../components/Header"
import { DivMasterBanner,IconArrow } from '../../../themes/banner/Themas_Banner'
import { Div1, Div2, Button_styled} from '../../../themes/All_Themas'
import { useHistory } from "react-router-dom"
import {SubTextAling, Div_input_text,} from '../Register'
import '../../../Master.css'

const DivSkills = styled.div `
 box-sizing: border-box;
`
const Div_button_skills = styled.div`
 box-sizing: border-box;


`
const DivGrid = styled.div `
  display: grid; 
  color: white;
  grid-template-columns: 1fr 1fr 1fr 1fr; 
  grid-template-rows: 1fr 1fr 1fr; 
  gap: 15px 15px; 
  width: 650px;
    height: 200px;
`
const DivFlexHabilit = styled.div `
border-radius: 25px;
border: solid 1px;
display: flex;
justify-content: center;
height: 50px;
width: 200px;
align-items: center;
margin:10px;
`
const P_hability = styled.p `
font-size: 26px;
font-weight: 500;
`
const P_hability2 = styled.p `
font-size: 26px;
font-weight: 500;
color: #FF2358;
cursor:pointer;
`

const Flex = styled.div `
display:Flex;

`
const IconArrowTop = styled.img`
height: 35px;
`
const DivBoxUp = styled.div`
    width: 900px;
    position: fixed;
    bottom: 0;
    height:400px;
    border-radius: 20px;
    margin-bottom: -15px;
   background-color:white;
    color: black;
`
const FlexBoxHability = styled(Flex) `
align-items: center;
justify-content: space-between;
padding:5px;
padding-right: 100px;

`

function Skills() {
const name = localStorage.getItem('nome')
const history = useHistory()


const [input_name, setInput_name] = useState('inputStyled')
const [inputValue, setInputValue] = useState('')
const [p_hidden, setP_hidden] = useState('hidden')
const [p_hiddenBox, setP_hiddenBox] = useState('hidden')
const [arrayHability, setArrayHability] = useState([])
const [valueHability, setValueHability] = useState(0)
const [textBoxHability, setTextBoxHability] = useState("Nenhuma habilidade adicionada")
const [nameIdBox_hability, setNameIdBox_hability] = useState('handleInput')
const [modifyBox, setModifyBox] = useState('back')


const handleInput = (e) => {
    setInputValue(e.target.value)
}

useEffect(()=>{
renderizaçãoCondicional()
},[])




const pressButtonEnter = (e) => {
if(e.key === "Enter"){
    if (!inputValue) {
        setInput_name('inputIncorrect')
        setP_hidden('not_hidden')
    }else{
           adcHability() 
           setValueHability(valueHability+1)
           setTextBoxHability("Habilidades adicionadas")
           setNameIdBox_hability('handleInputValue')
           setP_hiddenBox('p_notHidden')
    }
}
}

const adcHability = () => {

        const copy = [...arrayHability]    
       const test =  copy.unshift(inputValue)
        setArrayHability(copy )
        setInputValue('')
        setP_hidden('hidden')
        setInput_name('inputStyled')
}

console.log(modifyBox)
const mapHability = arrayHability.map((hb)=>{
return(
        <DivFlexHabilit>
           <P_hability className = 'text'>{hb}</P_hability> 
        </DivFlexHabilit>
)
})

const mapHability2 = arrayHability.map((hb)=>{
    return(
        <FlexBoxHability>
             <DivFlexHabilit>
               <P_hability className = 'text'>{hb}</P_hability> 
            </DivFlexHabilit>
            <P_hability2 onClick = {() => removeHability(hb)}>Remover</P_hability2>   
        </FlexBoxHability>
        
    )
    })




const clickBoxHability = () => {
    if(valueHability === 0){
    }else{
        setModifyBox('up')
    }
}

const backBoxHability = () =>{
    if(modifyBox === 'up') {
         setModifyBox('back')
}

}
   

const renderizaçãoCondicional = () => {
if(modifyBox === 'back'){
return(
    <div onClick = {clickBoxHability} id = {nameIdBox_hability}>
    {valueHability} {textBoxHability} 
    <Flex>
          <p id = {p_hiddenBox}>VER HABILIDADES <IconArrowTop src = 'https://cdn0.iconfinder.com/data/icons/arrow-153/20/chevron_double_top_small-256.png'></IconArrowTop></p>
    </Flex>
  
    
</div>
)
}else{
    return(
        <DivBoxUp>
               <div onClick = {backBoxHability} id = 'boxHabilityUp'>
 
 
           {valueHability} {textBoxHability} 
          <p id = {p_hiddenBox} onClick = {backBoxHability}>FECHAR HABILIDADES <IconArrowTop src = 'https://cdn0.iconfinder.com/data/icons/arrow-153/20/chevron_double_bottom_small-256.png'></IconArrowTop></p>
  
                </div>

        <div>
            {mapHability2}
        </div>

        
        </DivBoxUp>
)  
}
}

const removeHability = (name) => {
    console.log(name)
    
    arrayHability.splice(arrayHability.indexOf(name))
   
 
     if(valueHability===0 ){
         modifyBox('back')
     }else{
            setValueHability(valueHability - 1)
     }
}

const infoUser = {
    name: name, 
    hability:arrayHability
}

const arrayUser = []

const goList = () => {
    history.push('/sucess')
    const test =  arrayUser.unshift(infoUser)
    const jsonAux = JSON.stringify(arrayUser);
    
window.localStorage.setItem('infos', jsonAux);


}

    return (
        <div>
            <Header/>
            <DivMasterBanner className = 'text'>
            <Div1>Olá {name},</Div1>
        <Div2>Quais são suas Habilidades?</Div2>
        <SubTextAling>Nos diga 4 tecnologias que você tem mais conhecimento:</SubTextAling>

        <DivSkills>
        <Div_input_text>
                <input className='text' id={input_name}
          placeholder='Digite uma habilidade'
          onChange = {handleInput}
          value = {inputValue}
          onKeyUp = {pressButtonEnter}
        ></input>
        <p className = 'text' id = {p_hidden}>Preencha essa campo</p>
        </Div_input_text>
        <Flex>
        <DivGrid>
             {mapHability} 


             {renderizaçãoCondicional()}
        </DivGrid>
      
        <Div_button_skills>
            <Button_styled onClick = {goList}>Finalizar<IconArrow src ='https://cdn1.iconfinder.com/data/icons/feather-2/24/arrow-right-256.png'></IconArrow></Button_styled>
        </Div_button_skills>
        </Flex>
      </DivSkills>
       
            </DivMasterBanner>
        </div>
    )
}
export default Skills