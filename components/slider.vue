<template>
  <div class="slider-container relative w-full lg:h-[500px] md:h-[400px] min-h-[300px] z-0 overflow-hidden">
    <!-- Holographic Interface -->
    <div class="holographic-interface absolute inset-0">

      <!-- Floating UI elements -->

      <!-- Data streams -->
      <div class="data-stream stream-1">
        <div class="stream-particle particle-1"></div>
        <div class="stream-particle particle-2"></div>
        <div class="stream-particle particle-3"></div>
      </div>
      <div class="data-stream stream-2">
        <div class="stream-particle particle-1"></div>
        <div class="stream-particle particle-2"></div>
      </div>
    </div>
    <div class="overlay-bottom absolute bottom-[-1px] left-0 w-full h-2/6 bg-gradient-to-t from-black to-transparent">
    </div>
    <div class="overlay-top absolute top-[-1px] left-0 w-full h-2/6 bg-gradient-to-b from-black to-transparent"></div>
  </div>
</template>

<style>
.slider-container {
  background: linear-gradient(135deg,
      rgba(0, 0, 0, 0.95) 0%,
      rgba(10, 15, 30, 0.9) 50%,
      rgba(0, 0, 0, 0.95) 100%);
  position: relative;
  overflow: hidden;
}

.holographic-interface {
  opacity: 0.8;
  background: radial-gradient(ellipse at center,
      rgba(51, 47, 208, 0.05) 0%,
      rgba(146, 84, 200, 0.03) 40%,
      rgba(225, 95, 237, 0.02) 70%,
      transparent 100%);
}

