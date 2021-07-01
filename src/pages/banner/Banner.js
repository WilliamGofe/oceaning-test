import styled from "styled-components"
import React from 'react'
import '../../Master.css'
import Header from "../../components/Header"
import { Div1, Div2, Button_styled } from "../../themes/All_Themas"
import {Day, Div3, DivMasterBanner, Hours,Division,InitialLive,SubDiv,IconArrow,Month} from '../../themes/banner/Themas_Banner'
import { useHistory } from "react-router"


function Banner() {
const history = useHistory()

const goToHomePage = () => {
    history.push('/home')
}

    return (
        <div>
           <Header/>
           <DivMasterBanner className = 'text'>
               <Div1>
                Developers Oceaning
            </Div1>
            <Div2>
                Faça parte do time de <br/> desenvolvimento da agência <br/> Oceaning
            </Div2>
            <Div3>
                <SubDiv>
                    <Day>22</Day>
                    <Month>JUN</Month>
                </SubDiv>
                <Division/>
                <SubDiv>
                    <Day>23</Day>
                    <Month>JUN</Month>
                </SubDiv>
                <Division/>
                <SubDiv>
                    <Day>24</Day>
                    <Month>JUN</Month>
                </SubDiv>
                <Division/>
                <SubDiv>
                    <InitialLive>Início da live</InitialLive>
                    <Hours>19:00</Hours>
                </SubDiv>
           
                <SubDiv>
                    <Button_styled onClick = {goToHomePage}>INSCREVER-SE<IconArrow src = 'https://cdn1.iconfinder.com/data/icons/feather-2/24/arrow-right-256.png'></IconArrow> </Button_styled>
                </SubDiv>
            </Div3>
           </DivMasterBanner>
           
        </div>
    )
}

export default Banner