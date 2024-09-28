export default function convertToNode(data) {
  const initialNodes = [];
  const initialEdges = [];

  const baseHorizontalSpacing = 200; 
  const baseVerticalSpacing = 150; 
  const randomOffsetRange = 50; 


  const getColorByLevel = (level) => {
    const levelColors = [
      '#1ABC9C',  // Cerulean Blue
      '#E67E22',  // Sunset Orange
      '#9B59B6',  // Rich Purple
      '#E74C3C',  // Crimson Red
      '#F1C40F',  // Golden Yellow
      '#16A085',  // Teal
      '#2980B9',  // Slate Blue
    ];
    const color = levelColors[level % levelColors.length];
    return color; 
  };

  const calculateSubtreeWidth = (node) => {
    if (!node.children || node.children.length === 0) {
      return baseHorizontalSpacing;
    }
    const totalWidth = node.children.reduce(
      (totalWidth, child) => totalWidth + calculateSubtreeWidth(child),
      0
    );
    return totalWidth;
  };

  const createNodesAndEdges = (
    node,
    parentId = null,
    level = 0,
    position = { x: 0, y: 0}
  ) => {
    const nodeId = initialNodes.length.toString();
    const randomXOffset = Math.random() * randomOffsetRange - randomOffsetRange / 2;
    const randomYOffset = Math.random() * randomOffsetRange - randomOffsetRange / 2;


    const newNode = {
      id: nodeId,
      type: "custom",
      position: { x: position.x + randomXOffset, y: position.y + randomYOffset },
      data: {
        name: node.name,
        description: node.description,
        color: getColorByLevel(level),  // Assign level-based color
      },
    };

    initialNodes.push(newNode);

    if (parentId !== null) {
      initialEdges.push({
        id: `${parentId}->${nodeId}`,
        source: parentId,
        target: nodeId,
        animated: true,
      });
    }

    if (node.children) {
      const totalSubtreeWidth = calculateSubtreeWidth(node);
      let childPositionX = position.x - totalSubtreeWidth / 2;

      node.children.forEach((child) => {
        const childSubtreeWidth = calculateSubtreeWidth(child);
        const childPosition = {
          x: childPositionX + childSubtreeWidth / 2,
          y: position.y + baseVerticalSpacing,
        };

        createNodesAndEdges(child, nodeId, level + 1, childPosition);
        childPositionX += childSubtreeWidth;
      });
    }
  };

  // Start creating nodes and edges from the root data
  createNodesAndEdges(data.flowchartData);

  return { initialNodes, initialEdges };
}
