# **Grupo #6 | Practica1**
- Universidad de San Carlos de Guatemala
- Facultad de Ingeniería
- Escuela de Ciencias y Sistemas
- Auxiliar: Adriana López
##### REDES DE COMPUTADORAS 2 Sección N

## **Integrantes**
| Carnet    | Nombre |
| ------    | ------ |
| 201115018** | **Joel Rodríguez Santos |
| 201700644 | Javier Roberto Alfaro Vividor |
| 201709311 | Edin Emanuel Montenegro Vasquez |
| 200915080 | Julio Roberto Vasquez Santiago  |


# CONFIGURACION GENERAL DE TOPOLOGIA 🖧
<image
  src="./Images/topo.png"
  alt="Imagen de topologia"
  caption="Topología práctica 2">

# CONFIGURACION MSW1 🌐
### CREACION DE VLANS
```bash	
vlan 16
name VENTAS16
exit
interface vlan 16
ip address 1.1.1.1 255.0.0.0
no shutdown
exit

vlan 76
name RRHH66
exit 
interface vlan 76
ip address 192.168.76.1 255.255.255.0
no shutdown
exit
```	
### CONFIGURACION DE PUERTOS
```bash
interface f0/3
switchport mode access
switchport access vlan 16
exit
interfac range f0/4-5
switchport trunk encapsulation dot1q
switchport trunk allowed vlan 76
exit
```

# CONFIGURACION MSW4 🌐
### CREACION DE VLANS
```bash	
vlan 16
name VENTAS16
exit
interface vlan 16
ip address 1.1.1.1 255.0.0.0
no shutdown
exit

vlan 26
name DISTRIBUICION26
exit 
interface vlan 26
ip address 10.0.0.2 255.255.255.0
no shutdown
exit

vlan 86
name SOPORTE66
exit 
interface vlan 86
ip address 192.168.86.1 255.255.255.0
no shutdown
exit
```	
### CONFIGURACION DE PUERTOS
```bash
interface f0/3
switchport mode access
switchport access vlan 16
exit
interface f0/4
switchport mode access
switchport access vlan 26
description access
exit
interface range f0/5-6
switchport trunk encapsulation dot1q
switchport trunk allowed vlan 86
exit
```

# VER CONFIGURACIONES DE LOS SWITCHES ⌨️
### VER VLANS
```bash
do sh vlan brief
```
### VER RUTAS
```bash
do sh ip route
```
### VER VECINOS OSPF
```bash
do sh ip ospf neighbor
```
### VER TABLA DE ENRUTAMIENTO
```bash
do sh ip ospf database router
```





        
        
        
