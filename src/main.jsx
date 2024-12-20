import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import store from "./redux/store.js";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Providerr } from "./components/ui/provider.jsx";

createRoot(document.getElementById("root")).render(
  // <Providerr>
  <Provider store={store}>
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition:Bounce
    />
    <App />
  </Provider>
  // </Providerr
);
