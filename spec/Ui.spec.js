import Ui from '../src/Ui'

describe('Ui', function() {
  let ui
  let outputSpy
  let askedForInput = false

  function inputSpy() {
    askedForInput = true
  }

  beforeEach(() => {
    outputSpy = new OutputSpy()
    ui = new Ui(inputSpy, outputSpy)
  })

  it('greets the user', () => {
    ui.greet()
    expect(outputSpy.printedMessage()).toEqual('::: Welcome to Rock Paper Scissors :::')
  })

  it('asks user to enter a move', () => {
    ui.askForMove()
    expect(outputSpy.printedMessage()).toEqual('Enter your move:')
  })

  it('gets user input', () => {
    ui.askForMove()
    expect(askedForInput).toBe(true)
  })

  it('announces the winner', () => {
    ui.announceWinner('you!')
    expect(outputSpy.printedMessage()).toEqual('Winner: you!')
  })

  it('says goodbye', () => {
    ui.sayBye()
    expect(outputSpy.printedMessage()).toEqual('Byyyeeee!')
  })
})

class OutputSpy{
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
