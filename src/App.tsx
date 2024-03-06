import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TestComponent from "./components/test/TestComponent";
import TestComponentWithArgs from "./components/test/TestComponentWithArgs";
import ChildComponent2 from "./components/test/ChildComponent2";

const App = () => {
    return (
      <>
          <div>
            <h1>Hello, Welcome to React and TypeScript</h1>
          </div>
          <BrowserRouter>
            <Routes>
                <Route path="/test">
                    <Route path="" element={<TestComponentWithArgs arg1="1" arg2="2" arg3="3" arg4={["1", "2", "3", "4", "5", "6"]}/>}></Route>
                    {/* <Route path="child2" element={<ChildComponent2 />} /> */}
                </Route>
            </Routes>
          </BrowserRouter>
        </>
    );
};

export default App;
