import styled from "styled-components";

const TextAreaField = styled.textarea`
  height: 100%;
  border: none;
  text-align: center;
  width: var(--text-area-width);
  background: var(--text-area-background);
  border-radius: var(--text-area-border-radius-size);
  resize: none;
  
  &:focus {
    outline: none;
    box-shadow: 0 0 5px var(--text-area-box-shadow);
  }
`
export default TextAreaField;