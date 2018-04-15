import React from 'react'

import { ItemData, SectionData, SiteData, ThumbData } from 'src/data'

interface Props {
  thumb: ThumbData
}

const Thumb = ({ thumb }: Props): JSX.Element => (
  <a className="thumb" href={thumb.href} title={thumb.title} target="_blank">
    <img src={thumb.img} />
  </a>
)

export default Thumb
