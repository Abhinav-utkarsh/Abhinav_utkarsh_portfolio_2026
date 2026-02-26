const AnimatedBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden bg-slate-950">
      {/* Moving Grid Layer 1 (Small Cells) */}
      <div className="absolute inset-0 tech-grid-small opacity-30"></div>
      
      {/* Moving Grid Layer 2 (Large Cells) */}
      <div className="absolute inset-0 tech-grid-large opacity-20"></div>

      {/* Radial Glow for depth */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.1),transparent_70%)]"></div>
      
      {/* Vignette to fade edges into the background color */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950"></div>
    </div>
  );
};

export default AnimatedBackground;