import * as React from 'react'

interface Props {
  readonly greeting: string
}

interface State {
  readonly name: string
}

type DOMInputNode = HTMLInputElement | null

export default class Greeting extends React.Component<Props, State> {
  private nameInput: DOMInputNode

  constructor (props: Props) {
    super(props)
    this.state = {
      name: '',
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange (event: React.FormEvent<HTMLInputElement>): void {
    this.setState({
      name: event.currentTarget.value,
    })
  }

  componentDidMount (): void {
    if (this.nameInput) {
      this.nameInput.focus()
    }
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
          ref={node => this.nameInput = node}
        />
        <h1>{greeting + (name ? ` ${name}!` : '!')}</h1>
      </div>
    )
  }
}
