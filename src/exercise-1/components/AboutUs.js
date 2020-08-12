import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AboutUs extends Component {
  render() {
      return (
          <div className="route">
            <div>
              <label htmlFor="company">
                  {"Company: "}
                  <span name="company">ThoughtWorks Local</span>
              </label>
            </div>
            <div>
              <label htmlFor="location">
                  {"Location: "}
                  <span name="location">Xi'an</span>
              </label>
            </div>
            <div>
              <span>For more inforamtion, please
                  view our{" "}
                  <Link to="/" style={{color: 'red'}}>website.</Link>
              </span>
            </div>
          </div>
      )
  }
}

export default AboutUs;