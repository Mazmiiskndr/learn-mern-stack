import React from "react";
import Star from "elements/Star";
import Button from "elements/Button";
import TestimonyFrame from "assets/images/testimonials/testimonial-frame.jpg";

export default function Testimoni({ data }) {
  return (
    <section className="container">
      <div className="row align-items-center">
        <div className="col-auto" style={{ marginRight: 60 }}>
          <div className="testimonial-hero" style={{ margin: `30px 0 0 30px` }}>
            <img
              src={TestimonyFrame}
              alt="Testimonial Frame"
              className="position-absolute"
              style={{ margin: `-30px 0 0 -30px`}}
            />
            <img
              src={data.imageUrl}
              alt="Testimonial"
              className="position-absolute"
              style={{ zIndex: 1 }}
            />
          </div>
        </div>
        <div className="col">
          <h4 style={{ marginBottom: 40 }}>
            {data.name}
          </h4>
            <Star width={35} height={35} spacing={4} value={data.rate} />
          <h5 className="h2 font-weight-light line-height-2 my-3">
            {data.content}
          </h5>
          <span className="text-gray-500 ">
            {data.familyName}, {data.familyOccupation}
          </span>
          <div>
            <Button
              className="btn px-5"
              style={{ marginTop: 40 }}
              hasShadow
              isPrimary
              type="link"
              href={`/testimonial/${data._id}`}
            >
              Read Their Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
