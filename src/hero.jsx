import './hero.css'

const Hero = (props) => {
  return (
    <p className={props.className}>
      hey, I'm <span>Tyler</span>
    </p>
  );
};

export default Hero;
