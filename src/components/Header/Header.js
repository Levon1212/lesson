import React from 'react';
import './header.scss';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li>
                            <Link to="/position">
                                Position
                                <div className={'dropdown'}>
                                    <Link className={'dropdownLink'} to='/position'>Lesson 1</Link>
                                    <Link className={'dropdownLink'} to='/'>Lesson 2</Link>
                                    <Link className={'dropdownLink'} to='#'>Lesson 3</Link>
                                    <Link className={'dropdownLink'} to='#'>Lesson 4</Link>
                                    <Link className={'dropdownLink'} to='#'>Lesson 5</Link>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact">
                                Contact
                                <div className={'dropdown'}>
                                    <Link className={'dropdownLink'} to='#'>Lesson 1</Link>
                                    <Link className={'dropdownLink'} to='#'>Lesson 2</Link>
                                    <Link className={'dropdownLink'} to='#'>Lesson 3</Link>
                                    <Link className={'dropdownLink'} to='#'>Lesson 4</Link>
                                    <Link className={'dropdownLink'} to='#'>Lesson 5</Link>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
    );
};

export default Header;