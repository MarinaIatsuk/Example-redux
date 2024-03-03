import { configureStore } from "@reduxjs/toolkit";
import TodoReduser from "./slice/TodoReduser";

export const store = configureStore({
    reducer:{
        todo:TodoReduser
    }
})