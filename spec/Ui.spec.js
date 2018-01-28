import Ui from '../src/Ui'

describe('Ui', () => {
  let ui
  let outputSpy
  let askedForInput = false
  const inputSpy = () => {
    askedForInput = true
  }

  beforeEach(() => {
    outputSpy = new OutputSpy()
    ui = new Ui(inputSpy, outputSpy)
    askedForInput = false
  })

  it('greets the user', () => {
    ui.greet()
    expect(outputSpy.printedMessage()).
      toEqual('::: Welcome to Rock Paper Scissors :::\n')
  })

  it('asks user to enter a move', () => {
    ui.askForMove()
    expect(outputSpy.printedMessage()).
      toEqual('Enter your move:\n')
  })

  it('gets user input for move', () => {
    ui.askForMove()
    expect(askedForInput).toBe(true)
  })

  it('announces the winner', () => {
    ui.announceWinner('you!')
    expect(outputSpy.printedMessage()).
      toEqual('Winner: you!\n')
  })

  it('announces computer move', () => {
    ui.announceComputerMove('rock')
    expect(outputSpy.printedMessage()).
      toEqual('The computer played rock.')
  })

  it('asks if user wants to play again', () => {
    ui.getReplayChoice()
    expect(outputSpy.printedMessage()).
      toEqual('Do you fancy playing again? y/n')
  })

  it('gets user input for replay', () => {
    ui.getReplayChoice()
    expect(askedForInput).toBe(true)
  })

  it('says goodbye', () => {
    ui.sayBye()
    expect(outputSpy.printedMessage()).
      toEqual('Byyyeeee!')
  })
})

class OutputSpy {
  constructor() {
    this.message = ''
  }

  log(message) {
    this.message = message
  }

  printedMessage() {
    return this.message
  }
}
