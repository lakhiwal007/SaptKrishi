import React from "react";
import { NextPage } from "next";

const Profiles: NextPage = () => {
  return (
    <div className="body genealogy-body genealogy-scroll">
      <div className="genealogy-tree">
        <ul>
          <li>
            <a href="#">
              <div className="member-view-box">
                <div className="member-image">
                  <img
                    src="https://image.flaticon.com/icons/svg/145/145867.svg"
                    alt="Member"
                  />
                  <div className="member-details">
                    <h3>John Doe</h3>
                  </div>
                </div>
              </div>
            </a>
            <ul className="active">
              <li>
                <a href="#">
                  <div className="member-view-box">
                    <div className="member-image">
                      <img
                        src="https://image.flaticon.com/icons/svg/145/145867.svg"
                        alt="Member"
                      />
                      <div className="member-details">
                        <h3>Member 1</h3>
                      </div>
                    </div>
                  </div>
                </a>
                
              </li>
              <li>
                <a href="#">
                  <div className="member-view-box">
                    <div className="member-image">
                      <img
                        src="https://image.flaticon.com/icons/svg/145/145867.svg"
                        alt="Member"
                      />
                      <div className="member-details">
                        <h3>Member 2</h3>
                      </div>
                    </div>
                  </div>
                </a>
               
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profiles;
