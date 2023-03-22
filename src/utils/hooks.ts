import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'
import {TRootState} from "../index";
import {AppDispatch} from "../index";
import {AppThunk} from "./types";


export const useAppDispatch = () => useDispatch<AppDispatch | AppThunk>();
// export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;