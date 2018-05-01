import React from 'react'

import { ThumbData } from 'src/data'

interface Props {
  title: string
  thumb: ThumbData
}

const COLOR = '#888'

const Thumb = ({ title, thumb }: Props): JSX.Element => (
  <a
    style={{
      background: `${COLOR} center / cover no-repeat url("${thumb.img}")`,
    }}
    className="thumb"
    title={thumb.title || title}
    href={thumb.href}
    target="_blank"
  />
)

export default Thumb
