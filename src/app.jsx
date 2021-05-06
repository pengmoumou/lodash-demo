import React from "react";
import _ from "lodash";

const App = () => {
  console.log(`_.includes('/a/b/c', '/a') ==> `, _.includes("/a/b/c", "/a"));
  return (
    <div>
      <p>
        I use "lodash-webpack-plugin" to Implement on-demand loading of lodash.
      </p>

      <p>"lodash": "^4.17.21"</p>
      <p>"lodash-webpack-plugin": "^0.11.6"</p>

      <p>Check out the output in console</p>
      <code>
        console.log(`_.includes('/a/b/c', '/a') ==> `, _.includes('/a/b/c',
        '/a'));
      </code>
    </div>
  );
};

export default App;
