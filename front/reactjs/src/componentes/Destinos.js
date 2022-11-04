import trindade from '../../Go Travel - HTML_CSS/img/trindade';
import buenos from '../../Go Travel - HTML_CSS/img/buenos-aires.png';
import california from '../../Go Travel - HTML_CSS/img/california.png';
import campos from '../../Go Travel - HTML_CSS/img/campos_do_jordao.png';
import caribe from '../../Go Travel - HTML_CSS/img/caribe';
import disney from '../../Go Travel - HTML_CSS/img/disney' ;
import espanha from '../../Go Travel - HTML_CSS/img/espanha';
import gramado from '../../Go Travel - HTML_CSS/img/gramado';
import inglaterra from '../../Go Travel - HTML_CSS/img/inglaterra';
import italia from '../../Go Travel - HTML_CSS/img/italia' ;
import jericoacoara from '../../Go Travel - HTML_CSS/img/jericoacoara';
import newyork from '../../Go Travel - HTML_CSS/img/nova_york';
import './Destinos.css';
import '../index.css';

const Destinos = () => {
    return (
        <div class="painel4">
            <div class="divTicket">
                <div class="divTicket-content">
                    <div>
                        <input type="radio" id="idaevolta" name="drone" value="idaevolta" />
                        <label for="idaevolta">Ida e volta</label>

                        <input type="radio" id="ida" name="drone" value="ida" />
                        <label for="ida">Só ida</label>
                    </div>

                    <div>
                        <label for="selectClasse"> Classe: </label>
                        <select name="classes" id="selectClasse">
                            <option value="">----- Escolha -----</option>
                            <option value="economica">Econômica</option>
                            <option value="ecoPremium">Econômica Premium</option>
                            <option value="executiva">Executiva</option>
                            <option value="primClasse">Primeira Classe</option>
                        </select>
                    </div>
                    <div>
                        <label for="passageiros" id="passageiros"> Passageiros: </label>
                        <input type="number" name="passageiros" id="passageiros" />
                        <div>

                        </div>
                        <br />
                        <br />
                        <div>
                            <label for="site-search">Origem</label>
                            <br />
                            <input type="search" id="site-search" name="origem" />
                        </div>

                        <div>
                            <label for="site-search">Destino</label>
                            <br />
                            <input type="search" id="site-search" name="destino" />
                        </div>

                        <div>
                            <label for="dataIda">Data de ida</label>
                            <br />
                            <input type="datetime-local" name="dataIda" id="data" />
                        </div>
                        <div>
                            <label for="dataVolta">Data de volta</label>
                            <br />
                            <input type="datetime-local" name="dataVolta" id="data" />
                        </div>
                        <br />
                        <input type="button" id="btn-pesquisar" value="Pesquisar" />
                    </div>
                </div>
            </div>

            <div class="destinos">
                <div class="caixaDestinos">
                    <div class="caixaImgs">
                        <div class="imgsDestinos">
                            <img src={trindade} alt="Trindade - RJ" />
                        </div>
                        <div class="imgsDestinos">
                            <img src={buenos} alt="Buenos Aires" />
                        </div>
                        <div class="imgsDestinos">
                            <img src={california} alt="Califórnia" />
                        </div>
                        <div class="imgsDestinos">
                            <img src={campos} alt="Campos de Jordão" />
                        </div>
                        <div class="imgsDestinos">
                            <img src={caribe} alt="Caribe" />
                        </div>
                        <div class="imgsDestinos">
                            <img src={disney} alt="Disney" />
                        </div>
                        <div class="imgsDestinos">
                            <img src={espanha} alt="Espanha" />
                        </div>
                        <div class="imgsDestinos">
                            <img src={gramado} alt="Gramado" />
                        </div>
                        <div class="imgsDestinos">
                            <img src={inglaterra} alt="Inglaterra" />
                        </div>
                        <div class="imgsDestinos">
                            <img src={italia} alt="Itália" />
                        </div>
                        <div class="imgsDestinos">
                            <img src={jericoacoara} alt="Jericoacoara" />
                        </div>
                        <div class="imgsDestinos">
                            <img src={newyork} alt="Nova Iorque - Estados Unidos" />
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
            );
}

export default Destinos;


