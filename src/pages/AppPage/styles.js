import { Link as LinkAntd } from "react-router-dom"
import styled from "styled-components"

export const Logo =styled.img`
max-width: 80%;
max-height: 80%;
margin-top: 2rem;
margin-bottom: 1rem;
`

export const SettingWrapper = styled.div`
position: absolute;
bottom: 1rem;
text-align: center;
width: 100%;
`

export const NameText = styled.p`
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 60%;
/* identical to box height, or 26px */

text-align: center;

/* Hitam */

color: #2C2C2C;
`

export const EmailText = styled.p`
// font-family: 'Poppins';
font-style: normal;
font-weight: 300;
font-size: 14px;
line-height: 60%;
/* or 22px */

text-align: center;
font-feature-settings: 'tnum' on, 'lnum' on;

/* Gray 2 */

color: #4F4F4F;
`
export const ButtonWrapper = styled.div`
gap: 1rem;
justify-content: center;
display: flex;
`

export const ButtonSider = styled.div`
width: 36px;
height: 36px;
display: flex;
align-items: center;
justify-content: center;
background: #FFFFFF;
border: 1px solid rgba(0, 0, 0, 0.1);
border-radius: 8px;
cursor: pointer;
&:hover {
    background: #f0efed;
  }
`