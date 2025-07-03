// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
// import { configureStore } from "@reduxjs/toolkit";
// import { Provider } from "react-redux";
// import rootReducer from "./store/rootReducer.ts";

const queryClient = new QueryClient({});

// const store = configureStore({
//   reducer: rootReducer,
// });

createRoot(document.getElementById("root")!).render(
  // <Provider store={store}>
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </BrowserRouter>
  // </Provider>
);
