
// pages/dashboard.js (Main dashboard page)
import DashboardLayout from "../components/Layout/DashboardLayout";
import DashboardTabs from "../components/Dashboard/DashboardTabs";
import StatisticsOverview from "../components/Dashboard/StatisticsOverview";
import PerformanceChart from "../components/Dashboard/PerformanceChart";
import StatusSummary from "../components/Dashboard/StatusSummary";
import MarketOverview from "../components/Dashboard/MarketOverview";
import PendingRequestsTable from "../components/Dashboard/PendingRequestsTable";
import RecentEvents from "../components/Dashboard/RecentEvents";
import Activities from "../components/Dashboard/Activities";
import TodoList from "../components/Dashboard/TodoList";
import TypeByAmount from "../components/Dashboard/TypeByAmount";
import LeaveReport from "../components/Dashboard/LeaveReport";
import TopPerformer from "../components/Dashboard/TopPerformers";

export default function Dashboard() {
  return (
    <DashboardLayout pageTitle="Dashboard - Star Admin2">
      <div className="row">
        <div className="col-sm-12">
          <div className="home-tab">
            <DashboardTabs />
            <div className="tab-content tab-content-basic">
              <div
                className="tab-pane fade show active"
                id="overview"
                role="tabpanel"
                aria-labelledby="overview"
              >
                <StatisticsOverview />
                
                <div className="row">
                  <div className="col-lg-8 d-flex flex-column">
                    <PerformanceChart />
                  </div>
                  <div className="col-lg-4 d-flex flex-column">
                    <StatusSummary />
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-8 d-flex flex-column">
                    <MarketOverview />
                    
                    {/* Campaign Enhancement Card */}
                    <div className="row flex-grow">
                      <div className="col-12 grid-margin stretch-card">
                        <div className="card card-rounded table-darkBGImg">
                          <div className="card-body">
                            <div className="col-sm-8">
                              <h3 className="text-white upgrade-info mb-0">
                                Enhance your <span className="fw-bold">Campaign</span> for better outreach
                              </h3>
                              <a href="#" className="btn btn-info upgrade-btn">
                                Upgrade Account!
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <PendingRequestsTable />
                    
                    <div className="row flex-grow">
                      <div className="col-md-6 col-lg-6 grid-margin stretch-card">
                        <RecentEvents />
                      </div>
                      <div className="col-md-6 col-lg-6 grid-margin stretch-card">
                        <Activities />
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-lg-4 d-flex flex-column">
                    <TodoList />
                    <TypeByAmount />
                    <LeaveReport />
                    <TopPerformer />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

