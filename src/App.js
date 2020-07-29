import React, { Component } from 'react';
import SideBar from './common/SideBar';
import { Tab } from 'react-bootstrap';

import Example01 from './examples/Example01';
import Example02 from './examples/Example02';
import Example03 from './examples/Example03';
import Example04 from './examples/Example04';
import Example05 from './examples/Example05';
import Example06 from './examples/Example06';
import Example07 from './examples/Example07';


export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <Tab.Container id="list-group-tabs-example" defaultActiveKey="tab01">
            <div className="col-3">
              <h2>React table</h2>
              <SideBar />
            </div>
            <div className="col mt-5">
              <h4>Ở dự án thực tế</h4>
              <p>Chỉ cần copy component Example0x sử dụng - trong folder <b>/examples</b></p>
              <Tab.Content>
                <Tab.Pane eventKey="tab01">
                  <Example01 />
                </Tab.Pane>
                <Tab.Pane eventKey="tab02">
                  <Example02 />
                </Tab.Pane>
                <Tab.Pane eventKey="tab03">
                  <Example03 />
                </Tab.Pane>
                <Tab.Pane eventKey="tab04">
                  <Example04 />
                </Tab.Pane>
                <Tab.Pane eventKey="tab05">
                  <Example05 />
                </Tab.Pane>
                <Tab.Pane eventKey="tab06">
                  <Example06 />
                </Tab.Pane>
                <Tab.Pane eventKey="tab07">
                  <Example07 />
                </Tab.Pane>
              </Tab.Content>
            </div>
          </Tab.Container>
        </div>
      </div>
    )
  }
}
