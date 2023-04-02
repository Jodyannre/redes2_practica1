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

**INDICE**
1. [TOPOLOGIA](#CONFIGURACION-GENERAL-DE-TOPOLOGIA-🖧)
2. [CONFIGURACIONES DE PC](#CONFIGURACIONES-DE-PC-🖥)
3. [SWITCH MULTILAYER](#SWITCH-MULTILAYER)
    1. [CONFIGURACION MSW1](#CONFIGURACION-MSW1-🌐)
    2. [CONFIGURACION MSW4](#CONFIGURACION-MSW4-🌐)
    3. [CONFIGURACION MSW7](#CONFIGURACION-MSW7-🌐)
4. [SWITCH CAPA2](#SWITCH-CAPA-2)
   1. [CONFIGURACION SW1](#CONFIGURACION-SW1-📡) 
   2. [CONFIGURACION SW2](#CONFIGURACION-SW2-📡)
   3. [CONFIGURACION SW3](#CONFIGURACION-SW3-📡)
5. [PROTOCOLOS UTILIZADOS](#PROTOCOLOS-UTILIZADOS-EN-ESTA-TOPOLOGIA)
6. [COMANDOS PARA VER CONFIGURACIONES](#VER-CONFIGURACIONES-DE-LOS-SWITCHES-⌨️) 

  

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
### PC2 (RRHH) 🖥️
```bash
ip: 192.168.76.3
mask: 255.255.255.0
gw: 192.168.76.1
```

### PC3 (RRHH) 🖥️
```bash
ip: 192.168.76.4
mask: 255.255.255.0
gw: 192.168.76.1
```

### LAPTOP (SOPORTE) 🖥️
```bash
ip: 192.168.86.2
mask: 255.255.255.0
gw: 192.168.86.1
```

### PC1 (INFORMATICA) 🖥️
```bash
ip: 192.168.96.2
mask: 255.255.255.0
gw: 192.168.96.1
```

### PC2 (INFORMATICA) 🖥️
```bash
ip: 192.168.96.3
mask: 255.255.255.0
gw: 192.168.96.1
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
### CONFIGURACION DE LACP
```bash
interface Port-channel1
switchport trunk allowed vlan 76
switchport trunk encapsulation dot1q
exit
interface range fa0/4-5
channel-group 1 mode active
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
### CONFIGURACION DE LACP
```bash
interface Port-channel1
switchport trunk allowed vlan 86
switchport trunk encapsulation dot1q
exit
interface fa0/3
channel-group 1 mode active
exit
interface fa0/6
channel-group 1 mode active
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
### CONFIGURACION DE LACP
```bash
interface Port-channel1
switchport trunk allowed vlan 96
switchport trunk encapsulation dot1q
exit
interface fa0/3
channel-group 1 mode active
exit
intterface fa0/5
channel-group 1 mode active
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
### CONFIGURACION DE LACP
```bash
interface Port-channel1
switchport trunk allowed vlan 76
switchport mode trunk
int range fa0/4-5
channel-group 1 mode active
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
### CONFIGURACION DE LACP
```bash
interface Port-channel1
switchport trunk allowed vlan 86
switchport mode trunk
exit
interface fa0/3
channel-group 1 mode active
exit
interface fa0/6
channel-group 1 mode active
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
### CONFIGURACION DE LACP
```bash
interface Port-channel1
switchport trunk allowed vlan 96
switchport mode trunk
exit
interface fa0/3
channel-group 1 mode active
exit
interface fa0/5
channel-group 1 mode active
exit
```
# PROTOCOLOS UTILIZADOS EN ESTA TOPOLOGIA
## OSPF
OSPF se caracteriza por su capacidad para calcular la ruta más corta para el tráfico de la red, y por su capacidad para soportar redes de gran tamaño.
## EIGRP
EIGRP es un protocolo de enrutamiento dinámico que utiliza el algoritmo de distancia vector para determinar la ruta más corta a los destinos de la red.
## LACP
El enlace de canal de agrupación (LACP) es un protocolo de enrutamiento que permite a los dispositivos de red agrupar múltiples enlaces de red en un solo enlace de red virtual.
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





        
        
        
