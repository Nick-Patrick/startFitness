import React from "react"
const Layout = ({ children }) => {
  let nav = (
    <nav className="navbar navbar-expand-md navbar-dark navbar-custom">
      <a className="navbar-brand logo-text page-scroll" href="https://www.startfitness.life">Start Fitness</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-awesome fas fa-bars"></span>
        <span className="navbar-toggler-awesome fas fa-times"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link page-scroll" href="https://www.startfitness.life">HOME</a>
          </li>
          <li className="nav-item">
            <a className="nav-link page-scroll" href="https://www.startfitness.life/blog">BLOG</a>
          </li>
          <li className="nav-item">
            <a className="nav-link page-scroll" href="https://www.startfitness.life/privacy-policy.html">PRIVACY</a>
          </li>
          <li className="nav-item">
            <a className="nav-link page-scroll" href="https://www.startfitness.life/#contact">CONTACT</a>
          </li>
        </ul>
        <span className="nav-item social-icons">
          <span className="fa-stack">
            <a href="https://www.facebook.com/Start-Fitness-105231557819606">
              <i className="fas fa-circle fa-stack-2x"></i>
              <i className="fab fa-facebook-f fa-stack-1x"></i>
            </a>
          </span>
          <span className="fa-stack">
            <a href="https://twitter.com/StartFitness321">
              <i className="fas fa-circle fa-stack-2x"></i>
              <i className="fab fa-twitter fa-stack-1x"></i>
            </a>
          </span>
          <span className="fa-stack">
            <a href="https://www.instagram.com/_startfitness/">
              <i className="fas fa-circle fa-stack-2x"></i>
              <i className="fab fa-instagram fa-stack-1x"></i>
            </a>
          </span>
        </span>
      </div>
    </nav>
  )

  let header = (
    <header id="header" className="header header-blog">
      <div className="header-content">
        { nav }
      </div>
    </header>
  )

  return (
    <div>
      { header }
      <main className="tabs">
        <div className="container col-8">
          {children}
        </div>
      </main>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="footer-col">
                <h4>About Start Fitness</h4>
                <p>We're creating mobile apps for fitness training that keep workouts simple while achieving the best results.</p>
              </div>
            </div>
          <div className="col-md-4">
            <div className="footer-col middle">
              <h4>Important Links</h4>
              <ul className="list-unstyled li-space-lg yellow">
                <li className="media">
                  <i className="fas fa-square"></i>
                  <div className="media-body"><a href="https://play.google.com/store/apps/details?id=com.simplyfit.rowing&hl=en">Start Rowing on Android Play Store</a></div>
                </li>
                <li className="media">
                  <i className="fas fa-square"></i>
                  <div className="media-body"><a href="https://apps.apple.com/us/app/start-rowing/id1504306767?ls=1">Start Rowing on Apple App Store</a></div>
                </li>
              </ul>
            </div>
          </div> 
          <div className="col-md-4">
            <div className="footer-col last">
              <h4>Social Media</h4>
              <span className="fa-stack">
                <a href="https://www.facebook.com/Start-Fitness-105231557819606">
                  <i className="fas fa-circle fa-stack-2x"></i>
                  <i className="fab fa-facebook-f fa-stack-1x"></i>
                </a>
              </span>
              <span className="fa-stack">
                <a href="https://twitter.com/StartFitness321">
                  <i className="fas fa-circle fa-stack-2x"></i>
                  <i className="fab fa-twitter fa-stack-1x"></i>
                </a>
              </span>
              <span className="fa-stack">
                <a href="https://www.instagram.com/_startfitness/">
                  <i className="fas fa-circle fa-stack-2x"></i>
                  <i className="fab fa-instagram fa-stack-1x"></i>
                </a>
              </span>
            </div> 
          </div>
        </div>
      </div>
    </footer>

    <div className="copyright">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <p className="p-small">Copyright © 2020 <a href="https://www.startfitness.life">Start Fitness</a> - All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Layout
