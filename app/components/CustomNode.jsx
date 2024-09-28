import React, { memo } from 'react';
import { Handle, Position } from '@xyflow/react';

function CustomNode({ data }) {
  return (
    <div
      className="relative px-4 py-2 w-48 shadow-md rounded-md"
      style={{
        background: `${data.color}`,
        border: `2px solid ${data.color}`,
        boxShadow: `0 0 15px ${data.color}, 0 0 30px ${data.color}`,
        transition: 'transform 0.2s',
      }}
    >
      <div className="text-xl font-extrabold text-white drop-shadow-md">{data.name}</div>
      <div className="text-white text-sm italic">{data.description}</div>

      <Handle
        type="target"
        position={Position.Top}
        className="w-4 h-4 rounded-full"
        style={{
          backgroundColor: 'transparent', // Make background transparent
          border: `2px solid ${data.color}`, // Use the same color as node
          boxShadow: `0 0 8px ${data.color}, 0 0 15px ${data.color}`, // Glowing effect
        }}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        className="w-4 h-4 rounded-full"
        style={{
          backgroundColor: 'transparent', // Make background transparent
          border: `2px solid ${data.color}`, // Use the same color as node
          boxShadow: `0 0 8px ${data.color}, 0 0 15px ${data.color}`, // Glowing effect
        }}
      />
    </div>
  );
}

export default memo(CustomNode);
