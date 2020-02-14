import React, {useEffect} from 'react';
import './exo1.css';

const Exo1 = () => {

    useEffect(() => {
        document.getElementById('titre').style.color = 'yellow';
        document.getElementById('titre').style.backgroundColor = 'green';
        return () => {
            
        };
    }, [])

    return(
        <div id='cadre'>
            <h1 id='titre'>Mon titre modifié</h1>
            <p>Liste de propriétés</p>
            <ul>
                <li>InnerText</li>
                <li>InnerHTML</li>
                <li>querySelector()</li>
                <li>querySelectorAll()</li>
                <li>style</li>
                <li>classList</li>
            </ul>
            <p>Changer le contenu du h2 par "le titre modifié"</p>
            <p>Changer la couleur du h2 (la couleur que vous voulez)</p>
            <p>Ajouter une ckass background bootstrap au h2</p>
        </div>
    );
}

export default Exo1;