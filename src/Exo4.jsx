import React, {useState} from 'react';
import './exo4.css'

const Exo4 = () => {
    const [Display, setDisplay] = useState();
    var cpt = 0;
    var styleCarreG = {
        display: 'block'
    }
    var styleCarreD = {
        display: 'none'
    }
    return(
        <>
        <div id='total'>
            <div className="grand">
                <div id="carreG" style={styleCarreG}></div>
            </div>
            <div className="grand">
                <div id="carreD" style={styleCarreD}></div>
            </div>
        </div>

        <div>
            <button onClick={() => changer()}>Le carré de <span id='fun'>gauche</span> est visible</button>
            <button id='count' onClick={() => reset()}>{cpt}</button>
        </div>
        </>
    );

    function changer() {
        let carreG = document.getElementById('carreG');
        let carreD = document.getElementById('carreD');
        if(carreG.style.display === 'block'){
            setDisplay(carreG.style.display = 'none');
            setDisplay(carreD.style.display = 'block');
            document.getElementById('fun').innerHTML = 'droite';
            document.getElementById('count').innerHTML++;
        }
        else if(carreD.style.display === 'block'){
            setDisplay(carreG.style.display = 'block');
            setDisplay(carreD.style.display = 'none');
            document.getElementById('fun').innerHTML = 'gauche';
            document.getElementById('count').innerHTML++;
        }
    }

    function reset() {
        let carreG = document.getElementById('carreG');
        let carreD = document.getElementById('carreD');
        carreG.style.display = 'block';
        carreD.style.display = 'none';
        document.getElementById('fun').innerHTML = 'gauche';
        document.getElementById('count').innerHTML = 0;
    }
}

export default Exo4;