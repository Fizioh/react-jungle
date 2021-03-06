import CareScale from './careScale'
import '../styles/plantItem.css'

function handleClick(plantName) {
    alert(`Vous voulez prendre une ${plantName} ? Très bon choix !`);
}

function PlantItem({id, cover, name, water, light, price}) {
   return (
       <li key={id} className='lmj-plant-item' onClick={() => handleClick(name)}>
            <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
            {name} <span className='lmj-plant-item-price'>{price} $</span>
            <div>
                <CareScale careType='water' scaleValue={water} />
                <CareScale careType='light' scaleValue={light} />

            </div>
       </li>
   )
}

export default PlantItem