import React, { useEffect, useState } from "react";
import { Button } from 'react-bootstrap';


const Calculette = () => {

    // Etat
    const [total, setTotal] = useState("");


    function caracterToadd(e) {
        console.log(e.target.innerHTML);

        //Met à jour l'état calcul
        setTotal(total + e.target.innerHTML);

    }

    const calc= () => {
        if (total !== "") {
            setTotal(eval(total));
        }
    }

    const resetTotal = () => {
        setTotal("");
    }

    const deleteTotal = () => {
        setTotal("")
    }

    // Creation d'une fonction qui fait le calcul et met a jour l'etat total,
    //Cette fonction devra etre appeller sur le onClick du bouton (=)

    useEffect( () => {
        document.addEventListener("keyup", (e) => {
            switch (e.key) {
            case "Enter":
                calc(total)
                break;
            case "Backspace":
                deleteTotal();
                break;
            default:
                if (reg.test(e.key)){
                    setTotal(total + e.key)
                    // result.value += e.key
                }
                break
            }
         })   
    }, [])

    return <>
    <div className="container">

        <h1 className="text-success text-center">CALCULATRICE</h1>

        <div className="input-group mb-3">
        <span className="input-group-text" id="totalCalculette">Total</span>
        <input type="text" class="form-control" placeholder="Total" aria-label="Username" aria-describedby="basic-addon1" id="result" disabled value={total}/>
        </div>

        <div className="d-flex flex-column align-items-center bg-secondary gap-3">

            <div className="d-flex flex-row gap-2 col-5">
                <button type="button" className="btn btn-info col-3 " onClick={caracterToadd}>1</button>
                <button type="button" className="btn btn-info col-3 " onClick={caracterToadd}>2</button>
                <button type="button" className="btn btn-info col-3 " onClick={caracterToadd}>3</button>
                <button type="button" className="btn btn-light col-3 " onClick={caracterToadd}>+</button>
            </div>

            <div className="d-flex flex-row gap-2 col-5">
                <button type="button" className="btn btn-info col-3 "onClick={caracterToadd}>4</button>
                <button type="button" className="btn btn-info col-3 " onClick={caracterToadd}>5</button>
                <button type="button" className="btn btn-info col-3 " onClick={caracterToadd}>6</button>
                <button type="button" className="btn btn-light col-3 " onClick={caracterToadd}>-</button>
            </div>

            <div className="d-flex flex-row gap-2 col-5">
                <button type="button" className="btn btn-info col-3 " onClick={caracterToadd}>7</button>
                <button type="button" className="btn btn-info col-3 " onClick={caracterToadd}>8</button>
                <button type="button" className="btn btn-info col-3 " onClick={caracterToadd}>9</button>
                <button type="button" className="btn btn-light col-3 " onClick={caracterToadd}>*</button>
            </div>

            <div className="d-flex flex-row gap-2 col-5">
                <button type="button" className="btn btn-info col-3 " onClick={caracterToadd}>0</button>
                <button type="button" className="btn btn-info col-3 " onClick={caracterToadd}>.</button>
                <button type="button" className="btn btn-light col-3 " id="reset" onClick={caracterToadd}>C</button>
                <button type="button" className="btn btn-light col-3 " onClick={caracterToadd}>/</button>
            </div>

            <div className="d-flex flex-row gap-2 col-5">
                <button type="button" className="btn btn-danger col-10 " id="deleteC">DELETE</button>
                <button type="button" className="btn btn-primary col-3 " id="egal" onClick={calc}>=</button>
            </div>

        </div>
    
    
    
    </div>
    </>
}

export default Calculette;