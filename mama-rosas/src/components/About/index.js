import React from "react";
import coverImage from "../../assets/cover/cover-image.jpg";

function About() {
  return (
    <section>
      <h1 id="about">Mama Rosas Pizza: </h1>
      <h2>How your favorite pizza place came to life</h2>
      <img
        src={coverImage}
        className="my-3"
        style={{ width: "90%" }}
        alt="cover"
      />
    </section>
  );
}

export default About;
