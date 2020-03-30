import React from 'react'
import { Container, Grid } from 'semantic-ui-react'
import styled from 'styled-components'

const Input = styled.div`
  font-family: 'Orbitron', 'monospace';
  font-size: 20px;
  line-height: 20px;
  overflow-wrap: break-word;
  padding-bottom: 0.5em;
  text-align: right;
  vertical-aling: text-top;
  word-wrap: break-word;
`
const Output = styled.div`
  color: red;
  font-family: 'Orbitron', 'monospace';
  font-size: 29px;
  line-height; 35px;
  text-align: right;
  
`
export default () => {
  return (
    <Container>
      <Input>789-9+0=780</Input>
      <Output>780</Output>
    </Container>
  )
}
