import React from 'react';
import './App.css';

import { GuitarChordDiagram } from '@musicenviro/ui-elements'
import { calculateAllChords } from './calculate/calculateAllChords';


const allChords = calculateAllChords()
console.log(allChords[0].fingeredNotes)

function App() {
	const [column, setColumn] = React.useState<number>(0)
	const [row, setRow] = React.useState<number>(0)

	const index = (row: number, column: number) => row * 12 + column

	React.useEffect(() => {
		window.addEventListener("keydown", (e: KeyboardEvent) => {
			switch (e.key) {
				case 'ArrowLeft':
					setColumn(prev => Math.max(0, prev - 1))
					break;

				case 'ArrowRight':
					setColumn(prev => Math.min(11, prev + 1))
					break;

				case 'ArrowUp':
					setRow(prev => Math.max(0, prev - 1))
					break;

				case 'ArrowDown':
					setRow(prev => Math.min(34, prev + 1))
					break;
			}
		})
	}, [])

	return (
		<div>
			<header>GUITAR CHORD DIAGRAM BROWSER</header>
			<div id="main">
				<div className="label" id="chordType">{allChords[index(row, column)].type} 7th</div>
				<div className="label" id="strings">{allChords[index(row, column)].strings}</div>
				<div className="label" id="column">{column}</div>

				<div id="diagram-container">
					<GuitarChordDiagram fingeredNotes={allChords[index(row, column)].fingeredNotes} />
				</div>
			</div>
		</div>
	);
}


export default App;
