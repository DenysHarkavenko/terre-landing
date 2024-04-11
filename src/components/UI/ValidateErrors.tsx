import React from 'react'

interface ValidationErrorsProps {
	errors: Record<string, string>
}

const ValidationErrors: React.FC<ValidationErrorsProps> = ({ errors }) => {
	return (
		<>
			{Object.entries(errors).map(([fieldName, errorMessage]) => (
				<span key={fieldName} style={{ color: 'red' }}>
					{errorMessage}
				</span>
			))}
		</>
	)
}

export default ValidationErrors
