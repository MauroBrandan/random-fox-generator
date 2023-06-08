import { useState } from 'react'
import { random } from 'lodash'
import type { MouseEventHandler } from 'react'
import type { Fox } from './types/Fox'
import RandomFox from './components/RandomFox'

function App() {
	const [foxes, setFoxes] = useState<Fox[]>([])

	const addNewFox: MouseEventHandler<HTMLButtonElement> = () => {
		const id = random(1, 120)

		const newFox: Fox = {
			src: `https://randomfox.ca/images/${id}.jpg`,
			alt: `Random fox number ${id}`
		}

		setFoxes((prevState) => [...prevState, newFox])
	}

	return (
		<main className='w-full grid place-items-center gap-10'>
			<h1 className='text-2xl font-bold m-8 md:text-5xl'>Random Fox Generator</h1>

			<button onClick={addNewFox} className='bg-blue-700 rounded-3xl p-2'>
				Generate a new Fox
			</button>

			<section className='w-full h-auto grid grid-cols-fox place-items-center gap-5'>
				{foxes.map((fox, index) => (
					<RandomFox key={index} src={fox.src} alt={fox.alt} />
				))}
			</section>
		</main>
	)
}

export default App
