# **Grupo #6 | Practica2**
- Universidad de San Carlos de Guatemala
- Facultad de Ingeniería
- Escuela de Ciencias y Sistemas
- Auxiliar: Adriana López
##### REDES DE COMPUTADORAS 2 Sección N

## **Integrantes**
| Carnet    | Nombre |
| ------    | ------ |
| **201115018** | **Joel Rodríguez Santos (👮🏽 coordinador)** |
| 201700644 | Javier Roberto Alfaro Vividor |
| 201709311 | Edin Emanuel Montenegro Vasquez |
| 200915080 | Julio Roberto Vasquez Santiago  |


# CONFIGURACION GENERAL DE TOPOLOGIA 🖧
<image
  src="./Images/topo.png"
  alt="Imagen de topologia"
  caption="Topología práctica 2">

# **CONFIGURACIONES DE PC 🖥**
### PC1 (RRHH) 🖥️
```bash
ip: 192.168.76.2
mask: 255.255.255.0
gw: 192.168.76.1
```

# **SWITCH MULTILAYER**
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
switchport trunk encapsulation dot1q
switchport trunk allowed vlan 16
exit

interface range f0/4-5
switchport trunk encapsulation dot1q
switchport trunk allowed vlan 76
exit
```
### CONFIGURACION DE OSPF
```bash
ip routing
router ospf 10		
network 1.1.1.0 0.0.0.255 area 10
network 192.168.76.0 0.0.0.255 area 10
network 192.168.86.0 0.0.0.255 area 10
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
switchport trunk encapsulation dot1q
switchport trunk allowed vlan 16
exit

interface f0/4
switchport trunk encapsulation dot1q
switchport trunk allowed vlan 26
exit

interface range f0/5-6
switchport trunk encapsulation dot1q
switchport trunk allowed vlan 86
exit
```
### CONFIGURACION DE OSPF
```bash
ip routing
router ospf 10		# 10 es un ID
network 1.1.1.0 0.0.0.255 area 10
network 192.168.76.0 0.0.0.255 area 10
network 192.168.86.0 0.0.0.255 area 10
```
### CONFIGURACION DE EIGRP
```bash
ip routing
router eigrp 10
network 10.10.10.0
network 192.168.86.0
network 192.168.96.0
no auto-summary	#sin esto no conoceran las subredes de la red principal, con esto se publican las redes
exit
```

# CONFIGURACION MSW7 🌐
### CREACION DE VLANS
```bash	
vlan 26
name DISTRIBUCION26
exit
interface vlan 26
ip address 10.0.0.1 255.0.0.0
no shutdown
exit

vlan 96
name INFORMATICA66
exit 
interface vlan 96
ip address 192.168.96.1 255.255.255.0
no shutdown
exit
```	
### CONFIGURACION DE PUERTOS
```bash
interface f0/3
switchport trunk encapsulation dot1q
switchport trunk allowed vlan 96
exit

interface f0/4
switchport trunk encapsulation dot1q
switchport trunk allowed vlan 26
exit

interface f0/5
switchport trunk encapsulation dot1q
switchport trunk allowed vlan 96
exit
```
### CONFIGURACION DE EIGRP
```bash
ip routing
router eigrp 10
network 10.10.10.0
network 192.168.86.0
network 192.168.96.0
no auto-summary	#sin esto no conoceran las subredes de la red principal, con esto se publican las redes
exit
```
# **SWITCH CAPA 2**
# CONFIGURACION SW1 📡
### CONFIGURACION DE PUERTOS
```bash
interface range f0/1-3
description access
switchport access vlan 76
switchport mode access
exit

interface range f0/4-5
switchport mode trunk
switchport trunk allowed vlan 76
exit
```
# CONFIGURACION SW2 📡
### CONFIGURACION DE PUERTOS
```bash
interface f0/1
description access
switchport access vlan 86
switchport mode access
exit

interface range f0/5-6
switchport trunk allowed vlan 86
switchport mode trunk
exit
```
# CONFIGURACION SW3 📡
### CONFIGURACION DE PUERTOS
```bash
interface range f0/1-2
description access
switchport access vlan 96
switchport mode access
exit

interface f0/3
switchport trunk allowed vlan 96
switchport mode trunk
exit

interface f0/5
switchport trunk allowed vlan 96
switchport mode trunk
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





        
        
        
