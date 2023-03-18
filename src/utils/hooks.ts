import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'
import {TRootState, AppDispatch} from "../index";
// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector