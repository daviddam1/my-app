import React from "react-dom"

export default function Header(){
    return( 
    <header>
      <nav className='navigation'>
        <img id="logo" src="/logo512.png" alt="logo"></img>
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
    )
}

