import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Hello world!</h1>
            <button className="btn btn-primary" onClick={() => navigate("/sobre")}>
                Clique aqui
            </button>
        </div>

    );
}
export default Home;