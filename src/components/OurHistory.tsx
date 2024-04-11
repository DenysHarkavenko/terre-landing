import { Box, Flex, Heading, Image, Link, Show, Text } from '@chakra-ui/react'
import bg from '../images/bg1.svg'
import OurHistoryLg from './OurHistoryLg'
import OurHistoryM_S from './OurHistoryM_S'

const OurHistory = () => {
	return (
		<Box bg={`url(${bg.src}) no-repeat center`} bgSize='cover' id='about'>
			<Box
				maxW='1400px'
				m='0 auto'
				p={['40px 10px', '70px 20px', '100 120px']}
				pb='0 !important'
			>
				<OurHistoryLg />
				<OurHistoryM_S />
			</Box>
		</Box>
	)
}

export default OurHistory
