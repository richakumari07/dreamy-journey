import goa from "./image/goa.jpg";
import manali from "./image/manali.jpg";
import kashmir from "./image/kashmir.jpg";

function App() {
  return (
    <>
   <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container">

    <a className="navbar-brand fw-bold" href="#home">
      DREAMY JOURNEY
    </a>

    <ul className="navbar-nav ms-auto flex-row gap-3">
      <li className="nav-item">
        <a className="nav-link text-white" href="#home">
          Home
        </a>
      </li>

      <li className="nav-item">
        <a className="nav-link text-white" href="#destinations">
          Destinations
        </a>
      </li>

      <li className="nav-item">
        <a className="nav-link text-white" href="#packages">
          Packages
        </a>
      </li>

      <li className="nav-item">
        <a className="nav-link text-white" href="#contact">
          Contact
        </a>
      </li>
    </ul>

  </div>
</nav>
      

      {/* Hero Section */}
    <div id="home" className="hero text-center">
        <h1 className="display-4 fw-bold">
          Explore The World With Us
        </h1>

        <p className="lead">
          Discover amazing destinations around the globe.
        </p>

        <button className="btn btn-primary btn-lg">
          Book Your Trip
        </button>
      </div>

      {/* Popular Destinations */}
      <section id="destinations" className="container py-5">
        <h2 className="text-center mb-5">
          Popular Destinations
        </h2>

        <div className="row">

          <div className="col-md-4 mb-4">
  <div className="card shadow h-100">
    <img
  src={goa}
  className="card-img-top"
  alt="Goa"
/>
    <div className="card-body text-center">
      <h3>Goa</h3>
     <p>Beautiful beaches and exciting nightlife.</p>

      <button className="btn btn-outline-primary">
        Explore
      </button>
    </div>
  
</div>
          </div>

         <div className="col-md-4 mb-4">
  <div className="card shadow h-100">
    <img
  src={manali}
  className="card-img-top"
  alt="Manali"
/>

    <div className="card-body text-center">
      <h3>Manali</h3>
      <p>Beautiful mountains and adventure activities.</p>

      <button className="btn btn-outline-success">
        Explore
      </button>
    </div>
  </div>
</div>

         <div className="col-md-4 mb-4">
  <div className="card shadow h-100">
    <img
  src={kashmir}
  className="card-img-top"
  alt="Kashmir"
/>

    <div className="card-body text-center">
      <h3>Kashmir</h3>
      <p>Stunning valleys and breathtaking scenery.</p>

      <button className="btn btn-outline-danger">
        Explore
      </button>
    </div>
  </div>
</div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-5">
            Tour Packages
          </h2>

          <div className="row">

            <div className="col-md-4 mb-4">
              <div className="card text-center shadow">
                <div className="card-body">
                  <h4>Basic Package</h4>
                  <h3 className="text-primary">₹9,999</h3>
                  <p>3 Days / 2 Nights</p>
                  <button className="btn btn-primary">
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card text-center shadow border-success">
                <div className="card-body">
                  <h4>Premium Package</h4>
                  <h3 className="text-success">₹19,999</h3>
                  <p>5 Days / 4 Nights</p>
                  <button className="btn btn-success">
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card text-center shadow">
                <div className="card-body">
                  <h4>Luxury Package</h4>
                  <h3 className="text-danger">₹29,999</h3>
                  <p>7 Days / 6 Nights</p>
                  <button className="btn btn-danger">
                    Book Now
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="container py-5">
        <h2 className="text-center mb-5">
          Journey🚀✈️🌴Reviews
        </h2>

        <div className="row">

          <div className="col-md-4 mb-3">
            <div className="card shadow">
              <div className="card-body">
                <h5>⭐⭐⭐⭐⭐</h5>
                <p>
                  Amazing experience and great service.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card shadow">
              <div className="card-body">
                <h5>⭐⭐⭐⭐⭐</h5>
                <p>
                  Best trip ever. Highly recommended.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card shadow">
              <div className="card-body">
                <h5>⭐⭐⭐⭐⭐</h5>
                <p>
                  Excellent hotels and sightseeing.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

     {/* Contact */}
<section id="contact" className="container py-5">
  <h2 className="text-center mb-4">
    Contact Us
  </h2>

  <form
    className="w-75 mx-auto"
    onSubmit={(e) => {
      e.preventDefault();
      alert("Message Sent Successfully!");
      e.target.reset();
    }}
  >
    <label className="form-label">
      Your Name
    </label>

    <input
      type="text"
      className="form-control mb-3"
    />

    <label className="form-label">
      Your Email
    </label>

    <input
      type="email"
      className="form-control mb-3"
    />

    <label className="form-label">
      Your Message
    </label>

    <textarea
      className="form-control mb-3"
      rows="4"
    ></textarea>

    <button
      type="submit"
      className="btn btn-primary"
    >
      Send Message
    </button>
  </form>
</section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <p className="mb-0">
          @2026 DREAMY JOURNEY | All Rights Reserved
        </p>
      </footer>
    </>
  );
}

export default App;