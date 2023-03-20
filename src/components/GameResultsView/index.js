import './index.css'

const GameResultsView = props => {
  const {idValue, randomChosenObject, renderPlayPage} = props

  const onRenderFirstPage = result => {
    renderPlayPage(result)
  }

  const setConditionalResult = () => {
    let resultText = null
    if (idValue === 'ROCK' && randomChosenObject === 'SCISSORS') {
      resultText = 'YOU WON'
    } else if (idValue === 'ROCK' && randomChosenObject === 'PAPER') {
      resultText = 'YOU LOSE'
    } else if (idValue === 'SCISSORS' && randomChosenObject === 'ROCK') {
      resultText = 'YOU LOSE'
    } else if (idValue === 'SCISSORS' && randomChosenObject === 'PAPER') {
      resultText = 'YOU WON'
    } else if (idValue === 'PAPER' && randomChosenObject === 'ROCK') {
      resultText = 'YOU WON'
    } else if (idValue === 'PAPER' && randomChosenObject === 'SCISSORS') {
      resultText = 'YOU LOSE'
    } else {
      resultText = 'IT IS DRAW'
    }
    return resultText
  }
  const result = setConditionalResult()
  console.log(result)
  return (
    <div className="result-container">
      <h1 className="result">{result}</h1>
      <button
        className="play-again"
        type="button"
        onClick={() => onRenderFirstPage(result)}
      >
        PLAY AGAIN
      </button>
    </div>
  )
}

export default GameResultsView
