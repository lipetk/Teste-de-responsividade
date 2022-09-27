import React from 'react';
// import 'index.css';
export const Contatos = ()=>{
    return(
       <> 

        
        <div className="sectionForm">
       

            
            <form className="form2" action="">
        <h3>Preencha seus dados!</h3>
        <div className="form-group">
          <input className="input-control" placeholder="Nome" />

          <input type="email" className="input-control" placeholder="Email" />
        </div>

        <div className="form-group">
          <input className="input-control" placeholder="Empresa" />
        </div>

        <div className="form-group">
          <input className="input-control" placeholder="Endereço" />
        </div>

        

        <div className="form-group">
          <button type="submit" className="button">Save</button>

        </div>

      </form>
      
        
        </div>
        </>
    );
}