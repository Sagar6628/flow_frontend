// src/components/ShaderBackground.tsx
import { ShaderGradient, ShaderGradientCanvas } from "@shadergradient/react";
import { useTheme } from "../context/ThemeContext";

export default function ShaderBackground() {
  const { theme } = useTheme();

  return (
    <ShaderGradientCanvas
    style={{
//    backgroundColor: theme === "dark" ? "#0E1116" : "#F9F9F6", 
backgroundColor: "transparent",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "visible",
  }}
    >
      {/* <ShaderGradient
        animate="on"
        brightness={1.1}
        contrast={1.05}
        grain="on"
        color1={theme === "dark" ? "#4444bb" : "#8383e2"}
        color2={theme === "dark" ? "#1d1d7c" : "#4444bb"}
        color3={theme === "dark" ? "#010104" : "#fbfbfe"}
      /> */}

      <ShaderGradient
  animate="on"
  axesHelper="on"
  bgColor1="#4444bb"
  bgColor2="#000000"
  brightness={0.8}
  cAzimuthAngle={270}
  cDistance={0.5}
  cPolarAngle={180}
  cameraZoom={4.3}
   color1={theme === "dark" ? "#4444bb" : "#8383e2"}
        color2={theme === "dark" ? "#1d1d7c" : "#4444bb"}
        color3={theme === "dark" ? "#010104" : "#fbfbfe"}
  destination="onCanvas"
  embedMode="off"
  envPreset="dawn"
  format="gif"
  fov={80}
  frameRate={10}
  gizmoHelper="hide"
  grain="off"
  lightType="env"
  pixelDensity={1}
  positionX={0}
  positionY={-0.15}
  positionZ={0}
  range="disabled"
  rangeEnd={40}
  rangeStart={0}
  reflection={0.4}
  rotationX={0}
  rotationY={130}
  rotationZ={70}
  shader="defaults"
  type="sphere"
  uAmplitude={3.2}
  uDensity={0.8}
  uFrequency={5.5}
  uSpeed={0.3}
  uStrength={0.3}
  uTime={0}
  wireframe={false}
  zoomOut={true}
/>
    </ShaderGradientCanvas>
  );
}
