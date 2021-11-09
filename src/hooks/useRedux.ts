import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../store/slices/types";

export const useAppDispatch = () => useDispatch();

export const useAppSelector: TypedUseSelectorHook<RootReducer> = useSelector;