'use client';

import dynamic from 'next/dynamic';
import React, { MutableRefObject, useEffect, useRef, useState } from 'react';
import { GlobeMethods, GlobeProps } from 'react-globe.gl';

const AnimatedNumbers = dynamic(() => import('react-animated-numbers'), {
  ssr: false,
});

const GlobeComponent = dynamic(
  async () => {
    const { default: RQ } = await import('react-globe.gl');

    const Globe = ({
      forwardedRef,
      ...props
    }: GlobeProps & {
      forwardedRef: MutableRefObject<GlobeMethods | undefined>;
    }) => <RQ ref={forwardedRef} {...props} />;
    return Globe;
  },
  { ssr: false }
);

const globePoints = [
  {
    lat: 31.2638905,
    lng: -98.5456116,
    color: '#ef4444',
    pointRadius: 1,
    size: 0.02,
  },
  {
    lat: 40.0796606,
    lng: -89.4337288,
    color: '#ef4444',
    pointRadius: 1,
    size: 0.02,
  },
  {
    lat: 56.130367,
    lng: -106.346771,
    color: '#ef4444',
    pointRadius: 1,
    size: 0.02,
  },
  {
    lat: 40.2253569,
    lng: -82.6881395,
    color: '#ef4444',
    pointRadius: 1,
    size: 0.02,
  },
  {
    lat: 43.6211955,
    lng: -84.6824346,
    color: '#ef4444',
    pointRadius: 1,
    size: 0.02,
  },
  {
    lat: 43.9792797,
    lng: -120.737257,
    color: '#ef4444',
    pointRadius: 1,
    size: 0.02,
  },
  {
    lat: 41.7370229,
    lng: -99.5873816,
    color: '#ef4444',
    pointRadius: 1,
    size: 0.02,
  },
  {
    lat: 30.8124247,
    lng: 34.8594762,
    color: '#ef4444',
    pointRadius: 1,
    size: 0.02,
  },
  {
    lat: 38.9597594,
    lng: 34.9249653,
    color: '#ef4444',
    pointRadius: 1,
    size: 0.02,
  },
  {
    lat: 54.7023545,
    lng: -3.2765753,
    color: '#ef4444',
    pointRadius: 1,
    size: 0.02,
  },
  {
    lat: 49.7439047,
    lng: 15.3381061,
    color: '#ef4444',
    pointRadius: 1,
    size: 0.02,
  },
  {
    lat: 41.608635,
    lng: 21.745275,
    color: '#22c55e',
    pointRadius: 1,
    size: 0.02,
  },
  {
    lat: 44.016521,
    lng: 21.005859,
    color: '#22c55e',
    pointRadius: 1,
    size: 0.02,
  },
  {
    lat: 42.708679,
    lng: 19.37439,
    color: '#22c55e',
    pointRadius: 1,
    size: 0.02,
  },
  {
    lat: 42.66544,
    lng: 21.165319,
    color: '#22c55e',
    pointRadius: 1,
    size: 0.02,
  },
  {
    lat: 41.153332,
    lng: 20.168331,
    color: '#22c55e',
    pointRadius: 1,
    size: 0.02,
  },
  {
    lat: 44.3053476,
    lng: 17.5961467,
    color: '#22c55e',
    pointRadius: 1,
    size: 0.02,
  },
  {
    lat: 42.6073975,
    lng: 25.4856617,
    color: '#22c55e',
    pointRadius: 1,
    size: 0.02,
  },
  {
    lat: 49.4871968,
    lng: 31.2718321,
    color: '#22c55e',
    pointRadius: 1,
    size: 0.02,
  },
];

const globeArcs = [
  {
    startLat: 41.6171214,
    startLng: 21.7168387,
    endLat: 31.2638905,
    endLng: -98.5456116,
    color: '#65b2e8',
  },
  {
    startLat: 41.6171214,
    startLng: 21.7168387,
    endLat: 40.0796606,
    endLng: -89.4337288,
    color: '#65b2e8',
  },
  {
    startLat: 41.6171214,
    startLng: 21.7168387,
    endLat: 40.2253569,
    endLng: -82.6881395,
    color: '#65b2e8',
  },
  {
    startLat: 41.6171214,
    startLng: 21.7168387,
    endLat: 56.130367,
    endLng: -106.346771,
    color: '#65b2e8',
  },
  {
    startLat: 41.6171214,
    startLng: 21.7168387,
    endLat: 43.6211955,
    endLng: -84.6824346,
    color: '#65b2e8',
  },
  {
    startLat: 41.6171214,
    startLng: 21.7168387,
    endLat: 43.9792797,
    endLng: -120.737257,
    color: '#65b2e8',
  },
  {
    startLat: 41.6171214,
    startLng: 21.7168387,
    endLat: 41.7370229,
    endLng: -99.5873816,
    color: '#65b2e8',
  },
  {
    startLat: 41.6171214,
    startLng: 21.7168387,
    endLat: 30.8124247,
    endLng: 34.8594762,
    color: '#65b2e8',
  },
  {
    startLat: 41.6171214,
    startLng: 21.7168387,
    endLat: 38.9597594,
    endLng: 34.9249653,
    color: '#65b2e8',
  },
  {
    startLat: 41.6171214,
    startLng: 21.7168387,
    endLat: 54.7023545,
    endLng: -3.2765753,
    color: '#65b2e8',
  },
  {
    startLat: 41.6171214,
    startLng: 21.7168387,
    endLat: 49.7439047,
    endLng: 15.3381061,
    color: '#65b2e8',
  },
  {
    startLat: 44.3053476,
    startLng: 17.5961467,
    endLat: 41.6171214,
    endLng: 21.7168387,
    color: '#65b2e8',
  },
  {
    startLat: 49.4871968,
    startLng: 31.2718321,
    endLat: 41.6171214,
    endLng: 21.7168387,
    color: '#65b2e8',
  },
];

