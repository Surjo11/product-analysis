import React from "react";

const Blogs = () => {
  return (
    <div className="container mx-auto lg:mt-28 flex justify-center h-screen">
      <ol class="relative border-gray-200 dark:border-gray-700">
        <li class="mb-10 ml-4">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <h3 class="text-4xl font-semibold text-gray-900 dark:text-white">
            What is Context Api?
          </h3>
          <p class="mb-4 text-xl font-normal text-gray-500 dark:text-gray-400">
            Context Api is a global variable for react app that can be pass
            around all the components.Its solve the problem of prop drilling.Now
            with context api we can share data with multiple components without
            prop drilling.It's an easier approach. Context API is introduced in
            React 16.3.
          </p>
        </li>
        <li class="mb-10 ml-4">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>

          <h3 class="text-4xl font-semibold text-gray-900 dark:text-white">
            What is Semantic tags?
          </h3>
          <p class="text-xl font-normal text-gray-500 dark:text-gray-400">
            Semantic tags describes its meaning and it helps for both(Browser
            and Developer).If we use semantic tags then it will easy to
            recognize what to do with that element.There are lot of semantic
            tags are here like header,p,footer,aside etc.Before semantic tags we
            are just use div tag for build a website.Semantic tags helps us to
            build a organize and meaning full website.
          </p>
        </li>
      </ol>
    </div>
  );
};

export default Blogs;