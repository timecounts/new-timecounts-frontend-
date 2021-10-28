import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import LoggedSimpleHeader from '../../components/common/LoggedSimpleHeader'
import { Avatar, IconButton } from '@mui/material'
import { QuestionAnswerRounded } from '@mui/icons-material'

const ProfileUpdate = () => {

    const photoRef = useRef()
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState(null)
    const [country, setCountry] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zip, setZip] = useState(null)
    const [image, setImage] = useState(null)
    const [imageFile, setImageFile] = useState(null)

    return <div className="site-wrap">
        {/* <LoggedSimpleHeader /> */}
        <div className="site-container">
            <div className="edit-profile-wrapper">
                <div className="container-fluid">
                    <div className="edit-tab">
                        <div className="row">
                            <div className="col-md-2 mb-3">
                                <ul className="nav nav-tabs tabs-left sideways nav-pills flex-column">
                                    <li className="active nav-item">
                                        <Link to="#home-v" data-toggle="tab" className="nav-link">Profile Information</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="#profile-v" data-toggle="tab" className="nav-link">Availability</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="#messages-v" data-toggle="tab" className="nav-link">Time Off</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="#settings-v" data-toggle="tab" className="nav-link">Email</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="#passowrd-v" data-toggle="tab" className="nav-link">Passowrd</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="#communication-v" data-toggle="tab" className="nav-link">Communication</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="#notiifications-v" data-toggle="tab" className="nav-link">Notiifications</Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-md-10">
                                <div className="tab-content">
                                    <div className="tab-pane active" id="home-v">
                                        <div className="edit-profile-wrap">
                                            <h2>Edit Profile Information</h2>
                                            <div className="row align-items-center edit-tab-row">
                                                <div className="col-md-2">
                                                    <Avatar 
                                                        src={image}
                                                        onClick={e => {
                                                            e.preventDefault()
                                                            photoRef.current.click()
                                                        }}
                                                    />
                                                    {/* <img src="images/v-profile-img.png" className="edit-profile-img" /> */}
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="ep-wrap">
                                                        <input 
                                                            ref={photoRef}
                                                            type="file" 
                                                            style={{
                                                                display: 'none'
                                                            }}
                                                            onChange={e => {
                                                                setImageFile(e.target.files[0])
                                                                setImage(URL.createObjectURL(e.target.files[0]))
                                                            }}
                                                        />
                                                        <h2>Jason Marcle</h2>
                                                        <Link 
                                                            to="#" 
                                                            className="btn-alt"
                                                            onClick={e => {
                                                                e.preventDefault()
                                                                photoRef.current.click()
                                                            }}
                                                        >
                                                            Change Photo
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="add-form-control">
                                                        <input 
                                                            type="text" 
                                                            className="form-text" 
                                                            placeholder="Jason" 
                                                            value={firstName}
                                                            onChange={e => setFirstName(e.target.value)}
                                                        />
                                                        <label className ="form-title">first name</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="add-form-control">
                                                        <input 
                                                            type="text" 
                                                            className="form-text" 
                                                            placeholder="Marcle" 
                                                            value={lastName}
                                                            onChange={e => setLastName(e.target.value)}
                                                        />
                                                        <label className ="form-title">last name</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="add-form-control">
                                                        <input type="text" className="form-text" placeholder="+1 (010) 543 416 89" />
                                                        <label className ="form-title">phone number</label>
                                                        <div className="tooltip">
                                                            <Link 
                                                                to="#" 
                                                                className="btn-add-field" 
                                                                // data-toggle="modal" 
                                                                // data-target="#basicModal"
                                                            >
                                                                {/* <img src="images/question-mark.svg" /> */}
                                                                <IconButton>
                                                                    <QuestionAnswerRounded />
                                                                </IconButton>
                                                            </Link>
                                                            <span className ="tooltiptext">
                                                                <p>The phone number will be used for SMS if you are opted in. Will not be displayed publicly</p>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="add-form-control cal-icon">
                                                        <input type="text" className="form-text" placeholder="DD/MM/YYYY" />
                                                        <label className ="form-title">dATE OF BIRTH</label>
                                                        <div className="tooltip">
                                                            <Link to="#" className ="btn-add-field" data-toggle="modal" data-target="#basicModal">
                                                                {/* <img src="images/question-mark.svg" /> */}
                                                            </Link>
                                                            <span className ="tooltiptext">
                                                                <p>Birthdate to verify your age as some organizations have restrictions. Will not be displayed publicly</p>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="add-form-control">
                                                        <select className="form-text">
                                                            <option>Select country</option>
                                                        </select>
                                                        <label className="form-title">country</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="add-form-control">
                                                        <input type="text" className="form-text" placeholder="" />
                                                        <label className ="form-title">address</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="add-form-control">
                                                        <input type="text" className="form-text" placeholder="" />
                                                        <label className ="form-title">city</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="add-form-control">
                                                        <input type="text" className="form-text" placeholder="" />
                                                        <label className ="form-title">state/province</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="add-form-control">
                                                        <input type="text" className="form-text" placeholder="" />
                                                        <label className ="form-title">zip/postcode</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="avi-btn-wrap">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <Link to="#" className="teal-bg-btn">Save</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="bold-red"><Link to="#">Delete</Link></p>
                                    </div>
                                    <div className="tab-pane" id="profile-v">
                                        <div className="edit-wrap">
                                            <div className="vp-availability">
                                                <h2>Availability</h2>
                                                <div className="row">
                                                    <div className="col-3">Monday</div>
                                                    <div className="col-6"><span>8:00 AM</span> - <span>6:00 PM</span></div>
                                                    <div className="col-3 icon-right">
                                                        <Link to="#" className="edit-available">
                                                            {/* <img src="images/edit-icon.svg" /> */}
                                                        </Link>
                                                        <Link to="#" className="delete-available">
                                                            {/* <img src="images/icon-delete-teal.svg" /> */}
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-3">Monday</div>
                                                    <div className="col-6"><span>7:00 PM</span> - <span>9:00 PM</span></div>
                                                    <div className="col-3 icon-right">
                                                        <Link to="#" className="edit-available">
                                                            {/* <img src="images/edit-icon.svg" /> */}
                                                        </Link>
                                                        <Link to="#" className="delete-available">
                                                            {/* <img src="images/icon-delete-teal.svg" /> */}
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-3">Wednesday</div>
                                                    <div className="col-6"><span>7:00 PM</span> - <span>9:00 PM</span></div>
                                                    <div className="col-3 icon-right">
                                                        <Link to="#" className="edit-available">
                                                            {/* <img src="images/edit-icon.svg" /> */}
                                                        </Link>
                                                        <Link to="#" className="delete-available">
                                                            {/* <img src="images/icon-delete-teal.svg" /> */}
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="avilable-edit-wrap">
                                                    <div className="row">
                                                        <div className="col-1 col-md-12 col-lg-4 weekday">
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
                                                        <div className="col-1 col-md-6 col-lg-4 start-time">
                                                            <div className="avi-time-wrap">
                                                                <div className="add-form-control">
                                                                    <div className="sel sel--black-panther">
                                                                        <select name="select-profession" id="select-profession">
                                                                            <option value="">8.30 AM</option>
                                                                            <option value="Country name">9 AM</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-1 col-md-6 col-lg-4">
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
                                                        <div className="col-1 col-md-12 btn-container">
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
                                                    <div className="col-3 icon-right">
                                                        <Link to="#" className="edit-available">
                                                            {/* <img src="images/edit-icon.svg" /> */}
                                                        </Link>
                                                        <Link to="#" className="delete-available">
                                                            {/* <img src="images/icon-delete-teal.svg" /> */}
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <Link to="#" className="add-avil">+ Add Availability</Link>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="messages-v">
                                        <div className="edit-wrap">
                                            <div className="vp-time-off">
                                                <h2>Time off <span></span></h2>
                                                <div className="row">
                                                    <div className="col-9">
                                                        <h3>November 2-5, 2021</h3>
                                                        <h4>Personal reasons</h4>
                                                    </div>
                                                    <div className="col-3 icon-right">
                                                        <Link className="edit-available"><img src="images/edit-icon.svg" /></Link><Link to="" className="delete-available"><img src="images/icon-delete-teal.svg" /></Link>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-9">
                                                        <h3>January 11, 2021 8:30 AM to January 18, 2021 6:00 PM</h3>
                                                        <h4>Half-year off</h4>
                                                    </div>
                                                    <div className="col-3 icon-right">
                                                        <Link to="javascript:void(0);" className="edit-available">
                                                            <img src="images/edit-icon.svg" />
                                                        </Link>
                                                        <Link to="" className="delete-available">
                                                            <img src="images/icon-delete-teal.svg" />
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="time-off-edit">
                                                    <div className="row">
                                                        <div className="col-1 col-lg-6 col-md-12">
                                                            <div className="input-group date add-form-control" data-provide="datepicker">
                                                                <input type="text" className="form-text" value="January 1, 2021" />
                                                                <label className ="form-title">start date</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-1 col-lg-6 col-md-12">
                                                            <div className="input-group date add-form-control" data-provide="datepicker">
                                                                <input type="text" className="form-text" value="June 18, 2021" />
                                                                <label className ="form-title">end date</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-1 col-lg-6 col-md-12">
                                                            <div className="avi-time-wrap">
                                                                <div className="add-form-control">
                                                                    <div className="sel sel--black-panther">
                                                                        <span 
                                                                            className="sel__placeholder sel__placeholder--black-panther" 
                                                                            data-placeholder="8:30 AM"
                                                                        >
                                                                            8:30 AM
                                                                        </span>
                                                                        <div className="sel__box sel__box--black-panther">
                                                                            <span className="sel__box__options sel__box__options--black-panther">
                                                                                12:00 AM
                                                                            </span>
                                                                            <span className="sel__box__options sel__box__options--black-panther">
                                                                                12:30 AM
                                                                            </span>
                                                                            <span className="sel__box__options sel__box__options--black-panther">
                                                                                1:00 AM
                                                                            </span>
                                                                            <span className="sel__box__options sel__box__options--black-panther">
                                                                                1:30 AM
                                                                            </span>
                                                                        </div>
                                                                        <select 
                                                                            name="select-profession" 
                                                                            id="select-profession" 
                                                                            style={{
                                                                                display: 'none'
                                                                            }}
                                                                        >
                                                                            <option value="">8:30 AM</option>
                                                                            <option value="Country name">12:00 AM</option>
                                                                            <option value="Country name">12:30 AM</option>
                                                                            <option value="Country name">1:00 AM</option>
                                                                            <option value="Country name">1:30 AM</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <label className="control control--checkbox avi-time-wrap-lable">
                                                                <input type="checkbox" />
                                                                <div className="control__indicator"></div>
                                                                All Day
                                                            </label>
                                                        </div>
                                                        <div className="col-1 col-lg-6 col-md-12">
                                                            <div className="avi-time-wrap">
                                                                <div className="add-form-control">
                                                                    <div className="sel sel--black-panther">
                                                                        <span 
                                                                            className="sel__placeholder sel__placeholder--black-panther" 
                                                                            data-placeholder="Choose end time"
                                                                        >
                                                                            Choose end time
                                                                        </span>
                                                                        <div className="sel__box sel__box--black-panther">
                                                                            <span className="sel__box__options sel__box__options--black-panther">
                                                                                12:00 AM
                                                                            </span>
                                                                            <span className="sel__box__options sel__box__options--black-panther">
                                                                                12:30 AM
                                                                            </span>
                                                                            <span className="sel__box__options sel__box__options--black-panther">
                                                                                1:00 AM
                                                                            </span>
                                                                            <span className="sel__box__options sel__box__options--black-panther">
                                                                                1:30 AM
                                                                            </span>
                                                                        </div>
                                                                        <select 
                                                                            name="select-profession" 
                                                                            id="select-profession" 
                                                                            style={{
                                                                                display: 'none'
                                                                            }}
                                                                        >
                                                                            <option value="">Choose end time</option>
                                                                            <option value="Country name">12:00 AM</option>
                                                                            <option value="Country name">12:30 AM</option>
                                                                            <option value="Country name">1:00 AM</option>
                                                                            <option value="Country name">1:30 AM</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <label className="control control--checkbox avi-time-wrap-lable">
                                                                <input type="checkbox" />
                                                                <div className ="control__indicator"></div>
                                                                All Day
                                                            </label>
                                                        </div>
                                                        <div className="col-1 col-md-12">
                                                            <div className="add-form-control">
                                                                <input type="text" className="form-text" value="Half-year off" />
                                                                <label className ="form-title">reason</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-1 col-md-12 btn-container">
                                                            <div className="avi-btn-wrap">
                                                                <Link to="#" className="teal-border-btn">Cancel</Link>
                                                                <Link to="#" className="teal-bg-btn">Save Changes</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="settings-v">
                                        <div className="edit-wrap">
                                            <h2>Emails</h2>
                                            <div className="doc-wrap">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <h4>Pending</h4>
                                                    </div>
                                                </div>
                                                <div className="row align-items-center">
                                                    <div className="col-md-6">
                                                        <div className="edit-mail">
                                                            <Link to="#">jason.mar@gmail.com</Link>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="edit-mail-btn float-right">
                                                            <Link to="#" className="code-btn">Enter Code</Link>
                                                            <Link to="#" className="code-btn">Resend Email</Link>
                                                            <Link to="#">
                                                                {/* <img src="images/icon-delete-red.svg" /> */}
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="doc-wrap">
                                                <h4>Confirmed</h4>
                                                <div className="row mail-row align-items-center">
                                                    <div className="col-6">
                                                        <Link to="#" className="edit-link">jason.madsdsdr@gmail.com</Link>
                                                    </div>
                                                    <div className="col-6 primary-txt">
                                                        <span>Primary</span>
                                                    </div>
                                                    <div className="col-6">
                                                        <Link to="#" className="edit-link">jason.madsdsdr@gmail.com</Link>
                                                    </div>
                                                    <div className="col-6 document-delet-icon">
                                                        <Link to="#" className="code-btn">Set as Primary</Link>
                                                        <Link to="#">
                                                            {/* <img src="images/icon-delete-red.svg" /> */}
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row add-mail">
                                                <div className="col-md-6">
                                                    <h6>Add New Email</h6>
                                                    <div className="add-form-control">
                                                        <input type="text" className="form-text" required="" />
                                                        <label className="form-title">new email address</label>
                                                    </div>
                                                    <button type="submit" className="add-btn">Add New Email</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="passowrd-v">
                                        <div className="edit-wrap">
                                            <h2>Password</h2>
                                            <div className="row passowrd-change">
                                                <div className="col-md-6">
                                                    <div className="add-form-control">
                                                        <span><input type="text" className="form-text" required="" /></span>
                                                        <label className="form-title">current password</label>
                                                    </div>
                                                    <div className="add-form-control">
                                                        <span><input type="text" className="form-text" required="" /></span>
                                                        <label className="form-title">New password</label>
                                                    </div>
                                                    <div className="add-form-control">
                                                        <Link to="#" className="si-btn-primary">Save</Link>
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
    </div>
}

export default ProfileUpdate
