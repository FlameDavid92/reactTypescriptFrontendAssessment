import React, { Suspense, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

import NavBar from './NavBar/NavBar'
import Footer from './Footer/Footer'
import { BMW_i3, BMW_i8 } from '../data/products';
import { TotalContext } from "../contexts/totalContext";
import { ProductsContext } from "../contexts/productsContext";

import sections from '../data/sections';
import { Price } from '../model/interfaces';

function App() {
  const [currentSectionId, setCurrentSectionId] = useState(0);
  const [total, setTotal] = useState<Price>({ value: 0, currency: "$" });

  const renderSection = () => {
    let toRender;
    sections.some(s => {
      if (s.id === currentSectionId) {
        toRender = s.component;
        return true;
      } else return false;
    });
    return toRender;
  }

  return (
    <div className="App">
      <div className="myContainer">
        <div className="row align-items-start">
          <div className="col-12 col-lg-2">
            <div className="row justify-content-center">
              <button className="buttonArticleDownload"
                onClick={() => alert("Under development!")}
              >
                <FontAwesomeIcon icon={faAngleLeft} /> Article & Download
              </button>
            </div>
          </div>

          <div className="col-12 col-lg-8 justify-content-center text-center">
            <header><h1 className="appTitle mb-lg-4">Product Builder</h1></header>
            <NavBar sections={sections} currentSectionId={currentSectionId} setCurrentSectionId={setCurrentSectionId} />
            <div className="mt-5" />
            <ProductsContext.Provider value={{ data: [BMW_i3, BMW_i8] }}>
              <TotalContext.Provider value={{ total: total, setTotal: setTotal }}>
                <form>
                  <Suspense fallback={<img src="./images/loader.svg" alt="loader"/>}>
                    {renderSection()}
                  </Suspense>
                </form>
              </TotalContext.Provider>
            </ProductsContext.Provider>
          </div>
        </div>
      </div>
      <div className="mobile"/>
      <Footer total={total}
        nextSectionString={(currentSectionId + 1 === sections.length) ? 'QUOTE' : sections[currentSectionId + 1].name}
        limit={sections.length}
        currentSectionId={currentSectionId} setCurrentSectionId={setCurrentSectionId}
      />
    </div>
  );
}

export default App;
