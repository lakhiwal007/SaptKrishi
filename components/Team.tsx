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
                <div className="member-image designation">
                  <div className="member-details">
                    <h3>Founder and CEO</h3>
                  </div>
                </div>
              </div>
            </a>
            <ul className="active">
              <li>
                <a href="#">
                  <div className="member-view-box">
                    <div className="member-image">
                      <img src="./src/team/nikky-jha.jpg" alt="nikky jha" />
                      <div className="member-details">
                        <h4>Nikky Jha</h4>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="member-view-box">
                    <div className="member-image">
                      <img src="./src/team/rashmi-jha.jpg" alt="Member" />
                      <div className="member-details">
                        <h4>Rashmi Jha</h4>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="genealogy-tree">
        <ul>
          <li>
            <a href="#">
              <div className="member-view-box">
                <div className="member-image designation">
                  <div className="member-details">
                    <h3>Our Creative team</h3>
                  </div>
                </div>
              </div>
            </a>
            <ul className="active">
              <li>
                <a href="#">
                  <div className="member-view-box">
                    <div className="member-image">
                      <img src="./src/team/shivani.png" alt="Shivani Jha" />
                      <div className="member-details">
                        <h4>Ms. Shivani Jha</h4>
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
                        src="./src/team/harsh.jpeg"
                        alt="Mr. Harsh Marolia"
                      />
                      <div className="member-details">
                        <h4>Mr. Harsh Marolia</h4>
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
                        src="./src/team/sourabh.png"
                        alt="Mr. Sourabh Tiwary"
                      />
                      <div className="member-details">
                        <h4>Mr. Sourabh Tiwary</h4>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="genealogy-tree">
        <ul>
          <li>
            <a href="#">
              <div className="member-view-box">
                <div className="member-image designation">
                  <div className="member-details">
                    <h3>Advisory Board Members</h3>
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
                        src="./src/team/j-ramkumar.jpg"
                        alt="Dr. J Ramkumar"
                      />
                      <div className="member-details">
                        <h4>Dr. J Ramkumar</h4>
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
                        src="./src/team/amitabha.png"
                        alt="Prof. Amitabha Bandyopadhyay"
                      />
                      <div className="member-details">
                        <h4>Prof. Amitabha Bandyopadhyay</h4>
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
                        src="./src/team/jagdesh-suknad.jpg"
                        alt="Jagdeesh Suknad"
                      />
                      <div className="member-details">
                        <h4>Jagdeesh Suknad</h4>
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
