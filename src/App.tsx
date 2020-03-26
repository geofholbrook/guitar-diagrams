import React from 'react';
import './App.css';

import { GuitarChordDiagram } from '@musicenviro/ui-elements'

function App() {
	const ref = React.createRef<HTMLCanvasElement>()

	React.useEffect(() => {
		const canvas = ref.current
		if (!canvas) return
		const ctx = canvas.getContext('2d')
		if (!ctx) return

		ctx.fillRect(0, 0, canvas.width, canvas.height)
	})

	return (
		<div className="App">
			<div style={{height: 300, width: 300}}>
				<GuitarChordDiagram /> 
			</div>



			{/* <div>
        <canvas height={'500'} ref={ref}></canvas>
      </div> */}
		</div>
	);
}

export default App;
