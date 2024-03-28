import React from "react";
import { Button } from 'react-bootstrap';

const Calculette = () => {

    // Etat

    // Comportement

  console.log(Calculette);

    // Affichage

    return <>
    <div className="container">

        <h1 className="text-success text-center">CALCULATRICE</h1>

        <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">Total</span>
        <input type="text" class="form-control" placeholder="Total" aria-label="Username" aria-describedby="basic-addon1" id="result" disabled/>
        </div>

        <div className="d-flex flex-column align-items-center bg-secondary gap-3">

            <div className="d-flex flex-row gap-2 col-5">
                <button type="button" className="btn btn-info col-3 caracterToadd">1</button>
                <button type="button" className="btn btn-info col-3 caracterToadd">2</button>
                <button type="button" className="btn btn-info col-3 caracterToadd">3</button>
                <button type="button" className="btn btn-light col-3 caracterToadd">+</button>
            </div>

            <div className="d-flex flex-row gap-2 col-5">
                <button type="button" className="btn btn-info col-3 caracterToadd">4</button>
                <button type="button" className="btn btn-info col-3 caracterToadd">5</button>
                <button type="button" className="btn btn-info col-3 caracterToadd">6</button>
                <button type="button" className="btn btn-light col-3 caracterToadd">-</button>
            </div>

            <div className="d-flex flex-row gap-2 col-5">
                <button type="button" className="btn btn-info col-3 caracterToadd">7</button>
                <button type="button" className="btn btn-info col-3 caracterToadd">8</button>
                <button type="button" className="btn btn-info col-3 caracterToadd">9</button>
                <button type="button" className="btn btn-light col-3 caracterToadd">*</button>
            </div>

            <div className="d-flex flex-row gap-2 col-5">
                <button type="button" className="btn btn-info col-3 caracterToadd">0</button>
                <button type="button" className="btn btn-info col-3 caracterToadd">.</button>
                <button type="button" className="btn btn-light col-3 " id="reset">C</button>
                <button type="button" className="btn btn-light col-3 caracterToadd">/</button>
            </div>

            <div className="d-flex flex-row gap-2 col-5">
                <button type="button" className="btn btn-danger col-10 " id="deleteC">DELETE</button>
                <button type="button" className="btn btn-primary col-3 " id="egal">=</button>
            </div>

        </div>
    
    
    
    </div>
    </>
}

export default Calculette;