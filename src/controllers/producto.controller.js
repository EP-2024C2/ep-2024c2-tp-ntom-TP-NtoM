const { Producto } = require('../models')
const productosController= {}

const addProducto = async (req,res) => {
    const{nombre, descripcion,precio,pathImg} = req.body

    const producto = await Producto.create({
        nombre, descripcion,precio,pathImg 
    })
    res.json(producto)
}
productosController.addProducto= addProducto

const getProductos = async (req,res) => {
    const productos = await Producto.findAll()
    res.json(productos)
}
productosController.getProductos = getProductos



const getProductoById = async (req,res) => {
    const id = req.params.id
    const producto = await Producto.findOne({
        where: {id},
        attributes: ['nombre','descripcion','precio']
    })
    res.json(producto)
}
productosController.getProductoById = getProductoById

const updateProducto = async (req,res) =>{
    const{nombre,descripcion,precio,pathImg} = req.body
    const id = req.params.id
    const productoAActualizar = await Producto.update({
        nombre:nombre,
        descripcion:descripcion,
        pathImg:pathImg,
        precio:precio,
    },{where: {id}})
    res.status(200).json(productoAActualizar)//VER XQ DEVUELVE EL ID
}
productosController.updateProducto= updateProducto

const deleteProductoById = async (req,res) => {
    const id = req.params.id
    const productoEliminado = await Producto.destroy({where: {id}})
    res.status(204).json({mensaje:  `el producto ${productoEliminado} fue eliminado`})
}
productosController.deleteProductoById = deleteProductoById

module.exports = productosController