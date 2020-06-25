import React, { useState } from 'react'
import { useTransition, animated } from 'react-spring'

export default function Home(): JSX.Element {
  const [toggle, set] = useState(false)
  const transitions = useTransition(toggle, null, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })
  return (
    <React.Fragment>
      {transitions.map(({ item, key, props }) =>
        item ? (
          <animated.div style={props}>
            <div onClick={() => set(!toggle)}>This one 🤔</div>
          </animated.div>
        ) : (
          <animated.div style={props}>
            <div onClick={() => set(!toggle)}>💕</div>
          </animated.div>
        )
      )}
    </React.Fragment>
  )
}
