import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";

const App = () => {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<div>Login</div>} />
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </div>
    </>
  );
}

export default App;