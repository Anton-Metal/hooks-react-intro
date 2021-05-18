
const SunAjax = () => {
	const fetchSunriseSunset = (lat: number, lng: number): void => {

	}

	return (

		<section>
			<h3>Choose city</h3>
			<div>
				<button onClick={() => fetchSunriseSunset(59.023588, 15.522546)}>
				Vingåker
				</button>
			</div>
		</section>	
	)

}

export default SunAjax