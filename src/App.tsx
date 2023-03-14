import Layout from "./components/Layout";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Countries from "./pages/countries";
import Details from "./pages/Details";

function App() {
  return (
    <div className=''>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            {/* <Route path='/' element={<Navigate to='/countries' replace />} /> */}
            <Route path='/' element={<Countries />} />
            <Route path='/details' element={<Details />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
