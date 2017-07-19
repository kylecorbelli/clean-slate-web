import * as React from 'react'

interface Props {
  readonly greeting: string
}

interface State {
  readonly name: string
}

export default class Greeting extends React.Component<Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = {
      name: '',
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange (event: React.SyntheticEvent<HTMLInputElement>): void {
    const target = event.target as HTMLInputElement
    this.setState({
      name: target.value,
    })
  }

  render (): JSX.Element {
    const {
      greeting,
    } = this.props
    const {
      name,
    } = this.state
    return (
      <div className="Greeting">
        <input
          type="text"
          value={name}
          onChange={this.handleInputChange}
        />
        <h1>{greeting + (name ? ` ${name}!` : '!')}</h1>
      </div>
    )
  }
}
