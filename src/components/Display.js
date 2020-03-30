import React from 'react'
import { Container } from 'semantic-ui-react'

import Touch from './Touch'

export default () => {
  return (
    <Container>
      Display
      <Touch />
      <Touch />
      <Touch />
    </Container>
  )
}
