---
layout: '../../layouts/DocLayout.astro'
title: API Vademecum
draft: false
---

# INTRODUCTION

The API requires input credentials in order to authenticate users. Upon
successful authentication, the API returns a JSON Web Token (JWT) to
authorize the user to access protected resources.

In case of an error, a code is displayed alongside a message detailing
the reason and the requested information is not displayed.

Every response object will have the following format:

```json
{"status": number, "status_message": string, "data": {}}
```

> *Note: We have recently added the ability to filter products and usage agents by date and code.*

# REQUESTS

## Base URL

All requests in this document are preceded by this URL:

**`https://locatec.es/proyectos/fitogest/ws/vademecum`**

## Login

This is an example of the call to the login function passing the
username and password as parameters and returning the token as a
response.

### REQUEST URL

**`GET`**` /login`

### INPUT PARAMETERS

*QUERY PARAMETERS*

  - **user:** The username. Must be registered first. (syngenta2)

  - **pass:** The password. (1234)

### RESPONSE

```json
{
    "status": 200,
    "status_message": "OK",
    "data": {
        "token": "zNinbc3ALVZIa3l67UPVf64FMVZ29kEvGLMmMes7ofs0yrny"
    }
}
```

## Get Products By Reference

This request is used to obtain data from a phytosanitary product.

It requires you to introduce both a valid token and the product you want
to get data from.

### REQUEST URL

**`GET`**` /getProductByRef`

### INPUT PARAMETERS

*QUERY PARAMETERS*

  - **token**: A token obtained at login.

  - **num_registro** *(optional)*: A string of characters that
    identifies a product. If it’s not set, all products will be
    returned.

  - **fecha_actualizacion** *(optional)*: A date to filter products by.
    If its set, all products after said date will be returned.

  - **codigo_actualizacion** *(optional)*: A code to filter products by
    the type of their last update.

### VALID *codigo_*actualización VALUES

|                      |                                                                                                                                               |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| **CODE**             | **DESCRIPTION**                                                                                                                               |
| REFERENCIA           | Number under which a product is reguistered with the spanish ministry                                                                         |
| NOMBRE_COMERCIAL    | Commercial name under which a product is traded                                                                                               |
| FABRICANTE           | Manufacturer of the commerical product                                                                                                        |
| COMPOSICION          | Ingredient which prevents, destroys, repels, or mitigates a pest, or is a plant regulator, defoliant, desiccant, or nitrogen stabilizer       |
| FECHA_CADUCIDAD     | Date by which a product is no longer to be applied                                                                                            |
| FECHA_INSCRIPCION   | Date when a product was registered for the first time with the spanish ministry                                                               |
| FECHA_LIMITE_VENTA | Date until which a product can be sold commercially                                                                                           |
| FECHA_CANCELACION   | Revokation date (date of registration withdrawal). Key for the manufacturer, however, the user can still apply if the product is not expired. |
| PRODUCT_INSERT      | The code products have when they are first added to the database.                                                                             |

### 

### RESPONSE

```json
{
  "status": 200,
  "status_message": "OK",
  "data": [
    {
      "id": "3961",
      "referencia": "25462",
      "nombre_comercial": "FLUROSTAR 200",
      "fecha_inscripcion": "29/10/2014",
      "fecha_caducidad": "31/12/2024",
      "titular": "GLOBACHEM N.V.",
      "fabricante": "GLOBACHEM N.V.",
      "composicion": "FLUROXIPIR 20% (ESTER METILHEPTIL) [EC] P/V",
      "fecha_cancelacion": null,
      "fecha_limite_venta": null,
      "codigo_actualizacion": "FECHA_FICHA",
      "fecha_actualizacion": "10/03/2022",
      "fecha_ficha": "10/03/2022"
    }
  ]
}
```

## Get Usage Agent By Product Reference

This request is used to obtain a list of Usage-Agents from a
phytosanitary product.

