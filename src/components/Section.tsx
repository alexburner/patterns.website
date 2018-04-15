import React from 'react'

import Item from 'src/components/Item'
import { SectionData, SiteData } from 'src/data'

interface Props {
  section: SectionData
}

const Section = ({ section }: Props): JSX.Element => (
  <div className="section">
    <h2>{section.title}</h2>
    {section.items.map(item => <Item key={item.title} item={item} />)}
  </div>
)

export default Section
