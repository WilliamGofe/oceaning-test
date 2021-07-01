import React from 'react'
import Header from '../../components/Header'
import {Div1, Div2, Button_styled} from '../../themes/All_Themas'
import {IconArrow} from '../../themes/banner/Themas_Banner'
import { SubText } from '../../themes/All_Themas'
import {DivMaster_HomePage, ButtonHomePage} from '../../themes/homepage/HomePage_Themes'
import { useHistory } from 'react-router-dom'

function HomePage() {
const history = useHistory()

const goToRegisterPage = () => {
    history.push('/register')
}


    return (
        <div>
              <Header/>
        <DivMaster_HomePage className= 'text'>
        <Div1>Time de Desenvolvimento</Div1>
        <Div2>Sua evolução começa agora</Div2>
        <SubText>
            faça parte dessa jornada junto com a Oceaning e conquiste o mundo com suas habilidades de programação
        </SubText>
        <div>
            <ButtonHomePage onClick = {goToRegisterPage}>COMEÇAR AGORA <IconArrow src ='https://cdn1.iconfinder.com/data/icons/feather-2/24/arrow-right-256.png'></IconArrow></ButtonHomePage>
        </div>
        

        </DivMaster_HomePage> 
        </div>
      
    )
}
export default HomePage