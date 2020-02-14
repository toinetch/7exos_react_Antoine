import React from 'react';
import './exo7.css';

const Exo7 = () => {

    return(
        <>
            <div id='cadrre'>
                <h3>To do list</h3>
                <input id='nouveau' type="text" onKeyPress={() => entree()}/>
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
                    place.appendChild(divi);

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
}

export default Exo7;