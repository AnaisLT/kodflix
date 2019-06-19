import React from 'react';
import './NotFound.css';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div className='notfound'>
            <div className='notfoundalert'>
                <h1>Ooops...sorry, we haven't found the page you were looking for :(</h1>
                <div className='text'>
                    <p>Head back to the home page where all our heroes live.</p>
                    <p>They'll take you on an unforgettable journey!</p>
                </div>
            </div>
            <div>
                <button className='backhome'>
                    <Link to='/'>Home page</Link>
                </button>
            </div>
        </div>
    );
} 