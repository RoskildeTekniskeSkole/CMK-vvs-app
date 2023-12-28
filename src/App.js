import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import ContextProvider from "./context/ContextProvider";
import Ref from "./pages/Ref";
import GF2Version from "./pages/GF2Version";
import GF2Teacher from "./pages/GF2Teacher";

function App() {
  return (
    <ContextProvider>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Header />
      <Routes>
        <Route path="/" element={<GF2Version />} key="GF2Version" />
        <Route path="/export" element={<ExportSettings />} key="Export" />
        <Route path="/ref" element={<Ref />} key="Ref" />
        <Route path="teacher" element={<GF2Teacher />} key="GF2Teacher" />
        <Route path="/ref" element={<Ref />} key="Ref" />
        <Route path="*" element={<Navigate to="/" />} key="NotFound" />
      </Routes>
      <Footer />
    </ContextProvider>
  );
}

export default App;
