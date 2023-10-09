import compose from 'compose-function'
import { withChakra } from './with-chakra'
import { withRedux } from './with-redux'
import { withRouter } from './with-router'

export const withPoroviders = compose(withRouter, withChakra, withRedux)
