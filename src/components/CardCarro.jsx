import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardCarro(props) {
    const onDelete = async (id) => {
        try {
            const options = {
                method: "DELETE"
            };
            const response = await fetch(`http://127.0.0.1:5000/delete_carro/${id}`, options);
            if (response.status === 200) {
                props.updateCallBack();
            } else {
                console.error("Algum erro aconteceu");
            }
        } catch (error) {
            alert(error);
        }
    };

    return (
        <Card>
            <Card.Img variant="top" src={props.foto} alt="Foto do carro" />
            <Card.Body>
            <Card.Title>{props.nome}</Card.Title>
            <Card.Text>
                Marca: {props.marca}
                Modelo: {props.modelo}
                Preço: R$ {props.preco}
            </Card.Text>
            <Button variant="danger" onClick={() => onDelete(props.id)}>Delete</Button>
            <Button variant="primary" onClick={() => props.updateCar(props.carro)}>Update</Button>
            </Card.Body>
        </Card>
    );
}

export default CardCarro;
