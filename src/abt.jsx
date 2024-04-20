import "./abt.css";

const About = (props) => {
  return (
    <>
      <div className={props.className}>
        <h>About Me</h>
        <p>
          Hi, I’m <span>Tyler</span>, a high school student from Brooklyn, NY.<br></br>I
          love math, coding, and graphics design. I hope you<br></br>enjoy my work.
          Please use my <span>contact box</span> or email me at{" "}
          <span>tylergjeffrey@gmail.com</span> for any business inquires.
        </p>
      </div>
    </>
  );
};

export default About;
