import React from 'react'

import Section from 'src/components/Section'
import { SiteData } from 'src/data'

interface Props {
  site: SiteData
}

const App = ({ site }: Props): JSX.Element => (
  <div className="app">
    <h1>
      {site.title}
      <span className="subtitle">{site.subtitle}</span>
    </h1>
    {site.sections.map(section => (
      <Section key={section.title} section={section} />
    ))}
  </div>
)

export default App
