


import Carousel from 'react-elastic-carousel';
import Item from "./item";

const breakPoints = [
    { width: 750, itemsToShow: 1 },
    { width: 750, itemsToShow: 2 },
    { width: 750, itemsToShow: 3 }

];

//deben estar guardadas en mongoDB necesito 1 arrays mas en mongoDB 1 para funconesPublicas
const imagenes = [

    { titulo: "Gastó 1.400 euros para mejorar su PC Gaming y no puede jugar a un juego de hace 20 años porque es insuficiente", descripcion: "Actualizar tu PC Gaming es, por norma general, el sueño de muchos de los jugadores que utilizan este sistema para disfrutar de sus títulos favoritos. Por ello, las series RTX 3000 y RTX 4000 de NVIDIA, por ejemplo, son algunas de las opciones favoritas de los jugadores que desean dar el salto. Sin embargo, en alguna que otra ocasión estos se topan con conflictos inesperados que, aunque hayan gastado más de 1.000 euros en actualizar su equipo, no tienen una solución sencilla." },
    { titulo: "¡Casi al 50%! Esta silla gaming se desploma en Amazon con un descuento cercano a los 100 euros", descripcion: "Aunque las sillas de oficina son unas de las alternativas que encontramos en el mercado, aquellos que quieren montar un setup gaming generalmente apuestan por las sillas gaming, debido al diseño racing que tienen este tipo de modelos. ¿Estás buscando una silla de este tipo y que encima sea barata? Pues Amazon te lo pone fácil. La silla gaming de Interlink ahora está rebajada con un 48% de descuento. Es decir, que ahora cuesta tan solo 96,07 euros (antes por 185,99 euros)." },
    { titulo: "ASUS ROG Ally, primeras impresiones: una bestia gaming de bolsillo con Windows 11 y mucho que decir", descripcion: "Cuesta imaginarse un futuro escenario dentro del mercado del hardware dedicado a los videojuegos. Hay quienes apuntan que las consolas físicas desaparecerán, que la realidad virtual tendrá mucha más presencia, que todo estará en la nube, metaversos… Sea como sea, el presente parece que está protagonizado por compañías que desarrollan PC’s portátiles que nos permiten disfrutar de nuestros videojuegos favoritos, en cualquier parte y en cualquier lugar." },
    { titulo: "En Coolmod tienes este potente PC gaming con RTX 4070 Ti, 32 GB de RAM y 2 TB de SSD en oferta con 200 euros de descuento", descripcion: "Una de las mejores opciones que nos va dejando el mercado actual con el que poder disfrutar de nuestros videojuegos favoritos son sin lugar a dudas los PC gaming. Cada vez existen más modelos que nos permitan obtener un gran rendimiento y una alta calidad gráfica como alternativa al tener que componer un setup gaming desde cero, o decantarnos por la adquisición de un portátil gaming." },
    { titulo: "¿Cuáles son las carreras que más estudian los guatemaltecos en la Usac?", descripcion: "Hay más de una decena de universidades en Guatemala y muchas más opciones de estudios, pero solo hay una estatal. La Universidad de San Carlos de Guatemala (Usac) tiene un aproximado de 230 mil estudiantes matriculados y el 51 por ciento están en la capital.\nDel 2019 al 2022 la matrícula en el campus central ha tenido altas y bajas, pero predomina un aumento de inscripciones durante los años de pandemia. De 110 mil inscritos para el primer año en el 2019, pasó a 106 mil para el 2020 y luego comenzó a incrementarse el interés y para el 2022 eran 118 mil los estudiantes activos en esa casa de estudios." },


];



export function FuncPublica() {

    return (
        <div>
            <h1>Grupo 6</h1>
            <br></br>
            <br></br>
            <br></br>
            <h1 style={{ textAlign: "center" }}>Funcion publica</h1>

            <div>
                <div class="row">
                    <div class="col text-center">
                        <div className="card" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <div className="info">
                                <h6><strong>Funcion</strong></h6>
                                <h6>imagen.jpf</h6>
                                <img src="https://openseauserdata.com/files/da7db003ab5c3a427efd1778af4b148a.jpg" alt="grupo 6 redes2" style={{ borderRadius: "50%",width: "40%", height: "40%" }} />
                            
                            </div>
                        </div>
                    </div>
                    <div class="col text-center">
                    <div className="card" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <div className="info">
                                <h6><strong>Funcion 2</strong></h6>
                                <h6>imagen2.jpf</h6>
                                <img src="https://openseauserdata.com/files/da7db003ab5c3a427efd1778af4b148a.jpg" alt="grupo 6 redes2" style={{ borderRadius: "50%",width: "40%", height: "40%" }} />
                            
                            </div>
                        </div>
                    </div>
                </div>

                <br></br>

                <div class="row">
                    <div class="col text-center">
                    <div className="card" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <div className="info">
                                <h6><strong>Funcion3</strong></h6>
                                <h6>imagen3.jpf</h6>
                                <img src="https://openseauserdata.com/files/da7db003ab5c3a427efd1778af4b148a.jpg" alt="grupo 6 redes2" style={{ borderRadius: "50%",width: "40%", height: "40%" }} />
                            
                            </div>
                        </div>
                    </div>
                    <div class="col text-center">
                    <div className="card" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <div className="info">
                                <h6><strong>Funcion4</strong></h6>
                                <h6>imagen4.jpf</h6>
                                <img src="https://openseauserdata.com/files/da7db003ab5c3a427efd1778af4b148a.jpg" alt="grupo 6 redes2" style={{ borderRadius: "50%",width: "40%", height: "40%" }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <br></br>
            <br></br>
            <br></br>
            <h3 style={{ textAlign: "center" }}>Noticias</h3>

            <div className="App">
                <Carousel breakPoints={breakPoints}>
                    {imagenes.map((imagen, index) => (
                        <Item key={index} style={{ height: "100%", width: "100%" }}>
                            <div>
                                <div className="card" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <div className="info">
                                        <h6><strong>{imagen.titulo}</strong></h6>
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