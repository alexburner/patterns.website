import React from 'react'
import { render } from 'react-dom'

import App from 'src/components/App'
import { site } from 'src/data'

render(<App site={site} />, document.getElementById('root'))
