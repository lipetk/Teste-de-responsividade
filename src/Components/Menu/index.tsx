
import { Link } from "react-router-dom";
// import img from "./src/pages/home/img/facebook.png"
import {BsInstagram} from "react-icons/bs";
import {FiFacebook} from "react-icons/fi";
import {AiFillGithub} from "react-icons/ai";
import '../../index.jsx'
// import './src/index.css'; 
// import img from "./src/pages/home/img/instagram.png"
export const Menu = () => {
    return (
        <>
        
  <body>
  <header className="he">
                
                <div className="menuzinho">
                 <div className="menu-section">
          <div className="menu-toggle">
            <div className="one"></div>
            <div className="two"></div>
            <div className="three"></div>
            <nav className="navegation">
                            <ul>
                                <li className="Home">
                                <Link  to= '/'>Home</Link>
                                </li>
                                <li className="servico">
                                    <Link to='Servicos'>Serviços</Link>
                                </li>
                                <li className="contato">
                                    <Link to='Contatos'>Contatos</Link>
                                </li>
                            </ul>
                            </nav>
                            </div></div>
      <div className="container">
       
        </div>
      </div>
    </header> 
    <ul className="icons">
            {/* <li><a href="#"><img src="img/facebook.png" alt="icons"></a></li>
            <li><a href="#"><img src="img/twitter.png" alt="icons"></a></li> */}
            <li><a className="insta" href="https://www.instagram.com/roque.lp7/"><BsInstagram/></a></li>
            <li><a className="facebk" href="https://www.facebook.com/profile.php?id=100086004572452"><FiFacebook/></a></li>
            <li><a className="gihub" href="https://github.com/lipetk"><AiFillGithub/></a></li>
                    </ul>
    
 
    <section id="form">
      
    </section>

    

    <script src="scripts.js"></script>
    <script src="menu.js"></script>
  </body>
        </>
    );
}

{/* //animation
//  export const squares = (){
//     return( <>
        
//     const ulSquares = document.querySelector("ul.squares");

// for (let i = 0; i < 11; i++) {
//     const li = document.createElement("li");

//     const random = (min, max) => Math.random() * (max - min)

//     const size = Math.floor(random(10, 120));
//     const position = random(1, 99)
//     const delay = random(5, 0.1)
//     const duration = random(24, 12)

//     li.style.width = `${size}px`;
//     li.style.height = `${size}px`;
//     li.style.bottom = `-${size}px`;

//     li.style.left = `${position}%`;

//     li.style.animationDelay = `${delay}s`;
//     li.style.animationDuration = `${duration}s`;

//     ulSquares.appendChild(li);
//     </>
// )
// }} */}































{/* <section>
        <header>
            
            <nav class="navegation">
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Serviços</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
            </nav>
        </header>
        <div class="container">
       
            
        </div>
        </div>
        <ul class="icons">
            <li><a href="#"><img src="img/facebook.png" alt="icons"></a></li>
            <li><a href="#"><img src="img/twitter.png" alt="icons"></a></li>
            <li><a href="#"><img src="img/instagram.png" alt="icons"></a></li>
        </ul>
       
    </section> */}