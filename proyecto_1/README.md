# **Grupo #6 | Proyecto 1**
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
![topologia](./Imagenes/Topologia.png)

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
# **CONFIGURACIONES SERVIDORES 🖥**
  
### DHCP1 (informatica26) 🖥️
```bash
ip: 192.168.96.2
mask: 255.255.255.0
gw: 192.168.96.1
```
  
### DHCP2 (Soporte 16) 🖥️
```bash
ip: 192.168.86.2
mask: 255.255.255.0
gw: 192.168.86.1
```
### SRVER2 (Pagina Web) 🖥️
```bash
ip: 192.168.16.?
mask: 255.255.255.0
gw: 192.168.16.1
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

### configuracion vtp client

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
  
**Vlan Servidores DHCP**
```    
vlan 86
name ServerDHCP2
  
vlan 96
name ServerDHCP1
```
---
    


**MSW0**
**designar interfaces**
```    
ena
conf t
int vlan 16
ip address 192.168.16.1 255.255.255.0
ip helper-address 192.168.86.2
no shutdown
exit

int vlan 26
ip address 192.168.26.1 255.255.255.0
ip helper-address 192.168.96.2
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
  
int vlan 86
ip add 192.168.86.1 255.255.255.0   
no shutdown
exit
  
int vlan 96
ip add 192.168.96.1 255.255.255.0   
no shutdown
exit

do sh run
```

**designar el acceso/trunk**
```    
conf t
int g1/1/4
switchport mode trunk
switchport trunk allowed vlan all
exit
  
conf t
int g1/1/1
switchport mode trunk
switchport trunk allowed vlan all
exit
  
enable
conf t
int Gig1/0/2
switchport mode access
switchport  access vlan 86
exit

enable
conf t
int Gig1/0/1
switchport mode access
switchport  access vlan 96
exit
  
sh vlan brief
WR
```

**MSW1**
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


**designar el acceso/trunk**
```conf t

int g1/0/2
switchport mode trunk
switchport trunk allowed vlan all
exit
sh vlan brief
WR
```




**MSW2**
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

**designar el acceso/trunk**
```conf t

int g0/2
switchport mode trunk
switchport trunk allowed vlan all
exit
sh vlan brief
WR
```

    
    
**MSW3**
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

**designar el acceso/trunk**
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
# LACP


**MSW1**
```
int range gig1/0/1-3
switchport mode trunk
switchport trunk allowed vlan 16,26

int port-channel 1
switchport mode trunk
switchport trunk allowed vlan 16,26
shutdown
no shutdown

int range gig1/0/1-3
channel-group 1 mode active
shutdown
no shutdown
```

**MSW2**
```
int range gig1/0/1-3
switchport mode trunk
switchport trunk allowed vlan 16,26

int port-channel 1
switchport mode trunk
switchport trunk allowed vlan 16,26
shutdown
no shutdown

int range gig1/0/1-3
channel-group 1 mode active
shutdown
no shutdown
```

**MSW4**
```
int range fa0/3-5
switchport trunk encapsulation dot1q
switchport trunk allowed vlan 16,26
shutdown
no shutdown

int port-channel 1
switchport trunk encapsulation dot1q
switchport trunk allowed vlan 16,26
shutdown
no shutdown

int fa0/3
channel-group 1 mode active
shutdown
no shutdown

int range fa0/4-5
channel-group 1 mode passive
shutdown
no shutdown

int range fa0/1-2
switchport trunk encapsulation dot1q
switchport trunk allowed vlan 16,26
shutdown
no shutdown
```

**MSW8**
```
int range fa0/3-5
switchport trunk encapsulation dot1q
switchport trunk allowed vlan 16,26

int port-channel 1
switchport trunk encapsulation dot1q
switchport trunk allowed vlan 16,26
shutdown
no shutdown

int fa0/3
channel-group 1 mode active
shutdown
no shutdown

int range fa0/4-5
channel-group 1 mode passive
shutdown
no shutdown

int range fa0/1-2
switchport trunk encapsulation dot1q
switchport trunk allowed vlan 16,26
shutdown
no shutdown
```
---

# HSRP y resto de MSWs en distribución

**MSW3**
```
int fa0/3
switchport mode trunk
switchport trunk allowed vlan 26
shutdown
no shutdown

int range fa0/1-2
switchport mode access
switchport access vlan 26
shutdown
no shutdown
```

**MSW5**
```
int range fa0/1-2
switchport trunk encapsulation dot1q
switchport trunk allowed vlan 16,26
switchport mode trunk
shutdown
no shutdown

interface Vlan16
standby 1 ip 192.168.16.100
standby 1 priority 100

interface Vlan26
standby 2 ip 192.168.26.100
standby 2 priority 100

//comando para ver estado
sh standby brief
```
**MSW6**
```
int range fa0/1-2
switchport trunk encapsulation dot1q
switchport trunk allowed vlan 16,26
switchport mode trunk
shutdown
no shutdown

interface Vlan16
standby 1 ip 192.168.16.100
standby 1 priority 110
standby 1 preempt

interface Vlan26
standby 2 ip 192.168.26.100
standby 2 priority 110
standby 2 preempt
```

**MSW7**
```
int range fa0/1-4
switchport mode trunk
switchport trunk allowed vlan 16,26
shutdown
no shutdown
```

**MSW9**
```
int range fa0/3
switchport trunk encapsulation dot1q
switchport trunk allowed vlan 16,26
switchport mode trunk
shutdown
no shutdown

int range fa0/1
switchport trunk encapsulation dot1q
switchport trunk allowed vlan 16,26
shutdown
no shutdown

