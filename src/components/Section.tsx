import React from 'react'

import Masonry from 'react-masonry-component'
import Item from 'src/components/Item'
import { SectionData } from 'src/data'

interface Props {
  section: SectionData
}

const Section = ({ section }: Props): JSX.Element => (
  <div className="section">
    <h2>{section.title}</h2>
    <div className="items">
      <Masonry
        disableImagesLoaded
        options={{
          itemSelector: '.item',
          transitionDuration: 100,
        }}
      >
        {section.items.map(item => <Item key={item.title} item={item} />)}
      </Masonry>
    </div>
  </div>
)

export default Section
