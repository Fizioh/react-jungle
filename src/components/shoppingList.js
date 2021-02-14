const plantList = [
    'monstera',
    'ficus lyrata',
    'pothos argenté',
    'yucca',
    'palmier'
]

function ShoppingList() {
    return(
        <div>
            {plantList.map((plant) =>(
                <li key={'${plant}-${index}'}>{plant}</li>
            ))}
        </div>
    )
}

export default ShoppingList