interface Vlan16
standby 1 ip 192.168.16.100
standby 1 priority 110
standby 1 preempt

interface Vlan26
standby 2 ip 192.168.26.100
standby 2 priority 110
standby 2 preempt
```
**MSW10**
```
int range fa0/1-2
switchport trunk encapsulation dot1q
switchport trunk allowed vlan 16,26
switchport mode trunk
shutdown
no shutdown

interface Vlan16
standby 1 ip 192.168.16.100
standby 1 priority 100
interface Vlan26
standby 2 ip 192.168.26.100
standby 2 priority 100

//comando para ver estado
sh standby brief
```


**MSW11**
```
int range fa0/1-4
switchport mode trunk
switchport trunk allowed vlan 16,26
shutdown
no shutdown
```

---
# Access

**SW0**
```
int fa0/3
switchport mode trunk
switchport trunk allowed vlan 26
shutdown
no shutdown

int range fa0/1-2
switchport mode access
switchport access vlan 26
shutdown
no shutdown
```


**SW1**
```
int fa0/3
switchport mode trunk
switchport trunk allowed vlan 16
shutdown
no shutdown

int range fa0/1-2
switchport mode access
switchport access vlan 16
shutdown
no shutdown
```



**SW2**
```
int fa0/3
switchport mode trunk
switchport trunk allowed vlan 16,26
shutdown
no shutdown

int range fa0/1-2
switchport mode access
switchport access vlan 16
shutdown
no shutdown
```



**SW3**
```
int fa0/3
switchport mode trunk
switchport trunk allowed vlan 26
shutdown
no shutdown

int range fa0/1-2
switchport mode access
switchport access vlan 26
shutdown
no shutdown
```

# Port Security


#### Direcciones
|Mac-Address|SW|Port|
|---|---|---|
|0090.2B88.810C|SW4 |fa0/2|
|0060.7063.7B9E|SW5 |fa0/1|
|00D0.D323.B58E|SW6 |fa0/2|
|000B.BE77.BE8E|SW7 |fa0/1|
|0060.7038.D309|SW8 |fa0/2|
|0001.977B.887E|SW9 |fa0/1|
|0000.0C35.2985|SW10|fa0/2|
|0060.3E47.59CC|SW11|fa0/1|


**SW4**
```
int fa0/2
switchport port-security
switchport port-security mac-address 0090.2B88.810C
```

**SW5**
```
int fa0/1
switchport port-security
switchport port-security mac-address 0060.7063.7B9E
```

**SW6**
```
int fa0/2
switchport port-security
switchport port-security mac-address 00D0.D323.B58E
```

**SW7**
```
int fa0/1
switchport port-security
switchport port-security mac-address 000B.BE77.BE8E
```

**SW8**
```
int fa0/2
switchport port-security
switchport port-security mac-address 0060.7038.D309
```

**SW9**
```
int fa0/1
switchport port-security
switchport port-security mac-address 0001.977B.887E
```

**SW10**
```  
int fa0/2
switchport port-security
switchport port-security mac-address 0000.0C35.2985
```  

**SW11**
```  
int fa0/1
switchport port-security
switchport port-security mac-address 0060.3E47.59CC
```  



---

# DHCP
**Server DHCP1**
```
Pool name: informatica26
default gw: 192.168.26.1
start IP: 192.168.26.9
Mask> 255.255.255.0
Max number user: 100
```  
**Server DHCP2**

```
Pool name: informatica16
default gw: 192.168.16.1
start IP: 192.168.16.3
Mask> 255.255.255.0
Max number user: 100

```

  
  
# Servidor WEB
<!DOCTYPE html>
<html>
<head>
	<title>Redes 2</title>
<style>
		table {
			background-color: lightblue;
		}
		td {
			background-color: white;
		}
	</style>

</head>
<body>
	<h1>Grupo # 6</h1>

<table>
  <thead>
    <tr>
      <th>No.</th>
      <th>Carnet</th>
      <th>Nombre</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>201115018</td>
      <td>Joel Rodríguez Santos</td>
    </tr>
    <tr>
      <td>2</td>
      <td>201700644</td>
      <td>Javier Roberto Alfaro Vividor</td>
    </tr>

<tr>
      <td>3</td>
      <td>201709311</td>
      <td>Edin Emanuel Montenegro Vasquez</td>
    </tr>

<tr>
      <td>4</td>
      <td>200915080</td>
      <td>Julio Roberto Vasquez Santiago</td>
    </tr>
  </tbody>
</table>

</body>
</html>
    
    
---
    
    
    
    

# PROTOCOLOS UTILIZADOS EN ESTA TOPOLOGIA
## OSPF
OSPF se caracteriza por su capacidad para calcular la ruta más corta para el tráfico de la red, y por su capacidad para soportar redes de gran tamaño.
## EIGRP
EIGRP es un protocolo de enrutamiento dinámico que utiliza el algoritmo de distancia vector para determinar la ruta más corta a los destinos de la red.
## LACP
El enlace de canal de agrupación (LACP) es un protocolo de enrutamiento que permite a los dispositivos de red agrupar múltiples enlaces de red en un solo enlace de red virtual.
## Port Security
Protocolo que crear políticas de seguridad en capa 2 en donde se toma en cuenta la dirección MAC de los dispositivos finales, permitiendo la comunicación solo desde dispositivos registrados en el protocolo.
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

### VER CONFIGURACIÓN DE PORT SECURITY
```bash
do sh port-security int #INTERFACE
```



        
        
        
