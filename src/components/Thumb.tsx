import React from 'react'

import { ItemData, SectionData, SiteData, ThumbData } from 'src/data'

interface Props {
  thumb: ThumbData
}

const Thumb = ({ thumb }: Props): JSX.Element => (
  <a
    className="thumb"
    style={{ background: `center / cover no-repeat url("${thumb.img}")` }}
    href={thumb.href}
    title={thumb.title}
    target="_blank"
  />
)

export default Thumb
