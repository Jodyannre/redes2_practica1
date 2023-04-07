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
### PC1 (soporte6) 🖥️
```bash
ip: 192.168.16.?
mask: 255.255.255.0
gw: 192.168.16.1
```
### PC2 (soporte6) 🖥️
```bash
ip: 192.168.16.?
mask: 255.255.255.0
gw: 192.168.16.1
```

### PC3 (soporte6) 🖥️
```bash
ip: 192.168.16.?
mask: 255.255.255.0
gw: 192.168.16.1
```
### PC4 (soporte6) 🖥️
```bash
ip: 192.168.16.?
mask: 255.255.255.0
gw: 192.168.16.1
```
 ---
    
    
### PC1 (informatica6) 🖥️
```bash
ip: 192.168.26.?
mask: 255.255.255.0
gw: 192.168.26.1
```

### PC2 (informatica6) 🖥️
```bash
ip: 192.168.26.?
mask: 255.255.255.0
gw: 192.168.26.1
```

### PC3 (informatica6) 🖥️
```bash
ip: 192.168.26.?
mask: 255.255.255.0
gw: 192.168.26.1
```
### PC4 (informatica6) 🖥️
```bash
ip: 192.168.26.?
mask: 255.255.255.0
gw: 192.168.26.1
```
    
# **Conexión entre los edificios**
    
# VTP

### configuracion para vtp server
```conf ter
vtp domain g6
vtp password g6
vtp version 2
vtp mode server

sh vtp status		(ver vtp)
sh vtp password   (ver password)
sh vlan
```
---

**intervlan(principales)**    
```
vlan 16
name SOPORTE6
    
vlan 26
name INFORMATICA6
```
    
    
**intervlan norte (data center)**
```
vlan 36
name DS_OESTE6
vlan 46
name DS_ESTE6
```

**intervlan sur (server web)**    
```
vlan 56
name SW_OESTE6
vlan 66
name SW_ESTE6
```
**intervlan central (conector de las 2 LAN)**
```    
vlan 76
name C_LAN6
```
---
    

# configuracion para vtp client

``` ena
conf ter
vtp domain g6
vtp password g6
vtp version 2
vtp mode client

sh vtp status
sh vtp password
```

---


# MSW0
**designar interfaces**
```    
ena
conf t
int vlan 16
ip address 192.168.16.1 255.255.255.0
no shutdown
exit

int vlan 26
ip address 192.168.26.1 255.255.255.0
no shutdown
exit
```

```
int vlan 36
ip address 36.36.36.1 255.0.0.0
no shutdown
exit

int vlan 46
ip address 46.46.46.1 255.0.0.0
no shutdown
exit

do sh run
```

**designar el acceso/trunk MSW0**
MSW0:
```    
conf t
int g1/0/2
switchport mode trunk
switchport trunk allowed vlan all
exit
sh vlan brief
WR
```



# MSW1
**designar interfaces**
```ena
conf t
int vlan 16
ip address 192.168.16.1 255.255.255.0
no shutdown
exit

int vlan 26
ip address 192.168.26.1 255.255.255.0
no shutdown
exit


int vlan 36
ip address 36.36.36.2 255.0.0.0
no shutdown
exit

int vlan 56
ip address 56.56.56.2 255.0.0.0
no shutdown
exit

int vlan 76
ip address 76.76.76.1 255.0.0.0
no shutdown
exit

do sh run
```

**designar el acceso/trunk MSW1**
MSW1:
```conf t

int g1/0/2
switchport mode trunk
switchport trunk allowed vlan all
exit
sh vlan brief
WR
```




# MSW2:
**designar interfaces**
```ena
conf t
int vlan 16
ip address 192.168.16.1 255.255.255.0
no shutdown
exit

int vlan 26
ip address 192.168.26.1 255.255.255.0
no shutdown
exit

int vlan 46
ip address 46.46.46.2 255.0.0.0
no shutdown
exit

int vlan 66
ip address 66.66.66.2 255.0.0.0
no shutdown
exit

int vlan 76
ip address 76.76.76.2 255.0.0.0
no shutdown
exit

do sh run
```

