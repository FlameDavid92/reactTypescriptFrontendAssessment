import {Section} from './interfaces';
import Models from '../components/Models/Models';
import Colors from '../components/Colors/Colors';
import Accessories from '../components/Accessories/Accessories';
import Summary from '../components/Summary/Summary';

const sections: Array<Section> = [
    { id: 0, name: "MODELS", path: "/", component: Models},
    { id: 1, name: "COLORS", path: "/ciao2", component: Colors},
    { id: 2, name: "ACCESSORIES", path: "/ciao3", component: Accessories},
    { id: 3, name: "SUMMARY", path: "/ciao4", component: Summary}
];
export default sections;