import { useSelector } from "react-redux";
import { RootReducer } from "../store/slices/types";

export const useHomeWork = () => useSelector((state: RootReducer) => state.auth.homework);