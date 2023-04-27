

import Carousel from 'react-elastic-carousel';
import Item from "./item";

const breakPoints = [
    { width: 1000, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 }

];

//deben estar guardadas en mongoDB 
const imagenes = [
    "https://muyadictivo.com/wp-content/uploads/2022/07/significado-de-waifu-221.webp",
    "https://static.fandomspot.com/images/03/12998/00-featured-mai-sakurajima-bunny-girl-anime-sweater-screenshot.jpg",
    "https://honeysanime.com/wp-content/uploads/2022/07/Kawaii-dake-ja-Nai-Shikimori-san-wallpaper-500x282.jpg",
    "https://w0.peakpx.com/wallpaper/353/71/HD-wallpaper-nagatoro-waifu-anime.jpg",
    "https://waifus.wiki/wp-content/uploads/2021/11/miku-nakano-17.jpg",
    "https://user-images.githubusercontent.com/26317155/210155933-db3a5f1a-1ec3-4777-915c-6deff2841ce9.png",
    "https://somoskudasai.com/wp-content/uploads/2021/11/image-130.png",
    "https://somoskudasai.com/wp-content/uploads/2022/09/portada_tantei-wa-mou-shindeiru-48.jpg",
];



export function Inicio() {

    return (
        <div>
            <h1>Grupo 6</h1>
            <br></br>
            <br></br>
            <br></br>
            <h1 style={{ textAlign: "center" }}>home</h1>
            <div className="App">
                <Carousel breakPoints={breakPoints}>
                    {imagenes.map((imagen, index) => (
                        <Item key={index}>
                            <img src={imagen} alt="imagen" style={{ width: "100%", height: "100%" }} />
                        </Item>
                    ))}
                </Carousel>

            </div>
        </div>
    );

}