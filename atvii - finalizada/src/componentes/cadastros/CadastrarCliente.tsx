import { Component } from "react";

type props = {
    tema: string
}

export default class CadastrarCliente extends Component<props> {

    render() {
        let estiloBotao = `btn waves-effect waves-light ${this.props.tema}`
        return (
            <div className="container">
                <form className="col s12">
                    <h5><strong>Cadastro Cliente</strong></h5>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="nome-cliente" type="text" className="validate" style={{border: "1px solid #9e9e9e", borderRadius: "10px", padding: " 7px"}} />
                            <label htmlFor="nome-cliente">Nome</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="nome-social" type="text" className="validate" style={{border: "1px solid #9e9e9e", borderRadius: "10px", padding: " 7px"}} />
                            <label htmlFor="nome-social">Nome Social</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="cpf-cliente" type="text" className="validate"style={{border: "1px solid #9e9e9e", borderRadius: "10px", padding: " 7px"}} />
                            <label htmlFor="cpf-cliente">CPF</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="cpf-data" type="date" className="validate" style={{border: "1px solid #9e9e9e", borderRadius: "10px", padding: " 7px"}} />
                            <label htmlFor="cpf-data">Data Emissão CPF</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="rg-cliente" type="text" className="validate" style={{border: "1px solid #9e9e9e", borderRadius: "10px", padding: " 7px"}} />
                            <label htmlFor="rg-cliente">RG</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="rg-data" type="date" className="validate" style={{border: "1px solid #9e9e9e", borderRadius: "10px", padding: " 7px"}} />
                            <label htmlFor="rg-data">Data Emissão RG</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="tel-cliente" type="tel" className="validate" style={{border: "1px solid #9e9e9e", borderRadius: "10px", padding: " 7px"}} />
                            <label htmlFor="tel-cliente">Telefone</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="genero-cliente" type="text" className="validate" style={{border: "1px solid #9e9e9e", borderRadius: "10px", padding: " 7px"}}    />
                            <label htmlFor="genero-cliente">Gênero</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12 right-align">
                            <button className={estiloBotao} type="submit" name="action">Enviar
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}