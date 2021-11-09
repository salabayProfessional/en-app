import { useSelector } from "react-redux";
import { RootReducer } from "../store/slices/types";

export const useAuth = () => useSelector((state: RootReducer) => state.auth.authentication);