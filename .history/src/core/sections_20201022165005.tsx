import React,{lazy} from 'react';
import {Section, Price} from './interfaces';
const Models = lazy(() => import('../components/Models/Models'));
const Colors = lazy(() => import('../components/Colors/Colors'));
const Accessories = lazy(() => import('../components/Accessories/Accessories'));
const Summary = lazy(() => import('../components/Summary/Summary'));

const sections: Array<Section> = [
    { id: 0, name: "MODELS", path: "/", component: <Models/>},
    { id: 1, name: "COLORS", path: "/ciao2", component: <Colors/>},
    { id: 2, name: "ACCESSORIES", path: "/ciao3", component: <Accessories/>},
    { id: 3, name: "SUMMARY", path: "/ciao4", component: <Summary/>}
];
export default sections;