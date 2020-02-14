import React, {useState} from 'react';
import './exo5.css';

const Exo5 = () => {
    const [Compte, setCompte] = useState(0);
    return(
        <>
            <div id='cadre'>
                <div>
                    <button className='button' onClick={() => ajouter()}>Ajouter</button>
                    <button className='button' onClick={() => supprimer()}>Supprimer</button>
                    <button className='button' onClick={() => reset()}><span id='compte'>{Compte}</span></button>
                </div>
                <div id='emplacement'></div>
            </div>
        </>
    );

    function ajouter() {
        let img = document.createElement('img');
        img.className = 'images';
        img.src = 'https://images-na.ssl-images-amazon.com/images/I/41U55QnqjWL.jpg';
        document.getElementById('emplacement').appendChild(img);
        setCompte(Compte+1);
    }

    function supprimer() {
        if(document.getElementById('emplacement').lastChild){
            document.getElementById('emplacement').removeChild(document.getElementById('emplacement').lastChild);
            setCompte(Compte-1); 
        }
    }

    function reset() {
        while(document.getElementById('emplacement').lastChild){
            document.getElementById('emplacement').removeChild(document.getElementById('emplacement').lastChild);
        }
        setCompte(0);
    }
}

export default Exo5;

