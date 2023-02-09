const element = (
  <div className="congratulations-container">
    <h1 className="congratulations-heading">Congratulations</h1>
    <div className="congratulations-mini-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="profile-image"
      />
      <h1 className="card-heading">Kiran V</h1>
      <p className="card-discription">
        Vishnu institute of computer Education and technology, Bhimavaram
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="watch-image"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
