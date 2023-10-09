import Routing from 'pages'
import Layout from 'widgets/layout'
import { withPoroviders } from './providers'
import './styles/index.scss'

function App() {
	return (
		<Layout>
			<Routing />
		</Layout>
	)
}

export default withPoroviders(App)
