"use client"

import React, { useCallback, useEffect } from "react";
import {
  Background,
  Controls,
  MiniMap,
  ReactFlow,
  addEdge,
  useNodesState,
  useEdgesState,
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';

import convertToNode from "../util/nodes";

const flowchartData = {
    name: "VLSI Design",
    children: [
      {
        name: "Digital System Design",
        children: [
          {
            name: "Combinational Logic",
            children: [
              { name: "Adders" },
              { name: "Subtractor" },
              { name: "Multipliers" },
            ],
          },
          {
            name: "Sequential Logic",
            children: [
              {
                name: "Flip-Flops",
                children: [{ name: "D Flip-Flop" }, { name: "JK Flip-Flop" }],
              },
              { name: "Registers" },
              { name: "Counters" },
            ],
          },
          { name: "Finite State Machines" },
        ],
      },
      {
        name: "Analog System Design",
        children: [
          { name: "Analog Circuits" },
          {
            name: "Operational Amplifiers",
            children: [
              { name: "Inverting Amplifier" },
              { name: "Non-Inverting Amplifier" },
              { name: "Differential Amplifier" },
            ],
          },
          {
            name: "Analog Filters",
            children: [{ name: "Low-Pass Filter" }, { name: "High-Pass Filter" }],
          },
          { name: "Signal Conditioning" },
        ],
      },
      {
        name: "Mixed Signal Design",
        children: [
          {
            name: "Data Converters",
            children: [
              { name: "Analog to Digital Converter (ADC)" },
              { name: "Digital to Analog Converter (DAC)" },
            ],
          },
          { name: "Phase-Locked Loops (PLLs)" },
          { name: "Oscillators" },
        ],
      },
      {
        name: "Physical Design",
        children: [
          {
            name: "Layout Design",
            children: [{ name: "Standard Cells" }, { name: "Custom Layout" }],
          },
          { name: "Floorplanning" },
          {
            name: "Routing",
            children: [{ name: "Global Routing" }, { name: "Detailed Routing" }],
          },
          { name: "Timing Closure" },
        ],
      },
      {
        name: "Testing and Verification",
        children: [
          { name: "Functional Verification" },
          {
            name: "Timing Verification",
            children: [
              { name: "Static Timing Analysis" },
              { name: "Dynamic Timing Analysis" },
            ],
          },
          { name: "Test Pattern Generation" },
          { name: "Fault Simulation" },
        ],
      },
      {
        name: "Tools and Methodologies",
        children: [
          { name: "HDL Design (Verilog/VHDL)" },
          { name: "Synthesis Tools" },
          {
            name: "Simulation Tools",
            children: [
              { name: "Behavioral Simulation" },
              { name: "Gate-Level Simulation" },
            ],
          },
          { name: "FPGA Tools" },
        ],
      },
    ],
  };

export default function Flowchart() {
    
    const {initialNodes, initialEdges} = convertToNode(flowchartData);
    const [nodes, , onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const onConnect = useCallback(
      (connection) => setEdges((edges) => addEdge(connection, edges)),
      [setEdges]
    );
  
    return (
        <div style={{height: "1200px", width: "100%", backgroundColor: "white"}}>
                  <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        colorMode="dark"
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <Background />
        <MiniMap />
        <Controls />
      </ReactFlow>
      </div>

    );
  }
  