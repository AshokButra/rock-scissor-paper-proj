import {Component} from 'react'
import Popup from 'reactjs-popup'
import GameResultsView from './components/GameResultsView'

import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class App extends Component {
  state = {score: 0, randomChosenObject: '', idValue: '', gamingView: true}

  onClickButton = id => {
    const randomGeneratedValue = Math.ceil(Math.random() * 3)
    if (randomGeneratedValue === 1) {
      this.setState({
        randomChosenObject: 'ROCK',
        idValue: id,
        gamingView: false,
      })
    } else if (randomGeneratedValue === 2) {
      this.setState({
        randomChosenObject: 'SCISSORS',
        idValue: id,
        gamingView: false,
      })
    } else {
      this.setState({
        randomChosenObject: 'PAPER',
        idValue: id,
        gamingView: false,
      })
    }
  }

  renderPlayPage = result => {
    if (result === 'YOU WON') {
      this.setState(prevState => ({
        score: prevState.score + 1,
        gamingView: true,
      }))
    } else if (result === 'YOU LOSE') {
      this.setState(prevState => ({
        score: prevState.score - 1,
        gamingView: true,
      }))
    } else {
      this.setState({
        gamingView: true,
      })
    }
  }

  renderFrontPage = () => {
    const {score} = this.state
    return (
      <div className="bg-container">
        <div className="top-section">
          <div className="name-container">
            <h1 className="item-name">
              ROCK <br />
              PAPER <br />
              SCISSORS
            </h1>
          </div>
          <div className="result-card">
            <p className="score-heading">Score</p>
            <p className="score-current">{score}</p>
          </div>
        </div>
        <div className="buttons-container">
          {choicesList.map(eachObject => (
            <button
              className="button-element"
              type="button"
              key={eachObject.id}
              data-testid={`${eachObject.id.toLowerCase()}Button`}
              onClick={() => this.onClickButton(eachObject.id)}
            >
              <img
                src={eachObject.imageUrl}
                className="item-image"
                alt={eachObject.id}
              />
            </button>
          ))}
        </div>

        <div className="popup-container">
          <Popup
            trigger={
              <button type="button" className="rules-button">
                Rules
              </button>
            }
            position="top right"
          >
            <div className="rules-popup-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                className="rules-image"
                alt="rules"
              />
            </div>
          </Popup>
        </div>
      </div>
    )
  }

  renderResultsPage = () => {
    const {idValue, randomChosenObject, score} = this.state
    const selectedObject = choicesList.filter(
      eachObject => eachObject.id === idValue,
    )

    const selectedImage = selectedObject[0].imageUrl
    const randomObject = choicesList.filter(
      eachObject => eachObject.id === randomChosenObject,
    )

    const randomImage = randomObject[0].imageUrl
    return (
      <div className="bg-container-result">
        <div className="top-section">
          <div className="name-container">
            <h1 className="item-name">
              ROCK <br />
              PAPER <br />
              SCISSORS
            </h1>
          </div>
          <div className="result-card">
            <p className="score-heading">Score</p>
            <p className="score-current">{score}</p>
          </div>
        </div>
        <div className="selected-random-chosen-container">
          <div className="you-selected-container">
            <p className="you">YOU</p>
            <img
              src={selectedImage}
              className="selected-image"
              alt="your choice"
            />
          </div>
          <div className="random-selected-container">
            <p className="opponent">OPPONENT</p>
            <img
              src={randomImage}
              className="random-image"
              alt="opponent choice"
            />
          </div>
        </div>
        <GameResultsView
          idValue={idValue}
          randomChosenObject={randomChosenObject}
          renderPlayPage={this.renderPlayPage}
        />

        <div className="popup-container">
          <Popup
            trigger={
              <button type="button" className="rules-button">
                Rules
              </button>
            }
            position="top right"
          >
            <div className="rules-popup-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                className="rules-image"
                alt="rules"
              />
            </div>
          </Popup>
        </div>
      </div>
    )
  }

  render() {
    const {gamingView} = this.state
    switch (gamingView) {
      case true:
        return this.renderFrontPage()
      case false:
        return this.renderResultsPage()
      default:
        return null
    }
  }
}

export default App
