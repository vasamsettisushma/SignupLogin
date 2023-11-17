import React from "react"
import {useLocation, useNavigate} from 'react-router-dom';

function Home (){
    const location=useLocation()

    return (
        <div className="homepage">

            <h1>Hello {location.state.id} and welcome to the home</h1>
            <p>Successfully Loggedin</p>

        </div>
    )
}

export default Home