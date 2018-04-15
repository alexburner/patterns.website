import React from 'react'

import Thumb from 'src/components/Thumb'
import { ItemData, SectionData, SiteData } from 'src/data'

interface Props {
  item: ItemData
}

const Item = ({ item }: Props): JSX.Element => (
  <div className="item">
    {item.thumbs.map(thumb => <Thumb key={thumb.title} thumb={thumb} />)}
    <h3>{item.title}</h3>
  </div>
)

export default Item
