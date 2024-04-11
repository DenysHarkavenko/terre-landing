import { Show, Flex, Heading, Image, Text } from '@chakra-ui/react'
import CustomButton from './UI/CustomButton'
import img1 from '../images/history1.png'
import img2 from '../images/history2.png'

const OurHistoryLg = () => {
	return (
		<Show breakpoint='(min-width: 768px)'>
			<Flex justify='space-between'>
				<Flex direction='column' top='100px' left='120px'>
					<Heading fontSize={['40px', '50px', '60px']}>our history</Heading>
					<Image
						mt='55px'
						src={img1.src}
						alt='image1'
						h='500px'
						w='460px'
						transform='rotate(-10deg)'
					/>
				</Flex>
				<Flex direction='column'>
					<Heading
						fontFamily='Montez !important'
						color='#00857A'
						fontSize={['17px', '20px', '22px']}
						textAlign='right'
					>
						We could not be prouder to be.
					</Heading>
					<Text maxW='768px' fontSize={['14px', '17px', '20px']} mt='48px'>
						It only took one visit to Newfoundland & Labrador for Chef Matthew
						Swift to pack-up everything he owned and make St. John’s his new
						home. Heading kitchens in Ontario and Quebec restaurants, including
						Montreal institution Joe Beef, for two decades was the perfect
						primer for Matthew to break out on his own. Inspired by the
						provinces people, food, produce, history and jaw-dropping
						landscapes, Matthew and his incredible team have created a welcoming
						comfortable space that reflects and respects it’s environment. In
						2021, Terre was selected as one of ‘Canada’s Best New Restaurants’
						by enRoute Magazine’s expert food panel. We could not be prouder to
						be part of this prestigious list.
					</Text>
					<CustomButton align={'flex-end'} w='fit-content' />
					<Image
						mt='50px'
						src={img2.src}
						alt='image1'
						h='320px'
						w='400px'
						transform='rotate(10deg)'
					/>
				</Flex>
			</Flex>
		</Show>
	)
}

export default OurHistoryLg
