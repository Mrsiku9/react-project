import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechyStar</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Welcome to our cutting-edge tech solution platform. We specialize in
            delivering innovative solutions tailored to your needs. Our team
            excels at providing top-tier technology services that empower
            businesses to thrive in the digital era. At our core, we are driven
            by a commitment to excellence. Our services encompass a wide range
            of tech-related solutions, from web development and design to data
            analysis and software engineering. We take pride in staying at the
            forefront of technological advancements to ensure that our clients
            always receive the best solutions available. Our experienced team of
            experts is dedicated to solving complex challenges with creativity
            and precision. We understand the importance of harnessing the power
            of technology to drive success in today's fast-paced world. Whether
            you require custom software development, user-friendly UI/UX
            designs, or data-driven insights to make informed decisions, we've
            got you covered. We are passionate about turning your ideas into
            reality and helping you achieve your goals. Contact us today to
            explore how our tech solutions can transform your business. Let's
            embark on a journey to innovation together!
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
