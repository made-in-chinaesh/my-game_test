import { ChakraProvider } from '@chakra-ui/react'
import { ReactNode } from 'react'

export const withChakra = (component: () => ReactNode) => () =>
	<ChakraProvider>{component()}</ChakraProvider>
