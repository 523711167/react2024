import React from 'react';
import {useNavigate} from "react-router-dom";

function Header()  {

    const navigate = useNavigate();

    let forward = () => {
        navigate(1)
    }

    let back = () => {
        navigate(-1)
    }

    return (
        <div>
            欢迎来到Route6
            <button onClick={ forward }>前进</button>
            <button onClick={ back }>后退</button>
        </div>
    );

}

export default Header;