'use client'
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import image1 from '../images/image1.png'
import image2 from '../images/image2.png'
import image3 from '../images/image3.png'
import image4 from '../images/image4.png'
import { useState } from 'react'

const Gallery = () => {
	const [backgroundImage, setBackgroundImage] = useState(image1.src)
	const [activeImage, setActiveImage] = useState(image1.src)

	const images = [
		{ src: image1.src, text: 'Text abouT photo#1' },
		{ src: image2.src, text: 'Text abouT photo#2' },
		{ src: image3.src, text: 'Text abouT photo#3' },
		{ src: image4.src, text: 'Text abouT photo#4' },
	]

	const handleImageClick = (src: any) => {
		setBackgroundImage(src)
		setActiveImage(src)
	}

	return (
		<Box
			className='relative'
			h={['500px', '575px', '625px', '700px', '750px']}
			p={['50px 10px', '50px 20px', '60px 40px', '60px 120px']}
			maxW='100%'
			style={{
				backgroundImage: `url(${backgroundImage})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
			}}
			zIndex='5'
		>
			<Flex
				w='100%'
				justify={['flex-end', null, 'space-between', null, null]}
				h='100%'
				align={['flex-start', null, 'flex-end', null, null]}
				direction={['column', null, 'row', null, null]}
			>
				<Text
					textAlign='center'
					color='#fff'
					mb={['15px', null, '0', null, null]}
					fontSize={['20px', '25px', '30px', '40px', '50px']}
				>
					{images.find((image) => image.src === activeImage)?.text}
				</Text>
				<Flex
					className='gap-5'
					justify={['space-between', null, null, null, null]}
				>
					{images.map((image, index) => (
						<Image
							h={['35px', '40px', '50px', '60px', '70px']}
							w={['70px', '80px', '90px', '100px', '140px']}
							border='1px solid white'
							objectFit='cover'
							className='cursor-pointer transition-transform duration-300 mt'
							key={image.src}
							src={image.src}
							alt={`image${index + 1}`}
							style={{
								transform:
									activeImage === image.src ? 'scale(1.10)' : 'scale(1)',
								opacity: activeImage === image.src ? 1 : 0.7,
							}}
							onClick={() => handleImageClick(image.src)}
						/>
					))}
				</Flex>
			</Flex>
		</Box>
	)
}

export default Gallery
