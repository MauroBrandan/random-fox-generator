import RandomFox from './components/RandomFox'

function App() {
	return (
		<main className='w-full grid place-items-center'>
			<h1 className='text-5xl font-bold '>Random Fox Generator</h1>
			<section>
				<RandomFox
					src='https://randomfox.ca/images/5.jpg'
					alt='Random fox number 5'
				/>
			</section>
		</main>
	)
}

export default App
