import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background: grey;
  border: none;
  color: white;
  cursor: default;
  font-family: 'Orbitron', 'monospace';
  font-size: 20px;
  height: 65px;
  outline: 1px solid black;
  width: 100%;

  &:hover {
    background-color: rgb(141, 145, 145);
  }
  
`

export default () => {
  return (
    <Button>
      B
    </Button>
  )
}
