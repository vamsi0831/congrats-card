const element = (
  // Write your code here.
  <div className="congrats-card-container">
    <h1 className="heading">Congratulations</h1>
    <div className="profile-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="profile-image "
      />
      <h1 className="profile-name">Vamsi M</h1>
      <p className="profile-description">
        GITAM Institute of Technology,Visakhapatnam
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="watch-image"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
