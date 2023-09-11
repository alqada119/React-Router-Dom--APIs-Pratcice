import { Link } from "react-router-dom"
export function ErrorPage(){
    return (<div>
      <h2>Warning Wrong Page</h2>
      <Link to='/'>Press here to go back</Link>
    </div>)
  }