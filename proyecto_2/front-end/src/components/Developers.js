


import Carousel from 'react-elastic-carousel';
import Item from "./item";

const breakPoints = [
    { width: 750, itemsToShow: 1 },
    { width: 750, itemsToShow: 2 },
    { width: 750, itemsToShow: 3 }

];

//deben estar guardadas en mongoDB 
const imagenes = [

    {cargo:"coordinador",nombre:"Joel Estuardo Rodríguez Santos",carnet:"201115018",curso:"REDES2 1S 2023",imagen:"https://avatars.githubusercontent.com/u/36574879?s=64&v=4"},
    {cargo:"Product owner",nombre:"Javier Roberto Alfaro Vividor",carnet:"201700644",curso:"REDES2 1S 2023",imagen:"https://avatars.githubusercontent.com/u/69096882?s=64&v=4"},
    {cargo:"scrum master",nombre:"Edin Emanuel Montenegro Vasquez ",carnet:"201709311",curso:"REDES2 1S 2023",imagen:"https://avatars.githubusercontent.com/u/53990104?s=64&v=4"},
    {cargo:"scrum master",nombre:"Julio Roberto Vasquez Santiago",carnet:"200915080",curso:"REDES2 1S 2023",imagen:"https://avatars.githubusercontent.com/u/41770596?s=64&v=4"}
    

];



export function Developers() {

    return (
        <div>
            <h1>Grupo 6</h1>
            <br></br>
            <br></br>
            <br></br>
            <h1 style={{ textAlign: "center" }}>DevOps</h1>
            <div className="App">
                <Carousel breakPoints={breakPoints}>
                    {imagenes.map((imagen, index) => (
                        <Item key={index}>
                            <div>
                                <div className="card" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <img src={imagen.imagen} alt="grupo 6 redes2" style={{ borderRadius: "50%",width: "40%", height: "40%" }} />
                                    <div className="info">
                                        <h5>{imagen.nombre}</h5>
                                        <h6>{imagen.carnet}</h6>
                                        <h4>{imagen.cargo}</h4>
                                    </div>
                                </div>
                            </div>
                        </Item>
                    ))}
                </Carousel>

            </div>
        </div>
    );

}