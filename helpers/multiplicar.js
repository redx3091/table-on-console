
const fs = require('fs')
const colors = require('colors')

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {

    try {
        
        let salida, consola = ''

        for(let i =1; i <= hasta; i++){
            salida += `${base} X ${i} = ${base * i}\n`
            consola += `${base} ${'X'.green} ${i} ${'='.green} ${base * i}\n`
        }
        if(listar){
            console.log('=================='.red)
            console.log(`   Tabla del ${base}  `.blue)
            console.log('=================='.red)
            console.log(consola)
        }
        

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)

        return `tabla-${base}.txt`
    } catch (err) {
        throw err
    }
  
}

module.exports = {
  crearArchivo
}