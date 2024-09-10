import React, { useState } from "react";
import { Table, Card, Col, Row } from "antd";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import GridLayout from "react-grid-layout";

const Dashboard = () => {
  // Mockdata för metrics
  const [metrics] = useState([
    { key: "1", metric: "Totala Användare", value: "1200" },
    { key: "2", metric: "Aktiva Kampanjer", value: "15" },
    { key: "3", metric: "Klickrate (CTR)", value: "2.4%" },
    { key: "4", metric: "Genomsnittlig Sessionstid", value: "5 min" },
  ]);

  // Mockdata för grafer
  const data = [
    { name: "Jan", orders: 4000, sales: 2400 },
    { name: "Feb", orders: 3000, sales: 2210 },
    { name: "Mar", orders: 2000, sales: 2290 },
    { name: "Apr", orders: 2780, sales: 2000 },
    { name: "May", orders: 1890, sales: 2181 },
  ];

  const columns = [
    { title: "Metric", dataIndex: "metric", key: "metric" },
    { title: "Value", dataIndex: "value", key: "value" },
  ];

  return (
    <div
      style={{
        backgroundColor: "#f0f2f5",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <div style={{ maxWidth: "1200px", width: "100%" }}>
        {" "}
        {/* Container */}
        <Row gutter={16}>
          <Col span={8}>
            <Card
              title={<span style={{ color: "white" }}>Totala Användare</span>}
              bordered={false}
              style={{
                textAlign: "center",
                backgroundColor: "#ff8c00",
                color: "white",
              }}
            >
              <span style={{ color: "white" }}>{metrics[0].value}</span>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              title={<span style={{ color: "white" }}>Aktiva Kampanjer</span>}
              bordered={false}
              style={{
                textAlign: "center",
                backgroundColor: "#002f4b",
                color: "white",
              }}
            >
              <span style={{ color: "white" }}>{metrics[1].value}</span>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              title={<span style={{ color: "white" }}>Klickrate (CTR)</span>}
              bordered={false}
              style={{
                textAlign: "center",
                backgroundColor: "#ff8c00",
                color: "white",
              }}
            >
              <span style={{ color: "white" }}>{metrics[2].value}</span>
            </Card>
          </Col>
        </Row>
        <div style={{ marginTop: "20px" }}>
          <Card title="Order & Sales Overview" bordered={false}>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="orders"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="sales" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </div>
        <div style={{ marginTop: "20px" }}>
          <Card title="Alla Metrics" bordered={false}>
            <Table columns={columns} dataSource={metrics} />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
