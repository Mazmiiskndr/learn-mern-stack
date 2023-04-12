import Button from "elements/Button";
import React from "react";

function CategoryItem({ categoryIndex, item, itemIndex }) {
  return (
    <div
      className="item column-3 row-1 card-3d-categories"
      key={`category-${categoryIndex}-item-${itemIndex}`}
    >
      <div className="card card-categories ">
        {item.isPopular && (
          <div className="tag">
            Popular <span className="font-weight-light">Choice</span>
          </div>
        )}
        <figure className="img-wrapper" style={{ height: 180 }}>
          <img src={item.imageUrl} alt={item.name} className="img-cover" />
        </figure>
        <div className="meta-wrapper">
          <Button
            type="link"
            className="stretched-link d-block text-gray-800"
            href={`/properties/${item._id}`}
          >
            <h5 className="h4">{item.name}</h5>
          </Button>
          <span className="text-gray-300">
            {item.city}, {item.country}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Categories({ data }) {
  return data.map((category, categoryIndex) => (
    <section className="container" key={`category-${categoryIndex}`}>
      <h4 className="mb-3 font-weight-medium">{category.name}</h4>
      <div className="container-grid">
        {category.items.length === 0 ? (
          <div className="row">
            <div className="col-auto align-items-center">
              There is no property in this category
            </div>
          </div>
        ) : (
          <>
            {category.items.map((item, itemIndex) => (
              <CategoryItem
                key={`category-${categoryIndex}-item-${itemIndex}`}
                categoryIndex={categoryIndex}
                item={item}
                itemIndex={itemIndex}
              />
            ))}
          </>
        )}
      </div>
    </section>
  ));
}
