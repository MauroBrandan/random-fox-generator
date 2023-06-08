import { useState, useEffect, useRef } from 'react'
import type { Fox } from '../types/Fox'

export default function RandomFox(fox: Fox): JSX.Element {
	const [src, setSrc] = useState('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=')
	const imgNode = useRef<HTMLImageElement>(null)

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (!entry.isIntersecting || !imgNode.current) {
					return
				}

				setSrc(fox.src)
			})
		})

		if (imgNode.current) {
			observer.observe(imgNode.current)
		}

		return () => {
			observer.disconnect()
		}
	}, [fox])

	return (
		<img
			src={src}
			alt={fox.alt}
			ref={imgNode}
			className='w-80 h-80 object-cover rounded-lg bg-gray-500'
		/>
	)
}
