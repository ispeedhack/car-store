import ListaDeCarros from './components/ListaDeCarros';
import Formulario from './components/Formulario';
import Modal from './components/Modal';
import { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentCar, setCurrentCar] = useState({});
  const [carros, setCarros] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

    useEffect(() => {
        fetchCarros();
    }, []);

    const fetchCarros = async () => {
        try {
        const response = await fetch("http://127.0.0.1:5000/carros");
        if (!response.ok) {
            throw new Error('Falha ao buscar carros.');
        }
        const data = await response.json();
        setCarros(data.carros);
        setIsLoading(false);
        } catch (error) {
        setError(error.message);
        setIsLoading(false);
        }
    };

  const closeModal = () =>{
    setIsModalOpen(false);
    setCurrentCar({})
  }

  const openCreateModal = () =>{
    setIsModalOpen(true);
  }

  const openEditModal = (carro) =>{
    if (isModalOpen) return
    setCurrentCar(carro)
    setIsModalOpen(true)
  }

  const onUpdate = () =>{
    closeModal()
    fetchCarros()
  }

  return (
    <div className="App">
      <ListaDeCarros carros={carros} isLoading={isLoading} error={error} updateCar={openEditModal} updateCallBack={onUpdate} />
      <button onClick={openCreateModal}>Criar Novo</button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <Formulario existingCar={currentCar} updateCallBack={onUpdate} />
      </Modal>
    </div>
  );
}

export default App;
