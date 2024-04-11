import { Divider, Image, Flex, Link, Box, Hide, Show } from '@chakra-ui/react'
import logo from '../../images/logo.svg'
import uk from '../../images/uk.png'
import fr from '../../images/fr.png'
import { useState } from 'react'
import CustomDrawer from '../UI/CustomDrawer'

const HeaderNav = () => {
	const [language, setLanguage] = useState<'uk' | 'fr'>('uk')

	const handleLanguageChange = () => {
		setLanguage(language === 'uk' ? 'fr' : 'uk')
	}

	return (
		<Box
			maxW='1400px'
			m='0 auto'
			p={['25px 10px', '25px 20px', null, null]}
			as='nav'
		>
			<Flex justify='space-between'>
				<Image src={logo.src} mb='25px' />
				<Flex gap='50px'>
					<Hide breakpoint='(max-width: 768px)'>
						<Link color='#fff' fontSize='20px' href='#menu'>
							menu
						</Link>
						<Link color='#fff' fontSize='20px' href='#book'>
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
					</Hide>
					<Show breakpoint='(max-width: 768px)'>
						<CustomDrawer />
					</Show>
				</Flex>
			</Flex>
			<Divider opacity='40%' />
		</Box>
	)
}

export default HeaderNav
