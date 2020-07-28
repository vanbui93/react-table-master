import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';

class SideBar extends Component {
  render() {
    return (
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="tab01">Tab 1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="tab02">Tab 2</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="tab03">Tab 3</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="tab04">Tab 4</Nav.Link>
        </Nav.Item>
      </Nav>

    )
  }
}
export default SideBar