import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import ChildComponent1 from "./ChildComponent1";
import ChildComponent2 from "./ChildComponent2";

const TestComponentWithArgs: React.FC<{ arg1: string, arg2: string, arg3: string, arg4: string[]}> = (args) => {
  return (
    <div>
        <div>Test Component with typed args</div>
        <div>{args.arg1}</div>
        <div>{args.arg2}</div>
        <div>{args.arg3}</div>
        {args.arg4.map((val) => {
            return <div> {val} </div>
        })}
        <Route index element={<ChildComponent1 />} />
        <Route path="child2" element={<ChildComponent2 />} />
    </div>
  );
};

export default TestComponentWithArgs;

