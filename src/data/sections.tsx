import React,{lazy} from 'react';
import {Section} from '../model/interfaces';
const Models = lazy(() => import('../components/Models/Models'));
const Colors = lazy(() => import('../components/Colors/Colors'));
const Accessories = lazy(() => import('../components/Accessories/Accessories'));
const Summary = lazy(() => import('../components/Summary/Summary'));

const sections: Array<Section> = [
    { id: 0, name: "MODELS", component: <Models/>},
    { id: 1, name: "COLORS", component: <Colors/>},
    { id: 2, name: "ACCESSORIES", component: <Accessories/>},
    { id: 3, name: "SUMMARY", component: <Summary/>}
];
export default sections;