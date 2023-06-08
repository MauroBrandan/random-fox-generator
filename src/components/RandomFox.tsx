type Props = {
	src: string
	alt: string
}

export default function RandomFox({ src, alt }: Props): JSX.Element {
	return <img src={src} alt={alt} className='w-80 h-80 object-cover rounded-lg' />
}
