import React from "react";
import coverImage from "../../assets/cover/cover-image.jpg";

function About() {
  return (
    <section>
      <h1 id="about">How your favorite pizza place came to life </h1>

      <img
        src={coverImage}
        className="my-2"
        style={{ width: "80%" }}
        alt="cover"
      />
    </section>
  );
}

export default About;
