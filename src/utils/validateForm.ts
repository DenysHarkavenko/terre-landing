import { z } from 'zod'

export const validateForm = (formData: FormValues) => {
	const formSchema = z.object({
		name: z.string().nonempty('Please enter your name'),
		phoneNumber: z.string().nonempty('Please enter your phone number'),
		date: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/, {
			message: 'Please enter a valid date in format YYYY-MM-DDTHH:MM',
		}),
	})

	try {
		formSchema.parse(formData)
		return { isValid: true, errors: {} }
	} catch (error: any) {
		return { isValid: false, errors: error.errors }
	}
}
