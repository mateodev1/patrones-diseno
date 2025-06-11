/**
 * ! Factory Method:
 * El patrón Factory Method permite crear objetos sin especificar
 * la clase exacta del objeto que se creará.
 *
 * En lugar de eso, delegamos la creación de objetos a subclases o métodos
 * que encapsulan esta lógica.
 *
 * * Es útil cuando una clase no puede anticipar la clase
 * * de objetos que debe crear.
 *
 * https://refactoring.guru/es/design-patterns/factory-method
 *
 */

import { COLORS } from '../helpers/colors.ts'

interface Hamburger {
	prepare(): void
}

class ChickenHamburger implements Hamburger {
	prepare(): void {
		console.log('preparando una hamburguesa de %cpollo', COLORS.orange)
	}
}

class BeefHamburger implements Hamburger {
	prepare(): void {
		console.log('preparando una hamburguesa de %ccarne', COLORS.blue)
	}
}

class FrijolHamburger implements Hamburger {
	prepare(): void {
		console.log('preparando una hamburguesa de %cfrijol', COLORS.red)
	}
}
abstract class Restaurant {
	abstract createHamburger(): Hamburger

	orderHamburguer(): void {
		const hamburger = this.createHamburger()
		hamburger.prepare()
	}
}

class ChickenRestaurant extends Restaurant {
	override createHamburger(): Hamburger {
		return new ChickenHamburger()
	}
}

class BeefRestaurant extends Restaurant {
	override createHamburger(): Hamburger {
		return new BeefHamburger()
	}
}


class FrijolRestaurant extends Restaurant {
	override createHamburger(): Hamburger {
		return new FrijolHamburger()
	}
}


function main() {
	let restaurant: Restaurant

	const burgerType = prompt(`Que hamburguesa quieres? carne/pollo/frijol`)

	switch (burgerType) {
		case 'carne':
			restaurant = new BeefRestaurant()
			break
		case 'pollo':
			restaurant = new ChickenRestaurant()
			break
		case 'frijol':
			restaurant = new FrijolRestaurant()
			break
		default:
			throw new Error('no valido')
	}
	restaurant.orderHamburguer()
}

main()
