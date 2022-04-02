import React from 'react'
import styled, { css } from 'styled-components'


const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  // Hide checkbox visually but remain accessible to screen readers.
  // Source: https://polished.js.org/docs/#hidevisually
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`

const checkedStyles = css`
  color: red;
  border: 1px solid red;
`
const uncheckedStyles = css`
  color: gray;
  border: 1px solid blue;
`
const StyledCheckbox = styled.div<{checked: boolean}>`
 
  ${props => props.checked ? checkedStyles : uncheckedStyles};
`

 const Checkbox = ({ className, checked, ...props }:{
   className?: string;
   checked: boolean;
   onChange?: ()=>void;
 }) => (
  <CheckboxContainer className={className}>
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox checked={checked}>
     checked
    </StyledCheckbox>
  </CheckboxContainer>
)

export default Checkbox