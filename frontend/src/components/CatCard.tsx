import React from 'react'
import { Display, Button, Image } from '@zeit-ui/react'

type Cat = {
  id: number
  image: string
}

type CatCardProps = {
  data: Cat
}

export default function CatCard(props: CatCardProps): JSX.Element {
  const { data } = props
  return (
    <Display shadow caption={<Button>Click</Button>}>
      <Image width={450} height={310} src={data.image} />
    </Display>
  )
}
