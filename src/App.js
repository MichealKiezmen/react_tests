// run npm install via CLI
// Run npm start
// Google npm react-cytoscapejs, and read the few docs, for more check cytoscape docs

import CytoscapeComponent  from "react-cytoscapejs"
import { elements, layoutOptions } from "./data";

function App() {
  const dataVisual = elements

  const styles = [
    {
      selector: "edge",  // To stle te line
      style:{
      "label":"data(depth)", //label sizes according to edge[data][depth] vales
      "width":"data(depth)", //Width sizes according to edge[data][depth] vales
      "line-color":  "#604CC3",
      "curve-style":"haystack",
      "background-color": "red",
      "color":"#FF7F3E",
      "font-size": "26px",
      "text-margin-x":"10px",
      "text-margin-y":"-15px",
      }

    },
    {
      selector:"node", //The triangles
      style:{
        shape:"triangle",
        height:"30px",
        "background-color": "#80C4E9",
        "label":"data(label)",
        "font-size": "12",
        "color": "#FF8F00",

      }
    },

    // {
    //   selector:"edge[depth > 20] ",  //edge[depth] values  > 20
    //   style:{
    //     "line-style":"solid"
    //   }
    // },
    // {
    //   selector:"edge[depth < 20] ",
    //   style:{
    //     "line-style":"dashed"
    //   }
    // },
    // {
    //   selector:"edge[depth < 5] ",
    //   style:{
    //     "line-style":"dotted",
    //   }
    // }


  ]



  // IGNORE, not doing anything now
  const showDepth = (cy) => {
    cy.on("click", "node", (e) => {
      // Set state
    });

  };






  return (
    <div className="">
      <CytoscapeComponent
      elements={CytoscapeComponent.normalizeElements(dataVisual)}
      style={{
        width:"80%",
        height:"600px",
        backgroundColor:"#FFF6E9"
      }}
      layout={layoutOptions}
      cy={(cy) => {
        showDepth(cy) //Ignore
      }}
      stylesheet={styles}
      // autolock={true}
      minZoom={0.8}
      maxZoom={1.3}
      />
    </div>
  );


}

export default App;
