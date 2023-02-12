### Grupo #6 | Practica1
##### Universidad de San Carlos de Guatemala
##### Facultad de Ingeniería
##### Escuela de Ciencias y Sistemas
##### REDES DE COMPUTADORAS 2 Sección N

    Integrantes:

        201115018 - Joel Rodríguez Santos
        201700644 - Javier Roberto Alfaro Vividor
        201709311 - Edin Emanuel Montenegro Vasquez
        200915080 - Julio Roberto Vasquez Santiago 	
        
---
***Spanning Tree Protocol***

Como primer paso usamos el comando sh spanning-tree en los switches para poder ver la informacion relacionada a Spanning-tree como en la siguiente imagen:

![image](https://user-images.githubusercontent.com/69096882/218326567-b1f0f4b3-eca0-48f8-8219-545df871ba2e.png)

Con esto podemos identificar cuales puertos estan bloqueados (BLK) y lo mas importante cual es el **root bridge**.
![image](https://user-images.githubusercontent.com/69096882/218327063-e6ab7537-e179-4fd3-8f81-35442cc819e0.png)


Para realizar la prueba de R-PVST versus PVST se tuvo que realizar lo siguiente:

  1)Identificar root bridge
  
  2)Identificar puertos BLK
  
  3)Hacer un ping extendido (ping 50 192.168.x.x -n 50): Para este caso se eligio el equipo encerrado en el circulo 1 hacia el equipo del circulo 2.
![image](https://user-images.githubusercontent.com/69096882/218327120-74cf047b-f505-412f-91d5-7a52aad3e418.png)

En el cuadro A, se identifica el ping que se realizo, en el recuadro B el posicionamiento en el puerto activo y el comando que se uso para deshabilitarlo "shutdown".

  4)Cuando se este ejecutando el ping extendido "apagar el puerto principal" por donde pasa el ping para asi forzar el cambio de ruta, dado a que STP fue diseñado para la redundancia de rutas.
![image](https://user-images.githubusercontent.com/69096882/218327383-125cf8cc-a8c6-4682-b373-780a79430d1d.png)

Como se puede observar con pvst. se recupero a los 8 paquetes, un aproximado a 32s.

5)Ahora repetimos el proceso con R-pvst: Ejecutamos el comando (spanning-tree mode rapid-pvst) en todos los switches para que se pase a modo r-pvst
![image](https://user-images.githubusercontent.com/69096882/218327470-1d739c3d-bfde-4978-91a2-8e21bb278f36.png)


![image](https://user-images.githubusercontent.com/69096882/218328241-c3c4b502-2e76-4733-8c99-b849b868b24b.png)

6)Procedemos a hacer ping extendido de los dos mismos equipos que se usaron para pvst solo que ahora para la prueba de convergencia de r-pvst
![image](https://user-images.githubusercontent.com/69096882/218328345-7d824ff6-74bb-44ea-9135-cef0da3d1191.png)

El resultado de convergencia de r-pvst fue el siguiente:
![image](https://user-images.githubusercontent.com/69096882/218328379-aef3761b-609b-4d16-bf34-50e3279d38d4.png)
Como se puede observar la convergencia fue de 1.5-2s.

**Conclusion**
Como se puede apreciar r-pvst es superior a pvst, por lo que se dejo esta confiruacion en toda la topologia.

---
***Security-Port***
Para poder configurar la seguridad de los puertos primero se debe averiguar las mac address que seran permitidas en cada SW. Para ello se accede a las computadoras y con el comando ipconfig se puede visualizar la mac-address.
![mac-address](./Imagenes/Manual_STP/sec-04.png)

#### Direcciones
|Mac-Address|SW|Port|
|---|---|---|
|00E0.F92B.C930|SW1|f0/1|
|0001.964B.3555|SW2|f0/1|
|0060.47AA.A447|SW2|f0/2|
|00D0.976C.DB46|SW3|f0/1|
|000D.BD30.082E|SW3|f0/1|
|00E0.F73A.B209|SW3|f0/3|
|0002.1738.A63D|SW4|f0/1|
|0001.C905.530A|SW5|f0/1|
|00E0.F749.D01A|SW5|f0/2|

Con la mac-address se ingresa al switch a la cual este conectada la computadora y se procede a agregar la dirección a la lista de permitidas por el protocolo.
![configuracion de port security](./Imagenes/Manual_STP/sec-01.png)

Para verificar que la configuración este correcta se puede utilizar el comando sh run y verifar que las configuraciones esten guardadas o el comando sh port-security int #INTERFACE
![sh run](./Imagenes/Manual_STP/sec-02.png)
![sh port-security int](./Imagenes/Manual_STP/sec-03.png)

---







        
        
        