const GlobalMapComponent = () => {
  const globeRef = useRef<GlobeMethods | undefined>(undefined);
  const [globeLoaded, setGlobeLoaded] = useState(false);

  useEffect(() => {
    if (globeRef.current) {
      globeRef.current.controls().autoRotate = true;
      globeRef.current.controls().autoRotateSpeed = 0.3;
      globeRef.current.controls().enableZoom = false;
      globeRef.current.pointOfView(
        { altitude: 1.75, lat: 41.6171214, lng: 21.7168387 },
        3000
      );
      const directionalLight = globeRef.current
        .scene()
        .children.find((obj3d: any) => obj3d.type === 'DirectionalLight');
      if (directionalLight) {
        directionalLight.intensity = 1;
        directionalLight.position.set(-5, 5, 1);
      }
    }
  }, [globeLoaded]);

  return (
    <section className="flex flex-col lg:flex-row items-center justify-evenly lg:px-10 py-10 pt-80 lg:pt-10 bg-white text-primary overflow-visible relative h-fit lg:h-[80svh]">
      <div className="w-full lg:z-[1] h-full overflow-visible absolute z-0 lg:static flex items-center justify-center -top-[25%]">
        <GlobeComponent
          forwardedRef={globeRef}
          globeImageUrl="/images/world-map.webp"
          backgroundColor="#00000000"
          onGlobeReady={() => {
            setGlobeLoaded(true);
          }}
          pointsData={globePoints}
          pointColor="color"
          pointRadius="pointRadius"
          pointAltitude="size"
          arcsData={globeArcs}
          arcColor="color"
          arcDashLength={0.5}
          arcDashGap={0.1}
          arcDashAnimateTime={() => Math.random() * 2000 + 2000}
          arcAltitude={0.2}
          width={700}
          height={700}
          key="g3"
        />
      </div>
      <div className="w-full flex flex-col justify-center gap-10 lg:gap-6 z-[2] bg-white rounded-2xl lg:bg-transparent p-8 lg:p-0">
        <p className="text-3xl lg:text-4xl font-bold text-primary moveToRight pb-8">
          Success <span className="text-accent">Overview</span>
        </p>
        <div className="flex flex-col gap-3 w-fit justify-center">
          <div className="text-lg lg:text-lg flex items-center gap-8 moveToRight">
            <div className="w-3 h-3 rounded-full bg-green-500" /> Coverage
          </div>
          <div className="text-lg lg:text-lg flex items-center gap-8 moveToRight">
            <div className="w-3 h-3 rounded-full bg-red-500" /> Countries Served
          </div>
          <div className="text-lg lg:text-lg flex items-center gap-8 moveToRight">
            <div className="w-3 h-3 rounded-full bg-yellow-500" /> Clients
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 moveToRight">
          <div className="flex flex-col">
            <div className="text-5xl text-accent font-bold flex items-center gap-0">
              <AnimatedNumbers
                includeComma
                animateToNumber={15}
                locale="en-US"
                configs={[{ mass: 1, tension: 220, friction: 100 }]}
              />
              +
            </div>
            <p className="opacity-50 text-primary">Clients</p>
          </div>
          <div className="flex flex-col">
            <div className="text-5xl text-accent font-bold flex items-center gap-0">
              <AnimatedNumbers
                includeComma
                animateToNumber={200}
                locale="en-US"
                configs={[{ mass: 1, tension: 220, friction: 100 }]}
              />
              +
            </div>
            <p className="opacity-50 text-primary">International Recruits</p>
          </div>
          <div className="flex flex-col">
            <div className="text-5xl text-accent font-bold flex items-center gap-0">
              <AnimatedNumbers
                includeComma
                animateToNumber={40}
                locale="en-US"
                configs={[{ mass: 1, tension: 220, friction: 100 }]}
              />
              +
            </div>
            <p className="opacity-50 text-primary">Local Recruits</p>
          </div>
          <div className="flex flex-col">
            <div className="text-5xl text-accent font-bold">
              <div className="text-5xl text-accent font-bold flex items-center gap-0">
                <AnimatedNumbers
                  includeComma
                  animateToNumber={15}
                  locale="en-US"
                  configs={[{ mass: 1, tension: 220, friction: 100 }]}
                />
                +
              </div>
            </div>
            <p className="opacity-50 text-primary">Countries Presence</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalMapComponent;
