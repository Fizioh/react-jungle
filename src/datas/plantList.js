
import monstera from '../assets/monstera.jpg'
import lyrata from '../assets/lyrata.jpg'
import pothos from '../assets/pothos.jpg'
import succulente from '../assets/succulente.jpg'
import olivier from '../assets/olivier.jpg'
import basil from '../assets/basil.jpg'
import mint from '../assets/mint.jpg'
import calathea from '../assets/calathea.jpg'
import cactus from '../assets/cactus.jpg'

export const plantList = [
	{
		name: 'monstera',
		category: 'classique',
		id: '1ed',
        isSpecialOffer: true,
		light: 1,
		water: 2,
		cover: monstera,
		price: 15
	},
	{
		name: 'ficus lyrata',
		category: 'classique',
		id: '2ab',
		light: 2,
		water: 2,
		cover: lyrata,
		price: 16
	},
	{
		name: 'pothos argenté',
		category: 'classique',
		id: '3sd',
		light: 3,
		water: 1,
		cover: pothos,
		price: 9
	},
	{
		name: 'yucca',
		category: 'classique',
		id: '4kk',
        isBestSale: true,
		light: 2,
		water: 3,
		cover: calathea,
		price: 11
	},
	{
		name: 'olivier',
		category: 'extérieur',
		id: '5pl',
		light: 3,
		water: 1,
		cover: olivier,
		price: 19
	},
	{
		name: 'géranium',
		category: 'extérieur',
		id: '6uo',
		light: 2,
		water: 2,
		cover: basil,
		price: 6
	},
	{
		name: 'basilique',
		category: 'extérieur',
		id: '7ie',
		light: 3,
		water: 1,
		cover: mint,
		price: 10
	},
	{
		name: 'aloe',
		category: 'plante grasse',
		id: '8fp',
        isBestSale: true,
		light: 2,
		water: 1,
		cover: cactus,
		price: 17
	},
	{
		name: 'succulente',
		category: 'plante grasse',
		id: '9vn',
		light: 1,
		water: 1,
		cover: succulente,
		price: 4
	}
]