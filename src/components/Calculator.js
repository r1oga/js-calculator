import React from 'react'
import { Container, Grid, Segment } from 'semantic-ui-react'

import Display from './Display'
import Button from './Button'
import keys from '../keys'

export default () => {
  return (
    <Container>
      <Display />
      <Grid columns='equal' id='grid'>
        <Grid.Row>
          <Grid.Column>
            <Button id='clear' char='AC' color={keys.AC} />
          </Grid.Column>
          <Grid.Column width={4}>
            <Button id='multiply' char='X' color={keys.op} />
          </Grid.Column>
          <Grid.Column width={4}>
            <Button id='divide' char='/' color={keys.op} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Button id='seven' char='7' />
            <Button id='four' char='4' />
          </Grid.Column>
          <Grid.Column>
            <Button id='eight' char='8' />
            <Button id='five' char='5' />
          </Grid.Column>
          <Grid.Column>
            <Button id='nine' char='9' />
            <Button id='six' char='6' />
          </Grid.Column>
          <Grid.Column>
            <Button id='subtract' char='-' color={keys.op} />
            <Button id='add' char='+' color={keys.op} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row stretched>
          <Grid.Column>
            <Button id='zero' char='0' />
          </Grid.Column>
          <Grid.Column>
            <Button id='two' char='2' />
            <Button id='one' char='1' />
          </Grid.Column>
          <Grid.Column width={4}>
            <Button id='three' char='3' />
            <Button id='decimal' char='.' />
          </Grid.Column>
          <Grid.Column width={4}>
            <Button id='equals' char='=' color={keys['=']} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
}
