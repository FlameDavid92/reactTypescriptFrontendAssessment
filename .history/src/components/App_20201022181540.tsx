import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

import NavBar from './NavBar/NavBar'
import SectionSwitcher from './SectionsSwitcher/SectionsSwitcher'
import Footer from './Footer/Footer'

import sections from '../data/sections';
import { Price } from '../model/interfaces';

function App() {
  const [currentSection, setCurrentSection] = useState<any>(sections[0].name);
  const [nextSection, setNextSection] = useState(1);
  const [navBarClick, setNavBarClick] = useState(0);
  const [btnFooterClick, setBtnFooterClick] = useState(0);
  const [total, setTotal] = useState<Price>({ value: 0, currency: "$" });

  return (
    <div className="App">
      <div className="my-container">
        <div className="row align-items-start">
          <div className="col-2">
            <button className="button-article-download"
              onClick={() => alert("Under development!")}
            >
              <FontAwesomeIcon icon={faAngleLeft} /> Article & Download
            </button>
          </div>

          <div className="col-8 justify-content-center text-center">
            <header><h1>Product Builder</h1></header>
            <NavBar sections={sections} nextSectionIndex={nextSection} btnFooterClick={btnFooterClick} navBarClick={navBarClick}
              setNavBarClick={setNavBarClick} setNextSection={setNextSection} />
            <div className="mt-5" />
            <SectionSwitcher currentSection={currentSection} total={total} setTotal={setTotal} />
          </div>
        </div>
      </div>
      <Footer total={total}
        nextSectionString={((nextSection === sections.length) ? "QUOTE" : sections[nextSection].name)}
        nextSectionIndex={nextSection}
        limit={sections.length}
        navBarClick={navBarClick}
        btnFooterClick={btnFooterClick}
        setBtnFooterClick={setBtnFooterClick}
        setNextSection={setNextSection}
      />
    </div>
  );
}

export default App;
