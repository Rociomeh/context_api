import { useContext } from "react";
import { FavContext } from "../context/FavContext";
import { Container, Table } from "react-bootstrap";


const Galeria = () => {
const {fav, setFav , personajes} = useContext(FavContext);

    return(
        <Container>
            {personajes.map((personaje) => (
                <div key={personaje.Nombre} className="mb-3" style={{ display: "inline-block" }}>
                    <img
                        src={personaje.Imagen}
                        alt={personaje.Nombre}
                        className="img-fluid mr-2 mb-2" // Puedes ajustar los márgenes según tus necesidades
                    />
                    <button onClick={() => setFav([...fav, personaje])}style={{backgroundColor:"lightblue"}}><i class="fa-regular fa-heart"></i></button>
                </div>
            ))}
        </Container>

    );
};

export default Galeria;