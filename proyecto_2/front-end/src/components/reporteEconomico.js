import React, { useState, useEffect } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,

    LineChart,
    Line,

    ComposedChart,
    Area
} from "recharts";


var dolar = [10, 25, 89, 44, 55, 66, 12, 77, 89, 44, 55, 77, 11, 23, 56, 40, 50, 51, 52, 53, 60, 59, 58, 57, 55, 52, 45, 35, 45, 55, 65, 75, 76];
var euro = [15, 30, 92, 45, 56, 55, 56, 57, 58, 59, 60, 61, 51, 41, 45, 55, 65, 75, 85, 95, 75, 70, 65, 60, 55, 45, 55, 65, 75, 76, 77, 78, 81];
var cerberus = [25, 26, 27, 44, 55, 44, 45, 45, 46, 47, 48, 47, 46, 45, 42, 45, 50, 55, 65, 75, 76, 77, 79, 82, 85, 87, 89, 88, 78, 68, 58, 48, 38];

/*
console.log("---------------------")
console.log(dolar.length)
console.log(euro.length)
console.log(cerberus.length)*/


const data_barras = [
    {
        name: "Enero",
        uv: 4000
    },
    {
        name: "Febrero",
        uv: 3000
    },
    {
        name: "Marzo",
        uv: 2000
    },
    {
        name: "Abril",
        uv: 2780
    },
    {
        name: "Mayo",
        uv: 1890
    },
    {
        name: "Junio",
        uv: 2390
    },
    {
        name: "Julio",
        uv: 3490
    },
    {
        name: "Agosto",
        uv: 2000
    },
    {
        name: "Septiembre",
        uv: 1900
    },
    {
        name: "Octubre",
        uv: 1500
    },
    {
        name: "Noviembre",
        uv: 2500
    },
    {
        name: "Diciembre",
        uv: 3490
    }
];


const data_triple_economia = [

    {
        name: "2015",
        DollarUSD: 3566,
        CerberCoin: 5000,
        Euro: 5400
    },
    {
        name: "2016",
        DollarUSD: 2000,
        CerberCoin: 2400,
        Euro: 2200
    },
    {
        name: "2017",
        DollarUSD: 4000,
        CerberCoin: 2400,
        Euro: 5400
    },
    {
        name: "2018",
        DollarUSD: 3000,
        CerberCoin: 1398,
        Euro: 2210
    },
    {
        name: "2019",
        DollarUSD: 2000,
        CerberCoin: 9800,
        Euro: 2290
    },
    {
        name: "2020",
        DollarUSD: 2780,
        CerberCoin: 3908,
        Euro: 2000
    },
    {
        name: "2021",
        DollarUSD: 1890,
        CerberCoin: 4800,
        Euro: 2181
    },
    {
        name: "2022",
        DollarUSD: 2390,
        CerberCoin: 3800,
        Euro: 2500
    },
    {
        name: "2023",
        DollarUSD: 3490,
        CerberCoin: 4300,
        Euro: 2100
    }
];

/*
const data_CerberusTop = [
    {
        name: "Cerberus exito bolsa",
        uv: 590, //linea
        pv: 590, //barra
        amt: 590 //area
    },
    {
        name: "Aumento ultimo año",
        uv: 868,
        pv: 868,
        amt: 868
    },
    {
        name: "Maximo valor alcanzado", //sacar el max value del array de cerberus
        uv: 1397,
        pv: 1397,
        amt: 1397
    }
];*/

export function ReporteEconomico() {


    //[items, setItems]---------------------------------------------------------------------
    const [data_CerberusTop, setData_CerberusTop] = useState([
        { name: "Cerberus exito bolsa", uv: 60, pv: 60, amt: 60 },
        { name: "Aumento ultimo año", uv: 50, pv: 70, amt: 80 },
        { name: "Maximo valor alcanzado", uv: 70, pv: 80, amt: 90 }
    ]);

    const updateItem = (numero, numero2, numero3) => {
        const updatedItems = [...data_CerberusTop];
        updatedItems[0] = { ...updatedItems[0], uv: numero, pv: numero, amt: numero };
        updatedItems[1] = { ...updatedItems[1], uv: numero2, pv: numero2, amt: numero2 };
        updatedItems[2] = { ...updatedItems[2], uv: numero3, pv: numero3, amt: numero3 };
        setData_CerberusTop(updatedItems);
        //console.log(data_CerberusTop)
    };

    //---------------------------------------------------------------------------------------

    const metodo1 = () => {
        console.log('Método 1');
    };

    const metodo2 = () => {
        console.log('Método 2');
    };

    const metodo3 = () => {
        console.log('Método 3');
    };

    //automaticamente================================================

    useEffect(() => {
        updateItem(666, 555, 777);

        // primer método
        metodo1();

        // segundo método
        metodo2();

        // tercer método
        metodo3();

    }, []); // el segundo argumento del useEffect es un array vacío para que se ejecute solo una vez al cargar la página



    return (
        <div>
            <h1>Reporte economico</h1>
            <br></br>
            <br></br>

            <div class="container">
                <div class="row">
                    <div class="col text-center">
                        <LineChart
                            width={500}
                            height={300}
                            data={data_triple_economia}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line
                                type="monotone"
                                dataKey="CerberCoin"
                                stroke="#8884d8"
                                activeDot={{ r: 8 }}
                            />
                            <Line type="monotone" dataKey="DollarUSD" stroke="#82ca9d" />
                            <Line type="monotone" dataKey="Euro" stroke="#FF009B" />
                        </LineChart>
                        <h2>Desarrollo economico</h2>
                    </div>


                    <div class="col text-center">
                        <BarChart
                            width={500}
                            height={300}
                            data={data_barras}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="uv" fill="#8884d8" />
                        </BarChart>
                        <h2>CerberCoin al largo del 2022</h2>
                    </div>
                </div>

                <br></br>
                <br></br>
                <br></br>

                <div class="row justify-content-center text-center">
                    <div class="col-2 d-flex justify-content-center">
                        <ComposedChart
                            layout="vertical"
                            width={500}
                            height={400}
                            data={data_CerberusTop}
                            margin={{
                                top: 20,
                                right: 20,
                                bottom: 20,
                                left: 20
                            }}
                        >
                            <CartesianGrid stroke="#f5f5f5" />
                            <XAxis type="number" />
                            <YAxis dataKey="name" type="category" scale="band" />
                            <Tooltip />
                            <Legend />
                            <Area dataKey="amt" fill="#8884d8" stroke="#8884d8" />
                            <Bar dataKey="pv" barSize={20} fill="#413ea0" />
                            <Line dataKey="uv" stroke="#ff7300" />
                        </ComposedChart>
                    </div>
                    <h2>Desarrollo Cerberus</h2>
                    <button onClick={() => updateItem(0, 777)}></button>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
            </div>


        </div>
    );

}