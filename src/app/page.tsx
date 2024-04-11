import BookForm from '@/components/BookForm'
import Footer from '@/components/Footer'
import Gallery from '@/components/Gallery'
import Header from '@/components/Header/Header'
import OurHistory from '@/components/OurHistory'
import WorkTime from '@/components/WorkTime'
import { Box, Heading } from '@chakra-ui/react'

export default function Home() {
	return (
		<>
			<Header />
			<OurHistory />
			<Gallery />
			<WorkTime />
			<BookForm />
			<Footer />
		</>
	)
}
