import styled, { css } from "styled-components"
const ButtonDefault = styled.button.attrs((props) => ({
  disabled: props.disabled,
}))`
  /* Speace */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  word-break: break-all;
  font-size: 16px;
  letter-spacing: 0;
  border: 0;
  text-align: center;
  // transition: all 1s ease;
  height: 40px;
  border-radius: 0px;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.2);
  padding: 0.375rem 0.75rem 0.375rem 0.75rem;
  width: ${(props) => (props.width ? props.width : "auto")};

  &:active,
  &:hover {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.6);
  }
  &:focus {
    outline: 0;
  }
  &:disabled {
    cursor: not-allowed;
    color: #bbb;
    background: #eee;
    box-shadow: none;
  }
  &:disabled:hover {
    color: #bbb;
    background: #eee;
    box-shadow: none;
  }
  @media (max-width: 768px) {
    //width: 100%;
  }
`
export const ButtonAddStyle = styled(ButtonDefault)`
  width: ${(props) => (props.width ? props.width : "100%")};
  height: 40px;
  border-radius: 0px;
  border: solid 1px #387659;
  background-color: #f0f0f0;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.57;
  letter-spacing: normal;
  text-align: center;
  color: #387659;
  box-shadow: none;
  border-style: dashed;
  &:focus {
    outline: 0;
  }
  &:active,
  &:hover {
    box-shadow: none;
    border: solid 1px #95aac9;
    background-color: #edf2f9;
  }
`

//font-weight: ${({ weight }) => (weight === "bold" && "bold") || (weight === "light" && "lighter") || "normal"};