It requires you to introduce both a valid token and the product you want
to get this data from.

### REQUEST URL

**GET** /getUsageAgentByRef

### INPUT PARAMETERS

*QUERY PARAMETERS*

  - **token**: A token obtained at login.

  - **num_registro**: A string of characters that identifies a product.

  - **fecha_actualizacion** *(optional)*: A date to filter usage agents
    by. If its set, all products after said date will be returned.

  - **codigo_actualizacion** *(optional)*: A code to filter usage
    agents by the type of their last update.

### VALID *codigo_actualizacion* VALUES

|                   |                                                                                                                                |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| **CODE**          | **DESCRIPTION**                                                                                                                |
| USO               | Crop the CP Product can be applied on (eg: Barley)                                                                             |
| AGENTE            | This is the target (pest, disease, weed, …)                                                                                    |
| DOSIS_MIN        | Minimum allowed dose for 1 application                                                                                         |
| DOSIS_MAX        | Maximum allowed dose for 1 application                                                                                         |
| UNIDADES          | Unit of measurement for the allowed dosage                                                                                     |
| PLAZO_SEGURIDAD  | Days until the harvest. Minimum amount of time between the last application of a pesticide and when the crop can be harvested. |
| VOL_CALDO        | Total volume of water applied on a field (usually measured by hectares)                                                        |
| N_APLICACIONES   | Number of allowed applications in one season for that CP product and crop                                                      |
| INTERVALOS        | Intervals one must wait to reapply CP Product (eg: 7 days)                                                                     |
| FORMA_EPOCA      | How and when should a CP Product be applied (eg: apply until BBCH39 on weeds)                                                  |
| USOAGENTE_ADD    | The code usage agents have when they are added to the database and are related to an existing product.                         |
| USOAGENTE_INSERT | The code usage agents have when they are added to the database at the same time as the product they are related to.            |

### RESPONSE

```json
{
  "status": 200,
  "status_message": "OK",
  "data": [
    {
      "id": "27735",
      "referencia": "25462",
      "uso": "Cebada",
      "agente": "DICOTILEDONEAS",
      "dosis_min": "1",
      "dosis_max": "1",
      "unidades": "l/ha",
      "n_aplicaciones": null,
      "intervalos": null,
      "vol_caldo": null,
      "forma_epoca": "En cebada de primavera, dosis 0,75 l/Ha. Aplicar en primavera, desde el incio del ahijado hasta la hoja bandera.",
      "plazo_seguridad": "NP",
      "codigo_actualizacion": "",
      "fecha_actualizacion": "13/11/2019"
    },
    {
      "id": "119817",
      "referencia": "25462",
      "uso": "Gramíneas (prados de siembra)",
      "agente": "DICOTILEDONEAS",
      "dosis_min": "0,75",
      "dosis_max": "0,75",
      "unidades": "l/ha",
      "n_aplicaciones": null,
      "intervalos": null,
      "vol_caldo": null,
      "forma_epoca": "Aplicar en primavera, desde el estadío de 3-5 hojas de las gramíneas. Para el control de Rumex tratar cuando alcance el estadío de roseta.",
      "plazo_seguridad": "15",
      "codigo_actualizacion": "USOAGENTE_ADD",
      "fecha_actualizacion": "19/02/2020"
    },
    {
      "id": "73249",
      "referencia": "25462",
      "uso": "Maíz",
      "agente": "DICOTILEDONEAS",
      "dosis_min": "1",
      "dosis_max": "1",
      "unidades": "l/ha",
      "n_aplicaciones": null,
      "intervalos": null,
      "vol_caldo": null,
      "forma_epoca": "Aplicar desde el estadío de 3-5 hojas hasta el final del encañado.",
      "plazo_seguridad": "NP",
      "codigo_actualizacion": "",
      "fecha_actualizacion": "13/11/2019"
    }
  ]
}
```
## Get exceptional authorizations

