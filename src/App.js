import React from 'react'

import Layout from './components/Layout'
import Calculator from './components/Calculator'
import './App.css'

export default () => {
  return (
    <div>
      <Layout>
        <Calculator />
      </Layout>
    </div>
  )
}
