import React from "react";
import { ConfigProvider, Layout } from "antd";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import LoginForm from "./components/LoginForm";
import "./App.css"; // Lägg till styles för appen

const { Header, Content } = Layout;

const App = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#002f4b", // Mörkblå primärfärg
        },
      }}
    >
      <Router>
        <Layout>
          <Header
            style={{
              backgroundColor: "#002f4b",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src="/skytech.png"
              alt="SkyTech Logo"
              style={{ height: "50px", marginRight: "20px" }}
            />
            <h1 style={{ color: "white" }}>Dashboard</h1>
          </Header>
          <Content style={{ backgroundColor: "#f0f2f5" }}>
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/" element={<LoginForm />} />
            </Routes>
          </Content>
        </Layout>
      </Router>
    </ConfigProvider>
  );
};

export default App;
