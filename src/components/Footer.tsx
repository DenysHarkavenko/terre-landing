import { Box, Flex, Heading, Image, Link, Show, Text } from '@chakra-ui/react'
import logo from '../images/logo.svg'
import inst from '../images/white_inst.svg'
import facebook from '../images/white_facebook.svg'

const Footer = () => {
	return (
		<Box bg='#101010'>
			<Flex
				maxW='1400px'
				m='0 auto'
				p={['54px 28px', '70px 20px', '80px 120px']}
				color='#fff'
				align={['center', null, null, null, 'unset']}
				justify='space-between'
				direction={['column', null, null, null, 'row']}
			>
				<Box>
					<Image src={logo.src} mb={['25px', null, null, null, 'unset']} />
					<Show breakpoint='(min-width: 1280px)'>
						<Flex mt='30px'>
							<Image src={inst.src} />
							<Image src={facebook.src} ml='20px' />
						</Flex>
					</Show>
				</Box>
				<Flex gap={['5', null, '20', null, null]}>
					<Flex gap='20' direction={['column', null, 'row', null, null]}>
						<Box>
							<Heading fontSize='20px'>SITEMAP</Heading>
							<Link display='block' mt='20px'>
								menu
							</Link>
							<Link>book now</Link>
						</Box>
						<Box>
							<Heading fontSize='20px'>ADRESS</Heading>
							<Text mt='20px'>125 water streetst. john’s, nl a1c 5x4</Text>
						</Box>
					</Flex>
					<Flex gap='20' direction={['column', null, 'row', null, null]}>
						<Box>
							<Heading fontSize='20px'>CONTACT</Heading>
							<Text mt='20px'>+7 09 383 2136</Text>
							<Text>info@terrerestaurant.com</Text>
						</Box>
						<Box>
							<Heading fontSize='20px'>OTHER</Heading>
							<Link display='block' mt='20px'>
								privacy
							</Link>
							<Link>terms</Link>
						</Box>
					</Flex>
				</Flex>
				<Show breakpoint='(max-width: 1280px)'>
					<Flex mt='30px'>
						<Image src={inst.src} />
						<Image src={facebook.src} ml='20px' />
					</Flex>
				</Show>
			</Flex>
		</Box>
	)
}

export default Footer
