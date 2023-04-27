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


export function ReporteEconomico() {

    const [data_Ctop, setdata_Ctop] = useState([
        { name: "Cerberus exito bolsa", uv: 60, pv: 60, amt: 60 },
        { name: "Aumento ultimo año", uv: 50, pv: 70, amt: 80 },
        { name: "Maximo valor alcanzado", uv: 70, pv: 80, amt: 90 }
    ]);

    const updateItem = (numero, numero2, numero3) => {
        const updatedItems = [...data_Ctop];
        updatedItems[0] = { ...updatedItems[0], uv: numero, pv: numero, amt: numero };
        updatedItems[1] = { ...updatedItems[1], uv: numero2, pv: numero2, amt: numero2 };
        updatedItems[2] = { ...updatedItems[2], uv: numero3, pv: numero3, amt: numero3 };
        setdata_Ctop(updatedItems);
        //console.log(data_Ctop)
    };

    //*******************************************************************************************************************
    const [data_barras, setdata_barras] = useState([
        { name: "Enero", uv: 100 },
        { name: "Febrero", uv: 200 },
        { name: "Marzo", uv: 300 },
        { name: "Abril", uv: 400 },
        { name: "Mayo", uv: 500 },
        { name: "Junio", uv: 600 },
        { name: "Julio", uv: 700 },
        { name: "Agosto", uv: 800 },
        { name: "Septiembre", uv: 900 },
        { name: "Octubre", uv: 800 },
        { name: "Noviembre", uv: 400 },
        { name: "Diciembre", uv: 200 }
    ]);

    const updateItem2 = (numero) => {
        const updatedItems = [...data_barras];

        for (let index = 0; index < data_barras.length; index++) {
            updatedItems[index] = { ...updatedItems[index], uv: numero[index] };
        }
        setdata_barras(updatedItems);
        //console.log(data_barras)
    };

    //*******************************************************************************************************************
    const [data_triple_economia, setdata_triple_economia] = useState([
        { name: "1991", DollarUSD: 65, CerberCoin: 50, Euro: 70 },
        { name: "1992", DollarUSD: 65, CerberCoin: 50, Euro: 70 },
        { name: "1993", DollarUSD: 65, CerberCoin: 50, Euro: 70 },
        { name: "1994", DollarUSD: 65, CerberCoin: 50, Euro: 70 },
        { name: "1995", DollarUSD: 65, CerberCoin: 50, Euro: 70 },
        { name: "1996", DollarUSD: 65, CerberCoin: 60, Euro: 70 },
        { name: "1997", DollarUSD: 65, CerberCoin: 60, Euro: 70 },
        { name: "1998", DollarUSD: 65, CerberCoin: 60, Euro: 70 },
        { name: "1999", DollarUSD: 65, CerberCoin: 60, Euro: 70 },
        { name: "2000", DollarUSD: 65, CerberCoin: 60, Euro: 85 },
        { name: "2001", DollarUSD: 65, CerberCoin: 60, Euro: 85 },
        { name: "2002", DollarUSD: 65, CerberCoin: 60, Euro: 85 },
        { name: "2003", DollarUSD: 65, CerberCoin: 70, Euro: 85 },
        { name: "2004", DollarUSD: 65, CerberCoin: 70, Euro: 85 },
        { name: "2005", DollarUSD: 65, CerberCoin: 70, Euro: 85 },
        { name: "2006", DollarUSD: 65, CerberCoin: 70, Euro: 85 },
        { name: "2007", DollarUSD: 65, CerberCoin: 70, Euro: 90 },
        { name: "2008", DollarUSD: 65, CerberCoin: 70, Euro: 90 },
        { name: "2009", DollarUSD: 65, CerberCoin: 70, Euro: 90 },
        { name: "2010", DollarUSD: 65, CerberCoin: 70, Euro: 90 },
        { name: "2011", DollarUSD: 95, CerberCoin: 80, Euro: 90 },
        { name: "2012", DollarUSD: 95, CerberCoin: 80, Euro: 90 },
        { name: "2013", DollarUSD: 95, CerberCoin: 80, Euro: 90 },
        { name: "2014", DollarUSD: 95, CerberCoin: 80, Euro: 82 },
        { name: "2015", DollarUSD: 95, CerberCoin: 80, Euro: 82 },
        { name: "2016", DollarUSD: 95, CerberCoin: 80, Euro: 82 },
        { name: "2017", DollarUSD: 95, CerberCoin: 80, Euro: 82 },
        { name: "2018", DollarUSD: 95, CerberCoin: 80, Euro: 82 },
        { name: "2019", DollarUSD: 95, CerberCoin: 80, Euro: 82 },
        { name: "2020", DollarUSD: 95, CerberCoin: 75, Euro: 82 },
        { name: "2021", DollarUSD: 95, CerberCoin: 75, Euro: 95 },
        { name: "2022", DollarUSD: 95, CerberCoin: 75, Euro: 95 },
        { name: "2023", DollarUSD: 95, CerberCoin: 75, Euro: 90 },
    ]);

    const updateItem3 = (usd, euro, cerberusC) => {
        const updatedItems = [...data_triple_economia];

        for (let index = 0; index < data_triple_economia.length; index++) {
            updatedItems[index] = { ...updatedItems[index], DollarUSD: usd[index], CerberCoin: cerberusC[index], Euro: euro[index] };
        }
        setdata_triple_economia(updatedItems);
        //console.log(data_triple_economia)
    };



    //automaticamente================================================

    useEffect(() => {
        //------------------------------- barras vertical
        updateItem(666, 555, 777);//mongoDB 1era grafica

        //------------------------------- barras anual cerberus company
        updateItem2([1200, 1100, 1000, 900, 800, 700, 600, 500, 400, 300, 200, 100])//mongoDB 2nda grafica

        //------------------------------- usd vs euro vs ceberus coin (arrays de 33 items ojo)
        const usd = Array.from({ length: 33 }, (_, i) => 1 + i * 1);
        //console.log(usd);

        const euro = Array.from({ length: 33 }, (_, i) => 2 + i * 2);
        //console.log(euro);

        const cerberusCoin = Array.from({ length: 33 }, (_, i) => 3 + i * 3);
        //console.log(cerberusCoin);

        updateItem3(usd,euro,cerberusCoin)//mongoDB 3era grafica


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
                            data={data_Ctop}
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
                </div>
            </div>


        </div>
    );

}