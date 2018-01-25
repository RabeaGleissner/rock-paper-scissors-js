import Ui from '../src/Ui'

describe('Ui', function() {
  let ui
  let fakeConsole
  let askedForInput = false

  function inputSpy() {
    askedForInput = true
  }

  beforeEach(() => {
    fakeConsole = new FakeConsole()
    ui = new Ui(inputSpy, fakeConsole)
  })

  it('asks user to enter a move', () => {
    ui.askForMove()
    expect(fakeConsole.printedMessage()).toEqual('Enter your move:')
  })

  it('gets user input', () => {
    ui.askForMove()
    expect(askedForInput).toBe(true)
  })
})

class FakeConsole {
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
