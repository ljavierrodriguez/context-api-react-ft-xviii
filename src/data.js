// Almacenar Datos en el navegador

// si es un array o objecto debemos transformar el valor usando JSON.stringify() 
// y para acceder nuevamente a ellos usamos JSON.parse()
/* 
Ejemplo: 

let persona = {
    name: 'Luis',
    lastname: 'Rodriguez'
}

Aqui se guarda el dato:
sessionStorage.setItem('persona', JSON.stringify(persona))


Aqui se lee y utiliza el dato:
let p = JSON.parse(sessionStorage.getItem('persona'))

*/

localStorage.getItem('name');
localStorage.setItem('name', 'Luis');
localStorage.removeItem('name');

sessionStorage.getItem('name');
sessionStorage.setItem('name', 'Luis');
sessionStorage.removeItem('name');
