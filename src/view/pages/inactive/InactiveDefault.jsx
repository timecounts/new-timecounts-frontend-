import Avatar from '@mui/material/Avatar'
import { Link, useHistory } from 'react-router-dom'
import stringAvatar from '../../utils/stringAvatar'
import { connect } from 'react-redux'
import * as ActionCreators from '../../../application/actions'
import { useEffect, useState } from 'react'
import { NotificationContainer, NotificationManager } from 'react-notifications'

import AddOutlinedIcon from '@mui/icons-material/AddOutlined'

const InactiveDefault = ({ logout, userTokens, logoutLoading, logoutSuccess, logoutError, flushAuthState }) => {

    const history = useHistory()
    const [showDropdown, setShowDropdown] = useState(false)

    useEffect(() => {
        if (logoutSuccess === 'User Successfully logged out.') {
            flushAuthState()
            history.push('/login')
        }
    }, [logoutSuccess])

    useEffect(() => {
        if (logoutError) {
            NotificationManager.error(logoutError, 'Logout Error', 5000)
            flushAuthState()
        }
    }, [logoutError])

    const handleLogout = async e => {
        e.preventDefault()
        await logout({
            refreshToken: userTokens.refreshToken
        })
    }

    return <>
        <div className="site-wrap">
            <div className="header-wrap">
                <div className="header">
                    <nav>
                        <label htmlFor="toggleMainNav" className="hamburger-menu"></label>
                        <input type="checkbox" id="toggleMainNav" className="check-toggle" />
                        <h2 className="main-heading">Inactive</h2>
                        <Link to="#" className="nav-switcher-link Volunteer-link"><span>Inactive</span></Link>

                        <Link className="search-icon">
                            <img src="images/search-icon.svg" />
                        </Link>
                        <div className="profile-info" onClick={() => setShowDropdown(previousState => !previousState)}>
                            <Avatar {...stringAvatar('Deepanshu Patel')} />
                        </div>

                        <div className={`profile-dropdown ${showDropdown && 'active'}`}>
                            <div className="row">
                                <div className="col-md-3">
                                    <span className="pd-wrapper">
                                        <img src="images/T.png" />
                                    </span>
                                </div>
                                <div className="col-md-9">
                                    <span className="pd-heading">My Private Org</span>
                                    <span className="pd-text">Switch to Another Organization</span>
                                </div>
                            </div>
                            <ul>
                                <li>
                                    <Link to="#" style ={{ display: 'flex', alignItems: 'center' }}>
                                        <AddOutlinedIcon />
                                        Create Link New Organization
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">Edit Profile</Link>
                                </li>
                                <li>
                                    <Link to="#">Help Center</Link>
                                </li>
                                <li>
                                    <Link to="#" onClick={handleLogout}>Sign Out</Link>
                                </li>
                            </ul>
                        </div>

                        <label htmlFor="toggleMainNav" className="menu-overlay"></label>
                        <div className="main-nav-holder">
                            <div className="close-nav">
                                <Link to="index.html"><img src="images/timecounts.svg" /></Link>
                                <label htmlFor="toggleMainNav"><img src="images/hamburger-menu-close.svg" /></label>
                            </div>
                            <ul className="main-nav">

                                <li>
                                    <Link to="index.html"><img src="images/dashboard-icon.svg" />Dashboard</Link>
                                </li>

                                <li className="has-submenu">
                                    <input type="checkbox" id="labelVolunteers" className="check-toggle" />
                                    <label htmlFor="labelVolunteers"><img src="images/volunteers-icon.svg" />Volunteers</label>


                                    <ul className="submenu">
                                        <li className="">
                                            <Link to="volunteer-profile-landing%20state.html">Directory</Link>
                                        </li>
                                        <li className="">
                                            <Link to="Pending.html">Pending</Link>
                                        </li>
                                        <li className="active">
                                            <Link to="inactive-default.html">Inactive</Link>
                                        </li>

                                    </ul>
                                </li>

                                <li>
                                    <Link to="#"><img src="images/schedule-icon.svg" />Schedule</Link>
                                </li>
                                <li>
                                    <Link to="#"><img src="images/message-icon.svg" />Message</Link>
                                </li>
                                <li>
                                    <Link to="#"><img src="images/track-icon.svg" />Track</Link>
                                </li>
                                <li>
                                    <Link to="#"><img src="images/report-icon.svg" />Report</Link>
                                </li>
                                <li>
                                    <Link to="#"><img src="images/hub-icon.svg" />Hub</Link>
                                </li>
                                <li className="has-submenu">
                                    <input type="checkbox" id="labelVolunteers1" className="check-toggle" />
                                    <label htmlFor="labelVolunteers1"><img src="images/setting-icon.svg" />Settings</label>


                                    <ul className="submenu">
                                        <li className="">
                                            <Link to="">General</Link>
                                        </li>
                                        <li className="">
                                            <Link to="setting.html">Database</Link>
                                        </li>
                                        <li className="">
                                            <Link to="#">Checklist</Link>
                                        </li>
                                        <li className="">
                                            <Link to="#">Hub Settings</Link>
                                        </li>
                                        <li className="">
                                            <Link to="#">Team</Link>
                                        </li>
                                        <li className="">
                                            <Link to="#">Billing</Link>
                                        </li>
                                        <li className="">
                                            <Link to="#">Integrations</Link>
                                        </li>

                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </nav>



                </div>
            </div>
            <div className="site-container">
                <div className="site-top-wrap">
                    <div className="search-container">
                        <form>
                            <input type="text" placeholder="Search" />
                        </form>
                    </div>
                    <div className="si-filter-wrap inactive-top">
                        <Link to="#" className="si-filter"><span>Filter</span></Link>
                        <div className="filter-wrap">
                            <div className="bulk-tag-wrap">
                                <div className="site-filter-top">
                                    <Link to="bulk-tagging-search-result.html" className="si-filter-text">Filters (0)</Link>
                                    <Link to="javascript: history.go(-1)" className="si-btn-close"><img src="images/icon-close.svg" alt="" title="" /></Link>
                                </div>
                                <div className="bulk-search-list mobile">
                                    <ul>
                                        <li><Link to="Volunteers-Inactive-filter-name.html">Name</Link></li>
                                        <li><Link to="#">Company Name</Link></li>
                                        <li><Link to="#">Country</Link></li>
                                        <li><Link to="#">City</Link></li>
                                        <li><Link to="Volunteers - Inactive - filters - inactive reason.html">Inactive Reason</Link></li>
                                        <li><Link to="Volunteers - Inactive - filters - inactive dates.html">Inactive date </Link></li>
                                    </ul>

                                </div>
                                <div className="bulk-search-list desktop">
                                    <ul>
                                        <li><Link to="#">Name</Link></li>
                                        <li><Link to="#">Company Name</Link></li>
                                        <li><Link to="#">Country</Link></li>
                                        <li><Link to="#">City</Link></li>
                                        <li><Link to="#">Inactive Reason</Link></li>
                                        <li><Link to="#">Inactive date </Link></li>
                                    </ul>

                                </div>

                            </div>
                        </div>
                    </div>



                </div>
                <div className="volunteers-list-wrap inactive-list mobile">
                    <div className="container-fluid">
                        <div className="row gray-bar">
                            <div className="col-1">
                                <label className="control control--checkbox">
                                    <input type="checkbox" />
                                    <div className="control__indicator"></div>
                                </label>

                            </div>
                            <div className="col-10"><span className="si-count">0</span></div>
                        </div>
                        <div className="row  white-bar">
                            <div className="col-1">
                                <label className="control control--checkbox">
                                    <input type="checkbox" />
                                    <div className="control__indicator"></div>
                                </label>

                            </div>
                            <div className="col-3"><img src="images/avatar.svg" className="volunteers-avatar" /></div>
                            <div className="col-8"><span className="volunteers-name">Amy Poehler</span></div>
                        </div>
                        <div className="row  white-bar">
                            <div className="col-1">
                                <label className="control control--checkbox">
                                    <input type="checkbox" />
                                    <div className="control__indicator"></div>
                                </label>

                            </div>
                            <div className="col-3"><img src="images/avatar.svg" className="volunteers-avatar" /></div>
                            <div className="col-8"><span className="volunteers-name">Bessie Cooper</span></div>
                        </div>
                        <div className="row  white-bar">
                            <div className="col-1">
                                <label className="control control--checkbox">
                                    <input type="checkbox" />
                                    <div className="control__indicator"></div>
                                </label>

                            </div>
                            <div className="col-3"><img src="images/avatar.svg" className="volunteers-avatar" /></div>
                            <div className="col-8"><span className="volunteers-name">Caroline Jones</span></div>
                        </div>
                        <div className="row  white-bar">
                            <div className="col-1">
                                <label className="control control--checkbox">
                                    <input type="checkbox" />
                                    <div className="control__indicator"></div>
                                </label>

                            </div>
                            <div className="col-3"><img src="images/avatar.svg" className="volunteers-avatar" /></div>
                            <div className="col-8"><span className="volunteers-name">Courtney Henry</span></div>
                        </div>
                        <div className="row  white-bar">
                            <div className="col-1">
                                <label className="control control--checkbox">
                                    <input type="checkbox" />
                                    <div className="control__indicator"></div>
                                </label>

                            </div>
                            <div className="col-3"><img src="images/avatar.svg" className="volunteers-avatar" /></div>
                            <div className="col-8"><span className="volunteers-name">Darlene Robertson</span></div>
                        </div>
                    </div>

                </div>
                <div className="volunteers-list-wrap">
                    <div className="container-fluid">
                        <div className="selected-tab">
                            <div className="row gray-bar">
                                <div className="col-1">
                                    <label className="control control--checkbox">
                                        <input type="checkbox" />
                                        <div className="control__indicator"></div>
                                    </label>
                                    <span className="si-count arrow">2</span>


                                </div>
                                <ul className="selected-icon">

                                    <li className="move-icon"><Link to="#" data-toggle="modal" data-target="#basicModal"><img src="images/icon-move-to-active.svg" /><span>Move to Inactive</span></Link></li>

                                    <li className="export-icon"><Link to="#"><img src="images/icon-export.svg" /><span>Export</span></Link></li>
                                    <li className="delete-icon"><Link to="#"><img src="images/icon-delete.svg" /><span>Delete</span></Link></li>


                                </ul>
                            </div>
                        </div>

                        <table id="vl-table" className="table table-bordered">
                            <thead>
                                <tr className="">
                                    <th> <label className="control control--checkbox ">
                                        <input type="checkbox" />
                                        <div className="control__indicator"></div>
                                    </label>  <span className="vl-count">43</span>Name <span className="sorting"></span></th>
                                    <th>Email <span className="sorting"></span></th>
                                    <th>Join Date <span className="sorting"></span></th>
                                    <th>Date Moved to Inactive <span className="sorting"></span></th>
                                    <th>Reason<span className="sorting"></span></th>

                                </tr>
                            </thead>
                            <tbody>

                                <tr className="">
                                    <td> <label className="control control--checkbox">
                                        <input type="checkbox" />
                                        <div className="control__indicator"></div>
                                    </label>
                                        <img src="images/avatar.svg" className="volunteers-avatar" />
                                        <span className="volunteers-name">Albert Flores</span>

                                    </td>
                                    <td><Link to="mailto:jessica.hanson@example.com">jessica.hanson @example.com</Link></td>
                                    <td>8 August 2020</td>
                                    <td>30 April 2021</td>
                                    <td>Health reasons</td>

                                </tr>
                                <tr className="active">
                                    <td> <label className="control control--checkbox">
                                        <input type="checkbox" defaultChecked />
                                        <div className="control__indicator"></div>
                                    </label>
                                        <img src="images/avatar.svg" className="volunteers-avatar" />
                                        <span className="volunteers-name">Albert Flores</span>

                                    </td>
                                    <td><Link to="mailto:jessica.hanson@example.com">jessica.hanson @example.com</Link></td>
                                    <td>8 August 2020</td>
                                    <td>30 April 2021</td>
                                    <td>Health reasons</td>
                                </tr>
                                <tr className="active">
                                    <td> <label className="control control--checkbox">
                                        <input type="checkbox" defaultChecked />
                                        <div className="control__indicator"></div>
                                    </label>
                                        <img src="images/avatar.svg" className="volunteers-avatar" />
                                        <span className="volunteers-name">Albert Flores</span>

                                    </td>
                                    <td><Link to="mailto:jessica.hanson@example.com">jessica.hanson @example.com</Link></td>
                                    <td>8 August 2020</td>
                                    <td>30 April 2021</td>
                                    <td>Health reasons</td>
                                </tr>
                                <tr>
                                    <td> <label className="control control--checkbox">
                                        <input type="checkbox" />
                                        <div className="control__indicator"></div>
                                    </label>
                                        <img src="images/avatar.svg" className="volunteers-avatar" />
                                        <span className="volunteers-name">Albert Flores</span>

                                    </td>
                                    <td><Link to="mailto:jessica.hanson@example.com">jessica.hanson @example.com</Link></td>
                                    <td>8 August 2020</td>
                                    <td>30 April 2021</td>
                                    <td>Health reasons</td>
                                </tr>
                                <tr>
                                    <td> <label className="control control--checkbox">
                                        <input type="checkbox" />
                                        <div className="control__indicator"></div>
                                    </label>
                                        <img src="images/avatar.svg" className="volunteers-avatar" />
                                        <span className="volunteers-name">Albert Flores</span>

                                    </td>
                                    <td><Link to="mailto:jessica.hanson@example.com">jessica.hanson @example.com</Link></td>
                                    <td>8 August 2020</td>
                                    <td>30 April 2021</td>
                                    <td>Health reasons</td>
                                </tr>
                                <tr>
                                    <td> <label className="control control--checkbox">
                                        <input type="checkbox" />
                                        <div className="control__indicator"></div>
                                    </label>
                                        <img src="images/avatar.svg" className="volunteers-avatar" />
                                        <span className="volunteers-name">Albert Flores</span>

                                    </td>
                                    <td><Link to="mailto:jessica.hanson@example.com">jessica.hanson @example.com</Link></td>
                                    <td>8 August 2020</td>
                                    <td>30 April 2021</td>
                                    <td>Health reasons</td>
                                </tr>
                                <tr>
                                    <td> <label className="control control--checkbox">
                                        <input type="checkbox" />
                                        <div className="control__indicator"></div>
                                    </label>
                                        <img src="images/avatar.svg" className="volunteers-avatar" />
                                        <span className="volunteers-name">Albert Flores</span>

                                    </td>
                                    <td><Link to="mailto:jessica.hanson@example.com">jessica.hanson @example.com</Link></td>
                                    <td>8 August 2020</td>
                                    <td>30 April 2021</td>
                                    <td>Health reasons</td>
                                </tr>
                                <tr>
                                    <td> <label className="control control--checkbox">
                                        <input type="checkbox" />
                                        <div className="control__indicator"></div>
                                    </label>
                                        <img src="images/avatar.svg" className="volunteers-avatar" />
                                        <span className="volunteers-name">Albert Flores</span>

                                    </td>
                                    <td><Link to="mailto:jessica.hanson@example.com">jessica.hanson @example.com</Link></td>
                                    <td>8 August 2020</td>
                                    <td>30 April 2021</td>
                                    <td>Health reasons</td>
                                </tr>

                            </tbody>


                        </table>
                    </div>
                </div>
                <div className="expand-page-navigation">
                    <ul>
                        <li className="active"><Link to="javascript:void(0)">1-25</Link></li>
                        <li className=""><Link to="javascript:void(0)">26-43</Link></li>

                    </ul>
                </div>
                <div className="pagination-wrap">
                    <Link to="javascript:void(0)" className="pw-link"></Link>
                    <ul className="pw-link-wrap">
                        <li className="pw-prev"><Link to="#" className="pw-prev-link"></Link></li>
                        <li><Link herf=""><span>1-25</span></Link></li>
                        <li><Link herf=""><span>26-43</span></Link></li>
                        <li className="pw-next"><Link to="#" className="pw-next-link"></Link></li>
                    </ul>
                </div>

            </div>
        </div>
        <div className="modal fade add-popup move-popup" id="basicModal" tabindex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title" id="myModalLabel">Move 7 Volunteers to Active</h4>
                        <p>Selected users will be reactivated and available in the Directory.</p>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="list-volunteers-remove">
                            <p>
                                <span>John Smith,</span><span>Guy Hawkins,</span><span>Esther Howard,</span><span>Esther Howard,</span><span>Bessie Cooper</span>

                                <span className="expand-list">and 26 more volunteers</span>
                            </p>

                        </div>
                        <div className="row">
                            <div className="col-6">
                                <button type="submit" className="secondary-btn">Cancel</button>

                            </div>
                            <div className="col-6">
                                <button type="submit" className="add-btn">Move to Active</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="volunteers-container">
            <div className="volunteers-profile">
                <Link to="#" className="vp-link"><img src="images/icon-close.svg" /></Link>
                <div className="profile-pic">
                    <img src="images/profile-pic.svg" />
                </div>
                <div className="profile-details">
                    <h5>Amy Poehler</h5>
                    <h6>Last active: <span>Yesterday</span></h6>
                    <Link to="#"><img src="images/icon-make-important.svg" />1 important note</Link>
                </div>
            </div>
            <div className="vp-wrap">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-2 vp-left">
                            <ul id="tabs" className="nav nav-tabs" role="tablist">
                                <li className="nav-item active">
                                    <Link id="tab-Link" to="#pane-Link" className="nav-link active" data-toggle="tab" role="tab"><img src="images/icon-navigation-hover.svg" /></Link>
                                </li>
                                <li className="nav-item">
                                    <Link id="tab-B" to="#pane-B" className="nav-link" data-toggle="tab" role="tab"><img src="images/icon-navigation-2.svg" /></Link>
                                </li>
                                <li className="nav-item">
                                    <Link id="tab-C" to="#pane-C" className="nav-link" data-toggle="tab" role="tab"><img src="images/icon-navigation-3.svg" /></Link>
                                </li>
                                <li className="nav-item">
                                    <Link id="tab-D" to="#pane-D" className="nav-link" data-toggle="tab" role="tab"><img src="images/icon-navigation-4.svg" /></Link>
                                </li>
                                <li className="nav-item">
                                    <Link id="tab-E" to="#pane-E" className="nav-link" data-toggle="tab" role="tab"><img src="images/icon-navigation-5.svg" /></Link>
                                </li>
                                <li className="nav-item">
                                    <Link id="tab-F" to="#pane-F" className="nav-link" data-toggle="tab" role="tab"><img src="images/icon-navigation-7.svg" /></Link>
                                </li>
                                <li className="nav-item">
                                    <Link id="tab-G" to="#pane-G" className="nav-link" data-toggle="tab" role="tab"><img src="images/icon-navigation-6.svg" /></Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-10 vp-right tab-content" id="content" role="tablist">
                            <div id="pane-Link" className="card tab-pane fade show active" role="tabpanel" aria-labelledby="tab-Link">
                                <div id="collapse-Link" className="collapse show" role="tabpanel" aria-labelledby="heading-Link">
                                    <div className="card-body">
                                        <h2>Profile</h2>
                                        <div className="untag-result-list">
                                            <h3>Tags<span></span></h3>
                                            <ul>
                                                <li>Example-tag<span></span></li>
                                                <li>Example<span></span></li>
                                                <li>Example-tag<span></span></li>
                                                <li>Tag 1<span></span></li>
                                            </ul>
                                        </div>
                                        <div className="vp-information show">
                                            <div className="vpi-top">
                                                <h2>Information</h2>
                                                <Link to="#">Edit </Link>
                                            </div>
                                            <div className="vpi-middle">
                                                <div className="vpim-one">
                                                    <h3><span style={{ color: "#D9402C" }}>Inactive <img src="images/icon-arrow-down-blck.svg" /></span></h3>
                                                    <span>Status</span>
                                                    <ul>
                                                        <li>Active</li>
                                                        <li>Inactive</li>
                                                    </ul>
                                                </div>
                                                <div className="vpim-two">
                                                    <h3>8 April 2021</h3>
                                                    <span>Join date</span>
                                                </div>
                                            </div>
                                            <div className="vpi-bottom-wrap" style={{ color: "#B3ADB1" }}>
                                                <div className="vpi-bottom">
                                                    <h3>Amy Poehler</h3>
                                                    <span>name</span>
                                                </div>
                                                <div className="vpi-bottom">
                                                    <h3><Link to="mailto:amy.poehler@gmail.com">amy.poehler@gmail.com</Link></h3>
                                                    <span style={{ color: "#B3ADB1" }}>primary email OPTED IN</span>
                                                </div>
                                                <div className="vpi-bottom">
                                                    <h3 style={{ color: "#B3ADB1" }}>+1 (010) 543 416 89</h3>
                                                    <span style={{ color: "#B3ADB1" }}>primary phone</span>
                                                </div>
                                                <div className="vpi-bottom">
                                                    <h3 style={{ color: "#B3ADB1" }}>United States</h3>
                                                    <span style={{ color: "#B3ADB1" }}>country</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="vp-information none">
                                            <div className="vpi-top">
                                                <h2>Information</h2>
                                                <Link to="Volunteer-profile_default.html" className="vp-done">Done</Link>
                                            </div>
                                            <div className="vp-info-edit">
                                                <div className="add-form-control">
                                                    <input type="text" className="form-text" value="Amy" />
                                                    <label className="form-title">first name</label>
                                                </div>
                                                <div className="add-form-control">
                                                    <input type="text" className="form-text" value="Poehler" />
                                                    <label className="form-title">last name</label>
                                                </div>
                                                <div className="add-form-control">
                                                    <input type="text" className="form-text" value="amy.poehler@gmail.com" />
                                                    <label className="form-title">primary EMAIL</label>
                                                </div>
                                                <div className="add-form-control">
                                                    <input type="text" className="form-text" value="+1 (010) 543 416 89" />
                                                    <label className="form-title">primary phone</label>
                                                </div>
                                                <div className="input-group date add-form-control" data-provide="datepicker">
                                                    <input type="text" className="form-text" value="8 June 2020" />
                                                    <label className="form-title">join date</label>
                                                </div>
                                            </div>
                                            <div className="vp-address-edit">
                                                <div className="add-form-control">
                                                    <input type="text" className="form-text" value="" />
                                                    <label className="form-title">ADDRESS</label>
                                                </div>
                                                <div className="add-form-control">
                                                    <input type="text" className="form-text" value="" />
                                                    <label className="form-title">city</label>
                                                </div>
                                                <div className="add-form-control">
                                                    <input type="text" className="form-text" value="" />
                                                    <label className="form-title">state/province </label>
                                                </div>
                                                <div className="add-form-control">
                                                    <input type="text" className="form-text" value="" />
                                                    <label className="form-title">ZIP/POSTCODE</label>
                                                </div>
                                                <div className="add-form-control">
                                                    <div className="sel sel--black-panther">
                                                        <select name="select-profession" id="select-profession">
                                                            <option value="" disabled>Select</option>
                                                            <option value="Country name">Country name</option>
                                                            <option value="Country name">Country name</option>
                                                            <option value="Country name">Country name</option>
                                                            <option value="Country name">Country name</option>
                                                            <option value="Country name">Country name</option>
                                                        </select>
                                                    </div>
                                                    <label className="form-title">country</label>
                                                </div>
                                                <div className="add-form-control">
                                                    <input type="text" className="form-text" placeholder="Type Link company" />
                                                    <label className="form-title">workplace</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="vp-availability" style={{ color: "#B3ADB1" }}>
                                            <h2 style={{ color: "#B3ADB1" }}>Availability<span></span></h2>
                                            <div className="row">
                                                <div className="col-3">Monday</div>
                                                <div className="col-6"><span>8:00 AM</span> - <span>6:00 PM</span></div>
                                                <div className="col-3 icon-right"><Link to="javascript:void(0);" className="edit-available"><img src="images/edit-icon.svg" /></Link><Link to="" className="delete-available"><img src="images/icon-delete-teal.svg" /></Link></div>
                                            </div>
                                            <div className="row">
                                                <div className="col-3">Monday</div>
                                                <div className="col-6"><span>7:00 PM</span> - <span>9:00 PM</span></div>
                                                <div className="col-3 icon-right"><Link to="javascript:void(0);" className="edit-available"><img src="images/edit-icon.svg" /></Link><Link to="" className="delete-available"><img src="images/icon-delete-teal.svg" /></Link></div>
                                            </div>
                                            <div className="row">
                                                <div className="col-3">Wednesday</div>
                                                <div className="col-6"><span>7:00 PM</span> - <span>9:00 PM</span></div>
                                                <div className="col-3 icon-right"><Link to="javascript:void(0);" className="edit-available"><img src="images/edit-icon.svg" /></Link><Link to="" className="delete-available"><img src="images/icon-delete-teal.svg" /></Link></div>
                                            </div>
                                            <div className="avilable-edit-wrap">
                                                <div className="row">
                                                    <div className="col-1 col-md-3 weekday">
                                                        <div className="add-form-control">
                                                            <div className="sel sel--black-panther">
                                                                <select name="select-profession" id="select-profession">
                                                                    <option value="" disabled>Friday</option>
                                                                    <option value="Country name">Monday</option>
                                                                    <option value="Country name">Tuesday</option>
                                                                    <option value="Country name">Wednesday</option>
                                                                    <option value="Country name">Thursday</option>
                                                                    <option value="Country name">Saturday</option>
                                                                    <option value="Country name">Sunday</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-1 col-md-4 start-time">
                                                        <div className="avi-time-wrap">
                                                            <div className="add-form-control">
                                                                <div className="sel sel--black-panther">
                                                                    <select name="select-profession" id="select-profession">
                                                                        <option value="" >8.30 AM</option>
                                                                        <option value="Country name">9 AM</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-1 col-md-4">
                                                        <div className="avi-time-wrap light-color">
                                                            <div className="add-form-control">
                                                                <div className="sel sel--black-panther">
                                                                    <select name="select-profession" id="select-profession">
                                                                        <option value="" >Time</option>
                                                                        <option value="" >6.00 PM</option>
                                                                        <option value="Country name">6.30 PM</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-1 col-md-12">
                                                        <div className="avi-btn-wrap">
                                                            <Link to="#" className="teal-border-btn">Cancel</Link>
                                                            <Link to="#" className="teal-bg-btn">Save Changes</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-3">Friday</div>
                                                <div className="col-6"><span>7:00 PM</span> - <span>9:00 PM</span></div>
                                                <div className="col-3 icon-right"><Link to="#" className="edit-available"><img src="images/edit-icon.svg" /></Link><Link to="" className="delete-available"><img src="images/icon-delete-teal.svg" /></Link></div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div id="pane-B" className="card tab-pane fade" role="tabpanel" aria-labelledby="tab-B">
                                <div id="collapse-B" className="collapse" role="tabpanel" aria-labelledby="heading-B">
                                    <div className="card-body">
                                        [Tab content B]
                                    </div>
                                </div>
                            </div>
                            <div id="pane-C" className="card tab-pane fade" role="tabpanel" aria-labelledby="tab-C">
                                <div id="collapse-C" className="collapse" role="tabpanel" aria-labelledby="heading-C">
                                    <div className="card-body">
                                        [Tab content C]
                                    </div>
                                </div>
                            </div>
                            <div id="pane-D" className="card tab-pane fade" role="tabpanel" aria-labelledby="tab-D">
                                <div id="collapse-D" className="collapse" role="tabpanel" aria-labelledby="heading-D">
                                    <div className="card-body"></div>
                                </div>
                            </div>
                            <div id="pane-E" className="card tab-pane fade" role="tabpanel" aria-labelledby="tab-E">
                                <div id="collapse-E" className="collapse" role="tabpanel" aria-labelledby="heading-E">
                                    <div className="card-body">
                                        <div className="note-wrapper">
                                            <h2>Notes</h2>
                                            <div className="note-form">
                                                <div className="add-form-control">
                                                    <textarea className="form-control textarae-control" placeholder="Write Link note about Amy" onclick="document.getElementById('myform').style.display = 'flex';"></textarea>
                                                </div>
                                                <div className="add-note-wrap" id="myform">
                                                    <Link to="#" className="flag-note">Flag Note</Link>
                                                    <Link to="#" className="btn-teal-bg">Add Note</Link>
                                                </div>
                                            </div>
                                            <p>Amy does not have any notes yet</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="pane-F" className="card tab-pane fade" role="tabpanel" aria-labelledby="tab-F">
                                <div id="collapse-F" className="collapse" role="tabpanel" aria-labelledby="heading-F">
                                    <div className="card-body">
                                        <div className="doc-wrap">
                                            <h2>Documents<Link to="#" className="btn-teal-bg">Add File</Link></h2>
                                        </div>
                                        <div className="doc-wrap">
                                            <div className="row">
                                                <div className="col-6 document-link">
                                                    <Link to="#">Document 1.pdf</Link>
                                                    <span>Added by Jerom Bell</span>
                                                </div>
                                                <div className="col-6 document-delet-icon">
                                                    <Link to="#" data-toggle="modal" data-target="#basicModal"><img src="images/icon-delete-inactive.svg" /></Link>
                                                    <span>2:34 PM, 1 May 2021</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="doc-wrap">
                                            <div className="row">
                                                <div className="col-6 document-link">
                                                    <Link to="#">Document 1.pdf</Link>
                                                    <span>Added by Jerom Bell</span>
                                                </div>
                                                <div className="col-6 document-delet-icon">
                                                    <Link to="#"><img src="images/icon-delete-inactive.svg" /></Link>
                                                    <span>2:34 PM, 1 May 2021</span>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="doc-wrap-txt">Amy does not have any uploaded documents</p>
                                    </div>
                                    <div className="modal fade warning-popup" id="basicModal" tabindex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h4 className="modal-title" id="myModalLabel">Warning!</h4>
                                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div className="modal-body">
                                                    <p>The document will be permanently deleted from the assosiated user profile.</p>
                                                    <p>To delete this note, enter ‘1’ below:</p>
                                                    <div className="add-form-control">
                                                        <input type="text" className="form-text" placeholder="Type here..." />
                                                    </div>
                                                    <div className="avi-btn-wrap">
                                                        <Link to="#" className="teal-border-btn">Cancel</Link>
                                                        <Link to="Volunteer-profile_default.html" className="red-bg-btn">Delete</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <NotificationContainer />
    </>
}

const mapStateToProps = state => {
    return {
        logoutLoading: state.auth.loading,
        logoutSuccess: state.auth.logoutSuccess,
        logoutError: state.auth.error,
        userTokens: state.auth.tokens
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: requestBody => dispatch(ActionCreators.logout(requestBody)),
        flushAuthState: () => dispatch(ActionCreators.flushAuthState())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InactiveDefault)