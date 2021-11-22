import './App.css';
import { BrowserRouter,Route } from 'react-router-dom'
import { useState } from 'react'
import { Container } from 'react-bootstrap'
import NavBar from './components/Navbar/NavBar'
import Home from './components/Home/Home'
import Details from "./components/Details/Details"



function App() {

  const [searchJobs, setSearchJobs] = useState([])  
  const [searchCompanies, setSearchCompanies] = useState([])
  const [searchCategory, setSearchCategory] = useState([])

  const jobsData = (value) => {
    setSearchJobs(value)
  }

  const companiesData = (value) => {
    setSearchCompanies(value)
  }

  const categoryData = (value) => {
    setSearchCategory(value)
  }
  
  return (
    <BrowserRouter>
    <NavBar/>

    <Route exact path="/" render={(routerProps)=> <Home category={categoryData} companies={companiesData} jobs={jobsData} {...routerProps}  />} />
      <Route exact path="/details/:id" render={(routerProps)=> <Details category={searchCategory} companies={searchCompanies} jobs={searchJobs} {...routerProps}  />} />
     
    </BrowserRouter>
  );
}

export default App;

{/* <Routes>
<Route path="/" element={<Home />}/>
<Route path="/company/:company_name" element={<Company />} />
</Routes> */}