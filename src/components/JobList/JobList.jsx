import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class JobsList extends Component {
    render() {
        return (
            <ul classname="text-center">
                {this.props.jobs?.slice(0,10).map(job => 
                    <Link to={`/details/${job.id}`} >
                        <li key={job.id}>{job.company_name}</li>
                    </Link>
                )}
            </ul>
        );
    }
}

export default JobsList;