This request is used to obtain a list of authorizations.

It requires you to introduce a valid token.

### REQUEST URL

**GET** /getExceptionalAuthorizations

### INPUT PARAMETERS

*QUERY PARAMETERS*

  - **token**: A token obtained at login.

  - **activo** *(optional)*: Can be either 0 or 1. If its set the
    authorizations will be filtered by their state (active or unactive).

### RESPONSE

```json
{
  "status": 200,
  "status_message": "OK",
  "data": [
    {
      "id": "537",
      "fecha_publicacion": "03/07/2023",
      "cultivo": "Semillas maíz",
      "plaga_funcion": "Tratamiento semillas de maíz contra gusanos grises (Agrotis spp), gusanos de alambre (Agriotis spp) y diabrótica (Diabrotica sp.) y la posterior siembra de semillas tratadas en las Comunidades autónomas de Cataluña, Andalucía, Aragón, Extremadura, Castilla La Mancha, Navarra, Castilla y León, Madrid, Valencia y Galicia",
      "sustancia_activa": "Ciantraniliprol 62,5% [FS] P/V",
      "producto_comercial": "Siembra de semillas tratadas con productos fitosanitarios formulados a base de Ciantraniliprol 62,5% [FS] P/V",
      "fecha_inicio": "Ver el PDF adjunto",
      "fecha_fin": "Ver el PDF adjunto",
      "ficha_tecnica": null,
      "activo": "1"
    },
    {
      "id": "538",
      "fecha_publicacion": "03/07/2023",
      "cultivo": "Semillas girasol",
      "plaga_funcion": "Tratamiento de semillas de girasol contra gusanos grises (Agrotis spp) y gusanos de alambre (Agriotis spp) en las Comunidades autónomas de Andalucía y Extremadura y la posterior siembra de las semillas tratadas en las Comunidades autónomas de Andalucía, Extremadura, Castilla y León, Cataluña y Castilla La Mancha",
      "sustancia_activa": "Lambda cihalotrin 22% [CS] P/V",
      "producto_comercial": "Siembra de semillas tratadas con productos fitosanitarios formulados a base de Lambda cihalotrin 22% [CS] P/V",
      "fecha_inicio": "Ver el PDF adjunto",
      "fecha_fin": "Ver el PDF adjunto",
      "ficha_tecnica": null,
      "activo": "1"
    },
    {
      "id": "539",
      "fecha_publicacion": "03/07/2023",
      "cultivo": "Tomate de industria, vid, viveros de fresa, frambuesa y mora, zanahoria, rábano, boniato, patata, melón, sandía, fresa, frambuesa y mora, hortalizas de hoja, tomate.",
      "plaga_funcion": "Tratamiento de desinfección del suelo en las Comunidades autónomas de Castilla La Mancha, Extremadura, Castilla y León, Andalucía, Murcia, Baleares y Comunidad Foral de Navarra",
      "sustancia_activa": "Metam Sodio 51% [SL] P/V",
      "producto_comercial": "Productos fitosanitarios formulados a base de Metam Sodio 51% [SL] P/V",
      "fecha_inicio": "Ver el PDF adjunto",
      "fecha_fin": "Ver el PDF adjunto",
      "ficha_tecnica": null,
      "activo": "1"
    }
  ]
}
```

## Get other denominations

This request is used to obtain a list of authorizations.

It requires you to introduce a valid token.

### REQUEST URL

**GET** /getOtherDenominations

### INPUT PARAMETERS

*QUERY PARAMETERS*

  - **token**: A token obtained at login.

### RESPONSE

