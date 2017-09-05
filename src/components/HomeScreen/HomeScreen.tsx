import * as React from 'react'
import Greeting from '../Greeting'
import './HomeScreen.css';
// import { User } from '../../redux/types'

const logo = require('../../logo.svg');

type Props = any

interface State {}

class HomeScreen extends React.Component<Props, State> {
  render() {
    const {
      currentUser: {
        attributes: {
          imageUrl,
        },
      },
    } = this.props
    const hasImage: boolean = Boolean(imageUrl)
    return (
      <div className="HomeScreen">
        <div className="HomeScreen-header">
          <img src={logo} className="HomeScreen-logo" alt="logo" />
          <Greeting greeting="Hello" />
        </div>
        <p className="HomeScreen-intro">
          To get started, edit <code>src/HomeScreen.tsx</code> and save to reload.
        </p>
        {hasImage && <img src={imageUrl} />}
      </div>
    );
  }
}

export default HomeScreen;
