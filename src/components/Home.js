import React from "react"

function Home(){
    return (
      <section id="home">
        <div className="content">
          <div className="header">
            <span>
              {`var obj = {`} <br />
              &nbsp; &nbsp; {`a: helloMyNameIs,`} <br />
              &nbsp; &nbsp; {` b: () => console.log("`}
              <strong>Dibas Paudel</strong>" ), <br />
              &nbsp; &nbsp; {`c: function(){`} <br />
              &nbsp; &nbsp;&nbsp; &nbsp; {`console.log("`}{" "}
              <strong>A Creative Freelancer & Front End Developer</strong> "){" "}
              <br />
              &nbsp; &nbsp; {`},`} <br />
              {`};`}
            </span>
          </div>
        </div>
        <div className="background"></div>
        {/* <div class="background-gradient"></div>  */}
      </section>
    );
}

export default Home