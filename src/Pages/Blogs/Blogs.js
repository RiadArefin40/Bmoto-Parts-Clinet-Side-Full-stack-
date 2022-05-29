import React from "react";

const Blogs = () => {
  return (
    <div className="card w-4/5 bg-base-100 shadow-xl mx-auto mt-20">
      <div className="card-body">
        <h2 className="text-3xl font-bold text-teal-500">
          How will you improve the performance of a React Application?
        </h2>
        <p>
          Keeping component state local where necessary. Memoizing React
          components to prevent unnecessary re-renders. Code-splitting in React
          using dynamic import. Using Reack hook if necessary.Image should be
          compressed enough for fast loading.
        </p>
        <h2 className="card-title">
          What are the different ways to manage a state in a React application?
        </h2>
        <p>
          useState is the first tool you should reach for to manage state in
          your components. It can take accept any valid data value, including
          primitive and object values. Additionally, its setter function can be
          passed down to other components as a callback function (without
          needing optimizations like useCallback).
        </p>
        <h2 className="card-title">
        How does prototypical inheritance work?
        </h2>

        <p>
        The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use Object
        </p>
        <h2 className="card-title">
        You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?
        </h2>
        <p>
          We can solve this problem by implementing array.find function to Find all product by name.we should write array.find( product= product.name === 'name')   with this method.
        </p>
        <h2 className="card-title">
        What is a unit test? Why should write unit tests?
        </h2>
        <p>
        Unit testing allows the programmer to refactor code at a later date, and make sure the module still works correctly. The procedure is to write test cases for all functions and methods so that whenever a change causes a fault, it can be quickly identified and fixed.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
