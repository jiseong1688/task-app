import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
const useTypedDispatch = () => useDispatch<AppDispatch>();

// const logger = useSelector((state: TypedUseSelectorHook<RootState>) => state.logger);

// interface Obj<T> {
//     name: T;
// }
