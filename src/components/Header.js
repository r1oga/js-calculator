import React from 'react'

import { Divider, Segment, Icon } from 'semantic-ui-react'

const Header = () => {
  return (
    <Divider horizontal>
      <Segment basic textAlign='center'>
        <Icon name='calculator' size='large' />
        {' '}JavaScript Calculator{' '}
        <Icon name='calculator' size='large' />
      </Segment>
    </Divider>
  )
}

export default Header
