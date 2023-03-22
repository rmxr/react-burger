import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'
import {TRootState} from "../index";
import {AppDispatch} from "../index";
import {AppThunk} from "./types";

// export const useAppDispatch = () => useDispatch<AppDispatch | AppThunk>();
// export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;

type DispatchFunc = () => AppDispatch | AppThunk;
export const useAppDispatch: DispatchFunc = useDispatch
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector