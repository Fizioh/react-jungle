import { plantList } from '../datas/plantList'
import '../styles/shoppingList.css'
import PlantItem from './plantItem'


function ShoppingList({cart, updateCart}) {

	function addToCart(name, price) {
		const currentPlantAdded = cart.find((plant) => plant.name === name)
		if (currentPlantAdded) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
				...cartFilteredCurrentPlant,
				{name, price, amount: currentPlantAdded.amount + 1}
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}

	return (
		<div>
			
			<ul className='lmj-plant-list'>
				{plantList.map(({id, cover, name, water, light, price }) => (
					<div key={id}>
					<PlantItem 
					cover={cover}
					name={name}
					price={price}
					water={water}
					light={light}
					/>
					<button onClick={() => addToCart(name, price)}>Ajouter</button>
					</div>
				))}
			</ul>
		</div>
	)
}

export default ShoppingList