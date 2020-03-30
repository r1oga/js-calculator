import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background: grey;
  border: none;
  color: white;
  cursor: default;
  font-family: monospace;
  font-size: 20px;
  height: 65px;
  outline: 1px solid black;
  width: 100%;
  
`

export default () => {
  return (
    <Button>
      B
    </Button>
  )
}
