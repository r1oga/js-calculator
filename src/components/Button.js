import React from 'react'
import styled from 'styled-components'

export default props => {
  const Button = styled.button`
  background: ${props.color ? props.color : 'grey'};
  border: none;
  color: white;
  cursor: default;
  font-family: 'Orbitron', 'monospace';
  font-size: 20px;
  height: 65px;
  outline: 1px solid black;
  width: 100%;
  
  &:hover {
    background-color: rgb(71, 88, 126);
  }
  `
  return (
    <Button id={props.id}>{props.char}</Button>
  )
}
