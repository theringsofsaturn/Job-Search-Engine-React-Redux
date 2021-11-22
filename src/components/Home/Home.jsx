import React, { Component } from 'react';
import { Container, Row, Col, Form, Button, FormControl } from "react-bootstrap"
import JobList from "../JobList/JobList"
import "./Home.css"

class Home extends Component {
    state={
        jobs:[],
        companies:[],
        search:"",
        companySearch:"",
        categories:[],
        categorySearch:"",
        categoryJobs:[]
    }

    componentDidMount = () => {
        this.fetchCategories()
    }

    searchJobs = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(`https://strive-jobs-api.herokuapp.com/jobs?search=${this.state.search}`) 
            const data = await response.json()
            this.props.jobs(data.jobs)
            console.log(data);
            if(response.ok){
                this.setState({
                    ...this.state,
                    jobs: data.jobs,
                })
            }
        } catch (error) {
            console.log(error);
        }
    }


    searchCompanies = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(`https://strive-jobs-api.herokuapp.com/jobs?company=${this.state.companySearch}`) 
            const data = await response.json()
            this.props.companies(data.jobs)
            console.log(data.jobs);
            if(response.ok){
                this.setState({
                    ...this.state,
                    companies: data.jobs,
                })
            }
        } catch (error) {
            console.log(error);
        }
    }
    
    fetchCategories = async (e) => {
        try {
            const response = await fetch(`https://strive-jobs-api.herokuapp.com/jobs/categories`) 
            const data = await response.json()
            console.log(data.jobs);
            if(response.ok){
                this.setState({
                    ...this.state,
                    categories: data.jobs,
                })
            }
        } catch (error) {
            console.log(error);
        }
    }

    searchCategories = async (e) => {
        console.log(this.state.category);
        try {
            const response = await fetch(`https://strive-jobs-api.herokuapp.com/jobs?category=${this.state.categorySearch}`)
            const data = await response.json()
            this.props.category(data.jobs)
            console.log(data.jobs);
            if(response.ok){
                this.setState({
                    ...this.state,
                    categoryJobs: data.jobs,
                })
            }

        }catch (error){
            console.log(error);
        }
    }

    render() {
        return (
            <Container fluid className="" >
                <Row className="justify-content-center my-5 home-body pb-5">
                   <Col md={4} className=" ">
                       <h4 className="py-3">Search By Job Title</h4>
                        <Form inline onSubmit={(e)=>this.searchJobs(e)}>
                            <FormControl
                            value={this.state.search}
                            onChange={(e)=>
                                this.setState({
                                    ...this.state,
                                    search:e.target.value
                            })}	
                            type="text" 
                            placeholder="Search" 
                            className=" mr-sm-2" />
                            <Button type="submit">Submit</Button>
                        </Form>
                   </Col>
                   
                   <Col md={4} className="ml-auto">
                   <h4 className="py-3">Filter by Category</h4>
                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Control
                            value={this.state.categorySearch}
                            onChange={(e)=> {
                                this.setState({
                                ...this.state,
                                categorySearch:e.target.value
                            })
                            this.searchCategories(e)
                        }}
                             as="select" 
                             defaultValue="Select...">
                                <option>Select...</option>
                                {this.state.categories && this.state.categories.map(category =>  
                                <option value={category.name}>{category.name}</option>
                                )}
                               
                            </Form.Control>
                        </Form.Group>
                   </Col>

                   <Col md={4} className="ml-auto">
                   <h4 className="py-3">Search By Company Name</h4>
                        <Form inline onSubmit={(e)=>this.searchCompanies(e)}>
                            <FormControl
                            value={this.state.companySearch}
                            onChange={(e)=>
                                this.setState({
                                    ...this.state,
                                    companySearch:e.target.value
                            })}	
                            type="text" 
                            placeholder="Search" 
                            className=" mr-sm-2" />
                            <Button type="submit">Submit</Button>
                        </Form>
                   </Col>
                </Row>
                <Row classname=" job-list">
                    <Col >
                        <JobList jobs={this.state.jobs.length ?this.state.jobs:this.state.companies.length?this.state.companies:this.state.categoryJobs} />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Home;