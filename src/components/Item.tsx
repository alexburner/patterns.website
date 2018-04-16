import React from 'react'

import Thumb from 'src/components/Thumb'
import { ItemData } from 'src/data'

interface Props {
  item: ItemData
}

const Item = ({ item }: Props): JSX.Element => (
  <div className="item">
    {item.thumbs.map(thumb => <Thumb key={thumb.title} thumb={thumb} />)}
    <p>{item.title}</p>
  </div>
)

export default Item
