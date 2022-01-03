const selectionButtons = document.querySelectorAll('[data-selection]')
const finalColumn = document.querySelector('[data-final-col]')
const computerScoreSpan = document.querySelector('[data-computer-score]')
const yourScoreSpan = document.querySelector('[data-your-score]')

const SELECTIONS = [
  {
    name: "rock",
    beats: "scissors"
  },
  {
    name: "scissors",
    beats: "paper"
  },
  {
    name: "paper",
    beats: "rock"
  },
]

selectionButtons.forEach(selectionButton => {
  selectionButton.addEventListener('click', e => {
    const selectionName = selectionButton.dataset.selection
    const selection = SELECTIONS.find(selection => selection.name === selectionName)
    makeSelection(selection)
  })
})


function makeSelection(selection){
  const computerSelection =  randomSelection()
  const  uswinner = winner(selection, computerSelection)
  const  compwinner = winner(computerSelection, selection)

  addSelectionResult(computerSelection, compwinner)
  addSelectionResult(selection, uswinner)

  if  (uswinner) addScore(yourScoreSpan)
  if (compwinner) addScore(computerScoreSpan)
}

function randomSelection() {
  const randomIndex =  Math.floor(Math.random() * SELECTIONS.length)
  return SELECTIONS[randomIndex]
}

function winner(selection, opponentSelection){
  return selection.beats === opponentSelection.name
}


function addSelectionResult(selection, winner) {
  const div = document.createElement('div')
  div.innerText = selection.name
  div.classList.add('result-selection')
  if (winner) div.classList.add('winner')
  finalColumn.after(div)
}


function addScore(scoreSpan) {
  scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
}