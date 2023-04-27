


import Carousel from 'react-elastic-carousel';
import Item from "./item";

const breakPoints = [
    { width: 1000, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 }

];

//deben estar guardadas en mongoDB 
const imagenes = [

    {nombre:"waifu1",descripcion:"VicePresidenta General de Cerberus company",imagen:"https://muyadictivo.com/wp-content/uploads/2022/07/significado-de-waifu-221.webp"},
    {nombre:"waifu7",descripcion:"Manager de negocios exteriores General de Cerberus company",imagen:"https://somoskudasai.com/wp-content/uploads/2021/11/image-130.png"},
    {nombre:"waifu2",descripcion:"Tesorero General de Cerberus company",imagen:"https://static.fandomspot.com/images/03/12998/00-featured-mai-sakurajima-bunny-girl-anime-sweater-screenshot.jpg"},
    {nombre:"waifu3",descripcion:"VicePresidenta General de Cerberus company",imagen:"https://shonakid.de/wp-content/uploads/2020/09/Zero-Two.png"},
    {nombre:"waifu4",descripcion:"Manager de negocios exteriores General de Cerberus company",imagen:"https://honeysanime.com/wp-content/uploads/2022/07/Kawaii-dake-ja-Nai-Shikimori-san-wallpaper-500x282.jpg"},
    {nombre:"waifu5",descripcion:"Tesorero General de Cerberus company",imagen:"https://waifus.wiki/wp-content/uploads/2021/11/miku-nakano-17.jpg"},
    {nombre:"waifu6",descripcion:"VicePresidenta General de Cerberus company",imagen:"https://user-images.githubusercontent.com/26317155/210155933-db3a5f1a-1ec3-4777-915c-6deff2841ce9.png"},
    {nombre:"waifu8",descripcion:"Manager de negocios exteriores General de Cerberus company",imagen:"https://somoskudasai.com/wp-content/uploads/2022/09/portada_tantei-wa-mou-shindeiru-48.jpg"},


];



export function Admins() {

    return (
        <div>
            <h1>Grupo 6</h1>
            <br></br>
            <br></br>
            <br></br>
            <h1 style={{ textAlign: "center" }}>CEO</h1>
            <div className="App">
                <Carousel breakPoints={breakPoints}>
                    {imagenes.map((imagen, index) => (
                        <Item key={index}>
                            <div>
                                <div className="card" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <img src={imagen.imagen} alt="grupo 6 redes2" style={{ borderRadius: "50%",width: "50%", height: "50%" }} />
                                    <div className="info">
                                        <h3>{imagen.nombre}</h3>
                                        <h6>{imagen.descripcion}</h6>
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