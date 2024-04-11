import { Link } from '@chakra-ui/react'

const CustomButton = ({
	align,
	zindex,
	w,
	textA,
}: {
	align?: string
	zindex?: string
	w?: string
	textA?: any
}) => {
	return (
		<Link
			zIndex={zindex}
			alignSelf={align}
			textAlign={textA}
			mt='40px'
			p='10px 40px'
			border='2px solid #00857A'
			w={w}
			fontFamily='Arsenal'
			fontWeight='bold'
			_hover={{ bg: '#00857A', color: '#fff' }}
			href=''
		>
			read the full enroute story
		</Link>
	)
}

export default CustomButton
