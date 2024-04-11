import type { Metadata } from 'next'
import { Providers } from './providers'
import './globals.css'
import { GoogleTagManager } from '@next/third-parties/google'

export const metadata: Metadata = {
	title: 'Terre',
	description:
		'We have beautiful and fun things coming up on the patio this summer. Now it only needs to… be summer. To be continued!',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body>
				<Providers>
					<main>{children}</main>
					{/* Past your GT here */}
					<GoogleTagManager gtmId='YOUR-GTAG' />
				</Providers>
			</body>
		</html>
	)
}
