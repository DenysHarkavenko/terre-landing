import { useState } from 'react'
import {
	Drawer,
	DrawerOverlay,
	DrawerContent,
	DrawerHeader,
	DrawerBody,
	DrawerFooter,
	Link,
	Image,
	useDisclosure,
	DrawerCloseButton,
	Flex,
	Divider,
	Box,
} from '@chakra-ui/react'
import uk from '../../images/uk.png'
import fr from '../../images/fr.png'
import burger_icon from '../../images/burger.png'
import logo from '../../images/logo.svg'
import inst from '../../images/inst.png'
import facebook from '../../images/facebook.png'

const CustomDrawer = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const [language, setLanguage] = useState<'uk' | 'fr'>('uk')

	const handleLanguageChange = () => {
		setLanguage(language === 'uk' ? 'fr' : 'uk')
	}

	return (
		<>
			<Image
				src={burger_icon.src}
				boxSize='40px'
				cursor='pointer'
				onClick={onOpen}
			/>
			<Drawer isOpen={isOpen} placement='right' onClose={onClose}>
				<DrawerOverlay />
				<DrawerContent h='330px'>
					<DrawerHeader h='65px' bg='#000' p='15px 10px'>
						<Image src={logo.src} h='31px' />
						<DrawerCloseButton color='#fff' size='15px' />
					</DrawerHeader>
					<DrawerBody p='15px 10px'>
						<Flex direction='column'>
							<Link color='#000' fontSize='20px' mb='2' mt='20px'>
								menu
							</Link>
							<Divider />
							<Link color='#000' fontSize='20px' mb='2' mt='20px' href='#book'>
								book now
							</Link>
							<Divider />
							<Link color='#000' fontSize='20px' mb='2' mt='20px'>
								gift cards
							</Link>
							<Divider />
						</Flex>
						<Flex justify='space-between' mt='20px' align='center'>
							<Flex gap='20px'>
								<Link>
									<Image src={inst.src} />
								</Link>
								<Link>
									<Image src={facebook.src} />
								</Link>
							</Flex>
							<Image
								src={language === 'uk' ? uk.src : fr.src}
								alt='language'
								h='28px'
								w='40px'
								onClick={handleLanguageChange}
								cursor='pointer'
							/>
						</Flex>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	)
}

export default CustomDrawer
