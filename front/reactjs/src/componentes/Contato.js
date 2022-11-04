import './Contato.css';

const Contato = () => {
  
  return (
        <div class="caixa1">
            <div class="painelContato">
                <div class="divContato">
                    <form>
                        <h3>Fale conosco</h3>
                        <hr/>
                        <input type="text" class="inputsForm" name="nome" placeholder="Insira seu nome"/>
                        <br/>
                        <input type="email" class="inputsForm" name="email" placeholder="seuemail@email.com"/>
                        <br/>
                        <input type="tel" class="inputsForm" name="tel" placeholder="(xx) xxxxx-xxxx"/>
                        <br/>
                        <textarea id="w3review" class="inputsForm" name="w3review" rows="4" cols="50"
                            placeholder="Deixe sua mensagem"></textarea>
                        <br/>
                        <button class="btn">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
  );
}

export default Contato;
