-use ecommerce

-db.productos.insert([{"title":"Escuadra","price":120,"thumbnail":"https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png"},{"title":"Calculadora","price":580,"thumbnail":"https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png"},{"title":"GloboTerráqueo","price":900,"thumbnail":"https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png"},{"title":"Patineta","price":1280,"thumbnail":"https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png"},{"title":"Monopatin","price":1700,"thumbnail":"https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png"},{"title":"Bicicleta","price":2300,"thumbnail":"https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png"},{"title":"Termo","price":2860,"thumbnail":"https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png"},{"title":"Mate","price":3350,"thumbnail":"https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png"},{"title":"Sombrilla","price":4320,"thumbnail":"https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png"},{"title":"Jego de tejo","price":4990,"thumbnail":"https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png"}])

-db.mensajes.insert([{"socketid":"1abjJHP7yKZLxxVeAAAB","email":"GamalMen@gmail.com","mensaje":"Hola","fecha":"Sun, 04 Dec 2022 17:43:05 GMT"},{"socketid":"y1j1xMUbxnXDzV3KAAAD","email":"pedro@gmail.com","mensaje":"Hola, que tal ?","fecha":"Sun, 04 Dec 2022 17:43:45 GMT"},{"socketid":"1xSoOiLh9h6GPYmqAAAD","email":"GamalMen@gmail.com","mensaje":"Todo bien","fecha":"Sun, 04 Dec 2022 17:44:04 GMT" }, { "socketid": "9x_td6RUBiK9upOYAAAB", "email": "GamalMen@gmail.com", "mensaje": "vos ?", "fecha": "Sun, 04 Dec 2022 17:44:09 GMT" }, { "socketid": "9iAquKiEqvzt4NZJAAAB", "email": "pedro@gmail.com", "mensaje": "Me alegro!!!", "fecha": "Sun, 04 Dec 2022 17:44:35 GMT" }, { "socketid": "T5EhQM5Zk0v7zYkvAAAB", "email": "pedro@gmail.com", "mensaje": "Todo bien por el momento tambien", "fecha": "Sun, 04 Dec 2022 17:45:03 GMT" }, { "socketid": "jtuWyXZFTp8Wq9hKAAAB", "email": "pedro@gmail.com", "mensaje": "Que se cuenta ?", "fecha": "Sun, 04 Dec 2022 17:45:13 GMT" }, { "socketid": "KU4edNW0Y4JbdKDCAAAD", "email": "GamalMen@gmail.com", "mensaje": "Nada interesante, trabajando", "fecha": "Sun, 04 Dec 2022 17:45:40 GMT" }, { "socketid": "mNFat4G2-AVDNgHxAAAD", "email": "pedro@gmail.com", "mensaje": "Jajaja También trabajando", "fecha": "Sun, 04 Dec 2022 17:46:02 GMT" }, { "socketid": "XdiEkJPzb08UvKiGAAAC", "email": "GamalMen@gmail.com", "mensaje": "xD", "fecha": "Sun, 04 Dec 2022 17:46:19 GMT" } ])

-db.mensajes.find().pretty()

-db.productos.find().pretty()

-db.mensajes.estimatedDocumentCount()

-db.productos.estimatedDocumentCount()

-db.productos.insertOne({"title": "Reposera", "price": 5000, "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png"})


-db.productos.find({price: {$lt:1000}},{title:1,price:1,_id:0}).pretty()

-db.productos.find({price: {$gt:1000,$lt:3000}},{title:1,price:1,_id:0}).pretty()

-db.productos.find({price: {$gt:3000}},{title:1,price:1,_id:0}).pretty()

-db.productos.find({},{title:1,price:1,_id:0}).sort( { price: 1 } ).limit(1).skip(2).pretty()

-db.productos.update({},{$set:{"stock":100}},{upsert:false,multi:true})

-db.productos.update({price: {$gt:4000}},{$set:{"stock":0}},{upsert:false,multi:true})

-db.productos.deleteMany({price: {$lt:1000}})

-use admin

-db.createUser({user: "pepe",pwd: "asd456",roles: [{role: "read", db: "ecommerce"}]})

-mongo -u pepe -p asd456

