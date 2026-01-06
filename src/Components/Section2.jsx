import React from "react";
import data from "../data/data.js";
import { Fragment } from "react";
function Section2() {
  return (
    <Fragment>
      <div>
        <section className="section2">
          <h3>Why Choose Blogify?</h3>
          <p>
            Built with modern technologies and best practices to provide the
            best blogging experience.
          </p>
          <div className="section2-cards">
            {data.length &&
              data.map((item) => {
                return (
                  <div className="section2-card" key={item.id}>
                    <div className="section2-card-icon">
                      <img
                        src={item.img}
                        alt={item.name}
                        width={24}
                        height={24}
                      />
                    </div>
                    <h4>{item.name}</h4>
                    <p>{item.about}</p>
                  </div>
                );
              })}
          </div>
        </section>
      </div>
    </Fragment>
  );
}
export default Section2;
