import { useRouteError } from "react-router-dom";

const ErrorPage=()=>{
    const err=useRouteError();
    // const {status,statusText}=err;
    console.log(err);
    return (
        <div>
            <h1>Oops!</h1>
            <h2>Something went Wrong.</h2>
            <h2>{err.status+":"+err.statusText}</h2>
        </div>
    )
}

export default ErrorPage