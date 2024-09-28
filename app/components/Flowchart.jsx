"use client";

import React, { useCallback, useEffect } from "react";
import {
  Background,
  Controls,
  MiniMap,
  ReactFlow,
  addEdge,
  useNodesState,
  useEdgesState,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";

import convertToNode from "../util/nodes";
import CustomNode from "./CustomNode";

const nodeTypes = {
  custom: CustomNode,
};

export default function Flowchart(flowchartData) {


  if (flowchartData.length === 0) {
    console.log("No flowchart data");
    return null;
  }

  const { initialNodes, initialEdges } = convertToNode(flowchartData);


  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback(
    (connection) => setEdges((edges) => addEdge(connection, edges)),
    [setEdges]
  );


  return (
    <div style={{ height: "1200px", width: "100%", backgroundColor: "white" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        className="bg-slate-900 min-h-screen"
      >
        <Background />
        <MiniMap />
        <Controls />
      </ReactFlow>
    </div>
  );
}