```json
{
  "status": 200,
  "status_message": "OK",
  "data": [
    {
      "id": "1",
      "num_registro": "24343",
      "nombre_comercial": "SAFRAN",
      "materia_activa": "ABAMECTINA 1,8% [EC] P/V",
      "concesionario": "TRADE CORPORATION INTERNATIONAL S.A.",
      "denominaciones_comunes": "ABAMECTINA 1,8 EC TRADECORP",
      "fecha_aceptacion": "14/12/2011"
    },
    {
      "id": "2",
      "num_registro": "25395",
      "nombre_comercial": "HERBENURON",
      "materia_activa": "TRIBENURON-METIL 75% [WG] P/P",
      "concesionario": "TRADE CORPORATION INTERNATIONAL S.A.",
      "denominaciones_comunes": "TRIBENURON-METIL 75 % WG TRADECORP",
      "fecha_aceptacion": "22/03/2012"
    },
    {
      "id": "3",
      "num_registro": "16232",
      "nombre_comercial": "CITRASHINE N-IMZ",
      "materia_activa": "IMAZALIL 0,2% [EW] P/V",
      "concesionario": "DECCO IBÉRICA POST-COSECHAS, S.A.U.",
      "denominaciones_comunes": "CITRASHINE 101 IMZ",
      "fecha_aceptacion": "11/04/2012"
    }
  ]
}
```

# MAPA API

The Spanish Ministry has a publc API everyone can use in order to get
certain info about fitosanitary products. This section explains some
useful requests said API allows.

## Code snippet to get a PDF by Reference (NODE.JS)

```javascript
const fs = require("fs");
const path = require("path");

const baseUrl = "https://servicio.mapa.gob.es/regfiweb";

/* VARIABLES */
const downloadDir = "pdf";
const reference = "ES-01101";

const jsonPromise = fetch(
  baseUrl + "/Exportaciones/ExportJson/?" +
    new URLSearchParams({
      tipoExportacion: "Productos",
      dataDTO: JSON.stringify({
        numRegistro: reference,
      }),
    }),
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: {},
  }
);

const pdfPromise = jsonPromise
  .then((response) => response.json())
  .then((data) => {
    const producto = JSON.parse(data)[0];
    return fetch(
      baseUrl + "/Productos/ExportFichaProductoPdf/?" +
        new URLSearchParams({
          idProducto: producto.IdProducto,
        }),
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: {},
      }
    );
  })
  .catch(console.err);

pdfPromise
  .then((pdfResponse) => {
    if (pdfResponse.ok) return pdfResponse.arrayBuffer();
    else throw new Error("No se ha descargado correctamente");
  })
  .then((pdfData) => {
    fs.writeFile(
      path.join(downloadDir, reference + ".pdf"),
      Buffer.from(pdfData),
      (err) => {
        if (err) console.error(err);
        console.log("Pdf creaddo");
      }
    );
  })
  .catch(console.err);
```

## Base URL

**https://servicio.mapa.gob.es/regfiweb**

## Get product info

This API call is used to obtain some general info about a given product.

### REQUEST URL

**POST** /Exportaciones/ExportJson

### INPUT PARAMETERS

*QUERY PARAMETERS*

- **tipoExportación**: To get product info this value must be “Productos”.

- **DataDTO** *(optional)*: An set of filters.
The most important one for products is ‘numRegistro’, with which you can filter products by their reference.
It can also be an empty object to return info on all the products.

## Download product datasheets (PDF)

This API call allows users to obtain a PDF datasheet pertaining to a
product. It requires to know the ID of said product on the Spanish
Ministry’s database, which can be obtained with the previously described
call.

### REQUEST URL

**POST** /Productos/ExportFichaProductoPdf

### INPUT PARAMETERS

*QUERY PARAMETERS*

  - **idProducto:** A product’s ID.

# POSSIBLE RESPONSE STATES

| Status | Status_message                                                      |
| ------ | -------------------------------------------------------------------- |
| 200    | OK                                                                   |
| 400    | Bad Request: Missing Parameter                                       |
| 400    | Bad Request: Badly Formatted JSON                                    |
| 401    | Unauthorized: Login Failed                                           |
| 500    | Internal Server Error: We’ve made a mistake, but we’re working on it |
