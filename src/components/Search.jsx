import { Button, Container, Form, FormControl } from 'react-bootstrap'
import { useState } from 'react'
import Company from './Company'

export default function Search() {
  const [searchValue, setSearchValue] = useState('')
  const [companies, setCompanies] = useState([])

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://strive-jobs-api.herokuapp.com/jobs?search=${searchValue}&limit=12`
      )
      if (response.ok) {
        let { data } = await response.json()
        setCompanies(data)
        console.log(companies)
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Container>
      <Form inline className="justify-content-center mt-5" size="sm">
        <FormControl
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search"
          className="mr-sm-2"
        />
        <Button variant="outline-info" onClick={() => fetchData()}>
          Search
        </Button>
      </Form>

      <Company props={companies} />
    </Container>
  )
}