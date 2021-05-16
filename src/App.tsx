import { useState } from 'react';
import ChangeTitle from './components/effects/ChangeTitle';
import Clock from './components/effects/Clock';
import './App.css';


function App() {

	const [showTime, setShowTime] = useState(true)
 
	return (
		<div className="App">
		
		<h1>useEffect demo</h1>
		<main>
			<ChangeTitle />
			{showTime ? <Clock /> : null}

			<button onClick={() => setShowTime(!showTime)}> show/ hide time</button>
		</main>

		</div>
	);
	}

export default App;
