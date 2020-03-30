import React from 'react'
import { Container, Grid, Segment } from 'semantic-ui-react'
import { create, all } from 'mathjs'

import Display from './Display'
import Button from './Button'
import keys from '../keys'

const math = create(all)

export default () => {
  const write = char => () => {
    const formula = document.getElementById('display')
    const l = formula.innerHTML.length
    if (formula.innerHTML.slice(l - 1) === '0' && l === 1) {
      formula.innerHTML = char
      return
    }
    const rgx = /\.[0-9-\+\*\\]?$/g
    if (!formula.innerHTML.match(rgx) || char !== '.') {
      formula.innerHTML += char
    }
    // if (lastChar === '0' && formula.innerHTML.length === 1) {
    //   formula.innerHTML = char
    // } else if (char !== '.' || lastChar !== ('' || '+' || '-' || '*' || '/')) {
    //   formula.innerHTML += char
    // }
  }

  const calculate = () => {
    const display = document.getElementById('display')
    const exp = display.innerHTML
    display.innerHTML = math.evaluate(exp)
  }
  return (
    <Container>
      <Display />
      <Grid columns='equal' id='grid'>
        <Grid.Row>
          <Grid.Column>
            <Button
              id='clear'
              char='AC'
              color={keys.AC}
              action={() => {
                document.getElementById('display').innerHTML = '0'
                document.getElementById('formula').innerHTML = ''
              }}
            />
          </Grid.Column>
          <Grid.Column width={4}>
            <Button
              id='multiply'
              char='X'
              color={keys.op}
              action={write('*')}
            />
          </Grid.Column>
          <Grid.Column width={4}>
            <Button
              id='divide'
              char='/'
              color={keys.op}
              action={write('/')}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Button id='seven' char='7' action={write('7')} />
            <Button id='four' char='4' action={write('4')} />
          </Grid.Column>
          <Grid.Column>
            <Button id='eight' char='8' action={write('8')} />
            <Button id='five' char='5' action={write('5')} />
          </Grid.Column>
          <Grid.Column>
            <Button id='nine' char='9' action={write('9')} />
            <Button id='six' char='6' action={write('6')} />
          </Grid.Column>
          <Grid.Column>
            <Button
              id='subtract'
              char='-'
              color={keys.op}
              action={write('-')}
            />
            <Button
              id='add'
              char='+'
              color={keys.op}
              action={write('+')}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row stretched>
          <Grid.Column>
            <Button id='zero' char='0' action={write('0')} />
          </Grid.Column>
          <Grid.Column>
            <Button id='two' char='2' action={write('2')} />
            <Button id='one' char='1' action={write('1')} />
          </Grid.Column>
          <Grid.Column width={4}>
            <Button id='three' char='3' action={write('3')} />
            <Button id='decimal' char='.' action={write('.')} />
          </Grid.Column>
          <Grid.Column width={4}>
            <Button
              id='equals'
              char='='
              color={keys['=']}
              action={calculate}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
}
