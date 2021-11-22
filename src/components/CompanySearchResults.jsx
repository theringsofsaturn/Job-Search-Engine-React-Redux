import { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Job from './Job'
import uniqid from 'uniqid'
import { useParams } from 'react-router-dom'

const CompanySearchResults = () => {

    const [jobs, setJobs] = useState([])
    const params = useParams()

    useEffect(() => {
        getJobs()
    }, [])


    const baseEndpoint = 'https://strive-jobs-api.herokuapp.com/jobs?company='

    const getJobs = async () => {
        const response = await fetch(baseEndpoint + params.companyName)
        const { data } = await response.json()

        setJobs(data)
    }

    return (
        <Container>
            <Row>
                <Col>
                    {jobs.map(jobData => <Job key={uniqid()} data={jobData} />)}
                </Col>
            </Row>
        </Container>
    )
}

export default CompanySearchResults