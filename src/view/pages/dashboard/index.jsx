import { Link } from 'react-router-dom'
import LoggedSimpleHeader from '../../components/common/LoggedSimpleHeader'

const Dashboard = () => {
    return <div className="site-wrap">
    <LoggedSimpleHeader />

    <div className="site-container">
       <div className="bg-container">
          <div className="container-fluid">
             <div className="row">
                <div className="col-md-2">
                   <div className="v-profile-wrap">
                      <img src="images/v-profile-img.png" />
                      <Link to="" className="v-btn">Edit Profile</Link>
                   </div>
                </div>
                <div className="col-md-7">
                   <div className="v-top">
                      <div className="v-profile-heading">
                         <h2>Hi, Jason!</h2>
                      </div>
                      <div className="v-btn-wrap">
                         <Link to="" className="v-log-time"><span>Log Time</span></Link>
                         <Link to="" className="v-opportunities"><span>Go to Opportunities</span></Link>
                      </div>
                   </div>
                   <div className="v-bottom">
                      <div className="v-details">
                         <p>No news for now. You will be updated as soon as anything happens.</p>
                      </div>
                   </div>
                </div>
                <div className="col-md-3">
                   <div className="v-total-top">
                      <p>Total Volunteer Hours</p>
                      <h2>0</h2>
                   </div>
                   <div className="v-total-bottom">
                      <div className="vtb-left">
                         <p>Hours This Month</p>
                         <h2>0</h2>
                      </div>
                      <div className="vtb-right">
                         <p>Validated Skills</p>
                         <h2>0</h2>
                      </div>
                   </div>
                </div>
             </div>

             <div className="commitment-container">
                <div className="container-fluid">
                   <h2>Your Commitments</h2>
                   <div className="cc-sub-heading">
                      <span className="heading">TOMORROW</span>
                      <div className="cc-export float-right">
                         <span>Export</span>
                         <Link to="" className="cc-export-btn">All Organizations</Link>
                         <div className="cc-drop-down">
                            <ul>
                               <li className="selected">All Organizations</li>
                               <li className="">My Favourite Organization</li>
                               <li className="">Personal Organization #1</li>

                            </ul>
                         </div>
                      </div>
                   </div>
                   <div className="cc-tab">
                      <ul className="nav nav-tabs" role="tablist">
                         <li className="nav-item">
                            <Link className="nav-link active" data-toggle="tab" to="#tabs-1" role="tab">Upcoming</Link>
                         </li>
                         <li className="nav-item">
                            <Link className="nav-link" data-toggle="tab" to="#tabs-2" role="tab">Pending</Link>
                         </li>
                         <li className="nav-item">
                            <Link className="nav-link" data-toggle="tab" to="#tabs-3" role="tab">Invites</Link>
                         </li>
                         <li className="nav-item">
                            <Link className="nav-link" data-toggle="tab" to="#tabs-4" role="tab">Completed</Link>
                         </li>
                      </ul>
                      <div className="tab-content">
                         <div className="tab-pane active " id="tabs-1" role="tabpanel">



                            <div className="tab-center">
                               <h2>You are not scheduled to volunteer</h2>
                               <Link to="" className="white-btn">Browse Opportunities</Link>
                            </div>
                         </div>

                         <div className="tab-pane" id="tabs-2" role="tabpanel">

                         </div>
                         <div className="tab-pane" id="tabs-3" role="tabpanel">

                         </div>
                         <div className="tab-pane" id="tabs-4" role="tabpanel">
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
 </div>
}

export default Dashboard
