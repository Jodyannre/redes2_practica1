import React, { useState, useEffect } from 'react';
import axios from 'axios';


import Carousel from 'react-elastic-carousel';
import Item from "./item";


//carousel
const breakPoints = [
    { width: 750, itemsToShow: 1 },
    { width: 750, itemsToShow: 2 },
    { width: 750, itemsToShow: 3 }

];



export function Developers() {

    const [data, setData] = useState([

        { nombre: "waifu4", cargo: "PRODUCT OWNER", imagen: "https://honeysanime.com/wp-content/uploads/2022/07/Kawaii-dake-ja-Nai-Shikimori-san-wallpaper-500x282.jpg", carnet: "201115018", curso: "offline REDES2 1S 2023" },
        { nombre: "waifu5", cargo: "SCRUM MASTER", imagen: "https://waifus.wiki/wp-content/uploads/2021/11/miku-nakano-17.jpg", carnet: "201115018", curso: "offline REDES2 1S 2023" },
        { nombre: "waifu6", cargo: "DEV 1", imagen: "https://user-images.githubusercontent.com/26317155/210155933-db3a5f1a-1ec3-4777-915c-6deff2841ce9.png", carnet: "201115018", curso: "offline REDES2 1S 2023" },
        { nombre: "waifu8", cargo: "DEV 2", imagen: "https://somoskudasai.com/wp-content/uploads/2022/09/portada_tantei-wa-mou-shindeiru-48.jpg", carnet: "201115018", curso: "offline REDES2 1S 2023" }
    
    ]);


    useEffect(() => {
        const fetchData = async () => {
          const result = await axios.get("http://localhost:5000/getDevops");
          console.log("xxxxxxxxx")
          console.log(result.data)
          setData(result.data);
        };
    
        fetchData();
      }, []);


    return (
        <div>
            <h1>Grupo 6</h1>
            <br></br>
            <br></br>
            <br></br>
            <h1 style={{ textAlign: "center" }}>DevOps</h1>
            <div className="App">
                <Carousel breakPoints={breakPoints}>
                    {data.map((imagen, index) => (
                        <Item key={index}>
                            <div>
                                <div className="card" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <img src={imagen.imagen} alt="grupo 6 redes2" style={{ borderRadius: "50%", width: "40%", height: "40%" }} />
                                    <div className="info">
                                        <h5>{imagen.nombre}</h5>
                                        <h6>{imagen.carnet}</h6>
                                        <h4>{imagen.cargo}</h4>
                                        <h6>{imagen.curso}</h6>
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