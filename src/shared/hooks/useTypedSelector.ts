import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { TypeRootState } from 'shared/store'


export const useTypedSelector: TypedUseSelectorHook<TypeRootState> = useSelector