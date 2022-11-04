import React from 'react';
import logo from '../../Go Travel - HTML_CSS/img/logo';

function Navbar() {
    return (
        <div className="App">
            <header>
                <nav class="menu">
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/destinos">Destinos</a>
                        </li>
                        <li>
                            <a href="/promos">Promoções</a>
                        </li>
                        <li>
                            <a href="/contato">Contato</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Navbar;