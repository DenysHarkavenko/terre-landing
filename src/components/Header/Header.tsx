'use client'
import { Box, Divider, Flex, Heading, Text } from '@chakra-ui/react'
import bg from '../../images/header_img.png'
import HeaderNav from './HeaderNav'

const Header: React.FC = () => {
	return (
		<Box
			as='header'
			bg={`url(${bg.src}) no-repeat center`}
			bgSize='cover'
			h={['500px', '535px', '650px', '700px', '750px']}
			position='relative'
		>
			<HeaderNav />
			<Box maxW='1400px' m='0 auto' p={['0 10px', '0 20px', null, null]}>
				<Flex>
					<Flex
						direction='column'
						alignSelf='flex-end'
						position='absolute'
						bottom={['50px', '70px', '120px', null, null]}
					>
						<Heading
							color='#fff'
							fontSize={['50px', '70px', '90px', '100px', '120px']}
						>
							terre restaurant
						</Heading>
						<Flex
							align={['flex-start', null, 'center', null, null]}
							direction={[
								'column-reverse',
								'column-reverse',
								'row',
								'row',
								'row',
							]}
						>
							<Box
								color='#000'
								fontSize={['14px', '17px', '20px', '22px']}
								p={['12px 15px', '25px 30px', '30px 35px', '35px 40px']}
								// mt={['46px', null, '0', null, null]}
								mt='45px'
								bg='#fff'
								borderRadius='50%'
								border='1px solid #fff'
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
							</Box>
							<Text
								color='#fff'
								maxW='658px'
								fontSize={['14px', '17px', '20px', '22px']}
								ml={['0', null, '34px', null, null]}
							>
								We have beautiful and fun things coming up on the patio this
								summer. Now it only needs to… be summer. To be continued!
							</Text>
						</Flex>
					</Flex>
					<Text color='#fff' w='100%' textAlign='right'>
						125 Water street st. john's, nl 709 383 2136
					</Text>
				</Flex>
			</Box>
		</Box>
	)
}

export default Header
