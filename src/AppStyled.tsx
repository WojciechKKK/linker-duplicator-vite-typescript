import styled from 'styled-components';


interface AppStyledProps {
  isDuplikator: boolean;
};

const AppStyled = styled.div<AppStyledProps>`
background: var(--color-background-duplikator);
box-sizing: border-box;
height: 100vh;
width: 100vw;
display: grid;
grid-gap: 10px;

grid-template-columns: 1fr;
grid-template-rows: 1fr 6fr 0.5fr;
grid-template-areas: 
  "header"
  "main"
  "footer";

${({ isDuplikator }) => isDuplikator && `
  background: var(--color-background-linker);
`}

`


export default AppStyled;