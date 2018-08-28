import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import ActivitiesList from './ActivitiesList';

class Listatesti extends Component {
    render() {
        return (
            <ListGroup>
                <ListGroupItem><ActivitiesList/></ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Morbi leo risus</ListGroupItem>
                <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
            </ListGroup>
        );
    }
}

export default Listatesti;