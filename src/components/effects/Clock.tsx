import { useEffect, useState } from "react"

const Clock = () => {

	//en komponent för att komma ihåg tiden 
	const [time, setTime] = useState(0)
	const INTERVAL = 100 

	//för att starta premurationen 
	useEffect(() => {
					
				  		// setInterval startar premerationen 
		const intervalId = setInterval(() => {

				//var 100 sekund kommer set antropas och komponenten uppdateras med nytt värde 
				setTime(oldTime => oldTime + INTERVAL/ 1000)
			}, INTERVAL)

			
			// för att avbryta funktionen -avsluta premurationen 
			const cancelFunction = () => clearInterval(intervalId)
			return cancelFunction
	}, [])
 
	return (
		//jsx
		<div> 
			Vissible for {time.toFixed(1)} seconds <br />
			<button> Stop time </button>
		</div>
		
	)
}

export default Clock