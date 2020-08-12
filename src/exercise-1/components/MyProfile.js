import React, { Component } from 'react';

class MyProfile extends Component {
    render() {
        return (
            <div className="route">
              <div>
                <label htmlFor="userName">UserName:
                    <span name="userName"> XXX</span>
                </label>
              </div>
              <div>
                <label htmlFor="gender">Gender:
                    <span name="gender"> Female</span>
                </label>
              </div>
              <div>
                <label htmlFor="work">Work:
                    <span name="work"> IT Industry</span>
                </label>
              </div>
              <div>
                <label htmlFor="website">Website:
                    <span name="website">'/my-profile'</span>
                </label>
              </div>
            </div>
        )
    }
}

export default MyProfile;
