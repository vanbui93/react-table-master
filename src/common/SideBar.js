import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from "react-router-dom";

class SideBar extends Component {
  render() {
    return (
      <ListGroup>
        <Link to="/vi-du-1">
          <ListGroup.Item action href="#link1">Ví dụ 1</ListGroup.Item>
        </Link>
        <Link to="/vi-du-2">
          <ListGroup.Item action href="#link2">Ví dụ 2</ListGroup.Item>
        </Link>
      </ListGroup>

    )
  }
}
export default SideBar