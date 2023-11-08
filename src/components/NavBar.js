import React from 'react';
import logo from '../assets/logo.png'

function NavBar(props) {
    return (
        <div className="navbar bg-base-100" style={{ marginBottom: '35px' }}>
            <div className="flex-none">
                <img
                    src={logo}
                    alt="Logo"
                    style={{ width: '35px', height: '35px' }}
                />
            </div>
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">Orange Pro AI</a>
            </div>
            <div className="flex-none">
                <button className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                </button>
            </div>
        </div>
    );
}

export default NavBar;
