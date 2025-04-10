import { boardsReducer } from "../slices/boardsSlice";
import { loggerReducer } from "../slices/loggerSlice";
import { modalReducer } from "../slices/modalslice";

const reducer = {
    logger: loggerReducer,
    boards: boardsReducer,
    modal: modalReducer
}

export default reducer;