import { Divider, Image, Flex, Link, Box } from '@chakra-ui/react'
import logo from '../../images/logo.svg'
import uk from '../../images/uk.png'
import fr from '../../images/fr.png'
import { useState } from 'react'

const HeaderNav = () => {
	const [language, setLanguage] = useState<'uk' | 'fr'>('uk')

	const handleLanguageChange = () => {
		setLanguage(language === 'uk' ? 'fr' : 'uk')
	}

	return (
		<Box maxW='1360px' m='0 auto' p='25px 0' as='nav'>
			<Flex justify='space-between'>
				<Image src={logo.src} mb='25px' />
				<Flex gap='50px'>
					<Link color='#fff' fontSize='20px'>
						menu
					</Link>
					<Link color='#fff' fontSize='20px'>
						book now
					</Link>
					<Link color='#fff' fontSize='20px'>
						gift cards
					</Link>
					<Image
						src={language === 'uk' ? uk.src : fr.src}
						alt='language'
						h='28px'
						w='40px'
						onClick={handleLanguageChange}
						cursor='pointer'
					/>
				</Flex>
			</Flex>
			<Divider opacity='40%' />
		</Box>
	)
}

export default HeaderNav
