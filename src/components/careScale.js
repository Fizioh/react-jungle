
import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'



function handleClick(arrosage) {
	alert(`Cette plante requiert ${arrosage} d'arrosage` )
}

function CareScale({ scaleValue, careType }) {
	const range = [1, 2, 3]
	const scaleType =
		careType === 'light' ? (
			<img src={Sun} alt='sun-icon' />
		) : (
			<img src={Water} alt='water-icon' />
		)
		var arrosage ='';

		if (scaleValue === 3) {
			arrosage = 'un max'
		} else if (scaleValue === 2) {
			arrosage = 'modérement'
		} else {
			arrosage = 'un poco'
		}
		

	return (
		<div onClick={() => handleClick(arrosage)}>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleType}</span>
				) : null
			)}
		</div>
	)
}

export default CareScale