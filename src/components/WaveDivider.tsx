interface WaveDividerProps {
  fromColor?: string;
  toColor?: string;
}

export default function WaveDivider({ fromColor = "transparent", toColor = "#0c0c0c" }: WaveDividerProps) {
  return (
    <div
      className="w-full overflow-hidden leading-none"
      style={{
        height: "56px",
        marginBottom: "-1px",
        background: fromColor,
        flexShrink: 0,
      }}
    >
      <svg
        viewBox="0 0 1200 56"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block", width: "100%", height: "100%" }}
      >
        <path
          d="M0,18 C180,56 380,0 600,28 C820,56 1020,0 1200,18 L1200,56 L0,56 Z"
          fill={toColor}
        />
      </svg>
    </div>
  );
}
