const Default = () => {
    return <div class="site-wrap">
        <div class="header-wrap">
            <div class="header">
                <nav>
                    <img
                        src='../../assets/images/compnay.svg'
                        alt="Timecount Logo"
                    />
                    <div class="profile-info">
                        <a href="">
                            <img 
                                src="images/profile-pic.png" 
                            />
                        </a>
                    </div>
                </nav>
            </div>
        </div>
        <div class="site-container">

            <div class="container">
                <div class="step-form">
                    <div class="modal-wrap">

                        <div class="modal-bodies">
                            <div class="modal-body modal-body-step-1 is-showing">
                                <div class="title">Step 1 of 4</div>
                                <div class="description">Let’s get your organization set up on Timecounts</div>

                                <form>
                                    <div class="form-group">
                                        <label class="input-label-txt">Organization Name</label>
                                        <input type="text" class="input-text" />

                                    </div>
                                    <div class="form-group">
                                        <label 
                                            class="input-label-txt"
                                        >
                                            Public URL
                                        </label>
                                        <input 
                                            type="text" 
                                            class="input-text" 
                                            placeholder="http://timecounts.org/"
                                        />
                                        <p>This will be the website link for your volunteer hub.Make it a good one, you can’t change it
                                        later.</p>
                                    </div>


                                    <div class="button-wrap">
                                        <div class="button">Next Step</div>
                                    </div>
                                </form>
                            </div>
                            <div class="modal-body modal-body-step-2">
                                <div class="title">Step 2 of 4</div>
                                <div class="description">Which category does your organization fit into?</div>
                                <form>
                                    <div class="step-2">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <button class="select-category active">Nonprofit</button>
                                            </div>
                                            <div class="col-md-6">
                                                <button class="select-category">Community Group</button>
                                            </div>
                                            <div class="col-md-6">
                                                <button class="select-category">Event / Festival</button>
                                            </div>
                                            <div class="col-md-6">
                                                <button class="select-category">Company</button>
                                            </div>
                                            <div class="col-md-6">
                                                <button class="select-category">Vaccination Site</button>
                                            </div>
                                            <div class="col-md-6">
                                                <button class="select-category">School</button>
                                            </div>
                                            <div class="col-md-6">
                                                <button class="select-category">Government / Civic</button>
                                            </div>
                                            <div class="col-md-6">
                                                <button class="select-category">Doing my own thing</button>
                                            </div>
                                            <div class="col-md-6">
                                                <button class="select-category">Church / Spiritual Group</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="button-wrap fade-in">
                                        <div class=" button-alt">Back</div>
                                        <div class="button">Next step</div>
                                    </div>
                                </form>
                            </div>
                            <div class="modal-body modal-body-step-3">
                                <div class="title">Step 3 of 4</div>
                                <div class="description">What areas of focus best describe your organization?</div>
                                <form>
                                    <div class="step-3">
                                        <form>
                                            <div class="select-box">
                                                <div class="add-form-control">
                                                    <input 
                                                        type="text" 
                                                        class="form-text" 
                                                        placeholder=" Search for a activity"
                                                    />
                                                </div>
                                                <div class="add-tag">
                                                    <ul>
                                                        <li>Cinematography</li>
                                                        <li>Food</li>
                                                    </ul>
                                                </div>
                                                <p>Pick some options from above or search for needed ones.</p>
                                            </div>
                                            <div class="add-focus-select">
                                                <h2>The areas of focus for Test Organization:</h2>
                                                <div class="focus-tag">
                                                    <ul>
                                                        <li>Animals</li>
                                                        <li>Arts and Culture</li>
                                                        <li>Children and Youth</li>
                                                        <li>Community</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </form>
                                    </div>

                                    <div class="button-wrap fade-in">
                                        <div class=" button-alt">Back</div>
                                        <div class="button">Next step</div>
                                    </div>
                                </form>
                            </div>
                            <div class="modal-body modal-body-step-4">
                                <div class="title">Step 4 of 4</div>
                                <div class="description">What would you like to do in Timecounts?</div>
                                <form>
                                    <div class="step-3">
                                        <div class="row">
                                            <div class="col-md-3">
                                                <div class="select-wrap">

                                                    <img src="images/icon.jpg" />
                                                    <span>Create Reports</span>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="select-wrap">

                                                    <img src="images/icon.jpg" />
                                                    <span>Track Volunteer Time</span>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="select-wrap">

                                                    <img src="images/icon.jpg" />
                                                    <span>Manage a Volunteer Database</span>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="select-wrap">

                                                    <img src="images/icon.jpg" />
                                                    <span>Customize Signup Forms</span>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="select-wrap">

                                                    <img src="images/icon.jpg" />
                                                    <span>Communicate with Volunteers</span>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="select-wrap">

                                                    <img src="images/icon.jpg" />
                                                    <span>Create Applications</span>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="select-wrap">

                                                    <img src="images/icon.jpg" />
                                                    <span>Create Volunteer Events</span>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="select-wrap">

                                                    <img src="images/icon.jpg" />
                                                    <span>Communicate with Volunteers</span>
                                                </div>
                                            </div>


                                        </div>
                                    </div>

                                    <div class="button-wrap fade-in">
                                        <div class=" button-alt">Back</div>
                                        <div class="button">Next step</div>
                                    </div>
                                </form>
                            </div>
                            <div class="modal-body modal-body-step-5">

                                <div class="description">You are almost there</div>
                                <div class="text-center">
                                    <p class="eamil-sent-text">
                                        Your request to create a new organization is pending approval. You should
                                        shortly receive a confirmation on email 
                                        <span><a href="" class="email-link">example.gmail.com</a></span>
                                    </p>
                                    <div class="button">Back to Dashbaord</div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>
}

export default Default