import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'

import MessageBoard from './MessageBoard'

let root = document.createElement('div')
document.body.appendChild(root)

ReactDOM.render(<MessageBoard />, root)
