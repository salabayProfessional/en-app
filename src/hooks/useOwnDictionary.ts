import { useSelector } from "react-redux";
import { RootReducer } from "../store/slices/types";

export const useOwnDictionary = () => useSelector((state: RootReducer) => state.auth.dictionary);