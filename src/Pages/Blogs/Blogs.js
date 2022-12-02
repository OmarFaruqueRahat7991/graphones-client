import React from "react";

const Blogs = () => {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
          How it works
        </p>
        <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              What are the different ways to manage a state in a React
              application?
            </summary>
            <div className="px-4 pb-4">
              <p>
                In React apps, there are at least seven ways to handle the
                state. Let us briefly explore a few of them in this part.
                1.useRefs 2.Context API 3.URL 4.Web Storage 5.Local State
                6.Lifted State 7.Derived State
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              How does prototypical inheritance work?
            </summary>
            <div className="px-4 pb-4">
              <p>
                The Prototypal Inheritance is a feature in javascript used to
                add methods and properties in objects. It is a method by which
                an object can inherit the properties and methods of another
                object. Traditionally, in order to get and set the [[Prototype]]
                of an object, we use Object.getPrototypeOf and
                Object.setPrototypeOf. In programming, we often want to take
                something and extend it. For instance, we have a user object
                with its properties and methods, and want to make admin and
                guest as slightly modified variants of it. We’d like to reuse
                what we have in user, not copy/reimplement its methods, just
                build a new object on top of it. Prototypal inheritance is a
                language feature that helps in that.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              What is a unit test? Why should we write unit tests?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p>
                Unit testing By TechTarget Contributor Unit testing is a
                software development process in which the smallest testable
                parts of an application, called units, are individually and
                independently scrutinized for proper operation. This testing
                methodology is done during the development process by the
                software developers and sometimes QA staff. The main objective
                of unit testing is to isolate written code to test and determine
                if it works as intended.

                Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
            React vs. Angular vs. Vue?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p>
              Angular:
              Angular has a steep learning curve, considering it is a complete solution, and mastering Angular requires you to learn associated concepts like TypeScript and MVC. Even though it takes time to learn Angular, the investment pays dividends in terms of understanding how the front end works.
              React:
              React offers a Getting Started guide that should help one set up React in about an hour. The documentation is thorough and complete, with solutions to common issues already present on Stack Overflow. React is not a complete framework and advanced features require the use of third-party libraries. This makes the learning curve of the core framework not so steep but depends on the path you take with additional functionality. However, learning to use React does not necessarily mean that you are using the best practices.
              Vue:
              Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option. However, simplicity and flexibility of Vue is a double-edged sword — it allows poor code, making it difficult to debug and test.
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
