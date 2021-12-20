import "./header.css";

const Header = () => {
  return (
    <div className="max-width header">
      <img
        src="https://theme.zdassets.com/theme_assets/219316/ca65d4b0417dec6fa903cc5fadfd0ad9bbc93ce0.png"
        alt="zomato"
        // height={180}
        // width={200}
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
          <div className="location-search-seperator"></div>
          <div className="header-searchbar">
            <i className="fi fi-rr-search absolute-center search-icon"></i>
            <input
              placeholder="Search for restaurant,cuisine or dish"
              className="search-input"
            />
          </div>
        </div>
        <div className="profile-wrapper">
          <img
            src="https://b.zmtcdn.com/images/user_avatars/cupcake.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
            alt="profile"
            className="header-profile-image"
          />
          <span className="header-username">SriVarshan</span>
          <i className="fi fi-rr-angle-down absolute-center profile-options-icon"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
