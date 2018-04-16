import React from 'react'
import Masonry from 'react-masonry-component'

import Section from 'src/components/Section'
import { SiteData } from 'src/data'

interface Props {
  site: SiteData
}

const App = ({ site }: Props): JSX.Element => (
  <div className="app">
    <h1>{site.title}</h1>
    {site.sections.map(section => (
      <Section key={section.title} section={section} />
    ))}
  </div>
)

export default App
