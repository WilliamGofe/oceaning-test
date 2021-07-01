import React from 'react'
import Header from '../../components/Header'
import {Div1, Div2, Button_styled} from '../../themes/All_Themas'
import {IconArrowWhite} from '../../themes/banner/Themas_Banner'
import { SubText } from '../../themes/All_Themas'
import {DivMaster_HomePage, ButtonEnd} from '../../themes/homepage/HomePage_Themes'
import { useHistory } from 'react-router-dom'

function SucessRegister () {
   const history = useHistory()
 
    

const goToListPage = () => {
 history.push('/list')
}

    return (
        <div>
        <Header/>
  <DivMaster_HomePage className= 'text'>
  <Div1>Parabéns!</Div1>
  <Div2>Suas habilidades foram enviadas
</Div2>
  <SubText>
  Faça parte dessa jornada junto com a Oceaning e conquiste o mundo com suas habilidades de programação.
  </SubText>
  <div>
      <ButtonEnd onClick = {goToListPage}>VER TODOS <IconArrowWhite src ='https://cdn1.iconfinder.com/data/icons/feather-2/24/arrow-right-256.png'></IconArrowWhite></ButtonEnd>
  </div>
  

  </DivMaster_HomePage> 
  </div>
    )
}
export default SucessRegister