import React from 'react';
import styled, {css} from "styled-components";

/**
 *
 * @Author pxx
 * @DATA 2023/11/5 18:55
 */
const Input = styled.input.attrs({ type: "checkbox" })``;

const Label = styled.label`
  align-items: center;
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
`

const LabelText = styled.span`
  ${ props => {
    switch (props.$mode) {
      case "dark":
        return css`
          background-color: black;
          color: white;
          ${Input}:checked {
            color: blue;
          }
        `;
      default:
        return css`
          background-color: white;
          color: black;
          ${Input}:checked + & {
            color: red;
          }
        `;
    }
  }};
`;
const Button = styled.button`
  background-color: blue;
  
  //设置样式级别为最高，处理原生css和styleComponent样式冲突
  && {
    background-color: red;
  }
`;

function Index() {
    return (
        <div>
            <Label>
                <Input defaultChecked />
                <LabelText className={'active'}>Foo</LabelText>
            </Label>
            <Label>
                <Input />
                <LabelText $mode="dark">Foo</LabelText>
            </Label>
            <Label>
                <Input defaultChecked />
                <LabelText>Foo</LabelText>
            </Label>
            <Label>
                <Input defaultChecked />
                <LabelText $mode="dark">Foo</LabelText>
            </Label>
            <Button>Click me</Button>
        </div>
    )
}

export default Index;