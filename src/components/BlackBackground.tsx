const BlackBackground = () => {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        background: "#000000",
        zIndex: -1,
        pointerEvents: "none",
      }}
    />
  );
};

export default BlackBackground;
