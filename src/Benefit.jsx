function Benefit({ text, serialNumber }) {
  return (
    <li>
      <a href="#" className="benefit">
        <img src="./src/img/arrow.svg" alt="Link arrow" className="arrow" />
        <img
          src={`./src/img/benefit${serialNumber}.svg`}
          alt={text}
          className="benefit__img"
        />
        <span className="benefit__span">{text}</span>
      </a>
    </li>
  );
}

export default Benefit;
