import "./Images.css";

const Images = ({ src }, { text }) => {
  return <img className="image" src={src} alt={text} />;
};

export default Images;
