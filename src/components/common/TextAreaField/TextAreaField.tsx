import styled from "styled-components";

enum ThemeType {
  DARK = "dark",
  LIGHT = "light"
}

interface TextAreaFieldProps {
  theme: ThemeType;
}

const TextAreaField = styled.textarea<TextAreaFieldProps>`
  color: ${({theme}) => `var(--text-area-color-${theme})`};
  height: 100%;
  border: none;
  width: var(--text-area-width);
  background: ${({theme}) => `var(--text-area-background-${theme})`};
  border-radius: var(--text-area-border-radius-size);
  resize: none;
  padding: var(--text-area-padding);
  &:focus {
    outline: none;
    box-shadow: 0 0 5px var(--text-area-box-shadow);
  }
`
export { ThemeType, TextAreaField }