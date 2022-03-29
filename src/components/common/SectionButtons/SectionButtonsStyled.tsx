import styled from 'styled-components';

const SectionButtonsStyled = styled.div`
  padding: 10px 0;
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: space-around;
  align-items: center;
  
  @media(min-width: 768px){
    flex-direction: column;
  }
}
`

export default SectionButtonsStyled;