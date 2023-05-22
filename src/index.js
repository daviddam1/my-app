/*
import ReactDOM from 'react-dom'
import '../src/style.css'
*/
/*
const h1=document.createElement("h1")
h1.textContent="This is an imperative way to program"
h1.className="header"
document.getElementById("root").append(h1)
*/

/*
const h1=document.createElement("h1")
h1.textContent="This is an imperative way to program"
h1.className="header"
document.getElementById("root").append(h1)

const element = <h1 className="header">This is JSX</h1>
console.log(element)

//render - za prikaz elemenata na web strani
ReactDOM.render(element,document.getElementById("root"))
*/

/* JSX prvi nacin
ReactDOM.render(
  <div>
    <h1 className='header'>This is JSX</h1>
    <p>This is a paragraph</p>,
  </div>
  ,document.getElementById("root")
)
*/

//JSX drugi nacin
/*
const page =(
  <div>
    <h1 className='header'>This is JSX</h1>
    <p>This is a paragraph</p>,
  </div>)
  console.log(page)
ReactDOM.render(
  page
  ,document.getElementById("root")
)
*/


//nav practice JSX
/*
const page = (
  <nav>
    <h1>My brand</h1>
      <ul>
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
       </ul>
  </nav>
)

ReactDOM.render(page,document.getElementById("root"))


*/

// JSX practice with append (proving that it doesn't work), and then using ReactDom
/*
const element =(
<div>
  <h1>Hello</h1>
  <ol>
    <li>Ime</li>
    <li>Prezime</li>
    <li>Godina Rodjenja</li>
  </ol>
</div>)

console.log(element)

//document.getElementById("root").append(JSON.stringify(element))
ReactDOM.render(element,document.getElementById("root"))
*/

//first real challange project 1
/*
const project1=(
  <div>
    <img src="/logo192.png" alt="logo" width="80px"></img>
    <div>
      <h1 style={{color: "red"}}>Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousand of apps, including mobile</li>
      </ul>
    </div>
  </div>
)

ReactDOM.render(project1,document.getElementById("root"))
*/

//Using components!
/*
function WhyReact(){
  return(
    <div>
      <img src="/logo192.png" alt="logo" width="80px"></img>
      <div>
        <h1>Why I love React</h1>
        <ol>
          <li>It's great</li>
          <li>Very intuitive</li>
          <li>Good for web apps</li>
          <li>Nice payed</li>
        </ol>
      </div>
    </div>
  )
}

ReactDOM.render(<WhyReact/>,document.getElementById("root"))
*/

//Challenge part2
/*
function Part2(){
  return (
    <div>
      <header>
        <nav>
          <img src="/logo512.png" alt="logo" width="100px"></img>
        </nav>
      </header>
        <div>
          <h1>Reasons I'm excited to learn React</h1>
          <ul>
            <li>It's great</li>
            <li>Very intuitive</li>
            <li>Good for web apps</li>
            <li>Nice payed</li>
          </ul>
        </div>
      <footer>
        <small>"2023 Damjanovic development.
        All rights reserved"</small>
      </footer>
    </div>
  )
}

ReactDOM.render(<Part2/>,document.getElementById("root"))
*/


/*
//Min Component Challange!
function Header(){
  return( 
  <header>
    <nav>
      <img src="/logo512.png" alt="logo" width="100px"></img>
    </nav>
  </header>
  )
}

function Content(){
  return(
    <div>
    <h1>Reasons I'm excited to learn React</h1>
    <ul>
      <li>It's great</li>
      <li>Very intuitive</li>
      <li>Good for web apps</li>
      <li>Nice payed</li>
    </ul>
    </div>
  )
}

function Footer(){
  return(
  <footer>
    <small>"2023 Damjanovic development.
    All rights reserved"</small>
  </footer>
  )
}

//Mini Challenge
function Page(){
  return (
    <div>
      <Header/>      
      <Content/>
      <Footer/>
    </div>
  )
}

ReactDOM.render(<Page/>,document.getElementById("root"))

*/


/*
//Min Component Challange Part2,3 - code organization until 1:30:00!
import Header from '../src/header'
import Content from './content'
import Footer from './footer'


//Mini Challenge
function Page(){
  return (
    <div className='Page'>
      <Header/>      
      <Content/>
      <Footer/>
    </div>
  )
}

ReactDOM.render(<Page/>,document.getElementById("root"))

*/

import ReactDOM from "react-dom"
import App from "./App"

ReactDOM.render(<App/>,document.getElementById("root"))


