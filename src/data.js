export const elements = {
    // List of nodes
    // Node is the container
   nodes: [ { data: { id: 'a', label: 'Node A' } },
            { data: { id: 'b', label: 'Node B' } },
            { data: { id: 'c', label: 'Node C' } },
            { data: { id: 'd', label: 'Node D' } },
   ],
   edges:[
    // Edge is the line
    // List of edges
    { data: { id: 'ab', source: 'd', target: 'b', label: 'Edge A-B', depth: 7.32 } },
    { data: { id: 'bc', source: 'b', target: 'c', label: 'Edge B-C', depth: 6.54  } },
    { data: { id: 'ca', source: 'c', target: 'a', label: 'Edge C-A', depth: 2.3  } },
    { data: { id: 'cd', source: 'c', target: 'd', label: 'Edge C-D', depth: 0.8  } },
    { data: { id: 'da', source: 'd', target: 'a', label: 'Edge D-A', depth: 3  } }
   ]


}

export const layoutOptions = {
 name: 'cose',
  fit: true, // whether to fit the viewport to the graph
  directed: false, // whether the tree is directed downwards (or edges can point in any direction if false)
  padding: 30, // padding on fit
  circle: false, // put depths in concentric circles if true, put depths top down if false
  grid: false, // whether to create an even grid into which the DAG is placed (circle:false only)
  boundingBox: undefined, // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
  avoidOverlap: true, // prevents node overlap, may overflow boundingBox if not enough space
  nodeDimensionsIncludeLabels: false, // Excludes the label when calculating node bounding boxes for the layout algorithm
  roots: undefined, // the roots of the trees
  depthSort: undefined, // a sorting function to order nodes at equal depth. e.g. function(a, b){ return a.data('weight') - b.data('weight') }
  animate: true, // whether to transition the node positions
  animationDuration: 500, // duration of animation in ms if enabled
  animationEasing: undefined, // easing of animation if enabled,
  animateFilter: function ( node, i ){ return true; }, // a function that determines whether the node should be animated.  All nodes animated by default on animate enabled.  Non-animated nodes are positioned immediately when the layout starts
  ready: undefined, // callback on layoutready
  stop: undefined, // callback on layoutstop

    }
