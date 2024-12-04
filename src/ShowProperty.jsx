function ShowProperty({ hidden, children }) {
  if (hidden) {
    return <div className="properties__card none">{children}</div>;
  } else {
    return <div className="properties__card">{children}</div>;
  }
}

export default ShowProperty;
