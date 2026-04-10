interface WaveDividerProps {
  toColor?: string;
  flip?: boolean;
}

export default function WaveDivider({ toColor = "#0c0c0c", flip = false }: WaveDividerProps) {
  return (
    <div
      className="w-full overflow-hidden leading-none"
      style={{
        height: "56px",
        marginBottom: "-1px",
        transform: flip ? "rotate(180deg)" : "none",
      }}
    >
      <svg
        viewBox="0 0 1200 56"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block", width: "100%", height: "100%" }}
      >
        <path
          d="M0,18 C150,56 350,0 600,28 C850,56 1050,0 1200,18 L1200,56 L0,56 Z"
          fill={toColor}
        />
      </svg>
    </div>
  );
}
