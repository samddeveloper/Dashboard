import React, { useState } from "react";
import {
  Table,
  Card,
  Col,
  Row,
  Button,
  Input,
  Space,
  Dropdown,
  Menu,
} from "antd";
import { SearchOutlined, DownOutlined } from "@ant-design/icons";
import {
  AreaChart,
  Area,
  LineChart,
  Line,
  BarChart,
  Bar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Text,
} from "recharts";

const Dashboard = () => {
  // Mockdata
  const initialMetrics = [
    {
      key: "1",
      metric: "Totala Användare",
      value: 1200,
      region: "EU",
      growth: "5%",
    },
    {
      key: "2",
      metric: "Aktiva Kampanjer",
      value: 15,
      region: "NA",
      growth: "3%",
    },
    {
      key: "3",
      metric: "Clickrate",
      value: "2.4%",
      region: "EU",
      growth: "1.2%",
    },
    {
      key: "4",
      metric: "Genomsnittlig Sessionstid",
      value: "5 min",
      region: "APAC",
      growth: "4%",
    },
    {
      key: "5",
      metric: "Nya Användare",
      value: 500,
      region: "NA",
      growth: "10%",
    },
    {
      key: "6",
      metric: "Avslutade Kampanjer",
      value: 12,
      region: "EU",
      growth: "2%",
    },
    {
      key: "7",
      metric: "Konverteringsgrad",
      value: "7%",
      region: "APAC",
      growth: "1.5%",
    },
    {
      key: "8",
      metric: "Daglig Användartid",
      value: "3 h",
      region: "EU",
      growth: "6%",
    },
    {
      key: "9",
      metric: "Engagemangsnivå",
      value: "78%",
      region: "NA",
      growth: "3%",
    },
    {
      key: "10",
      metric: "Totala Orders",
      value: 1200,
      region: "APAC",
      growth: "8%",
    },
    {
      key: "11",
      metric: "Genomsnittlig Orderstorlek",
      value: "150",
      region: "EU",
      growth: "4%",
    },
    {
      key: "12",
      metric: "Returgrad",
      value: "1.8%",
      region: "EU",
      growth: "-0.5%",
    },
    {
      key: "13",
      metric: "Kundnöjdhet",
      value: "95%",
      region: "NA",
      growth: "1%",
    },
    {
      key: "14",
      metric: "Supportärenden",
      value: 320,
      region: "APAC",
      growth: "-2%",
    },
    {
      key: "15",
      metric: "Kostnad per klick (CPC)",
      value: "€1.5",
      region: "EU",
      growth: "0.5%",
    },
    {
      key: "16",
      metric: "Reklamutgifter",
      value: "€50,000",
      region: "NA",
      growth: "3%",
    },
    {
      key: "17",
      metric: "Användarvinst",
      value: "€250,000",
      region: "EU",
      growth: "7%",
    },
    {
      key: "18",
      metric: "Kundretention",
      value: "88%",
      region: "APAC",
      growth: "2%",
    },
    {
      key: "19",
      metric: "Churn-rate",
      value: "12%",
      region: "NA",
      growth: "-1%",
    },
    {
      key: "20",
      metric: "Kundanskaffningskostnad (CAC)",
      value: "€200",
      region: "EU",
      growth: "4%",
    },
  ];

  const [metrics, setMetrics] = useState(initialMetrics);
  const [searchText, setSearchText] = useState("");
  const [filteredMetrics, setFilteredMetrics] = useState(initialMetrics);
  const [chartType, setChartType] = useState("area");

  const data = [
    { name: "Jan", orders: 40000, sales: 240000 },
    { name: "Feb", orders: 30000, sales: 180000 },
    { name: "Mar", orders: 20000, sales: 120000 },
    { name: "Apr", orders: 27800, sales: 166800 },
    { name: "May", orders: 18900, sales: 113400 },
  ];

  const radarData = [
    { metric: "Orders", value: 120 },
    { metric: "CTR", value: 98 },
    { metric: "Engagement", value: 86 },
    { metric: "Sessions", value: 99 },
    { metric: "Retention", value: 85 },
  ];

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    const filteredData = metrics.filter((metric) =>
      metric.metric.toLowerCase().includes(value)
    );
    setFilteredMetrics(filteredData);
    setSearchText(value);
  };

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
        <Row gutter={16}>
          <Col span={8}>
            <Card
              title={<span style={{ color: "black" }}>Totala Användare</span>}
              bordered={false}
              style={{
                textAlign: "left",
                backgroundColor: "white",
                fontSize: "30px",
              }}
            >
              <span style={{ color: "black" }}>{metrics[0].value}</span>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              title={<span style={{ color: "black" }}>Aktiva Kampanjer</span>}
              bordered={false}
              style={{
                textAlign: "left",
                backgroundColor: "white",
                fontSize: "30px",
              }}
            >
              <span style={{ color: "black" }}>{metrics[1].value}</span>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              title={<span style={{ color: "black" }}>Clickrate</span>}
              bordered={false}
              style={{
                textAlign: "left",
                backgroundColor: "white",
                fontSize: "30px",
              }}
            >
              <span style={{ color: "black" }}>{metrics[2].value}</span>
            </Card>
          </Col>
        </Row>

        <div
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button onClick={() => setChartType("area")}>Area Chart</Button>
          <Button onClick={() => setChartType("bar")}>Bar Chart</Button>
          <Button onClick={() => setChartType("radar")}>Radar Chart</Button>
          <Button onClick={() => setChartType("line")}>Line Chart</Button>
        </div>

        <div style={{ marginTop: "20px" }}>
          <Card
            title="Order & Sales Overview"
            bordered={false}
            style={{ padding: "12px" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingBottom: "10px",
              }}
            >
              <span style={{ color: "#82ca9d", fontWeight: "bold" }}>
                Sales (€)
              </span>
              <span style={{ color: "#8884d8", fontWeight: "bold" }}>
                Orders
              </span>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              {chartType === "area" ? (
                <AreaChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="sales"
                    stroke="#82ca9d"
                    fill="#82ca9d"
                  />
                  <Area
                    type="monotone"
                    dataKey="orders"
                    stroke="#8884d8"
                    fill="#8884d8"
                  />
                </AreaChart>
              ) : chartType === "bar" ? (
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="sales" fill="#82ca9d" />
                  <Bar dataKey="orders" fill="#8884d8" />
                </BarChart>
              ) : (
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="sales"
                    stroke="#82ca9d"
                    activeDot={{ r: 8 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="orders"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              )}
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Dropdown för sortering */}
        <div style={{ marginTop: "20px" }}>
          <Space style={{ marginBottom: 16 }}>
            <Input
              placeholder="Search Metrics"
              value={searchText}
              onChange={handleSearch}
              prefix={<SearchOutlined />}
            />
          </Space>
          <Table
            columns={[
              { title: "Metric", dataIndex: "metric", key: "metric" },
              {
                title: "Value",
                dataIndex: "value",
                key: "value",
                render: (value, record) => {
                  if (
                    record.metric.includes("Sales") ||
                    record.metric.includes("Orders")
                  ) {
                    return `€ ${value}`;
                  } else {
                    return value;
                  }
                },
              },
              { title: "Region", dataIndex: "region", key: "region" },
              { title: "Growth", dataIndex: "growth", key: "growth" },
            ]}
            dataSource={filteredMetrics}
            pagination={{ pageSize: 5 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
