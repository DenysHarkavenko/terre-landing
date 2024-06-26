import { Show, Flex, Heading, Text, Image } from '@chakra-ui/react'
import img1 from '../images/history1.png'
import img2 from '../images/history2.png'
import CustomButton from './UI/CustomButton'

const OurHistoryM_S = () => {
	return (
		<Show breakpoint='(max-width: 768px)'>
			<Flex direction='column' top='100px' left='120px' zIndex='5'>
				<Heading
					fontFamily='Montez !important'
					color='#00857A'
					fontSize={['17px', '20px', '22px']}
				>
					We could not be prouder to be.
				</Heading>
				<Heading fontSize={['40px', '50px', '60px']}>our history</Heading>
			</Flex>
			<Flex direction='column' position='relative' zIndex='1'>
				<Text
					maxW='768px'
					fontSize={['14px', '17px', '20px']}
					mt='48px'
					zIndex='5'
				>
					It only took one visit to Newfoundland & Labrador for Chef Matthew
					Swift to pack-up everything he owned and make St. John’s his new home.
					Heading kitchens in Ontario and Quebec restaurants, including Montreal
					institution Joe Beef, for two decades was the perfect primer for
					Matthew to break out on his own. Inspired by the provinces people,
					food, produce, history and jaw-dropping landscapes, Matthew and his
					incredible team have created a welcoming comfortable space that
					reflects and respects it’s environment. In 2021, Terre was selected as
					one of ‘Canada’s Best New Restaurants’ by enRoute Magazine’s expert
					food panel. We could not be prouder to be part of this prestigious
					list.
				</Text>
				<Show breakpoint='(min-width: 450px)'>
					<CustomButton zindex='5' w='fit-content' />
					<Image
						mt='50px'
						src={img2.src}
						alt='image1'
						h='280px'
						w='340px'
						transform='rotate(10deg)'
					/>
					<Image
						zIndex='1'
						position='absolute'
						top='200'
						right='0'
						mt='50px'
						src={img1.src}
						alt='image1'
						w='360px'
						h='400px'
						transform='rotate(-10deg)'
					/>
				</Show>
				<Show breakpoint='(max-width: 450px)'>
					<CustomButton align='center' w='100%' textA='center' />
					<Image
						alignSelf='center'
						mt='50px'
						src={img2.src}
						alt='image1'
						h='280px'
						w='340px'
						transform='rotate(-10deg)'
					/>
				</Show>
			</Flex>
		</Show>
	)
}

export default OurHistoryM_S
