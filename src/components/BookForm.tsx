'use client'
import React, { useState } from 'react'
import {
	Box,
	Divider,
	Flex,
	FormControl,
	Heading,
	Input,
} from '@chakra-ui/react'
import bg from '../images/book_img.png'
import { validateForm } from '@/utils/validateForm'
import ValidationErrors from './UI/ValidateErrors'
import { Button } from '@chakra-ui/button'
import { sendGTMEvent } from '@next/third-parties/google'

const BookForm = () => {
	const [name, setName] = useState('')
	const [phoneNumber, setPhoneNumber] = useState('')
	const [date, setDate] = useState('')
	const [formErrors, setFormErrors] = useState<Record<string, string>>({})

	const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
		e.preventDefault()
		const formData: FormValues = { name, phoneNumber, date }

		const { isValid, errors } = validateForm(formData)
		setFormErrors(errors)

		if (isValid) {
			console.log('Form data is valid:', formData)
			sendGTMEvent({ event: 'buttonClicked', value: formData })
		} else {
			console.error('Form validation error:', errors)
		}
	}

	return (
		<Box
			bg={`url(${bg.src}) no-repeat center`}
			bgSize='cover'
			h='fit-content'
			id='book'
		>
			<Box maxW='1400px' m='0 auto' p={['60px 10px', '70px 84px', '100px 500px']}>
				<Flex direction='column' align='center'>
					<Heading
						fontWeight='400'
						fontSize={['17px', '20px', '22px']}
						color='#fff'
						fontFamily='Montez !important'
					>
						book a table
					</Heading>
					<Heading color='#fff' fontSize={['40px', '50px', '60px']}>
						book a table
					</Heading>
					<FormControl isRequired maxW='600px'>
						<Input
							placeholder='your name'
							value={name}
							onChange={(e) => setName(e.target.value)}
							color='#fff'
							mt='35px'
							border='none'
							p='0'
							_focus={{ boxShadow: 'none' }}
							isInvalid={'name' in formErrors}
						/>
						<ValidationErrors errors={{ name: formErrors.name }} />
						<Divider />
						<Input
							placeholder='your phone number'
							value={phoneNumber}
							onChange={(e) => setPhoneNumber(e.target.value)}
							color='#fff'
							mt='35px'
							border='none'
							p='0'
							_focus={{ boxShadow: 'none' }}
							isInvalid={'phoneNumber' in formErrors}
						/>
						<ValidationErrors
							errors={{ phoneNumber: formErrors.phoneNumber }}
						/>
						<Divider />
						<Input
							type='datetime-local'
							placeholder='date'
							value={date}
							onChange={(e) => setDate(e.target.value)}
							color='#fff'
							mt='35px'
							border='none'
							p='0'
							_focus={{ boxShadow: 'none' }}
							isInvalid={'date' in formErrors}
						/>
						<ValidationErrors errors={{ date: formErrors.date }} />
						<Divider />
						<Button
							onClick={handleSubmit}
							w='100%'
							mt='35px'
							bg='#00857A'
							color='#fff'
							h='50px'
							_hover={{ bg: '' }}
						>
							submit
						</Button>
					</FormControl>
				</Flex>
			</Box>
		</Box>
	)
}

export default BookForm
