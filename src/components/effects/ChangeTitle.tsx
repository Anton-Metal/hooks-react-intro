import { useEffect, useState } from "react"


const ChangeTitle = () => {

	// för att göra att funktionen bara renderar en gång 
	const [changeTitle, setChangeTitle] = useState(false)

	useEffect(() => {
		if( changeTitle ) {

			document.title = 'useEffect demo'
			setChangeTitle(false)
		}

		// för att göra så att funktionen bara kör när changeTitle ändrar värde, 
		// alltså om något i aray:n ändrar värde 
	}, [changeTitle])

	return(

		<div>
		<button onClick={() => setChangeTitle(true)}> set title to "useEffect demo"</button>
		</div>

	)
}
export default ChangeTitle