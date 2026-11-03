
import { useState } from "react";
import {
  GraduationCap,
  ShieldCheck,
  Wallet,
  UserPlus,
  LayoutDashboard,
  Users,
  BookOpen,
  Settings,
  Bell,
  LogOut,
  ArrowRight,
  Menu,
  FileText,
  CreditCard,
  ClipboardList,
} from "lucide-react";

import { college } from "./config/college";
import "./index.css";

type Role = "Principal" | "Finance Manager" | "Admissions Officer";

const roles = [
  {
    name: "Principal" as Role,
    description: "Manage and monitor the entire school.",
    icon: ShieldCheck,
  },
  {
    name: "Finance Manager" as Role,
    description: "Manage fees, payments and expenses.",
    icon: Wallet,
  },
  {
    name: "Admissions Officer" as Role,
    description: "Manage applications and student admissions.",
    icon: UserPlus,
  },
];

const dashboardData = {
  Principal: {
    stats: [
      ["Total Students", "1,250", GraduationCap],
      ["Total Teachers", "48", Users],
      ["Total Classes", "32", BookOpen],
      ["Pending Admissions", "25", ClipboardList],
    ],
    menu: ["Dashboard", "Students", "Teachers", "Classes", "Reports", "Settings"],
    activities: [
      "New student admitted",
      "Teacher registration completed",
      "Class schedule updated",
    ],
  },
  "Finance Manager": {
    stats: [
      ["Total Fee Collection", "Rs. 8.5M", Wallet],
      ["Pending Fees", "Rs. 1.2M", CreditCard],
      ["Total Expenses", "Rs. 2.1M", FileText],
      ["Payments Today", "Rs. 45K", ClipboardList],
    ],
    menu: ["Dashboard", "Fee Collection", "Pending Fees", "Expenses", "Reports", "Settings"],
    activities: [
      "New fee payment received",
      "Monthly expense recorded",
      "Pending fee report updated",
    ],
  },
  "Admissions Officer": {
    stats: [
      ["Total Applications", "180", ClipboardList],
      ["New Applications", "24", UserPlus],
      ["Approved Admissions", "125", GraduationCap],
      ["Pending Applications", "31", FileText],
    ],
    menu: ["Dashboard", "Applications", "New Admission", "Students", "Reports", "Settings"],
    activities: [
      "New admission application received",
      "Student documents submitted",
      "Admission application approved",
    ],
  },
};

function App() {
  const [role, setRole] = useState<Role | null>(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (!role) {
    return (
      <div className="role-page">
        <div className="role-header">
          <div className="brand-icon"><GraduationCap size={32} /></div>
          <h1>{college.name}</h1>
          <p>Administration Portal</p>
        </div>

        <div className="role-content">
          <h2>Welcome to Administration</h2>
          <p>Select your department to continue.</p>

          <div className="role-grid">
            {roles.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  className="role-card"
                  key={item.name}
                  onClick={() => setRole(item.name)}
                >
                  <div className="role-icon"><Icon size={30} /></div>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <span>Continue to Login <ArrowRight size={16} /></span>
                </button>
              );
            })}
          </div>
        </div>

        <p className="role-footer">
          © {new Date().getFullYear()} {college.name}. All rights reserved.
        </p>
      </div>
    );
  }

  if (!loggedIn) {
    const SelectedIcon = roles.find((item) => item.name === role)!.icon;

    return (
      <div className="login-page">
        <div className="login-card">
          <button className="back-button" onClick={() => setRole(null)}>
            ← Back to role selection
          </button>

          <div className="login-icon"><SelectedIcon size={32} /></div>
          <h1>{role} Login</h1>
          <p>Sign in to access your dashboard.</p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setLoggedIn(true);
            }}
          >
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button className="login-submit" type="submit">
              Sign In <ArrowRight size={17} />
            </button>
          </form>
        </div>
      </div>
    );
  }

  const data = dashboardData[role];

  return (
    <div className="admin-layout">
      <aside className="sidebar">
        <div className="sidebar-brand">
          <GraduationCap size={32} />
          <div>
            <h2>{college.shortName}</h2>
            <span>Administration</span>
          </div>
        </div>

        <p className="menu-label">MAIN MENU</p>

        <nav>
          {data.menu.map((item) => (
            <button
              key={item}
              onClick={() => setActiveMenu(item)}
              className={`sidebar-link ${activeMenu === item ? "active" : ""}`}
            >
              <LayoutDashboard size={19} />
              <span>{item}</span>
            </button>
          ))}
        </nav>

        <button
          className="logout-button"
          onClick={() => {
            setLoggedIn(false);
            setRole(null);
            setActiveMenu("Dashboard");
            setEmail("");
            setPassword("");
          }}
        >
          <LogOut size={19} /> Logout
        </button>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <div className="topbar-left">
            <button className="menu-button"><Menu size={22} /></button>
            <div>
              <h2>{activeMenu}</h2>
              <p>{college.name}</p>
            </div>
          </div>

          <div className="topbar-actions">
            <Bell size={21} />
            <div className="topbar-user">
              <div className="avatar">{role[0]}</div>
              <div>
                <strong>{role}</strong>
                <span>Administrator</span>
              </div>
            </div>
          </div>
        </header>

        <section className="dashboard-body">
          <div className="welcome-section">
            <div>
              <h1>Welcome, {role}!</h1>
              <p>Here's your school management overview.</p>
            </div>
          </div>

          {activeMenu === "Dashboard" ? (
            <>
              <div className="stats-grid">
                {data.stats.map(([title, value, Icon]) => {
                  const StatIcon = Icon as typeof GraduationCap;

                  return (
                    <div className="stat-card" key={title as string}>
                      <div className="stat-icon">
                        <StatIcon size={23} />
                      </div>
                      <p>{title as string}</p>
                      <h2>{value as string}</h2>
                    </div>
                  );
                })}
              </div>

              <section className="panel">
                <div className="panel-heading">
                  <div>
                    <h3>Recent Activities</h3>
                    <p>Latest department updates</p>
                  </div>
                </div>

                {data.activities.map((activity, index) => (
                  <div className="activity-item" key={index}>
                    <div className="activity-dot" />
                    <div className="activity-info">
                      <strong>{activity}</strong>
                      <p>Recent activity</p>
                    </div>
                  </div>
                ))}
              </section>
            </>
          ) : (
            <section className="panel section-placeholder">
              <div className="stat-icon"><Settings size={28} /></div>
              <h2>{activeMenu}</h2>
              <p>This section will be developed next.</p>
            </section>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
