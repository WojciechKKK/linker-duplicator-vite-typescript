import styled from "styled-components";

const DuplicatorStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  gap: 10px;

  @media screen and (min-width: 768px){
    flex-direction: row;  
  }
`
const SectionStyled = styled.div`
  text-align: center;
  flex: 1;
`

export { DuplicatorStyled, SectionStyled }