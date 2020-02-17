import React, {useState} from 'react';
import './exo7.css';

const Exo7 = () => {
    const [fait, setFait] = useState();
    const [aFaire, setaFaire] = useState();
    const [tout, setTout] = useState();

    return(
        <>
            <div id='cadrre'>
                <h3>To do list</h3>
                <input id='nouveau' type="text" onKeyPress={() => entree()}/>
                <div id="div71">
            <button className="btnToDoList" id="btnTous" onClick={() => tous()}>Toutes</button>
            <button className="btnToDoList" id="btnComplet" onClick={() => complet()}>Complétées</button>
            <button className="btnToDoList" id="btnAfaire" onClick={() => afaire()}>A faire</button>
        </div>
                <div id='place'></div>
            </div>
        </>
    );

    function entree(){
        document.getElementById('nouveau').onkeypress = function(event){
            if(event.keyCode === 13){
                if(document.getElementById('nouveau').value !== ''){
                    let place = document.getElementById('place');

                    let divi = document.createElement('div');
                    divi.id = 'divi';
                    divi.classList.add('bg');
                    place.appendChild(divi);

                    let btn = document.createElement('input');
                    btn.type = 'checkbox';
                    btn.id = 'check';
                    divi.appendChild(btn);
                    btn.onclick = function checkColor(e){
                        if (e.target.checked === true){
                            e.target.parentElement.classList.add('valide');
                            e.target.parentElement.classList.remove('bg');
                            e.target.parentElement.classList.add('val');
                        }
                        else{
                            e.target.parentElement.classList.add('bg');
                            e.target.parentElement.classList.remove('valide');
                            e.target.parentElement.classList.remove('val');
                        }
                    };

                    let para = document.createElement('p');
                    para.id = 'para';
                    divi.appendChild(para);

                    let suppr = document.createElement('button');
                    suppr.innerHTML = 'X';
                    suppr.classList = 'bout';
                    divi.appendChild(suppr);
                    suppr.onclick = function supprimer(){
                        divi.remove();
                    }

                    let edit = document.createElement('button');
                    divi.appendChild(edit);
                    edit.innerHTML = 'Edit';
                    edit.classList = 'bout';
                    edit.onclick = function edit1(){
                        let inp = document.createElement('input');
                        divi.appendChild(inp);
                        inp.defaultValue = para.innerHTML;
                        edit.classList.add('cache');
                        inp.onkeypress = function(event){
                            if(event.keyCode === 13){
                                if(inp.value !== ''){
                                    para.innerHTML = inp.value;
                                    divi.removeChild(inp);
                                    edit.classList.remove('cache');
                                }
                                else if(inp.value === ''){
                                    inp.classList.add('mauvais');
                                    inp.placeholder = 'Entrez au moins 1 caractere';
                                }
                            }
                        }
                    }

                    para.innerHTML = document.getElementById('nouveau').value;
                    document.getElementById('nouveau').value = '';
                    document.getElementById('nouveau').classList.remove('mauvais');
                    document.getElementById('nouveau').placeholder = '';
                } 
                else if(document.getElementById('nouveau').value === '') {
                    document.getElementById('nouveau').classList.add('mauvais');
                    document.getElementById('nouveau').placeholder = 'Entrez au moins 1 caractere';
                }
            }
        }
    }

    function afaire() {
        let x, i, y;
        y = document.getElementsByClassName('valide');
        x = document.getElementsByClassName('bg');
        for(i = 0; i < x.length; i++){
            x[i].style.display = 'flex';
        }
        for(i = 0; i < y.length; i++){
            y[i].style.display = 'none';
        }
    }

    function tous() {
        let x, i, y;
        y = document.getElementsByClassName('valide');
        x = document.getElementsByClassName('bg');
        for(i = 0; i < x.length; i++){
            x[i].style.display = 'flex';
        }
        for(i = 0; i < y.length; i++){
            y[i].style.display = 'flex';
        }
    }

    function complet() {
        let x, i, y;
        y = document.getElementsByClassName('valide');
        x = document.getElementsByClassName('bg');
        for(i = 0; i < x.length; i++){
            x[i].style.display = 'none';
        }
        for(i = 0; i < y.length; i++){
            y[i].style.display = 'flex';
        }
    }
}

export default Exo7;