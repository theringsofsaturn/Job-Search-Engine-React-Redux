import React, { Component } from 'react';
import { ListGroup, Container, Button } from 'react-bootstrap';
import striptags from 'striptags';

class Details extends Component {

    state= {
        job:null
    }

    componentDidMount = async () => {
        const selectedJob = await this.props.jobs.length?this.props.jobs.filter(job => job.id === parseInt(this.props.match.params.id)):
        this.props.companies.length? this.props.companies?.filter(job => job.id === parseInt(this.props.match.params.id)):this.props.category?.filter(job => job.id === parseInt(this.props.match.params.id));
        if(selectedJob) {
        this.setState({
            job: selectedJob[0]
        });
        console.log(this.state.job);
        }
    }

    render() {
        return (
          <Container>
              <div className="d-flex justify-content-between my-5 px-3">
                <h2 > {this.state.job?.title} </h2>
                <Button >Apply Now</Button>
              </div>
                <ListGroup variant="flush">
                <ListGroup.Item><strong>Company name: </strong>{this.state.job?.company_name}</ListGroup.Item>
                <ListGroup.Item ><strong>Visit Profile: </strong><a target="blank" href={this.state.job?.url}>{this.state.job?.url}</a></ListGroup.Item>
                <ListGroup.Item><strong>Category: </strong>{this.state.job?.category}</ListGroup.Item>
                <ListGroup.Item><strong>Job Type: </strong>{this.state.job?.job_type}</ListGroup.Item>
                <ListGroup.Item><strong>Publication date: </strong>{this.state.job?.publication_date}</ListGroup.Item>
                <ListGroup.Item><strong>Required Location: </strong>{this.state.job?.candidate_required_location}</ListGroup.Item>
                <ListGroup.Item><strong>Salary: </strong>{this.state.job?.salary}</ListGroup.Item>
                <ListGroup.Item><strong>Description: </strong>{striptags(this.state.job?.description)}</ListGroup.Item>
            </ListGroup>
          </Container>
        );
    }
}

export default Details;