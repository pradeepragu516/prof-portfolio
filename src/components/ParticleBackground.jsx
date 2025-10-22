// src/components/ParticleBackground.jsx
import React, { useCallback } from 'react';
import { Particles } from "@tsparticles/react";
import { loadFull } from 'tsparticles';

/**
 * ParticleBackground adds an animated, interactive particle layer.
 * Accepts 'theme' ('dark'|'light') as optional prop for color adaptation.
 */
const ParticleBackground = ({ theme = 'dark' }) => {
  // Use useCallback for init performance
  const init = useCallback(async (main) => {
    await loadFull(main);
  }, []);

  // Theme-adaptive color (could expand if you use more palette colors)
  const particleColor = theme === 'dark' ? '#00c6ff' : '#1e293b';

  return (
    <div className="particle-background">
      <Particles
        id="tsparticles"
        className="particles-canvas"
        init={init}
        options={{
          background: { color: { value: 'transparent' } },
          fpsLimit: 60,
          particles: {
            color: { value: particleColor },
            links: {
              color: particleColor,
              distance: 120,
              enable: true,
              opacity: 0.24,
              width: 1.1
            },
            collisions: { enable: false },
            move: {
              enable: true,
              speed: 1.35,
              direction: 'none',
              outModes: { default: 'bounce' }
            },
            number: { value: window.innerWidth < 800 ? 30 : 60 }, // Fewer on mobile
            opacity: { value: 0.46 },
            shape: { type: 'circle' },
            size: { value: { min: 1, max: 4 } }
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default ParticleBackground;
