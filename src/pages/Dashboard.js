import React, { useState } from "react";
import { Table, Card, Col, Row } from "antd";

const Dashboard = () => {
  // Mockdata för metrics
  const [metrics] = useState([
    { key: "1", metric: "Totala Användare", value: "1200" },
    { key: "2", metric: "Aktiva Kampanjer", value: "15" },
    { key: "3", metric: "Klickrate (CTR)", value: "2.4%" },
    { key: "4", metric: "Genomsnittlig Sessionstid", value: "5 min" },
  ]);

  const columns = [
    { title: "Metric", dataIndex: "metric", key: "metric" },
    { title: "Value", dataIndex: "value", key: "value" },
  ];

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#f0f2f5",
        minHeight: "100vh",
      }}
    >
      <Row gutter={16}>
        <Col span={8}>
          <Card
            title="Totala Användare"
            bordered={false}
            style={{
              textAlign: "center",
              backgroundColor: "#ff8c00",
              color: "white",
            }} // Orange kort
          >
            {metrics[0].value}
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title="Aktiva Kampanjer"
            bordered={false}
            style={{
              textAlign: "center",
              backgroundColor: "#002f4b",
              color: "white",
            }} // Mörkblått kort
          >
            {metrics[1].value}
          </Card>
        </Col>
        <Col span={8}>
          <Card
            title="Klickrate (CTR)"
            bordered={false}
            style={{
              textAlign: "center",
              backgroundColor: "#ff8c00",
              color: "white",
            }} // Orange kort
          >
            {metrics[2].value}
          </Card>
        </Col>
      </Row>

      <div style={{ marginTop: "20px" }}>
        <Card title="Alla Metrics" bordered={false}>
          <Table columns={columns} dataSource={metrics} />
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
