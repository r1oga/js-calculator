import React from 'react'
import { Container, Grid, Segment } from 'semantic-ui-react'

import Display from './Display'
import Button from './Button'

export default () => {
  return (
    <Container>
      <Display />
      <Grid columns='equal' id='grid'>
        <Grid.Row>
          <Grid.Column>
            <Button />
          </Grid.Column>
          <Grid.Column width={4}>
            <Button />
          </Grid.Column>
          <Grid.Column width={4}>
            <Button />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Button />
            <Button />
          </Grid.Column>
          <Grid.Column>
            <Button />
            <Button />
          </Grid.Column>
          <Grid.Column>
            <Button />
            <Button />
          </Grid.Column>
          <Grid.Column>
            <Button />
            <Button />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row stretched>
          <Grid.Column>
            <Button />
            <Button />
          </Grid.Column>
          <Grid.Column>
            <Button />
            <Button />
          </Grid.Column>
          <Grid.Column>
            <Button />
            <Button />
          </Grid.Column>
          <Grid.Column>
            <Button />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
}
