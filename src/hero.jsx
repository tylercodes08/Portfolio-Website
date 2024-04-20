import './hero.css'

const Hero = (props) => {
  return (
    <p className={props.className}>
      Welcome to<br></br><span>Tyler's<br></br>Portfolio</span><br></br>Website
    </p>
  );
};

export default Hero;
