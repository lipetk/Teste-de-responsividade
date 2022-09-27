import img from '../pages/home/img/fundo2.png'
import React from "react";

export const Home = ()=>{
    return (
        <>
        <h1 className="bemvindo"></h1>
     <body>   
     <section className="hero">
      <div className="container">
        <div>
          <h2>
            As melhores tecnologias em programação, direto ao ponto e do jeito
            certo.
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Tempora, dicta iure adipisci ipsum accusamus tempore aliquam quis beatae ipsa 
            necessitatibus fugit minus incidunt nostrum asperiores, quod enim fugiat, 
            ratione exercitationem.
          </p>
          <a href="#" className="button">Cuida!</a>
        </div>
        <img
          src="./images/melhores-tecnologias.svg"
          alt=""
        />
      </div>
    </section>

        <main>
      <section className="cards">
        <div className="card">
          
          
        </div>
      </section>
    </main>

    
</body>


        </>
    );
}