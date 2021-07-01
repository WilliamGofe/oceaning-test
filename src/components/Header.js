import styled from "styled-components"
import React from 'react'
import { Header_allPages,OceaningImg, TxtAndIcon_header,Socialmedia_txt_header, IconInstagram, Text_header} from "../themes/HeaderThemes"

function Header() {
    return (
        <Header_allPages>
        <OceaningImg src= 'https://s3-alpha-sig.figma.com/img/095b/98e8/137eaab9f987f7913857278fc09e22b9?Expires=1625443200&Signature=H6K-4WQ6XoXfkoJg39zOeVjMh2TMPcDEpA5GNEWaiZxmh35Kh2J7Dy3s8cJMfu1T27zajNjlAqOQBRB08zcTDOjs7MdVErLD95TgcjmTU~L1n~WDbu1qFwL2pTRlX0e1yEULlbXF3zN0uZIV7jMHfy-tb6XoL-dczjI8oJCcSGVzmPGpFFvaRLEM3-U-3xC4Lh-e1SX19AisBBVAQw6xiv2bAYFp1wRcfA9x7rqnZciqh3m~lxad~Y2jBcKkQ-aPPfu0sGOLG3d2z3Myh3O4-fcS7YgsqyNzqA6-VeAZO4snKhWJKJdwmRGeQXSYgQnvV4T8PVpoy9GbriAeksV9zg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'></OceaningImg>
        <TxtAndIcon_header className = 'text'>
            <div>
            <Text_header >
                COMPARTILHE
            </Text_header>
            <Socialmedia_txt_header >
                @theoceaning
            </Socialmedia_txt_header>  
            </div>
            <IconInstagram src = 'https://cdn4.iconfinder.com/data/icons/materia-social-free/24/038_011_instagram_mobile_photo_network_android_material-128.png'></IconInstagram>

        </TxtAndIcon_header>
    </Header_allPages>
    )
}
export default Header