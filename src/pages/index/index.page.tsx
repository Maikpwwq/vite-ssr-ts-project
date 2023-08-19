import { Counter } from './Counter'
// import Button from '@mui/material/Button'
import Button from 'react-bootstrap/Button';

export { Page }

function Page() {
  const handleClick = () => {
    console.log("click");
  };
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
      <Button onClick={handleClick}>
        Navigate
      </Button>
    </>
  )
}
