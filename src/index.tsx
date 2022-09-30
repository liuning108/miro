import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';

import {BrowserRouter, RouterProvider} from "react-router-dom";
import {Routes, Route} from 'react-router'
import './index.scss'

import Home from "./demo/chap4/Home";
import AnotherScreen from "./demo/chap4/AnotherScreen";
import MyNameClass from "./chapter1_1/MyNameClass";
import MyNameFunction from "./chapter1_1/MyNameFunction";
import ExampleCount from "./doc_demo/ExampleCount";
const CanvasCar = React.lazy(() => import('./canvas_demo/canvascar/CanvasCar'));
const CanvasBlocks = React.lazy(() => import('./canvas_demo/canvasblocks/CanvasBlocks'));

const App:React.FC =()=>{
    return <Routes >
        <Route path={"/"} caseSensitive={true} element={<Home/>}></Route>
        <Route path={"/another"} caseSensitive={true} element={<AnotherScreen/>}></Route>
        <Route path={"/mynameclass"} caseSensitive={true} element={<MyNameClass/>}></Route>
        <Route path={"/mynamefunction"} caseSensitive={true} element={<MyNameFunction/>}></Route>
        <Route path={"/examplecount"} caseSensitive={true} element={<ExampleCount/>}></Route>
        <Route path={"/canvascar"} caseSensitive={true} element={<CanvasCar/>}></Route>
        <Route path={"/canvasblocks"} caseSensitive={true} element={<CanvasBlocks/>}></Route>




    </Routes>
}
const container = document.getElementById('root');
const root = createRoot(container as HTMLElement); // createRoot(container!) if you use TypeScript
root.render(
    <React.Fragment>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    </React.Fragment>
);

