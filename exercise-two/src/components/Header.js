import React from 'react';

function Header() {
    return (
        <header className="Header">
            <h2>Current Weather</h2>
            <div className="CitiesNav">
                <a href="/?city=seoul">Seoul</a>
                <a href="/?city=tokyo">Tokyo</a>
                <a href="/?city=berlin">Berlin</a>
                <a href="/?city=moscow">Moscow</a>
            </div>
        </header>
    );
}

export default Header