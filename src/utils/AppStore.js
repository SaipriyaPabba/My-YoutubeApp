import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./AppSlice";

const Appstore=configureStore({
    reducer:
    {
        app:AppSlice,
    }
});
export default Appstore;