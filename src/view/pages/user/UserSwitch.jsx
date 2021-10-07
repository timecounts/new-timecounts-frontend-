import { Link } from 'react-router-dom'

const UserSwitch = () => {
  return <div className="site-wrap">
    <div className="header-wrap">
      <div className="header">
        <nav>
          <label for="toggleMainNav" className="hamburger-menu"></label>
          <input type="checkbox" id="toggleMainNav" className="check-toggle" />
          <h2 className="main-heading">Database Field Management</h2>
          <Link href="#" className="nav-switcher-link Volunteer-link"><span>Volunteers</span></Link>
          <div className="btn-select">
            <ul>
              <li><Link href="volunteers directory.html">Volunteers</Link></li>
              <li><Link href="Companies - directory.html">Companies</Link></li>
            </ul>
          </div>
          <Link className="search-icon"><img src="images/search-icon.svg"/></Link>
          <div className=" tooltip"><Link href="" className="btn-add-field" data-toggle="modal" data-target="#basicModal">Add New Field</Link><span className="tooltiptext"><p>Upgrade to Premium to unlock the ability to create custom database fields</p><Link href="">Upgrade</Link></span></div>
          <div className="profile-info">
            <Link href=""><img src="images/profile-pic.png"/></Link>
          </div>
          <label for="toggleMainNav" className="menu-overlay"></label>
          <div className="main-nav-holder">
            <div className="close-nav">
              <Link href="index.html"><img src="images/timecounts.svg"/></Link>
              <label for="toggleMainNav"><img src="images/hamburger-menu-close.svg"/></label>
            </div>
            <ul className="main-nav">

              <li>
                <Link href="index.html"><img src="images/dashboard-icon.svg"/>Dashboard</Link>
              </li>

              <li className="has-submenu">
                <input type="checkbox" id="labelVolunteers" className="check-toggle" />
                <label for="labelVolunteers"><img src="images/volunteers-icon.svg"/>Volunteers</label>


                <ul className="submenu">
                  <li>
                    <Link href="volunteer-profile-landing%20state.html">Directory</Link>
                  </li>
                  <li>
                    <Link href="Pending.html">Pending</Link>
                  </li>
                  <li>
                    <Link href="inactive-default.html">Inactive</Link>
                  </li>

                </ul>
              </li>

              <li>
                <Link href="#"><img src="images/schedule-icon.svg"/>Schedule</Link>
              </li>
              <li>
                <Link href="#"><img src="images/message-icon.svg"/>Message</Link>
              </li>
              <li>
                <Link href="#"><img src="images/track-icon.svg"/>Track</Link>
              </li>
              <li>
                <Link href="#"><img src="images/report-icon.svg"/>Report</Link>
              </li>
              <li>
                <Link href="#"><img src="images/hub-icon.svg"/>Hub</Link>
              </li>
              <li className="has-submenu">
                <input type="checkbox" id="labelVolunteers1" className="check-toggle" />
                <label for="labelVolunteers1"><img src="images/setting-icon.svg"/>Settings</label>


                <ul className="submenu">
                  <li className="">
                    <Link href="">General</Link>
                  </li>
                  <li className="active">
                    <Link href="setting.html">Database</Link>
                  </li>
                  <li className="">
                    <Link href="#">Checklist</Link>
                  </li>
                  <li className="">
                    <Link href="#">Hub Settings</Link>
                  </li>
                  <li className="">
                    <Link href="#">Team</Link>
                  </li>
                  <li className="">
                    <Link href="#">Billing</Link>
                  </li>
                  <li className="">
                    <Link href="#">Integrations</Link>
                  </li>

                </ul>
              </li>
            </ul>
          </div>
        </nav>



      </div>
    </div>
    <div className="site-container">
      <div className="setting-tab">
        <ul className="nav nav-tabs" role="tablist">
          <li className="nav-item">
            <Link className="nav-link active" data-toggle="tab" href="#tabs-1" role="tab">Management</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" data-toggle="tab" href="#tabs-2" role="tab">Preferences</Link>
          </li>

        </ul>
        <div className="tab-content">
          <div className="tab-pane active" id="tabs-1" role="tabpanel">
            <div className="database-move">
              <div className="row">
                <div className="col-md-6 database-row">
                  <h3>
                    Database Fields Library
                  </h3>
                  <ul className="dm-list">
                    <li><span>Name</span></li>
                    <li className="active"><span>Email</span></li>
                    <li className="active"><span>Address</span></li>
                    <li className="active"><span>Phone</span></li>
                    <li><span>Name</span></li>
                    <li><span>Email</span></li>
                    <li><span>Address</span></li>
                    <li><span>Phone</span></li>
                  </ul>
                </div>

                <div className="col-md-6 active-row">
                  <h3>
                    Active database fields
                  </h3>
                  <ul className="dm-list">
                    <li><span>Name</span><div className="list-icon-wrap"><Link href=""><img src="images/edit-icon.svg"/></Link><Link href=""><img src="images/icon-delete-teal.svg"/></Link></div></li>
                    <li className="active"><span>Email</span><div className="list-icon-wrap"><Link href=""><img src="images/edit-icon.svg"/></Link><Link href=""><img src="images/icon-delete-teal.svg"/></Link></div></li>
                    <li className="selected"><span>Address</span><div className="list-icon-wrap"><Link href=""><img src="images/edit-icon.svg"/></Link><Link href=""><img src="images/icon-delete-teal.svg"/></Link></div></li>
                    <li><span>Phone</span><div className="list-icon-wrap"><Link href=""><img src="images/edit-icon.svg"/></Link><Link href=""><img src="images/icon-delete-teal.svg"/></Link></div></li>
                    <li><span>Email</span><div className="list-icon-wrap"><Link href=""><img src="images/edit-icon.svg"/></Link><Link href=""><img src="images/icon-delete-teal.svg"/></Link></div></li>
                    <li><span>Address</span><div className="list-icon-wrap"><Link href=""><img src="images/edit-icon.svg"/></Link><Link href=""><img src="images/icon-delete-teal.svg"/></Link></div></li>
                    <li><span>Phone</span><div className="list-icon-wrap"><Link href=""><img src="images/edit-icon.svg"/></Link><Link href=""><img src="images/icon-delete-teal.svg"/></Link></div></li>
                  </ul>
                  <div className="dm-info">
                    <p>Add Link new field by dragging it to this area, and reorder as you want it to appear in the profile card.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className="tab-pane" id="tabs-2" role="tabpanel">
            <h3>Volunteers</h3>
            <div className="st-tab">
              <ul>
                <li><b>Total:</b> 151 volunteers</li>
                <li><b>Active:</b> 81 volunteers</li>
                <li><b>Inactive:</b> 18 volunteers</li>
              </ul>
            </div>
            <h3 className="is-heading">Inactive State</h3>
            <div className="si-applied-top si-applied-radio">
              <ul className="st-list">
                <li>
                  <input type="radio" id="test2" name="radio-group" checked=""/>
                  <label for="test2">Manually Sort Inactive</label>
                  <span>Admins to switch state of volunteer from the Volunteer view in the directory.</span>
                </li>
                <li>
                  <input type="radio" id="test1" name="radio-group" checked=""/>
                  <label for="test1">Automatically Sort Inactive</label>
                  <span>Link volunteer is considered inactive if they have not signed up, been scheduled or credited time in Link certain period.</span>

                </li>


              </ul>
              <p>Inactive = Volunteered less than <input type="text" className="inactive-txt" value="90"/> days</p>
            </div>

          </div>

        </div>
      </div>
    </div>


  </div>
{/* </div > */}
  <div className="modal fade add-popup select-popup" id="basicModal" tabindex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title" id="myModalLabel">Select Field Type</h4>

          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <div className="select-list">
            <ul>
              <li>Name</li>
              <li>Email</li>
              <li className="selected">Phone</li>
              <li>Address</li>
              <li>Contact</li>
              <li>Short answer</li>
              <li>Long answer</li>
              <li>Address</li>

            </ul>
          </div>
          <div className="pop-btn" style="text-align:right">
            <div className="row">
              <div className="col-6">

              </div>
              <div className="col-6">
                <button type="submit" className="add-btn" data-toggle="modal" data-target="#basicModal1">Create New Field</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default UserSwitch
