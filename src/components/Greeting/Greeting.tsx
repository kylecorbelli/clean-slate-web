import * as React from 'react'

interface Props {
  readonly text: string
}

const Greeting = ({ text }: Props): JSX.Element => (
  <h1>{text}</h1>
)

export default Greeting
