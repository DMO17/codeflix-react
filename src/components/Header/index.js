import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <nav className="nav-container">
        <div className="nav-links-container">
          <div className="nav-link">
            <a href="#">Home</a>
          </div>
          <div className="nav-link">
            <a href="#">Series</a>
          </div>
          <div className="nav-link">
            <a href="#">Films</a>
          </div>
          <div className="nav-link">
            <a href="#">New & Popular</a>
          </div>
          <div className="nav-link">
            <a href="#">My List</a>
          </div>
          <div className="nav-link">
            <a href="#">Watch Again</a>
          </div>
        </div>

        <div className="nav-links-profile">
          <a href="#">
            <img
              src="https://github.com/surajverma2587/codeflix-html-css/blob/main/assets/images/profile.png?raw=true"
              alt="user profile red smiley face"
              className="thumbnail-image"
            />
          </a>
        </div>
      </nav>
    </header>
  );
};
