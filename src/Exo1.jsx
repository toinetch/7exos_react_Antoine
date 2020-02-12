import React from 'react';

const Exo1 = () => {
    return(
        <div>
            <h1 id='titre' style={{color: 'yellow', backgroundColor: 'green'}}>Mon titre modifié</h1>
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