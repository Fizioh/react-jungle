import { plantList } from '../datas/plantList'


function Categories({currentValue, setCurrentValue}){
    const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)
    return(
        <div>
            <select id="dropdown" value={currentValue}  onChange={e => setCurrentValue(e.currentTarget.value)}>
            <option value='reinit'>reinitialiser</option>
            {categories.map((cat) => (
					<option value={cat} key={cat}>{cat}</option>
				))}
            </select>
        </div>
    )
}

export default Categories