import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function TopBar() {
    const { pathname } = useLocation();
    return (
        <div className='pt-10 pb-2 border-b-2'>
            <ul className='flex justify-center items-center gap-4'>
                <li>
                    <Link to="/" className={`${pathname == '/'? 'font-bold':''}`}>Home</Link>
                </li>
                <li>
                    <Link to="/planet" className={`${pathname == '/planet'? 'font-bold':''}`}>Planet</Link>
                </li>
                <li>
                    <Link to="/starship" className={`${pathname == '/starship'? 'font-bold':''}`}>Starship</Link>
                </li>
                <li>
                    <Link to="/people" className={`${pathname == '/people'? 'font-bold':''}`}>People</Link>
                </li>
            </ul>
        </div>
    )
}
