const {Sequelize} = require("sequelize")
const process = require('process')
const configFile = process.env.CONFIG_FILE || __dirname + '/../config/config.json'
const env = process.env.NODE_ENV || 'development';
let config = require(configFile);
if (!config[env]) {
    throw new Error("error al cargar archivo de configuración");
    return
}

config = config[env]


const sequelize = new Sequelize(config)


module.exports = sequelize
