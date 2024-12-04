import { useState, useEffect } from "react";
import Property from "./Property";
import HeaderButton from "./HeaderButton";
import Benefit from "./Benefit";

function App() {
  const [properties, setProperties] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 3;

  useEffect(() => {
    setTimeout(() => {
      fetch("./src/properties.json")
        .then((response) => response.json())
        .then((data) => setProperties(data))
        .catch((error) => console.error("Error loading properties:", error));
    }, 1489);
  }, []);

  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = properties.slice(
    indexOfFirstProperty,
    indexOfLastProperty
  );

  const totalPages = Math.ceil(properties.length / propertiesPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <>
      <header className="header">
        <div className="header__top">
          <div className="container">
            <div className="header__top-row">
              <a href="#">
                <span className="logo-text">Estatein</span>
              </a>
              <nav className="nav">
                <ul className="top-row__nav-list">
                  <HeaderButton text={"Home"} />
                  <HeaderButton text={"About Us"} />
                  <HeaderButton text={"Properties"} />
                  <HeaderButton text={"Services"} />
                </ul>
              </nav>
              <a className="btn top-row__nav-list-contact" href="#">
                Contact Us
              </a>
              <div className="header__nav-btn">
                <button className="nav-icon-btn">
                  <div className="nav-icon"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="main">
        <section className="properties">
          <div className="container">
            <div className="properties__top">
              <img src="./src/img/stars.svg" alt="" className="stars" />
              <h2>Featured Properties</h2>
              <div className="properties__top-bot">
                <p>
                  Explore our handpicked selection of featured properties. Each
                  listing offers a glimpse into exceptional homes and
                  investments available through <br />
                  Estatein. Click &quot;View Details&quot; for more information.
                </p>
                <a href="#" className="btn properties_view-all">
                  View&nbsp;All&nbsp;Properties
                </a>
              </div>
            </div>

            <div className="properties__card-row">
              {currentProperties.map((property, index) => (
                <Property
                  key={index}
                  name={property.name}
                  description={property.description}
                  bedroom={property.bedroom}
                  bathroom={property.bathroom}
                  price={property.price}
                  imgName={property.imgName}
                />
              ))}
            </div>

            <div className="properties__bot page-sw">
              <div className="page-sw__pages">
                <p>
                  <span className="page-sw__cur-page">{currentPage}</span> of{" "}
                  {totalPages}
                </p>
              </div>

              <div className="page-sw__switch">
                <div
                  className={`switch ${
                    currentPage === 1 ? "switch--disabled" : ""
                  }`}
                  id="properties__switch--left"
                  onClick={() => handlePageChange(currentPage - 1)}
                >
                  <img
                    className="page-sw__arrow"
                    src="./src/img/arrowSwLeft.svg"
                    alt="Switch page left"
                  />
                </div>
                <div
                  className={`switch ${
                    currentPage === totalPages ? "switch--disabled" : ""
                  }`}
                  id="properties__switch--right"
                  onClick={() => handlePageChange(currentPage + 1)}
                >
                  <img
                    className="page-sw__arrow"
                    src="./src/img/arrowSwRight.svg"
                    alt="Switch page right"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="benefits">
          <ul className="benefits__list">
            <Benefit text={"Find Your Dream House"} serialNumber={1} />
            <Benefit text={"Unlock Property Value"} serialNumber={2} />
            <Benefit text={"Effortless Property Management"} serialNumber={3} />
            <Benefit
              text={"Smart Investments, Informed Decisions"}
              serialNumber={4}
            />
          </ul>
        </section>
      </main>
    </>
  );
}

export default App;
