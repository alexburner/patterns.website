import React from 'react'

import { ThumbData } from 'src/data'

interface Props {
  title: string
  thumb: ThumbData
}

const Thumb = ({ title, thumb }: Props): JSX.Element => (
  <a
    className="thumb"
    style={{ background: `center / cover no-repeat url("${thumb.img}")` }}
    title={thumb.title || title}
    href={thumb.href}
    target="_blank"
  />
)

export default Thumb
