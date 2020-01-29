const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

app.get('/', ( req, res ) => res.send([{
    "name": "Xingangg",
    "producer": "Wa family members Zhaomei and Yenai",
    "origin": "China",
    "altitude": "1600masl",
    "roast": "Light"
  },
  {
    "name": "Reko Onancho",
    "producer": "20 Reko Onancho Farmers",
    "origin": "Ethiopia",
    "altitude": "1950 - 2100masl",
    "roast": "Light"
  },
  {
    "name": "La Perla Del Cafe",
    "producer": "Carlos Berrantes",
    "origin": "Costa Rica",
    "altitude": "1500 - 1650masl",
    "roast": "Light"
  },
  {
    "name": "La Virgen",
    "producer": "100 Members of the Grupo Asociativo Villa Esperanza",
    "origin": "Colombia",
    "altitude": "1500 - 1900masl",
    "roast": "Medium"
  },
  {
    "name": "Karinga",
    "producer": "Approx. 650 Karinga Co-operative Members",
    "origin": "Kenya",
    "altitude": "1700 - 1950masl",
    "roast": "Medium"
  }]))

app.listen(8080, () => console.log("App running on 8080"))
