import React from 'react'
import { Container, Grid } from 'semantic-ui-react'
import styled from 'styled-components'

const Input = styled.div`
  font-family: 'Orbitron', 'monospace';
  font-size: 20px;
  line-height: 20px;
  color: rgb(71, 88, 126);
  overflow-wrap: break-word;
  padding-bottom: 0.5em;
  text-align: right;
  vertical-aling: text-top;
  word-wrap: break-word;
`
const Output = styled.div`
  color: rgb(71, 88, 126);
  font-family: 'Orbitron', 'monospace';
  font-weight: bold;
  font-size: 29px;
  line-height; 35px;
  text-align: right;
  
`
export default () => {
  return (
    <Container>
      <Input id='formula'>789-9+0=780</Input>
      <Output id='display'>780</Output>
    </Container>
  )
}
