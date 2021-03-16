import '../styles/cart.css';
import { useState } from 'react'

function Cart({cart, updateCart}) {
    const [isOpen, setIsOpen] = useState(true)
	const total = cart.reduce(
			(acc, plantType) => acc + plantType.amount * plantType.price,
			0
	)

    return isOpen ? (

      <div className='lmj-cart'>
			        <button
				      className='lmj-cart-toggle-button'
				      onClick={() => setIsOpen(false)}
			        >
				      Fermer

			        </button>

                  <h2>Panier</h2>
				  {cart.map(({ name, price, amount }, index) => (
					  <div key={`${name}-${index}`}>
						{name} {price}$ *{amount}
					  </div>
				  ))}
                  <h3>Total : {monsteraPrice * cart}$</h3>
                  
        </div>
      ) : (
            <div className='lmj-cart-closed'>
			          <button
				                className='lmj-cart-toggle-button'
				                onClick={() => setIsOpen(true)}
			          >
				                Ouvrir le Panier
			          </button>
		      </div>
      )
    }

    export default Cart