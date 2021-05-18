import { useState } from "react"
import { useMountedRef } from '../../hooks/useMountedRef'
import { City } from '../../types/City'
import { SunriseSunsetResponse, SunriseSunsetData } from '../../types/SunsetSunrise'


const API_URL = 'https://api.sunrise-sunset.org/json'



  

  const cities: City[] = [
	{name: 'Vingåker', lat: 59.023588, lng: 15.522546 },
	{name: 'Stockholm', lat: 59.3294, lng: 18.0686 },
	{name: 'Katrineholm', lat: 58.99587, lng: 16.20721}

  ]


const SunSetAjax = () => {
	
	const [cityName, setCityName] = useState('')
	const [data, setData] = useState<null | SunriseSunsetData>(null)
	const isMounted = useMountedRef()
	
	// funktionen ska inte retunera något värde därför är det void
	const fetchSunriseSunset = async (fetchCityName: string ): Promise<void> => {
		//			find för att hämta ett city object 
		const city = cities.find(c => c.name === fetchCityName)
		// kontrollera så city inte ör undefined
		if( !city ) {
			console.log('City is undefined')
			return;  
		}

		// fö att fetcha 
		const queryString = `?lat=${city.lat}&lng=${city.lng}`
		const url = API_URL + queryString

		
		// använder fetch för att skicka request till en webbserver och webbservern svarar med en response 
		// response innehåller hur requestet har gått
		// skicka fecth request
		const response = await fetch(url, { method: 'GET' })
		// för att plocka ut datan från responsen
		// får tillbaka data
		const responseData: SunriseSunsetResponse = await response.json()


		// kontrollera att komponenten finns innan vi ändrar state, alltså komponenten kankse inte längre är mounted
		 if( isMounted.current ) {
			 			 
		//sparar data i state och behåll results from api:t
		// sen spara resultatet med setData
		setData(responseData.results)
		//tala om vilket city man har klickat på 
		setCityName(fetchCityName)

		 }
 		
	}

	return (

		<section>
			<h3>Choose city</h3>
			<div>

				{cities.map(city => (
					<button key={city.name} onClick={() => fetchSunriseSunset(city.name)}>
					{city.name}
					</button>
				))}

			</div>
			<p>
				{
				data === null ? 'Choose a city' : 
				`The sun rises at ${data.sunrise} today in ${cityName} and it will set at ${data.sunset}.`
				}	
			</p>
		</section>	
	)

}

export default SunSetAjax