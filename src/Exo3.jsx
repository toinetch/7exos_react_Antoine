import React, {useState} from 'react';

const Exo3 = () => {
    const [Name, setName] = useState('inconnu')
    return(
        <div>
            <h1>Welcome <span id='span'>{Name}</span></h1>
            <p>Ecrivez dans l'input ci-dessous le nom de la personne que vous voulez accueillir</p>
            <p>lorsque vous cliquez sur le bouton "go" le nom que vous avez ajouté dans l'input sera alors mis dans le span du h2 et l'input sera alors vidé de tout contenu</p>
            <p>Anttetion, interdiction de toucher a l'html</p>
            <input id='text' type="text" onKeyPress={() => entree()} />
            <input type="button" value='GO' onClick={() => change()}  />
        </div>
    );

    function change() {
        let span = document.getElementById('span');
        let text = document.getElementById('text');
        if(text.value !== ''){
            setName(span.innerHTML = text.value);
            text.value = '';
        }
    }

    function entree (){
        document.getElementById('text').onkeypress = function (event) {
            if (event.keyCode === 13){
                let span = document.getElementById('span');
                let text = document.getElementById('text');
                if(text.value !== ''){
                    setName(span.innerHTML = text.value);
                    text.value = '';
                }
            }
        }
    }
}



export default Exo3;
