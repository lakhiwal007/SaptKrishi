import React from "react";
import { NextPage } from "next";

import Profile from "./Profile";

const Profiles: NextPage = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-8 col-lg-6">
          {/** <!-- Section Heading--> **/}
          <div
            className="section_heading text-center wow fadeInUp mt-4"
            data-wow-delay="0.2s"
            style={{
              visibility: "visible",
              animationDelay: "0.2s",
              animationName: "fadeInUp",
            }}
          >
            <h3 className="text-6xl font-normal pb-4">
              Founder and <span> CEO</span>
            </h3>
            <div className="line"></div>
          </div>
        </div>
      </div>
      <div className="row p-16 flex items-center justify-center">
        <Profile
          imgURL={"/src/team/nikky-jha.jpg"}
          fbURL={"#"}
          twURL={"#"}
          liURL={"#"}
          name={"Nikky Kumar Jha"}
          designation={"Co-Founder & CEO"}
        />
        <Profile
          imgURL={"/src/team/rashmi-jha.jpg"}
          fbURL={"#"}
          twURL={"#"}
          liURL={"#"}
          name={"Rashmi Jha"}
          designation={"Co-Founder & CEO"}
        />
      </div>
      <div className="row justify-content-center">
        <div className="col-12 col-sm-8 col-lg-6">
          {/** <!-- Section Heading--> **/}
          <div
            className="section_heading text-center wow fadeInUp mt-4"
            data-wow-delay="0.2s"
            style={{
              visibility: "visible",
              animationDelay: "0.2s",
              animationName: "fadeInUp",
            }}
          >
            <h3 className="text-6xl font-normal pb-4">
              Our Creative <span> Team</span>
            </h3>
            <p className="text-md pb-4 text-lg">
              A diverse team from different background collborated to build an
              innovative product to respond Sustainable Development Goals.
            </p>
            <div className="line"></div>
          </div>
        </div>
      </div>
      <div className="row p-16 flex items-center justify-center">
        <Profile
          imgURL={"/src/team/diksha.png"}
          fbURL={"#"}
          twURL={"#"}
          liURL={"#"}
          name={"Ms. Deeksha Yadav"}
          designation={"..."}
        />
        <Profile
          imgURL={"/src/team/shivani.png"}
          fbURL={"#"}
          twURL={"#"}
          liURL={"#"}
          name={"Ms. Shivani Jha"}
          designation={"..."}
        />
        <Profile
          imgURL={"/src/team/harsh.jpeg"}
          fbURL={"#"}
          twURL={"#"}
          liURL={"#"}
          name={"Mr. Harsh Marolia"}
          designation={"..."}
        />
        <Profile
          imgURL={"/src/team/sourabh.png"}
          fbURL={"#"}
          twURL={"#"}
          liURL={"#"}
          name={"Mr. Sourabh Tiwary"}
          designation={"..."}
        />
      </div>

      <div className="row justify-content-center">
        <div className="col-12 col-sm-8 col-lg-6">
          {/** <!-- Section Heading--> **/}
          <div
            className="section_heading text-center wow fadeInUp mt-4"
            data-wow-delay="0.2s"
            style={{
              visibility: "visible",
              animationDelay: "0.2s",
              animationName: "fadeInUp",
            }}
          >
            <h3 className="text-6xl font-normal pb-4">
              Advisory Board <span> Members</span>
            </h3>
            <div className="line"></div>
          </div>
        </div>
      </div>
      <div className="row p-16 flex items-center justify-center">
        <Profile
          imgURL={"/src/team/j-ramkumar.jpg"}
          fbURL={"#"}
          twURL={"#"}
          liURL={"#"}
          name={"Dr. J Ramkumar"}
          designation={"Mentors"}
        />
        <Profile
          imgURL={"/src/team/amitabha.png"}
          fbURL={"#"}
          twURL={"#"}
          liURL={"#"}
          name={"Prof. Amitabha Bandyopadhyay"}
          designation={"Mentors"}
        />
        <Profile
          imgURL={"/src/team/jagdesh-suknad.jpg"}
          fbURL={"#"}
          twURL={"#"}
          liURL={"#"}
          name={"Jagdeesh Suknad"}
          designation={"Mentors"}
        />
      </div>
    </div>
  );
};

export default Profiles;
