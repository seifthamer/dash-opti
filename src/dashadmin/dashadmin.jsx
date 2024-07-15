import React, { useContext, useState, useEffect, useRef } from "react";
import { Bar, Line } from "react-chartjs-2";
import AuthContext from "../Context/AuthContext";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import "./dashadmin.css";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const Dashadmin = () => {
  // Data for the chart
  const state = useContext(AuthContext);
  const etudiants = state.EtudiantApi ;
  const formateurs = state.FormateurApi ;
  const Cours = state.CoursApi;

  // const stats = state.StatsApi;




  const chartData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Active Users",
        data: [0, 100, 200, 300, 400, 500],
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        borderRadius: 20,
        borderSkipped: false,
        barThickness: 20, // Set a fixed width for the bars
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "white", // White tick labels to match the provided image
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          color: "white",
          stepSize: 100,
        },
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        backgroundColor: "rgba(255, 255, 255, 0.8)",
      },
    },
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
  };

  const lineChartData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Total Students",
        data: [0, 100, 200, 300, 400, 500], // You'll replace this with your actual data once you have it
        fill: true,
        backgroundColor: "rgba(135, 206, 250, 0.2)",
        borderColor: "rgb(0, 123, 255)",
        pointBorderColor: "rgb(255, 255, 255)",
        pointBackgroundColor: "rgb(0, 123, 255)",
        pointBorderWidth: 1,
        tension: 0.4, // This will make the line wavy
      },
    ],
  };

  // Options for the line chart
  const lineChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 500,
        ticks: {
          stepSize: 100,
        },
      },
      x: {
        // If you have any specific requirements for the x-axis, they can be defined here
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        // Customize the tooltip here if needed
      },
    },
    elements: {
      point: {
        radius: 3,
      },
      line: {
        borderWidth: 2,
      },
    },
    // Any additional options can be defined here
  };
