import { useState } from 'react'
import { plantList } from '../datas/plantList'


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
            
        </div>
    )
}

export default Categories