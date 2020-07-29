import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';

class SideBar extends Component {
  render() {
    return (
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="tab01">Ex 01-simple Table</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="tab02">Ex 02-Table</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="tab03">Ex 03-Filter</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="tab04">Ex 04-Sort By</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="tab05">Ex 05-Pagination</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="tab06">Ex 06-Pagination-controlled</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="tab07">Ex 07-Pagination-Custom</Nav.Link>
        </Nav.Item>
      </Nav>

    )
  }
}
export default SideBar