import Button from "elements/Button";
import React, { forwardRef } from "react";

const MostPicked = (props, ref) => {
  return (
    <section className="container" ref={ref} style={{ height: 2000 }}>
      <h4 className="mb-3">Most Picked</h4>

      <div className="container-grid">
        {props.data?.map((item, index) => {
          return (
            <div
              key={index}
              className={`item column-4${
                index === 0 ? " row-2" : " row-1"
              } card-3d`}
            >
              <div className="card card-featured">
                <div className="tag">
                  ${item.price}
                  <span className="font-weight-light"> per {item.unit}</span>
                </div>

                <figure className="img-wrapper">
                  <img
                    src={`${item.imageUrl}`}
                    alt={item.name}
                    className="img-cover"
                  />
                </figure>

                <div className="meta-wrapper">
                  <Button
                    type="link"
                    className="streched-link d-block text-white"
                    href={`/properties/${item._id}`}
                  >
                    <h5>{item.name}</h5>
                  </Button>
                  <span>
                    {item.city}, {item.country}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default forwardRef(MostPicked);
