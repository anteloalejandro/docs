---
layout: '../../layouts/DocLayout.astro'
title: 'README Vademecum'
draft: false
---

# Overview

This API is used to obtain information on phytosanitary products.

# Requests

**Base URL**: https://locatec.es

## Login

**GET** /fitogest/ws/vademecum/login

Obtain a token to use in future requests.

### Query parameters

- `usuario` - The username. Must be registered first.
- `constrasena` - The password.

### Response

Returns a token inside `data` if its successful.

**Success**

```json
{
	"status": 200,
	"status_message": "OK",
	"data": {
		"token": "51tE9l3wCDyrpJiZJLKu2auW09gUElQSM2h4rNlfl9phPirB"
	}
}
```

**Failure**

```json
{
	"status": 401,
	"status_message": "Unauthorized: Login failed",
	"data": {}
}
```

## Get product data

**POST** /fitogest/ws/vademecum/getRefById.php

### Query parameters

- `token` - A valid token obtained from the Login request.
- `num_registro`

### Request body

```json
 {
  "content": {
    "farm_info": { },
    "list_spray_info": [
      {
        "application_date": "2023-05-19T17:30:25.926+02:00",
        "field_name": "1_4",
        "product_name": "Axial One",
        "flow": "500.0",
        "flow_unit": "LITERS",
        "concentration": "1.0",
        "concentration_unit": "LITERS",
        "preventive_measure": "",
        "phytosanitary_measure": "",
        "growth_regulators": "",
        "mdf_registration": "",
        "affected_area_in_hectares": "3.89",
        "justification": "",
        "efficacy": "",
        "id": "",
        "season_id": "2ec87596-5c57-4255-abc8-374daac67e4e",
        "assignee_id": "",
        "assignee_name": "Celia Robles Angel",
        "owner_id": "",
        "owner_name": "Celia Robles Angel",
        "product_id": "0392052c-ece2-48ad-b9ae-069408015c08",
        "field_id": "062a3654-f636-11ed-8539-bd51b3d54d10",
        "concatenated_phenomena": "",
        "resource_id": null,
        "resource_name": null,
        "date_of_treatment_inspection": "",
        "validation_date": "19/05/2023 15:31",
        "treatment_validation": "",
        "notes": "",
        "crop": "CEBADA",
        "variety": "Adwokat",
        "total_quantity": "3.89",
        "total_quantity_unit": "LITERS"
      }
    ],
    "list_users_info": [ ],
    "list_products_info": [ ],
    "list_fields_info": [ ],
    "list_phenomenons_info": [ ],
    "list_resources_info": [ ]
  }
}
```

### Response

**Success**

