import "./Image.css";

const Image = ({ src }, { name }) => {
  return <img className="imagen" src={src} alt={name} />;
};

export default Image;
