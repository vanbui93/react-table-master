import React, { Component } from 'react';
import SideBar from './common/SideBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Tab } from 'react-bootstrap';

import Example01 from './examples/Example01';
import Example02 from './examples/Example02';


export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
            <Router>
              <div className="col-3">
                <h2>React table</h2>
                <p>Ở dự án thực tế<br/> chỉ cần copy component Example (trong folder examples) sử dụng</p>
                <SideBar />
              </div>
              <div className="col mt-5">
                <Tab.Content>
                  <Switch>
                    <Route exact path="/">
                      <Example01 />
                    </Route>
                    <Route exact path="/vi-du-1">
                      <Tab.Pane eventKey="#link1">
                        <Example01 />
                      </Tab.Pane>
                    </Route>
                    <Route path="/vi-du-2">
                      <Tab.Pane eventKey="#link2">
                        <Example02 />
                      </Tab.Pane>
                    </Route>
                  </Switch>
                </Tab.Content>
              </div>
            </Router>
          </Tab.Container>
        </div>
      </div>
    )
  }
}
