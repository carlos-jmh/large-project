import { createGlobalStyle} from "styled-components"
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
  }
  label {
    color: ${({theme}) => theme.label}
  }
  p {
    color: ${({theme}) => theme.text}
  }
  `