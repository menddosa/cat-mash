import React from 'react'
import { useTransition, animated } from 'react-spring'
import { Display, Button, Image } from '@zeit-ui/react'
import { Cat } from '../utils/types'

type CatCardProps = {
  data: Cat
  onClick: () => void
  loading: boolean
  winner: boolean | null
}

export default function CatCard(props: CatCardProps): JSX.Element {
  const { data, onClick, loading, winner } = props
  const transitions = useTransition(winner, null, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1, bottom: '-14px' },
    leave: { opacity: 0, bottom: '-14px' },
  })

  return (
    <Display
      shadow
      caption={
        <Button disabled={winner !== null} loading={loading} onClick={onClick}>
          {transitions.map(({ item, key, props }) => (
            <animated.div key={key} style={props}>
              {!item ? (winner !== null ? '🥺' : 'This one 🤔') : '💕'}
            </animated.div>
          ))}
        </Button>
      }
    >
      <Image style={{ objectFit: 'cover' }} width={450} height={310} src={data.image} />
    </Display>
  )
}
