import ReactFlow, {
  Background,
  Controls,
  MarkerType,
} from "reactflow";

import "reactflow/dist/style.css";

const nodes = [
  {
    id: "start",
    position: { x: 0, y: 150 },
    data: { label: "START" },
    style: {
      background: "#111827",
      color: "white",
      borderRadius: 10,
      width: 120,
      textAlign: "center",
    },
  },

  {
    id: "writer",
    position: { x: 250, y: 40 },
    data: { label: "Writer Agent" },
    style: {
      border: "2px solid #2563eb",
      width: 170,
      borderRadius: 10,
    },
  },

  {
    id: "reviewer",
    position: { x: 550, y: 40 },
    data: { label: "Reviewer Agent" },
    style: {
      border: "2px solid #22c55e",
      width: 170,
      borderRadius: 10,
    },
  },

  {
    id: "search",
    position: { x: 400, y: 260 },
    data: { label: "Internet Search" },
    style: {
      border: "2px solid orange",
      width: 180,
      borderRadius: 10,
    },
  },

  {
    id: "end",
    position: { x: 850, y: 150 },
    data: { label: "END" },
    style: {
      background: "#111827",
      color: "white",
      borderRadius: 10,
      width: 120,
      textAlign: "center",
    },
  },
];

const edges = [
  {
    id: "1",
    source: "start",
    target: "writer",
    animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },

  {
    id: "2",
    source: "writer",
    target: "reviewer",
    animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },

  {
    id: "3",
    source: "reviewer",
    target: "search",
    label: "Need Search",
    animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },

  {
    id: "4",
    source: "search",
    target: "writer",
    animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },

  {
    id: "5",
    source: "reviewer",
    target: "end",
    label: "Approved",
    animated: true,
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
];

export default function WorkflowDiagram() {
  return (
    <div className="h-[450px] w-full rounded-xl border bg-white">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}