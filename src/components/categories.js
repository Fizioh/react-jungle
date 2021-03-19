import { useState } from 'react'
import { plantList } from '../datas/plantList'
import PlantItem from './plantItem'



function Categories(){
    const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)
    const [currentValue, setCurrentValue] = useState();

    return(
        <div>
            <select id="dropdown" value={currentValue} onChange={e => setCurrentValue(e.currentTarget.value)}>
            {categories.map((cat) => (
					<option value={cat} key={cat}>{cat}</option>
				))}
            </select>

            <ul className='lmj-plant-list'>
				{plantList.map(({id, cover, name, water, light, price, category }) => (
                    category === currentValue ? (
					<div key={id}>
					<PlantItem 
					cover={cover}
					name={name}
					price={price}
					water={water}
					light={light}
                    category={category}
					/>
					</div> ) : null
				))}
			</ul>

            
        </div>
    )
}

export default Categories