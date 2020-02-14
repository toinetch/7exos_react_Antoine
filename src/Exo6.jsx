import React, {useState} from 'react';
import './exo6.css';

const Exo6 = () => {
    const [num, setNum] = useState("");
    
    return(
        <>
            <div id='cadre'>
                <div id='lvl1'>
                    <input id='nb1' className='taille' type="text"/>
                    <form className='taille' id='taillemenu'>
                        <select name="Menu" id="menu">
                            <option value="+">+</option>
                            <option value="-">-</option>
                            <option value="*">*</option>
                            <option value="/">/</option>
                        </select>
                    </form>
                    <input id='nb2' className='taille' type="text"/>
                    <button className='taille' onClick={() => total()}>=</button>
                    <span id='resultat' className='taille'></span>
                </div>

                <div id='lvl2'>
                    <div>
                        <input id='result' type="text" value={num}/>
                    </div>

                    <div id="row">
                        <div id="col-3">
                            <button id='1' className='chiffre' onClick={() => calcul('1')}>1</button>
                            <button id='2' className='chiffre' onClick={() => calcul('2')}>2</button>
                            <button id='3' className='chiffre' onClick={() => calcul('3')}>3</button>
                            <button id='+' className='chiffre' onClick={() => calcul('+')}>+</button>
                        </div>

                        <div id="col-3" >
                            <button id='4' className='chiffre' onClick={() => calcul('4')}>4</button>
                            <button id='5' className='chiffre' onClick={() => calcul('5')}>5</button>
                            <button id='6' className='chiffre' onClick={() => calcul('6')}>6</button>
                            <button id='-' className='chiffre' onClick={() => calcul('-')}>-</button>
                        </div>

                        <div id="col-3" >
                            <button id='7' className='chiffre' onClick={() => calcul('7')}>7</button>
                            <button id='8' className='chiffre' onClick={() => calcul('8')}>8</button>
                            <button id='9' className='chiffre' onClick={() => calcul('9')}>9</button>
                            <button id='/' className='chiffre' onClick={() => calcul('/')}>/</button>
                        </div>

                        <div id="col-3">
                            <button id='C' className='chiffre' onClick={() => reset()}>C</button>
                            <button id='0' className='chiffre' onClick={() => calcul('0')}>0</button>
                            <button id='=' className='chiffre' onClick={() => total2()}>=</button>
                            <button id='*' className='chiffre' onClick={() => calcul('*')}>*</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

    function total() {
        let nb1 = document.getElementById('nb1');
        let nb2 = document.getElementById('nb2');
        let menu = document.getElementById('menu');
        let result = document.getElementById('resultat');
        let totale;
        switch(menu.value){
            case "+":
                totale = parseInt(nb1.value) + parseInt(nb2.value);
                break;
            case "-":
                totale = parseInt(nb1.value) - parseInt(nb2.value);
                break;
            case "*":
                totale = parseInt(nb1.value) * parseInt(nb2.value);
                break;
            case "/":
                totale = parseInt(nb1.value) / parseInt(nb2.value);
                break;
            default:
                break;
        }
        result.innerHTML = totale;
    }

    function calcul(number){
        setNum(num + number);
    }

    function total2(){
        setNum(eval(num));
    }

    function reset() {
        setNum('');
    }
}

export default Exo6;