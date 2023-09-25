const express = require('express');
const app = express();
const puerto = process.env.PORT || 3002;
app.use(express.json())
//Arreglo de objeto de categorias
let categorias = [
    {id:1, nombre:"Cocina", descripcion:"Elemementos para cocinar"},
    {id:2, nombre:"Limpieza", descripcion:"Elementos para limpieza"},
    {id:3, nombre:"Electrónica", descripcion:"Elementos de electrónica"},
    {id:4, nombre:"Ropa bebé", descripcion:"Elementos de ropa de bebé"},
    {id:5, nombre:"Linea Blanca", descripcion:"Elementos de línea blanca"},
    {id:6, nombre:"Jardinería", descripcion:"Elementos para jardinería"},
    {id:7, nombre:"Salud", descripcion:"Elementos para la salud"},
    {id:8, nombre:"Muebles", descripcion:"Elementos de muebles"},
    {id:9, nombre:"Lacteos", descripcion:"Elementos de lácteos"},
    {id:10, nombre:"Licores", descripcion:"Elementos de licores"}
];

app.get('/socios/v1/categorias', (req, res)=>{
    //1. Verificar si existen categorías
    if(categorias.length>0){
        res.status(200).json({
            estado:1,
            mensaje:"Exiten categorías",
            categorias: categorias
        })
    }else{
        res.status(404).json({
            estado:0,
            mensaje:"No exiten categorías",
            categorias: categorias
        })
    }
    //2. Mostrarlas con un estado y mensaje
    //3. Si existen, mostrar estado y mensaje
    //En formato JSON
    //Mostrar mensajes de estado del servidor 
    //Todas las categorias
})

app.get('/socios/v1/categorias/:id', (req, res)=>{
    //Solo una categoria
    const id = req.params.id;
    //Programación Funcional
    const categoria = categorias.find(categoria=>categoria.id==id)
    //Si se encontró una categoría
    if(categoria){
        res.status(200).json({
            estado:1,
            mensaje:"Categoria encontrada",
            categoria:categoria
        })
        
    }else{
        //No se encontró una categoría
        res.status(404).json({
            estado:0,
            mensaje:"No se encontró la categoría",
            categoria:{}
        })  
    }
    //Programación Estructurada
    for(let i = 0; i < array.length; i++){
        const element = array[i];
    }

    res.send('Mostrar una categoria por su id');
})

app.post('/socios/v1/categorias', (req, res)=>{
    //Crear un recurso - categoria
    //Requerimos un id
    //id = Generar un número aleatorio 
    //Nombre y descripción = Body
    const{nombre, descripcion} = req.body;
    const id = Math.round(Math.random()*1000);
    //Comprobar que el cliente(navegador) = usuario = programador
    if(nombre==undefined || descripcion==undefined){
        //Hay un error en la solicitud por parte del usuario
        res.status(400).json({
            estado:0,
            mensaje:"BAD REQUEST - Favor de llenar los campos correctamente"
        })
    }else{
        //En javascript como agregar un nuevo lemento a un arreglo
        const categoria = {id:id, nombre:nombre, descripcion:descripcion};
        const longitudInicial = categorias.length;
        categorias.push(categoria)
        if(categorias.length > longitudInicial){
            //Si se agregó una categoría todo OK
            res.status(201).json({
                estado:1,
                mensaje:"Categoría creada",
                categoria:categoria
            })
        }else{
            //Error del servidor al no poder crearse la categoria
            res.status(500).json({
                estado:0,
                mensaje:"Categoría no creada por un error desconocido",
                categoria:categoria
            })
        }
    }

    res.send('Crear una categoria');

})

app.put('/socios/v1/categorias/:id', (req,res)=>{
    //Actualizar un recurso - Actualizar una categoria
    const {id} = req.params;
    const {nombre,descripcion} = req.body;
    if(nombre==undefined || descripcion==undefined)
    {
        res.status(400).json({
            estado:0,
            mensaje:"Faltan parametros en la solicitud"
        })
    }
    else
    {
        const posActualizar = categorias.findIndex(categoria => categoria.id==id)
        if(posActualizar!= -1)
        {
            //Si encontro la categoria con el id buscado
            //Actualizar la categoria
            categorias[posActualizar].nombre=nombre;
            categorias[posActualizar].descripcion=descripcion;
            res.status(200).json({
                estado: 1,
                mensaje: "Categoria actualizada",
                categoria: categorias[posActualizar]
            })            
        }
        else
        {
            //No se encontro la categoria del id buscado
            res.status(404).json({
                estado:0,
                mensaje:"Categoria no encontrada"
            })
        }
    }

     res.send('Actualizar una categoria por su id');
})

app.delete('/socios/v1/categorias/:id', (req, res)=>{
    const {id} = req.params;
    const indiceEliminar = categorias.findIndex(categoria => categoria.id==id)
    if(indiceEliminar!=-1){
        //Borrar la categoria
        categorias.splice(indiceEliminar, 1);
        res.status(201).json({
            estado:1,
            mensaje:"Categoria eliminada con éxito"
        })
    }else{
        //Categoria no encontrada
        res.status(404).json({
            estado:0,
            mensaje:"Categoria no encontrada"
        })
    }
     //Eliminar una sola categoria del servidor
    // res.send('Eliminar una categoria por su id');

})

app.listen(puerto,()=>{
    console.log('Servidor corriendo en el puerto: ', puerto);

})