useEffect(()=>{
  console.log("les stats de dashboard:" , etudiants , formateurs  , state , Cours)
})
  return (
    <div className="dashadmin">
      <div className="bloc1">
        <div className="card">
          <div className="info">
            <p className="label">total students</p>

            <div className="amount-percentage">
              <p className="amount">{etudiants?(etudiants.length):<p>loading</p>}</p>
              <p className="percentage"></p>
            </div>
          </div>
     
          <div className="icon-background">
            <img src="./images/wallet.svg" alt="" />
          </div>
        </div>

        <div className="card">
          <div className="info">
            <p className="label">Students /month</p>
            
            <div className="amount-percentage">
              
              <p className="amount">{formateurs?(formateurs.length):<p>loading</p>}</p>
              {/* <p className="percentage">+5%</p> */}
            </div>
          </div>
          <div className="icon-background">
            <img src="./images/globe.svg" alt="" />
          </div>
        </div>

        <div className="card">
          <div className="info">
            <p className="label">Formateurs /month</p>
            <div className="amount-percentage">
              <p className="amount">{Cours?(Cours.length):<p>loading</p>}</p>
              {/* <p className="percentage"></p> */}
            </div>
          </div>
          <div className="icon-background">
            <img src="./images/text.svg" alt="" />
          </div>
        </div>

        <div className="card">
          <div className="info">
            <p className="label">Total students</p>
            <div className="amount-percentage">
              <p className="amount">173,000</p>
              <p className="percentage"></p>
            </div>
          </div>
          <div className="icon-background">
            <img src="./images/panier.svg" alt="" />
          </div>
        </div>
      </div>

      <div className="bloc2">
        <div className="card2-1">
          <div className="card2-1-info">
            <h3>Built by developers</h3>
            <h2>Purity UI Dashboard</h2>
            <p>
              From colors, cards, typography to complex elements, you will find
              the full documentation.
            </p>
            <a href="#">
              <button>Read more →</button>
            </a>
          </div>
          <div className="card2-1-image">
            <img src="./images/bloc2img.png" alt="Optilearn Education" />
          </div>
        </div>

        <div
          className="card2-2"
          style={{ backgroundImage: `url(./images/card2-2.png)` }}
        >
          <div className="card2-2-content">
            <h3>Work with the Rockets</h3>
            <p>
              Wealth creation is an evolutionarily recent positive-sum game.
              <br />
              It is all about who take the opportunity first.
            </p>
            <a href="#">
              <button>Read more →</button>
            </a>
          </div>
        </div>
      </div>
      <div className="bloc3">
        <div className="b3-left">
          <div className="chart-container">
            <Bar data={chartData} options={chartOptions} />
          </div>
          <div className="underchart">
            <div className="active-users-summary">
              <h2>Active Users</h2>
              <p className="active-users-change">
                <span>+23</span> than last week
              </p>
            </div>
            <div className="statistics-container">
              <div className="statistic">
                <div className="stat-top">
                  <div className="icon-label-container">
                    <div className="icon-container">
                      <img
                        src="./images/wallet.svg"
                        alt="Users"
                        className="stat-icon"
                      />
                    </div>
                    <p className="stat-label">Users</p>
                  </div>
                  <p className="stat-value">32,984</p>
                </div>
                <div className="progress-bar">
                  <div className="progress" style={{ width: "80%" }}></div>
                </div>
              </div>
              <div className="statistic">
                <div className="stat-top">
                  <div className="icon-label-container">
                    <div className="icon-container">
                      <img
                        src="./images/sharp.svg"
                        alt="Users"
                        className="stat-icon"
                      />
                    </div>
                    <p className="stat-label">Users</p>
                  </div>
                  <p className="stat-value">32,984</p>
                </div>
                <div className="progress-bar">
                  <div className="progress" style={{ width: "80%" }}></div>
                </div>
              </div>
              <div className="statistic">
                <div className="stat-top">
                  <div className="icon-label-container">
                    <div className="icon-container">
                      <img
                        src="./images/panier.svg"
                        alt="Users"
                        className="stat-icon"
                      />
                    </div>
                    <p className="stat-label">Users</p>
                  </div>
                  <p className="stat-value">32,984</p>
                </div>
                <div className="progress-bar">
                  <div className="progress" style={{ width: "80%" }}></div>
                </div>
              </div>
              <div className="statistic">
                <div className="stat-top">
                  <div className="icon-label-container">
                    <div className="icon-container">
                      <img
                        src="./images/items.svg"
                        alt="Users"
                        className="stat-icon"
                      />
                    </div>

                    <p className="stat-label">Users</p>
                  </div>
                  <p className="stat-value">32,984</p>
                </div>
                <div className="progress-bar">
                  <div className="progress" style={{ width: "80%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="b3-right">
          <div className="total-students">
            <h2>Total students</h2>
            <p className="tot-student">
              <span>+5 more</span> in 2021
            </p>
          </div>
          <div className="chartcon2">
            <Line data={lineChartData} options={lineChartOptions} />
          </div>
        </div>
      </div>
      <div className="bloc4">
        <div className="b4-left">
          <h5>Courses</h5>
          <div className="b4-title">
            <img src="./images/circle.svg" alt="" />

            <p>
              <span>30 done </span>this month
            </p>
          </div>

          <div className="table-container">
            <table className="project-table">
              <thead>
                <tr>
                  <th>COMPANIES</th>
                  <th>MEMBERS</th>
                  <th>BUDGET</th>
                  <th>COMPLETION</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="titles">
                    <img src="./images/xd.svg" alt="" />
                    <p>Chakra Soft UI Version</p>
                  </td>
                  <td className="member-icons">
                    <img src="./images/Elipse 5.svg" alt="Member 1" />
                    <img src="./images/Elipse 5.svg" alt="Member 2" />
                    <img src="./images/Elipse 5.svg" alt="Member 3" />
                    <img src="./images/Elipse 5.svg" alt="Member 4" />
                    <a className="additional-members" href="#">
                      <span>+4</span>
                    </a>
                  </td>
                  <td>$14,000</td>
                  <td>
                    <div className="progresscontainer">
                      <p className="progress-percentage">60%</p>
                      <div className="progressbarm">
                        <div
                          className="progressbar"
                          style={{ width: "60%" }}
                        ></div>
                      </div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="titles">
                    <img src="./images/xd.svg" alt="" />
                    <p>Chakra Soft UI Version</p>
                  </td>
                  <td className="member-icons">
                    <img src="./images/Elipse 5.svg" alt="Member 1" />
                    <img src="./images/Elipse 5.svg" alt="Member 2" />
                    <img src="./images/Elipse 5.svg" alt="Member 3" />
                    <img src="./images/Elipse 5.svg" alt="Member 4" />
                    <a className="additional-members" href="#">
                      <span>+4</span>
                    </a>
                  </td>
                  <td>$14,000</td>
                  <td>
                    <div className="progresscontainer">
                      <p className="progress-percentage">60%</p>
                      <div className="progressbarm">
                        <div
                          className="progressbar"
                          style={{ width: "60%" }}
                        ></div>
                      </div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="titles">
                    <img src="./images/xd.svg" alt="" />
                    <p>Chakra Soft UI Version</p>
                  </td>
                  <td className="member-icons">
                    <img src="./images/Elipse 5.svg" alt="Member 1" />
                    <img src="./images/Elipse 5.svg" alt="Member 2" />
                    <img src="./images/Elipse 5.svg" alt="Member 3" />
                    <img src="./images/Elipse 5.svg" alt="Member 4" />
                    <a className="additional-members" href="#">
                      <span>+4</span>
                    </a>
                  </td>
                  <td>$14,000</td>
                  <td>
                    <div className="progresscontainer">
                      <p className="progress-percentage">60%</p>
                      <div className="progressbarm">
                        <div
                          className="progressbar"
                          style={{ width: "60%" }}
                        ></div>
                      </div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="titles">
                    <img src="./images/xd.svg" alt="" />
                    <p>Chakra Soft UI Version</p>
                  </td>
                  <td className="member-icons">
                    <img src="./images/Elipse 5.svg" alt="Member 1" />
                    <img src="./images/Elipse 5.svg" alt="Member 2" />
                    <img src="./images/Elipse 5.svg" alt="Member 3" />
                    <img src="./images/Elipse 5.svg" alt="Member 4" />
                    <a className="additional-members" href="#">
                      <span>+4</span>
                    </a>
                  </td>
                  <td>$14,000</td>
                  <td>
                    <div className="progresscontainer">
                      <p className="progress-percentage">60%</p>
                      <div className="progressbarm">
                        <div
                          className="progressbar"
                          style={{ width: "60%" }}
                        ></div>
                      </div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="titles">
                    <img src="./images/xd.svg" alt="" />
                    <p>Chakra Soft UI Version</p>
                  </td>
                  <td className="member-icons">
                    <img src="./images/Elipse 5.svg" alt="Member 1" />
                    <img src="./images/Elipse 5.svg" alt="Member 2" />
                    <img src="./images/Elipse 5.svg" alt="Member 3" />
                    <img src="./images/Elipse 5.svg" alt="Member 4" />
                    <a className="additional-members" href="#">
                      <span>+4</span>
                    </a>
                  </td>
                  <td>$14,000</td>
                  <td>
                    <div className="progresscontainer">
                      <p className="progress-percentage">60%</p>
                      <div className="progressbarm">
                        <div
                          className="progressbar"
                          style={{ width: "60%" }}
                        ></div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="b4-right">
          <h5>Orders overview</h5>
          <div className="b4-title">
            <div className="active-users-change">
              <p>
                <span>+30% </span>this month
              </p>
            </div>
          </div>

          <div className="email-list">
            <div className="email email-design-changes">
              <span className="email-icon">
                <img src="./images/not.svg" alt="" />
              </span>
              <span className="email-content">
                <p className="email-title">$2400, Design changes</p>
                <p className="email-date">22 DEC 7:20 PM</p>
              </span>
            </div>
            <div className="email email-new-order">
              <span className="email-icon">
                <img src="./images/html4.svg" alt="" />
              </span>
              <span className="email-content">
                <p className="email-title">New order #4219423</p>
                <p className="email-date">21 DEC 11:21 PM</p>
              </span>
            </div>

            <div className="email email-new-order">
              <span className="email-icon">
                <img src="./images/panier4.svg" alt="" />
              </span>
              <span className="email-content">
                <p className="email-title">New order #4219423</p>
                <p className="email-date">21 DEC 11:21 PM</p>
              </span>
            </div>

            <div className="email email-new-order">
              <span className="email-icon">
                <img src="./images/card4.svg" alt="" />
              </span>
              <span className="email-content">
                <p className="email-title">New order #4219423</p>
                <p className="email-date">21 DEC 11:21 PM</p>
              </span>
            </div>

            <div className="email email-new-order">
              <span className="email-icon">
                <img src="./images/box4.svg" alt="" />
              </span>
              <span className="email-content">
                <p className="email-title">New order #4219423</p>
                <p className="email-date">21 DEC 11:21 PM</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashadmin;
