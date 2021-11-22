import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import MainSearch from "./components/MainSearch"
import CompanySearchResults from "./components/CompanySearchResults"


function App() {
  const [searchJobs, setSearchJobs] = useState([]);
  const [searchCompanies, setSearchCompanies] = useState([]);
  const [searchCategory, setSearchCategory] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainSearch />} />
        <Route path="/:companyName" element={<CompanySearchResults />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

{
  /* <Routes>
<Route path="/" element={<Home />}/>
<Route path="/company/:company_name" element={<Company />} />
</Routes> */
}
