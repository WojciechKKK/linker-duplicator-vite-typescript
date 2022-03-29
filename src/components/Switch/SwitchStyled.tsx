import styled from 'styled-components';

const SwitchLabelStyled = styled.label`
position: relative;
display: inline-block;
width: 60px;
height: 34px;
`

const SwitchStyled = styled.header`
  // background: #232323;
  grid-area: header;
  display: flex;
  flex-direction:column;
	justify-content: center;
	align-items: center;
  margin-bottom: 10px;
`

export { SwitchLabelStyled, SwitchStyled}