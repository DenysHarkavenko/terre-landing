import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import menu1 from '../images/menu1.png'
import menu2 from '../images/menu2.png'
import clock from '../images/clock.png'
import bg from '../images/bg2.svg'

const WorkTime = () => {
	return (
		<Box bg={`url(${bg.src}) no-repeat center`} bgSize='cover' h='fit-content'>
			<Flex
				justify='space-between'
				direction={['column', null, null, 'row', null]}
				maxW='1400px'
				m='0 auto'
				p={['40px 10px', '70px 20px', '100 120px']}
				gap='30'
			>
				<Flex direction={['column-reverse', null, null, 'column', null]}>
					<Image
						src={menu1.src}
						alt='Work time image 1'
						mt={['30px', null, null, '0', null]}
					/>
					<Box mt={['0', null, null, '175px']}>
						<Heading
							fontSize={['17px', '20px', '22px']}
							color='#00857A'
							fontFamily='Montez !important'
						>
							work time
						</Heading>
						<Heading
							fontSize={['40px', '50px', '60px']}
							fontWeight='500'
							mt='10px'
						>
							café
						</Heading>
						<Flex mt='30px' align='center'>
							<Image src={clock.src} boxSize={['40px', '50px']} />
							<Text fontSize={['17px', '20px', '22px']} ml='12px'>
								<span style={{ fontWeight: 'bold' }}>breakfast & Lunch:</span>{' '}
								every day from 8am – 3pm
							</Text>
						</Flex>
					</Box>
				</Flex>
				<Flex direction='column' justify='flex-end'>
					<Box>
						<Heading
							fontSize={['17px', '20px', '22px']}
							color='#00857A'
							fontFamily='Montez !important'
						>
							work time
						</Heading>
						<Heading
							fontSize={['40px', '50px', '60px']}
							fontWeight='500'
							mt='10px'
						>
							restaurant
						</Heading>
						<Flex mt='30px' align='center'>
							<Image src={clock.src} boxSize={['40px', '50px']} />
							<Text fontSize={['17px', '20px', '22px']} ml='12px'>
								<span style={{ fontWeight: 'bold' }}>friday:</span> 8am -
								11:30pm
							</Text>
						</Flex>
						<Flex mt='30px' align='center'>
							<Image src={clock.src} boxSize={['40px', '50px']} />
							<Text fontSize={['17px', '20px', '22px']} ml='12px'>
								<span style={{ fontWeight: 'bold' }}>saturday & sunday:</span>
								9am – 2:00pm
							</Text>
						</Flex>
					</Box>
					<Image
						src={menu2.src}
						alt='Work time image 1'
						mt={['30px', null, '94px']}
					/>
				</Flex>
			</Flex>
		</Box>
	)
}

export default WorkTime
