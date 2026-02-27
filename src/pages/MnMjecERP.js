import React from "react";
import "./MnMjecERP.css";

function MnMjecERP() {
  return (
    <section className="erp-page">
      <div className="erp-container">
        <h1>MNMJEC ERP System</h1>
        <p className="erp-subtitle">
          A Full-Stack Academic ERP Platform Designed and Developed by Abinanthan V
        </p>

        <h2>Overview</h2>
        <p>
          The MNMJEC ERP System is a comprehensive academic management platform
          built to handle attendance, marks, placement training, role-based access,
          and analytics for institutional workflows.
        </p>

        <h2>Technology Stack</h2>
        <ul>
          <li>Frontend: React.js</li>
          <li>Backend: Node.js, Express</li>
          <li>Database: MySQL</li>
          <li>Authentication: JWT</li>
          <li>Deployment: Ubuntu Server + Cloudflare</li>
        </ul>

        <h2>Role-Based Access Control</h2>
        <p>
          Implemented structured role access including Student, Staff, CA, HOD,
          Principal, Trainer, and Admin with scoped permissions.
        </p>

        <h2>Core Modules</h2>
        <ul>
          <li>Attendance Management</li>
          <li>Marks & Internal Assessment</li>
          <li>Placement Training System</li>
          <li>Feedback System</li>
          <li>Analytics Dashboard</li>
        </ul>

        <h2>Deployment Architecture</h2>
        <p>
          The system is deployed on an Ubuntu-based server inside the college
          network with public exposure via Cloudflare. MySQL runs locally
          with secured VPN-based remote access.
        </p>

        <h2>Key Engineering Challenges Solved</h2>
        <ul>
          <li>Autosave-based online examination logic</li>
          <li>Role-scoped data filtering</li>
          <li>Session handling with JWT</li>
          <li>Optimized MySQL queries</li>
        </ul>

        <h2>Impact</h2>
        <p>
          The ERP centralizes academic workflows into a single platform,
          improving efficiency and reducing manual data management.
        </p>
      </div>
    </section>
  );
}

export default MnMjecERP;