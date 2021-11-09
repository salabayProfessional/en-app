import { useSelector } from "react-redux";
import { RootReducer } from "../store/slices/types";

export const useRole = () => useSelector((state: RootReducer) => state.auth.role);