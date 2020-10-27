import React from "react";

function Services() {
  return (
    <section id="services">
      <div className="services-header">
        <div className="header">SERVICES</div>
        <div className="sub-header">
          What I Do?
          <div className="border"></div>
        </div>
      </div>
      <div className="service-content">
        <div className="row">
          <div className="col-md-6">
            <div className="content">
              <div className="icon">
                <i className="fas fa-pencil-alt"></i>
              </div>
              <div className="text">
                <div className="header">Creative Design</div>
                <div className="para">
                  Lisque persius interesset his et, in quot quidam persequeris
                  vim, ad mea essent possim iriure.
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="content">
              <div className="icon">
                <i className="fas fa-laptop"></i>
              </div>
              <div className="text">
                <div className="header">User Interface</div>
                <div className="para">
                  Lisque persius interesset his et, in quot quidam persequeris
                  vim, ad mea essent possim iriure.
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="content">
              <div className="icon">
                <i className="far fa-window-restore"></i>
              </div>
              <div className="text">
                <div className="header">User Experience</div>
                <div className="para">
                  Lisque persius interesset his et, in quot quidam persequeris
                  vim, ad mea essent possim iriure.
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="content">
              <div className="icon">
                <i className="fas fa-code"></i>
              </div>
              <div className="text">
                <div className="header">Clean Code</div>
                <div className="para">
                  Lisque persius interesset his et, in quot quidam persequeris
                  vim, ad mea essent possim iriure.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
