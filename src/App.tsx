import React from "react";
import "./App.css";
import { Col, Row } from "antd";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="App">
      <Row>
        <Col span={24}>
          <Header title={"Pokemon library"} level={1} />
        </Col>
      </Row>
    </div>
  );
}

export default App;
