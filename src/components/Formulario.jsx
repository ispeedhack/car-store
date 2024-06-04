import { useState } from 'react';
import PropTypes from 'prop-types';

const Formulario = ({ existingCar = {}, updateCallBack }) => {
    const [nome, setNome] = useState(existingCar.nome || "");
    const [marca, setMarca] = useState(existingCar.marca || "");
    const [modelo, setModelo] = useState(existingCar.modelo || "");
    const [preco, setPreco] = useState(existingCar.preco || "");
    const [foto, setFoto] = useState(existingCar.foto || "");

    const updating = Object.entries(existingCar).length !== 0

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const precoNumber = parseFloat(preco);
    
        const data = { nome, marca, modelo, preco: precoNumber, foto };
        const url = "http://127.0.0.1:5000/" + (updating ? `update_info/${existingCar.id}` : "create_car");
        const options = {
            method: updating ? "PATCH" : "POST", 
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        }
        const response = await fetch(url, options)
        if (response.status !== 201 && response.status !== 200){
            const data = await response.json();
            alert(data.message);
        } else {
            updateCallBack()
        }
        // Limpa os campos após o envio
        setNome("");
        setMarca("");
        setModelo("");
        setPreco("");
        setFoto("");
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="nome">Nome:</label>
                <input 
                    type="text" 
                    id="nome" 
                    value={nome} 
                    onChange={(e) => setNome(e.target.value)}  
                />
            </div>
            <div>
                <label htmlFor="marca">Marca:</label>
                <input 
                    type="text" 
                    id="marca" 
                    value={marca} 
                    onChange={(e) => setMarca(e.target.value)}  
                />
            </div>
            <div>
                <label htmlFor="modelo">Modelo:</label>
                <input 
                    type="text" 
                    id="modelo" 
                    value={modelo} 
                    onChange={(e) => setModelo(e.target.value)}  
                />
            </div>
            <div>
                <label htmlFor="preco">Preço:</label>
                <input 
                    type="number" 
                    id="preco" 
                    value={preco} 
                    onChange={(e) => setPreco(e.target.value)}  
                />
            </div>
            <div>
                <label htmlFor="foto">Foto:</label>
                <input 
                    type="text" 
                    id="foto" 
                    value={foto} 
                    onChange={(e) => setFoto(e.target.value)}  
                />
            </div>
            <button type="submit">Enviar</button>
        </form>
    );
};

Formulario.propTypes = {
    existingCar: PropTypes.object,
    updateCallBack: PropTypes.func.isRequired
};

export default Formulario;
