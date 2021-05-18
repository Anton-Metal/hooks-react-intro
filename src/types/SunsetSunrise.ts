


interface SunriseSunsetResponse {
	results: null | SunriseSunsetData,
	status: string

  }

  interface SunriseSunsetData {
	sunrise: string,
	sunset: string,
	solar_noon: string,
	day_length: string,
	civil_twilight_begin: string,
	civil_twilight_end: string,
	nautical_twilight_begin: string,
	nautical_twilight_end: string,
	astronomical_twilight_begin: string,
	astronomical_twilight_end: string
  }
  
  export type { SunriseSunsetResponse, SunriseSunsetData }