/* Holographic grid background */
.holo-grid {
  background-image:
    linear-gradient(rgba(51, 47, 208, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(51, 47, 208, 0.1) 1px, transparent 1px);
  background-size: 40px 40px;
  opacity: 0.3;
  animation: gridPulse 8s ease-in-out infinite;
}

/* Scanning lines */
.scan-line {
  position: absolute;
  background: linear-gradient(90deg,
      transparent 0%,
      var(--quaternary-color) 50%,
      transparent 100%);
  opacity: 0.6;
  animation: scanSweep 6s linear infinite;
}

.scan-horizontal {
  top: 0;
  left: -100%;
  width: 200%;
  height: 2px;
  animation-delay: 0s;
}

.scan-vertical {
  top: -100%;
  left: 50%;
  width: 2px;
  height: 200%;
  background: linear-gradient(0deg,
      transparent 0%,
      var(--tertiary-color) 50%,
      transparent 100%);
  animation: scanSweepVertical 8s linear infinite;
  animation-delay: -2s;
}

/* Holographic panels */
.holo-panel {
  position: absolute;
  border: 1px solid var(--main-color);
  background: rgba(51, 47, 208, 0.05);
  backdrop-filter: blur(2px);
  border-radius: 4px;
  opacity: 0.8;
  animation: panelFlicker 10s ease-in-out infinite;
  box-shadow:
    0 0 20px rgba(51, 47, 208, 0.3),
    inset 0 0 20px rgba(51, 47, 208, 0.1);
}

.panel-1 {
  top: 15%;
  left: 10%;
  width: 180px;
  height: 100px;
  animation-delay: 0s;
}

.panel-2 {
  top: 40%;
  right: 15%;
  width: 160px;
  height: 120px;
  border-color: var(--secondary-color);
  background: rgba(146, 84, 200, 0.05);
  animation-delay: -3s;
}

.panel-3 {
  bottom: 20%;
  left: 20%;
  width: 140px;
  height: 140px;
  border-color: var(--tertiary-color);
  background: rgba(225, 95, 237, 0.05);
  animation-delay: -6s;
}

.panel-header {
  height: 20px;
  background: linear-gradient(90deg,
      var(--main-color) 0%,
      transparent 100%);
  opacity: 0.6;
  animation: headerPulse 4s ease-in-out infinite;
}

.panel-content {
  padding: 10px;
  height: calc(100% - 20px);
  position: relative;
}

/* Data visualization elements */
.data-bar {
  height: 8px;
  margin: 6px 0;
  background: var(--quaternary-color);
  border-radius: 2px;
  opacity: 0.7;
  animation: dataBarGrow 3s ease-in-out infinite;
}

.bar-1 {
  width: 70%;
  animation-delay: 0s;
}

.bar-2 {
  width: 45%;
  animation-delay: -1s;
}

.bar-3 {
  width: 85%;
  animation-delay: -2s;
}

.data-visualization {
  position: relative;
  width: 100%;
  height: 100%;
}

.data-point {
  position: absolute;
  width: 8px;
  height: 8px;
  background: var(--secondary-color);
  border-radius: 50%;
  opacity: 0.8;
  animation: pointPulse 2s ease-in-out infinite;
  box-shadow: 0 0 10px currentColor;
}

.point-1 {
  top: 20%;
  left: 30%;
  animation-delay: 0s;
}

.point-2 {
  top: 60%;
  left: 60%;
  animation-delay: -0.5s;
}

.point-3 {
  top: 40%;
  left: 80%;
  animation-delay: -1s;
}

.point-4 {
  top: 70%;
  left: 20%;
  animation-delay: -1.5s;
}

/* Progress ring */
.progress-ring {
  position: relative;
  width: 80px;
  height: 80px;
  margin: 10px auto;
  border-radius: 50%;
}

.ring-segment {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 2px solid transparent;
  border-radius: 50%;
  animation: ringRotate 4s linear infinite;
}

.segment-1 {
  border-top-color: var(--main-color);
  animation-delay: 0s;
}

.segment-2 {
  border-right-color: var(--secondary-color);
  animation-delay: -1.3s;
}

.segment-3 {
  border-bottom-color: var(--tertiary-color);
  animation-delay: -2.6s;
}

/* Floating elements */
.floating-element {
  position: absolute;
  width: 12px;
  height: 12px;
  border: 1px solid var(--quaternary-color);
  background: rgba(110, 220, 217, 0.1);
  animation: floatDrift 12s ease-in-out infinite;
}

.element-1 {
  top: 25%;
  left: 70%;
  animation-delay: 0s;
}

.element-2 {
  top: 65%;
  left: 40%;
  animation-delay: -4s;
}

.element-3 {
  top: 50%;
  left: 85%;
  animation-delay: -8s;
}

.element-glow {
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: var(--quaternary-color);
  opacity: 0.3;
  animation: glowPulse 3s ease-in-out infinite;
  border-radius: inherit;
}

/* Data streams */
.data-stream {
  position: absolute;
  opacity: 0.6;
}

.stream-1 {
  top: 30%;
  left: 0;
  width: 100%;
  height: 2px;
}

.stream-2 {
  top: 70%;
  left: 0;
  width: 100%;
  height: 2px;
}

.stream-particle {
  position: absolute;
  width: 6px;
  height: 6px;
  background: var(--main-color);
  border-radius: 50%;
  opacity: 0;
  animation: streamFlow 8s linear infinite;
  box-shadow: 0 0 8px currentColor;
}

.stream-1 .particle-1 {
  animation-delay: 0s;
}

.stream-1 .particle-2 {
  animation-delay: -2.6s;
}

.stream-1 .particle-3 {
  animation-delay: -5.2s;
}

.stream-2 .particle-1 {
  background: var(--secondary-color);
  animation-delay: -1s;
}

.stream-2 .particle-2 {
  background: var(--tertiary-color);
  animation-delay: -4s;
}

/* Interface corners */
.interface-corner {
  position: absolute;
  width: 40px;
  height: 40px;
  border: 2px solid var(--quaternary-color);
  opacity: 0.6;
  animation: cornerGlow 6s ease-in-out infinite;
}

.corner-tl {
  top: 20px;
  left: 20px;
  border-right: none;
  border-bottom: none;
}

.corner-tr {
  top: 20px;
  right: 20px;
  border-left: none;
  border-bottom: none;
}

.corner-bl {
  bottom: 20px;
  left: 20px;
  border-right: none;
  border-top: none;
}

.corner-br {
  bottom: 20px;
  right: 20px;
  border-left: none;
  border-top: none;
}

/* Central holographic display */
.central-display {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
}

.display-ring {
  position: absolute;
  border: 1px solid;
  border-radius: 50%;
  opacity: 0.4;
  animation: ringPulse 8s ease-in-out infinite;
}

.ring-outer {
  width: 100%;
  height: 100%;
  border-color: var(--main-color);
  animation-delay: 0s;
}

.ring-middle {
  top: 15%;
  left: 15%;
  width: 70%;
  height: 70%;
  border-color: var(--secondary-color);
  animation-delay: -2.6s;
}

.ring-inner {
  top: 30%;
  left: 30%;
  width: 40%;
  height: 40%;
  border-color: var(--tertiary-color);
  animation-delay: -5.2s;
}

.display-core {
  position: absolute;
  top: 40%;
  left: 40%;
  width: 20%;
  height: 20%;
  background: var(--quaternary-color);
  border-radius: 50%;
  opacity: 0.8;
  animation: coreFlicker 2s ease-in-out infinite;
  box-shadow: 0 0 20px currentColor;
}

/* Animations */
@keyframes gridPulse {

  0%,
  100% {
    opacity: 0.2;
  }

  50% {
    opacity: 0.4;
  }
}

@keyframes scanSweep {
  0% {
    left: -100%;
    opacity: 0;
  }

  10% {
    opacity: 0.8;
  }

  90% {
    opacity: 0.8;
  }

  100% {
    left: 100%;
    opacity: 0;
  }
}

@keyframes scanSweepVertical {
  0% {
    top: -100%;
    opacity: 0;
  }

  10% {
    opacity: 0.8;
  }

  90% {
    opacity: 0.8;
  }

  100% {
    top: 100%;
    opacity: 0;
  }
}

@keyframes panelFlicker {

  0%,
  100% {
    opacity: 0.6;
    box-shadow:
      0 0 20px rgba(51, 47, 208, 0.2),
      inset 0 0 20px rgba(51, 47, 208, 0.05);
  }

  50% {
    opacity: 0.9;
    box-shadow:
      0 0 30px rgba(51, 47, 208, 0.4),
      inset 0 0 30px rgba(51, 47, 208, 0.1);
  }
}

@keyframes headerPulse {

  0%,
  100% {
    opacity: 0.4;
  }

  50% {
    opacity: 0.8;
  }
}

@keyframes dataBarGrow {

  0%,
  100% {
    transform: scaleX(1);
    opacity: 0.5;
  }

  50% {
    transform: scaleX(1.1);
    opacity: 0.9;
  }
}

@keyframes pointPulse {

  0%,
  100% {
    transform: scale(1);
    opacity: 0.6;
  }

  50% {
    transform: scale(1.5);
    opacity: 1;
  }
}

@keyframes ringRotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes floatDrift {

  0%,
  100% {
    transform: translateY(0) translateX(0);
  }

  25% {
    transform: translateY(-20px) translateX(10px);
  }

  50% {
    transform: translateY(-10px) translateX(-5px);
  }

  75% {
    transform: translateY(-30px) translateX(15px);
  }
}

@keyframes glowPulse {

  0%,
  100% {
    opacity: 0.2;
    transform: scale(1);
  }

  50% {
    opacity: 0.6;
    transform: scale(1.2);
  }
}

@keyframes streamFlow {
  0% {
    left: -10px;
    opacity: 0;
  }

  10% {
    opacity: 1;
  }

  90% {
    opacity: 1;
  }

  100% {
    left: calc(100% + 10px);
    opacity: 0;
  }
}

@keyframes cornerGlow {

  0%,
  100% {
    opacity: 0.4;
    box-shadow: none;
  }

  50% {
    opacity: 0.8;
    box-shadow: 0 0 15px currentColor;
  }
}

@keyframes ringPulse {

  0%,
  100% {
    opacity: 0.3;
    transform: translate(-50%, -50%) scale(1);
  }

  50% {
    opacity: 0.7;
    transform: translate(-50%, -50%) scale(1.05);
  }
}

@keyframes coreFlicker {

  0%,
  100% {
    opacity: 0.6;
  }

  25% {
    opacity: 1;
  }

  50% {
    opacity: 0.8;
  }

  75% {
    opacity: 0.9;
  }
}

/* Responsive design */
@media (max-width: 768px) {
  .holo-panel {
    opacity: 0.6;
    border-width: 1px;
  }

  .panel-1 {
    width: 140px;
    height: 80px;
  }

  .panel-2 {
    width: 120px;
    height: 90px;
  }

  .panel-3 {
    width: 100px;
    height: 100px;
  }

  .central-display {
    width: 80px;
    height: 80px;
  }

  .interface-corner {
    width: 30px;
    height: 30px;
  }

  .floating-element {
    width: 8px;
    height: 8px;
  }

  .holo-grid {
    background-size: 30px 30px;
  }
}

/* Enhanced glow effects for larger screens */
@media (min-width: 1024px) {
  .holographic-interface::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 30% 70%,
        rgba(51, 47, 208, 0.03) 0%,
        transparent 40%),
      radial-gradient(circle at 70% 30%,
        rgba(225, 95, 237, 0.03) 0%,
        transparent 40%);
    animation: backgroundShift 20s ease-in-out infinite alternate;
  }
}

@keyframes backgroundShift {
  0% {
    background-position: 0% 0%, 100% 100%;
    opacity: 0.8;
  }

  100% {
    background-position: 100% 100%, 0% 0%;
    opacity: 1;
  }
}
</style>
