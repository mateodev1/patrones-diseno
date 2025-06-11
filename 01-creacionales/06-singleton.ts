/**
 * ! Singleton:
 * Es un patrón de diseño creacional que garantiza que una clase
 * tenga una única instancia y proporciona un punto de acceso global a ella.
 *
 * * Es útil cuando necesitas controlar el acceso a una única instancia
 * * de una clase, como por ejemplo, en un objeto de base de datos o en un
 * * objeto de configuración.
 *
 * https://refactoring.guru/es/design-patterns/singleton
 */

class DragonBalls {
  private static instance: DragonBalls
  private ballsCollected: number
  
  
  private constructor(){
    this.ballsCollected = 0
  }

  public static getInstances():DragonBalls {
    if(!DragonBalls.instance){
      DragonBalls.instance = new DragonBalls()
      console.log('Esferas creadas')
    }
    return DragonBalls.instance
  }

  collectBall():void{
    if(this.ballsCollected < 7){
      this.ballsCollected++
      console.log(`Esfera recolectada total: ${this.ballsCollected}`)
    }
    console.log('todas las esferas recolectadas')
  }


  summonShenlong(){
    if(this.ballsCollected == 7 ){
      console.log(`bicho invocado`)
      this.ballsCollected = 0
      return;
    }
    console.log(`todavia faltan ${7- this.ballsCollected} esferas`)
  }
}


(function(){
  const gokuBalls = DragonBalls.getInstances()

  gokuBalls.collectBall()
  gokuBalls.collectBall()
  gokuBalls.collectBall()

  gokuBalls.summonShenlong()
})()