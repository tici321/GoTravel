import beach from '../../Go Travel - HTML_CSS/img/beach_park_promocao';
import salinas from '../../Go Travel - HTML_CSS/img/salinas';
import tome from '../../Go Travel - HTML_CSS/img/sao_tome_das_letras';
import canada from '../../Go Travel - HTML_CSS/img/canada';
import paraty from '../../Go Travel - HTML_CSS/img/paraty';

import './Promos.css';
import React, { useState } from 'react';

const Promos = () => {

    const [ valor1, setValor ] = useState(0);

    function adicionar() {
        setValor(valor1 + 1);
    }

    function remover() {
        setValor(valor1 - 1);
    }

    return (
        <>
            <div class="painel1">
            <h2>Promoções</h2>
            <p>Nossas melhores ofertas estão aqui!!</p>
            
                <div class="cards">
                    <img src={beach} />
                    <hr />
                    <h4>Beach Park</h4>
                    <p>4 ou 7 diárias</p>
                    <h6>&#x2714; Passagem Aérea</h6>
                    <h6>&#x2714; Quarto</h6>
                    <br />
                    <p>a partir de <span>R$ 1995,00</span></p>
                    <h3>R$ 899,00</h3>
                    <p>+ taxas | até 12x no cartão</p>
                    <h6>Cancelamento Grátis!</h6>
                    <div className="divReservas">
                        <button className='btnAdicionar' onClick={adicionar}>+</button> Reservas: <b>{valor1}</b> <button className='btnRemover' onClick={remover}>-</button>
                    </div>
                    <button className="btnComprar">Comprar</button>
                </div>
                <div class="cards">
                    <img src={salinas} />
                    <hr />
                    <h4>Salinas Maragogi</h4>
                    <p>11 diárias</p>
                    <h6>&#x2714; Passagem Aérea</h6>
                    <h6>&#x2714; Quarto</h6>
                    <br />
                    <p>a partir de <span>R$ 7890,00</span></p>
                    <h3>R$ 3990,00</h3>
                    <p>+ taxas | até 12x no cartão</p>
                    <h6>Cancelamento Grátis!</h6>
                    <div className="divReservas">
                        <button className='btnAdicionar' onClick={adicionar}>+</button> Reservas: <b>0</b> <button className='btnRemover' onClick={remover}>-</button>
                    </div>
                    <button className="btnComprar">Comprar</button>
                </div>
                <div class="cards">
                    <img src={tome} />
                    <hr />
                    <h4>São Tomé das Letras</h4>
                    <p>4 ou 7 diárias</p>
                    <h6>&#x2714; Passagem de Ônibus</h6>
                    <h6>&#x2714; Quarto</h6>
                    <br />
                    <p>a partir de <span>R$ 940,00</span></p>
                    <h3>R$ 629,00</h3>
                    <p>+ taxas | até 12x no cartão</p>
                    <h6>Cancelamento Grátis!</h6>
                    <div className="divReservas">
                        <button className='btnAdicionar' onClick={adicionar}>+</button> Reservas: <b>0</b> <button className='btnRemover' onClick={remover}>-</button>
                    </div>
                    <button className="btnComprar">Comprar</button>
                </div>
                <div class="cards">
                    <img src={canada} />
                    <hr />
                    <h4>Canadá</h4>
                    <p>7 diárias</p>
                    <h6>&#x2714; Passagem Aérea</h6>
                    <h6>&#x2714; Quarto</h6>
                    <br />
                    <p>a partir de <span>R$ 14990,00</span></p>
                    <h3>R$ 10490,00</h3>
                    <p>+ taxas | até 12x no cartão</p>
                    <h6>Cancelamento Grátis!</h6>
                    <div className="divReservas">
                        <button className='btnAdicionar' onClick={adicionar}>+</button> Reservas: <b>0</b> <button className='btnRemover' onClick={remover}>-</button>
                    </div>
                    <button className="btnComprar">Comprar</button>
                </div>
                <div class="cards">
                    <img src={paraty} />
                    <hr />
                    <h4>Paraty</h4>
                    <p>4 ou 7 diárias</p>
                    <h6>&#x2714; Passagem Aérea</h6>
                    <h6>&#x2714; Quarto</h6>
                    <br />
                    <p>a partir de <span>R$ 2290,00</span></p>
                    <h3>R$ 1890,00</h3>
                    <p>+ taxas | até 12x no cartão</p>
                    <h6>Cancelamento Grátis!</h6>
                    <div className="divReservas">
                        <button className='btnAdicionar' onClick={adicionar}>+</button> Reservas: <b>0</b> <button className='btnRemover' onClick={remover}>-</button>
                    </div>
                    <button className="btnComprar">Comprar</button>
                </div>
            </div>
        </>
    );
}

export default Promos;


