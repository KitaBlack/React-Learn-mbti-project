import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Test from "./pages/Test";
import Result from "./pages/Result";
import Layout from "./components/layout/Layout";

function App() {
  return (
    // <div className="text-red-600">hello</div>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
