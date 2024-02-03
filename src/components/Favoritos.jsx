import { useContext } from "react";
import { FavContext } from "../context/FavContext";
import { Container } from "react-bootstrap";

const Favoritos = () => {

    const { fav , setFav} = useContext(FavContext);

    return(
        <>
        <h3>Favoritos</h3>
        <Container>
            {fav.map((personaje) => (
            <div key={personaje.Nombre} className="mb-3" style={{ display: "inline-block" }}>
               <img
                   src={personaje.Imagen}
                   alt={personaje.Nombre}
                   className="img-fluid mr-2 mb-2"
               />
            <button onClick={() => setFav(fav.filter((favPersonaje) => favPersonaje !== personaje))}style={{backgroundColor:"lightpink"}}><i class="fa-regular fa-heart"></i></button>
            </div>
            ))}
        </Container>
        </>
    );
};

export default Favoritos;