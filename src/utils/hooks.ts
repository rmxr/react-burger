import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'
import {TRootState} from "../index";
import {AppDispatch} from "../index";
import {AppThunk} from "./types";
import {ChangeEventHandler, Dispatch, SetStateAction, useState} from "react";

type DispatchFunc = () => AppDispatch | AppThunk;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;

export const useForm = <T>(inputValues: T): [T, ChangeEventHandler<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>, Dispatch<SetStateAction<T>>] => {
  const [values, setValues] = useState<T>(inputValues);

  const handleChange: ChangeEventHandler<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement> = (event) => {
    const {value, name} = event.target;
    setValues({...values, [name]: value});
  };
  return [values, handleChange, setValues];
};