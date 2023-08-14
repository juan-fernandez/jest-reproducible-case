import {render, screen} from '@testing-library/react' // (or /dom, /vue, ...)
import {Button} from './Button'
import '@testing-library/jest-dom'


jest.setTimeout(400)

async function runTest () {
  render(<Button />)
  expect(await screen.findByTestId('my-button')).toHaveTextContent('button')
}


describe('tests', () => {
  test('should show login form 2', async () => {
    await runTest()
  })
  test('should show login form', async () => {
    await runTest()
  })
})