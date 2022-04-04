import styled from 'styled-components';

type SectionButtonsStyledProps = {
  horizontalView?: boolean
}

const SectionButtonsStyled = styled.div<SectionButtonsStyledProps>`
  padding: 10px 0;
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: space-around;
  align-items: center;
  
  @media screen and (min-width: 768px){
    flex-direction: column;
    ${({horizontalView}) => horizontalView && `
      flex-direction: row;
    `}
  }
}
`

export default SectionButtonsStyled;