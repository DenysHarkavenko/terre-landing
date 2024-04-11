'use client'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import bg from '../../images/header_img.png'
import HeaderNav from './HeaderNav'

const Header: React.FC = () => {
	return (
		<Box
			as='header'
			bg={`url(${bg.src}) no-repeat center`}
			bgSize='cover'
			h={['500px', '535px', '650px', '700px', '750px']}
		>
			<HeaderNav />
			<Box maxW='1360px' m='0 auto'>
				<Flex justify='space-between'>
					<Flex direction='column' alignSelf='flex-end'>
						<Heading
							color='#fff'
							fontSize={['50px', '70px', '90px', '100px', '120px']}
						>
							terre restaurant
						</Heading>
						<Flex
							align='center'
							direction={['column', 'column', 'row', 'row', 'row']}
						>
							<Flex
								color='#000'
								fontSize={['14px', '17px', '20px', '22px']}
								bg='#fff'
								boxSize={['70px', '80px', '90px', '100px', '120px']}
								borderRadius='50%'
								border='1px solid #fff'
								align='center'
								justify='center'
								textAlign='center'
								transition='all 0.3s linear'
								_hover={{
									bg: 'rgba(255, 255, 255, 0)',
									color: '#fff',
									transform: 'scale(120%)',
									cursor: 'pointer',
								}}
							>
								About <br /> us
							</Flex>
							<Text
								color='#fff'
								maxW='658px'
								fontSize={['14px', '17px', '20px', '22px']}
								ml={['0', null, 'null', '34px', null]}
							>
								We have beautiful and fun things coming up on the patio this
								summer. Now it only needs to… be summer. To be continued!
							</Text>
						</Flex>
					</Flex>
					<Text color='#fff'>125 Water street st. john's, nl 709 383 2136</Text>
				</Flex>
			</Box>
		</Box>
	)
}

export default Header
