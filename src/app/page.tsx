import Gallery from '@/components/Gallery'
import Header from '@/components/Header/Header'
import OurHistory from '@/components/OurHistory'
import { Box, Heading } from '@chakra-ui/react'

export default function Home() {
	return (
		<>
			<Header />
			<OurHistory />
			<Gallery />
		</>
	)
}
