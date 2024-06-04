import PropTypes from 'prop-types';
import Grid from './Grid';

function ListaDeCarros({ carros, isLoading, error, updateCar, updateCallBack }) {
    const onDelete = async (id) => {
        try {
            const options = {
                method: "DELETE"
            };
            const response = await fetch(`http://127.0.0.1:5000//delete_carro/${id}`, options);
            if (response.status === 200) {
                updateCallBack();
            } else {
                console.error("Algum erro aconteceu");
            }
        } catch (error) {
            alert(error);
        }
    };

    return (
        <div>
            <h1>Bem vindo.</h1>
            <Grid/>
            {isLoading ? (
                <p>Carregando carros...</p>
            ) : error ? (
                <p>Ocorreu um erro: {error}</p>
            ) : (
                <ul>
                    {carros.map((carro, index) => (
                        <li key={index}>
                            <p>Nome: {carro.nome}</p>
                            <p>Marca: {carro.marca}</p>
                            <p>Modelo: {carro.modelo}</p>
                            <p>Preço: R$ {carro.preco}</p>
                            {carro.foto && <img src={carro.foto} alt="Foto do carro" />}
                            <button onClick={() => updateCar(carro)}>Update</button>
                            <button onClick={() => onDelete(carro.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

ListaDeCarros.propTypes = {
    carros: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
    error: PropTypes.string,
    updateCar: PropTypes.func.isRequired,
    updateCallBack: PropTypes.func.isRequired
};

export default ListaDeCarros;