**designar el acceso/trunk MSW2**
```conf t

int g0/2
switchport mode trunk
switchport trunk allowed vlan all
exit
sh vlan brief
WR
```

    
    
# MSW3:
**designar interfaces**
```ena
conf t
int vlan 16
ip address 192.168.16.1 255.255.255.0
no shutdown
exit

int vlan 26
ip address 192.168.26.1 255.255.255.0
no shutdown
exit


int vlan 56
ip address 56.56.56.1 255.0.0.0
no shutdown
exit

int vlan 66
ip address 66.66.66.1 255.0.0.0
no shutdown
exit

do sh run
```

**designar el acceso/trunk MSW3**
```conf t
int g1/0/2
switchport mode trunk
switchport trunk allowed vlan all
exit
sh vlan brief
WR
```

---
    
# OSPF

**MSW0(norte)**
```ip routing
router ospf 10
network 36.36.36.0 0.0.0.255 area 10
network 192.168.16.0 0.0.0.255 area 10
network 192.168.26.0 0.0.0.255 area 10
network 46.46.46.0 0.0.0.255 area 10
```

**MSW1(oeste)**
```ip routing
router ospf 10
network 36.36.36.0 0.0.0.255 area 10
network 192.168.16.0 0.0.0.255 area 10
network 192.168.26.0 0.0.0.255 area 10
network 56.56.56.0 0.0.0.255 area 10
network 76.76.76.0 0.0.0.255 area 10
```
    

**MSW2(este)**
```ip routing
router ospf 10
network 46.46.46.0 0.0.0.255 area 10
network 192.168.16.0 0.0.0.255 area 10
network 192.168.26.0 0.0.0.255 area 10
network 66.66.66.0 0.0.0.255 area 10
network 76.76.76.0 0.0.0.255 area 10
```
    

**MSW3(sur)**
```ip routing
router ospf 10
network 56.56.56.0 0.0.0.255 area 10
network 192.168.16.0 0.0.0.255 area 10
network 192.168.26.0 0.0.0.255 area 10
network 66.66.66.0 0.0.0.255 area 10

sh ip route
wr
sh ip ospf neigh
```  
    
---
    
# EIGRP

**deshabilitar ospf en c/u MSW**
```ip routing
no router ospf 10
```
    
**deshabilitar eigrp en c/u MSW**
```ip routing
no router eigrp 10
```
    

**MSW0(norte)**
```ip routing
router eigrp 10
network 36.36.36.0 0.0.0.255
network 192.168.16.0 0.0.0.255
network 192.168.26.0 0.0.0.255
network 46.46.46.0 0.0.0.255
no auto-summary	
exit
```


**MSW1(oeste)**
```ip routing
router eigrp 10
network 36.36.36.0 0.0.0.255
network 192.168.16.0 0.0.0.255
network 192.168.26.0 0.0.0.255
network 56.56.56.0 0.0.0.255
network 76.76.76.0 0.0.0.255
no auto-summary	
exit
```
    

**MSW2(este)**
```ip routing
router eigrp 10
network 46.46.46.0 0.0.0.255
network 192.168.16.0 0.0.0.255
network 192.168.26.0 0.0.0.255
network 66.66.66.0 0.0.0.255
network 76.76.76.0 0.0.0.255
no auto-summary	
exit
```
    
**MSW3(sur)**
```ip routing
router eigrp 10
network 56.56.56.0 0.0.0.255
network 192.168.16.0 0.0.0.255
network 192.168.26.0 0.0.0.255
network 66.66.66.0 0.0.0.255
no auto-summary	
exit

sh ip route
wr
```    
    
    
    
    
    
---
    
    
    
    

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





        
        
        