```json
{
	"status": 200,
	"status_message": "OK",
	"data": {
		"CUADERNO": [
			{
				"Codigo_SIEX": null,
				"CA_Explotacion": "",
				"Codigo_Rea": "",
				"Cuaderno": null,
				"Titular": "",
				"DatosExplotacion": {
					"MedidaPreventivaCultural": [
						{
							"IdMedidaPreventCultural": null
						}
					]
				},
				"ActividadesExplotacion": {
					"TratamientosPostCosecha": [
						{
							"Producto": "CEBADA",
							"Cantidad": "3.89",
							"FechaActuacion": "2023-05-19",
							"Unidad": "LITERS",
							"ProductoFito": {
								"NombreProducto": null,
								"NumRegistro": "0392052c-ece2-48ad-b9ae-069408015c08",
								"Cantidad": "500.0",
								"Unidad": "LITERS"
							}
						},
						{
							"Producto": "CEBADA",
							"Cantidad": "5.35",
							"FechaActuacion": "2023-05-19",
							"Unidad": "LITERS",
							"ProductoFito": {
								"NombreProducto": null,
								"NumRegistro": "0392052c-ece2-48ad-b9ae-069408015c08",
								"Cantidad": "400.0",
								"Unidad": "LITERS"
							}
						},
						{
							"Producto": "CEBADA",
							"Cantidad": "5.35",
							"FechaActuacion": "2023-05-19",
							"Unidad": "LITERS",
							"ProductoFito": {
								"NombreProducto": null,
								"NumRegistro": "0392052c-ece2-48ad-b9ae-069408015c08",
								"Cantidad": "300.0",
								"Unidad": "LITERS"
							}
						}
					],
					"SiembraPlantacion": [
						{
							"SiembraPlantacion": null,
							"FechaInicio": null,
							"DGCs": [
								{
									"Provincia": null,
									"Municipio": null,
									"Agregado": null,
									"Zona": null,
									"Poligono": null,
									"Parcela": null,
									"Recinto": null,
									"Producto": null,
									"Variedad": null,
									"ProductoCosechado": null
								}
							],
							"Cantidad": null,
							"MarcoV": null,
							"MarcoH": null,
							"DensidadPlantacion": null,
							"UsoSemillaTratada": {
								"Tratamiento": null,
								"Fecha": null,
								"Producto": null,
								"NumeroLote": null,
								"ProductoFito": {
									"NombreProducto": null,
									"NumRegistro": "0392052c-ece2-48ad-b9ae-069408015c08",
									"Cantidad": "500.0",
									"Unidad": "LITERS"
								},
								"Eficacia": "",
								"Observaciones": ""
							}
						},
						{
							"SiembraPlantacion": null,
							"FechaInicio": null,
							"DGCs": [
								{
									"Provincia": null,
									"Municipio": null,
									"Agregado": null,
									"Zona": null,
									"Poligono": null,
									"Parcela": null,
									"Recinto": null,
									"Producto": null,
									"Variedad": null,
									"ProductoCosechado": null
								}
							],
							"Cantidad": null,
							"MarcoV": null,
							"MarcoH": null,
							"DensidadPlantacion": null,
							"UsoSemillaTratada": {
								"Tratamiento": null,
								"Fecha": null,
								"Producto": null,
								"NumeroLote": null,
								"ProductoFito": {
									"NombreProducto": null,
									"NumRegistro": "0392052c-ece2-48ad-b9ae-069408015c08",
									"Cantidad": "400.0",
									"Unidad": "LITERS"
								},
								"Eficacia": "",
								"Observaciones": ""
							}
						},
						{
							"SiembraPlantacion": null,
							"FechaInicio": null,
							"DGCs": [
								{
									"Provincia": null,
									"Municipio": null,
									"Agregado": null,
									"Zona": null,
									"Poligono": null,
									"Parcela": null,
									"Recinto": null,
									"Producto": null,
									"Variedad": null,
									"ProductoCosechado": null
								}
							],
							"Cantidad": null,
							"MarcoV": null,
							"MarcoH": null,
							"DensidadPlantacion": null,
							"UsoSemillaTratada": {
								"Tratamiento": null,
								"Fecha": null,
								"Producto": null,
								"NumeroLote": null,
								"ProductoFito": {
									"NombreProducto": null,
									"NumRegistro": "0392052c-ece2-48ad-b9ae-069408015c08",
									"Cantidad": "300.0",
									"Unidad": "LITERS"
								},
								"Eficacia": "",
								"Observaciones": ""
							}
						}
					],
					"TratamientosEdifInstalaciones": [
						{
							"FechaActuacion": "2023-05-19",
							"Edificaciones": [
								{
									"RefCatastral": null
								}
							],
							"ProductoFito": {
								"NombreProducto": null,
								"NumRegistro": "0392052c-ece2-48ad-b9ae-069408015c08",
								"Cantidad": "500.0",
								"Unidad": "LITERS"
							},
							"EquipoAplicador": {
								"Nombre": null,
								"PrimerApellido": null,
								"SegundoApellido": null,
								"ID_Aplicador": null,
								"NumROPO": null,
								"NumROMA": null,
								"NumREGANIP": null
							},
							"Eficacia": "",
							"Observaciones": ""
						}
					]
				}
			}
		]
	}
}
```

# TO-DO

- [ ] Cambiar de arrays associativos a clases
- [ ] Comprobar tipos de dato
- [ ] Validar tipos de dato
- [ ] Comprobar patrones 
- [ ] Conocer el formato de entrada
- [ ] Crear formato de entrada usando tabla de equivalencias
- [x] Añadir soporte para objetos opcionales con atributos obligatorios

## Requests
- [ ] Llamada autorizaciones_excepcionales
	- [ ] Filtrar por activo (bool)
- [ ] LLamada otras_denominaciones

# NOTAS

fecha_publicacion cultivo plaga_funcion

- Filtrar autorizaciones_excepcionales
	- activo 0-1
- otras_denominaciones
