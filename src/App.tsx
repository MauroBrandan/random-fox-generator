import { useState } from 'react'
import RandomFox from './components/RandomFox'

type Fox = {
	src: string
	alt: string
}

function App() {
	const [foxes, setFoxes] = useState<Fox[]>([
		{ src: 'https://randomfox.ca/images/5.jpg', alt: 'Random fox number 5' },
		{ src: 'https://randomfox.ca/images/13.jpg', alt: 'Random fox number 13' },
		{ src: 'https://randomfox.ca/images/25.jpg', alt: 'Random fox number 25' }
	])

	return (
		<main className='w-full grid place-items-center'>
			<h1 className='text-2xl font-bold md:text-5xl'>Random Fox Generator</h1>
			<section className='w-full h-auto grid grid-cols-fox place-items-center gap-5'>
				{foxes.map((fox) => (
					<RandomFox src={fox.src} alt={fox.alt} />
				))}
			</section>
		</main>
	)
}

export default App
