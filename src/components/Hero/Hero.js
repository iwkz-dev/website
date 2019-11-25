import React from "react";
import Navbar from "./Navbar/Navbar";
import JadwalSholat from "./JadwalSholat/JadwalSholat";

const Hero = () => {
  return (
    <section
      className="hero is-fullheight"
      style={{
        background:
          "linear-gradient( 109.6deg,  rgba(148,233,194,1) 11.2%, rgba(224,235,186,1) 91.1% )"
      }}
      id="hero"
    >
      <div className="hero-head">
        <Navbar />
      </div>

      <div className="hero-body">
        <div className="container" id="jadwalSholat">
          <div className="columns is-vcentered">
            <div className="column is-medium is-offset-1 is-5 is-hidden-touch">
              <p className="has-text-weight-semibold is-size-3">IWKZ</p>
              <p className="has-text-weight-medium is-size-5">
                Indonesisches Weisheits- und Kulturzentrum e.V.
              </p>
            </div>
            <div className="column is-offset-1 is-4">
              <JadwalSholat />
            </div>
          </div>
        </div>
      </div>

      <div className="hero-foot"></div>
    </section>
  );
};

export default Hero;
