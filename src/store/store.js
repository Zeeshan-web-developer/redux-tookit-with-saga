import { configureStore } from "@reduxjs/toolkit";
import { quotesApi } from "./services/Quotes";

export const store = configureStore({
  reducer: {
    [quotesApi.reducerPath]: quotesApi.reducer,
  },
  middleware: (gDM) => gDM().concat(quotesApi.middleware),
});