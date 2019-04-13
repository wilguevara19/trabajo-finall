import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { GetDatosId,GetDatos} from './../services/datos';
class Vistalista extends Component {
    state  = {  
      
        DatosId: GetDatosId(this.props.match.params.parametro),
    };

    render(
        
    ) { 
        return ( 
        
            <div className="container px-0">
            
             
            <h6>DE: {this.state.DatosId.email}</h6>
            <hr className="my-4"/>
               <img width="50" className="align-self-center mr-3" src={this.state.DatosId.foto} alt=""/>
               <h6>{this.state.DatosId.description}</h6>
            </div>
          
         );
    }
}
 
export default Vistalista;