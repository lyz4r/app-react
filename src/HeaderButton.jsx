function HeaderButton({ text }) {
  let href = "";
  if (text === "About Us") {
    href = "./info";
  }
  return (
    <li>
      <a className="btn" href={href}>
        {text}
      </a>
    </li>
  );
}

export default HeaderButton;
