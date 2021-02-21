import { plantList } from '../datas/plantList'
import '../styles/shoppingList.css'
import CareScale from './careScale'
import PlantItem from './plantItem'

function ShoppingList() {

	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	return (
		<div>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul className='lmj-plant-list'>
				{plantList.map((plant) => (
					<li key={plant.id} className='lmj-plant-item'>
						{plant.isSpecialOffer && <div className='lmj-sales'>Soldes !</div>}
						{plant.name}
						<CareScale careType='water' scaleValue={plant.water} />
						<CareScale careType='light' scaleValue={plant.light} />
						<PlantItem />
					</li>
				))}
			</ul>
		</div>
	)
}

export default ShoppingList