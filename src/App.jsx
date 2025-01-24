import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Feed from "./pages/feed";
import Results from "./pages/results";
import Detail from "./pages/detail";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Feed/>}/>
        <Route path="/watch" element={<Detail/>}/>
        <Route path="/results" element={<Results/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
