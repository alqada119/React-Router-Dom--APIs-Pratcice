import { Link } from "react-router-dom";

export function Another(){
    return (
        <div>
            <h1>Another Page</h1>
            <p>
                Lorem ipsium..... Lorem ....... 
            </p>
            <hr></hr>
            <h2>Visit</h2>
            <Link to="fetch">Access Our AI Assistant</Link>
            <hr />
            <Link to="/">Back to Main Page</Link>
            <hr />
            <Link to="ai_fetch">Access Easy Info using another API</Link>
        </div>
    )
}