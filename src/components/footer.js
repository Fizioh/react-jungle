import { useState } from 'react'
import '../styles/footer.css'

function Footer(){
    const [inputValue, setInputValue] = useState('')
    const isInputError = !inputValue.includes('@')
   

    return(
        <footer className='lmj-footer'>
            <div className='lmj-footer-elem'>
                Pour les passionné-e-s de plantes
            </div>
            <div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
            <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                />
                {isInputError && (
                <div> Vous n'avez pas mis d'arobase...</div>
                )}
                
        </footer>
    )
}


export default Footer