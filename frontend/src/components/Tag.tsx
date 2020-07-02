import React from 'react'
import { Tag as ZTag } from '@zeit-ui/react'

type TagProps = {
  value: number
  percentage?: boolean
}

export default function Tag(props: TagProps): JSX.Element {
  const { value, percentage } = props
  return (
    <ZTag type="default" invert>
      {`${value} ${percentage ? '%' : ''}`}
    </ZTag>
  )
}
