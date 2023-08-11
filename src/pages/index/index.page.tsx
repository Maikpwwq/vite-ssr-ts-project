import { Counter } from './Counter'
import Button from '@mui/material/Button'

export { Page }

function Page() {
  return (
    <>
      <h1>Welcome</h1>
      This page is:
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
        </li>
      </ul>
      <Button>
        Navigate
      </Button>
    </>
  )
}
