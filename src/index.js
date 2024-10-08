const express = require('express')
const app = express()
const db = require('./models')
const PORT = 3001

app.use(express.json())

app.listen(PORT, ()=>{
    console.log(`Aplicacion iniiciada en el puerto ${PORT}`)
    // Ojo: Esta linea es para desarrollo que sincroniza los modelos con la base
    // es decir que crea la tabla en la base de dato y si existe la borra y la vuelve a crear
    //db.sequelize.sync({force:true}) 
    //await db.sequelize.authenticate() seguramente lo usemos con otra base 
}

)