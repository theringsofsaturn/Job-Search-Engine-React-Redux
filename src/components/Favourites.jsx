import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import { StarFill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { removeFromFav } from "../redux/actions";

const Favourites = () => {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favourites);

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <ListGroup>
            {favourites.elements.map((fav) => (
              <ListGroupItem>
                <StarFill onClick={() => dispatch(removeFromFav(fav))} />
                <span>{fav}</span>
              </ListGroupItem>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Favourites;
