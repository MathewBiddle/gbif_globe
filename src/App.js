import './App.css';
import Globe from 'react-globe.gl'
import * as THREE from "three";
import React, { useState, useContext } from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import ReactTooltip from 'react-tooltip';


const { useEffect, useRef } = React;

function App() {
  // custom globe material
  const globeMaterial = new THREE.MeshPhongMaterial();
  globeMaterial.bumpScale = 10;
//  new THREE.TextureLoader().load('https:////unpkg.com/three-globe/example/img/earth-water.png', texture => {
//    globeMaterial.specularMap = texture;
//    globeMaterial.specular = new THREE.Color('grey');
//    globeMaterial.shininess = 15;
//  });

  const [ taxa, setTaxa ] = React.useState('all')

  const globeEl = useRef();

  //const [options, setOptions] = useState({})

  //const options = {cameraZoomSpeed: 5}
  //setOptions({ })

  useEffect(() => {
    setTimeout(() => { // wait for scene to be populated (asynchronously)
      const directionalLight = globeEl.current.scene().children.find(obj3d => obj3d.type === 'DirectionalLight');
      directionalLight && directionalLight.position.set(1, 1, 1); // change light position to see the specularMap's effect
    });
  }, []);

  const changeTaxa = (selected) => {
    setTaxa(selected)
  }

  return <><Globe
    ref={globeEl}
    globeMaterial={globeMaterial}
    globeImageUrl={`https://raw.githubusercontent.com/MathewBiddle/globe/main/images/globe/map_obis_${taxa}.jpg`}
    bumpImageUrl={`https://raw.githubusercontent.com/MathewBiddle/globe/main/images/etopo1.jpg#${taxa}`}
    backgroundImageUrl="https:////unpkg.com/three-globe/example/img/night-sky.png" />
    <SideNav
      onSelect={changeTaxa} style={{ backgroundColor: '#111111', top:'auto' }}>
      <SideNav.Nav defaultSelected="all">
        <NavItem eventKey="all" data-tip="all"  style={{ marginTop: '20px', cursor: 'pointer' }}>
            <h2><center>all</center></h2>
        </NavItem>
        <NavItem eventKey="2020" data-tip="2020"  style={{ marginTop: '20px', cursor: 'pointer' }}>
            <h1><center>2020</center></h1>
        </NavItem>
        <NavItem eventKey="2010" data-tip="2010"  style={{ marginTop: '20px' }}>
            <h1><center>2010</center></h1>
        </NavItem>
        <NavItem eventKey="2000"  data-tip="2000"   style={{ marginTop: '20px' }}>
           <h1><center>2000</center></h1>
        </NavItem>
        <NavItem eventKey="1990" data-tip="1990" style={{ marginTop: '20px' }}>
           <h1><center>1990</center></h1>
        </NavItem>
        <NavItem eventKey="1980" data-tip="1980"  style={{ marginTop: '20px' }}>
           <h1><center>1980</center></h1>
        </NavItem>
        <NavItem eventKey="1970" data-tip="1970"  style={{ marginTop: '20px' }}>
           <h1><center>1970</center></h1>
        </NavItem>
        <NavItem eventKey="1960" data-tip="1960"  style={{ marginTop: '20px' }}>
           <h1><center>1960</center></h1>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
    <ReactTooltip effect="solid" type="dark" scrollHide="true" event="mousemove" eventOff="mouseleave" delayHide={1000} />
    </>
   ;

}
export default App;