/**
 * ! Factory Function
 * Es un patrón de diseño que nos permite crear objetos o funciones de manera dinámica que serán
 * usados posteriormente en el código.
 *
 * * Es útil cuando necesitamos crear objetos o funciones de manera dinámica,
 * * es decir, en tiempo de ejecución y no en tiempo de compilación.
 *
 */

type Language = 'es' | 'en' | 'fr' 

const createGreeter= (lang:Language)=>{
  return function(name:string){
    const message = {
      es:`Hola, ${name}`,
      en:`Hello, ${name}`,
      fr:`Bonjour, ${name}`
    }

    return console.log(message[lang])
  }
}

(()=>{
  const spanish = createGreeter('es')
  const english = createGreeter('en')
  const french = createGreeter('fr')

spanish('mateo')
english('matew')
french('mateu')

})()