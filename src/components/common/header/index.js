import "./header.css";

const Header = () => {
  return (
    <div className="max-width header">
      <img
        src="https://theme.zdassets.com/theme_assets/219316/ca65d4b0417dec6fa903cc5fadfd0ad9bbc93ce0.png"
        alt="zomato"
        className="header-logo"
      />
      <div className="header-right">
        <div className="header-location-search-container">
          <div className="location-wrapper">
            <div className="location-icon-name">
              <i className="fi fi-rr-marker absolute-center location-icon"></i>
              <div>Banglore</div>
            </div>
            <i className="fi fi-rr-caret-down absolute-center"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
