"use client";

import IndiaMap from "@react-map/india";
// import { useRef } from "react";  // Commented out since SVG is disabled

// type MapProps = {  // Commented out since SVG is disabled
//   dots?: Array<{
//     start: { lat: number; lng: number; label?: string };
//     end: { lat: number; lng: number; label?: string };
//   }>;
//   lineColor?: string;
// };

export default function WorldMap(
  // props: MapProps  // Commented out since SVG is disabled
) {
  // const svgRef = useRef<SVGSVGElement>(null);  // Commented out since SVG is disabled

  // States where YCB has reached - these will be precolored in dark blue (#050a30)
  const reachedStates = [
    "Delhi",
    "Maharashtra",
    "Haryana",
    "Tamil Nadu",
    "Chandigarh",
    "Rajasthan",
    "Uttar Pradesh",
    "Assam",
    "Gujarat",
    "West Bengal",
    "Telangana",
    "Odisha",
    "Sikkim",
    "Bihar",
    "Karnataka",
		"Punjab",
		"Uttarakhand",
		"Madhya Pradesh",
  ];

  // Create cityColors object for precolored states
  const stateColors: { [key: string]: string } = {};
  for (const state of reachedStates) {
    stateColors[state] = "#050a30"; // Dark blue from footer
  }

  // COMMENTED OUT: All SVG-related variables and functions since SVG overlay is disabled
  /*
  // Define locations for dots on the India map
  const locations = [
    // Major cities coordinates
    { id: "delhi", lat: 28.6139, lng: 77.209, name: "Delhi" },
    { id: "mumbai", lat: 19.076, lng: 72.8777, name: "Mumbai" },
    { id: "bangalore", lat: 12.9716, lng: 77.5946, name: "Bangalore" },
    { id: "chennai", lat: 13.0827, lng: 80.2707, name: "Chennai" },
    { id: "kolkata", lat: 22.5726, lng: 88.3639, name: "Kolkata" },
    { id: "hyderabad", lat: 17.385, lng: 78.4867, name: "Hyderabad" },
    { id: "pune", lat: 18.5204, lng: 73.8567, name: "Pune" },
  ];

  // Constants for fallback projection
  const FALLBACK_SCALE = 80;
  const FALLBACK_OFFSET = 10;
  const COORDINATE_SCALE = 100;

  // Constants for label positioning
  const LABEL_OFFSET_LEFT_SHORT = -18;
  const LABEL_OFFSET_LEFT_MEDIUM = -15;
  const LABEL_OFFSET_RIGHT_SHORT = 10;
  const LABEL_OFFSET_RIGHT_LONG = 15;
  const LABEL_OFFSET_NONE = 0;

  // Label positioning configuration for each city
  const cityLabelConfig: { [key: string]: { x: number; y: number } } = {
    delhi: { x: LABEL_OFFSET_RIGHT_LONG, y: LABEL_OFFSET_NONE },
    mumbai: { x: LABEL_OFFSET_RIGHT_SHORT, y: LABEL_OFFSET_NONE },
    bangalore: { x: LABEL_OFFSET_LEFT_SHORT, y: LABEL_OFFSET_NONE },
    chennai: { x: LABEL_OFFSET_RIGHT_LONG, y: LABEL_OFFSET_NONE },
    kolkata: { x: LABEL_OFFSET_RIGHT_SHORT, y: LABEL_OFFSET_NONE },
    hyderabad: { x: LABEL_OFFSET_RIGHT_LONG, y: LABEL_OFFSET_NONE },
    pune: { x: LABEL_OFFSET_LEFT_MEDIUM, y: LABEL_OFFSET_NONE },
  };

  const projectPoint = (lat: number, lng: number) => {
    // Manual coordinate mapping based on visual positioning for @react-map/india
    // This approach uses empirical positioning rather than mathematical projection

    const coordinateMapping: { [key: string]: { x: number; y: number } } = {
      // Coordinates as percentage of the 100x100 viewBox
      "28.6139,77.209": { x: 30, y: 27 }, // Delhi
      "19.076,72.8777": { x: 17, y: 60 }, // Mumbai
      "12.9716,77.5946": { x: 32, y: 80 }, // Bangalore
      "13.0827,80.2707": { x: 40, y: 82 }, // Chennai
      "22.5726,88.3639": { x: 69, y: 47 }, // Kolkata
      "17.385,78.4867": { x: 36, y: 65 }, // Hyderabad
      "18.5204,73.8567": { x: 20, y: 63 }, // Pune
    };

    const key = `${lat},${lng}`;
    const coords = coordinateMapping[key];

    if (coords) {
      return coords;
    }

    // Fallback to mathematical projection for custom coordinates
    const indiaBounds = {
      north: 37.0,
      south: 8.0,
      east: 97.0,
      west: 68.0,
    };

    const normalizedX =
      (lng - indiaBounds.west) / (indiaBounds.east - indiaBounds.west);
    const normalizedY =
      (indiaBounds.north - lat) / (indiaBounds.north - indiaBounds.south);

    return {
      x: normalizedX * FALLBACK_SCALE + FALLBACK_OFFSET,
      y: normalizedY * FALLBACK_SCALE + FALLBACK_OFFSET,
    };
  };
  */

  return (
    <div className="relative flex w-full justify-center rounded-lg bg-transparent font-sans">
      <div className="w-full max-w-4xl">
        <div className="relative w-full">
          {/* Responsive container with aspect ratio */}
          <div>
            <IndiaMap
              cityColors={stateColors}
              hints={true}
              hoverColor="#FFD602"
              mapColor="#e5e7eb"
              selectColor="#0ea5e9"
              size={"100%" as unknown as number}
              strokeColor="white"
              strokeWidth={1}
              type="select-single"
            />

            {/* Overlay SVG for dots and animations - COMMENTED OUT */}
            {/*
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full select-none"
              preserveAspectRatio="xMidYMid meet"
              ref={svgRef}
              viewBox={`0 0 ${COORDINATE_SCALE} ${COORDINATE_SCALE}`}
            >
              <title>India Map with Locations</title>

              {/* Render location dots */}
            {/*
              {locations.map((location) => {
                const point = projectPoint(location.lat, location.lng);
                const labelOffset = cityLabelConfig[location.id] || {
                  x: LABEL_OFFSET_RIGHT_SHORT,
                  y: LABEL_OFFSET_NONE,
                };

                return (
                  <g key={location.id}>
                    <circle
                      cx={point.x}
                      cy={point.y}
                      fill={lineColor}
                      r="0.8"
                      stroke="white"
                      strokeWidth="0.3"
                    />
                    <circle
                      cx={point.x}
                      cy={point.y}
                      fill={lineColor}
                      opacity="0.5"
                      r="0.8"
                    >
                      <animate
                        attributeName="r"
                        begin="0s"
                        dur="2s"
                        from="0.8"
                        repeatCount="indefinite"
                        to="2.5"
                      />
                      <animate
                        attributeName="opacity"
                        begin="0s"
                        dur="2s"
                        from="0.5"
                        repeatCount="indefinite"
                        to="0"
                      />
                    </circle>

                    {/* Dotted line from dot to label */}
            {/*
                    <line
                      stroke="#374151"
                      strokeDasharray="0.3 0.3"
                      strokeWidth="0.2"
                      x1={point.x}
                      x2={point.x + labelOffset.x}
                      y1={point.y}
                      y2={point.y + labelOffset.y}
                    />

                    {/* City name label */}
            {/*
                    <text
                      className="pointer-events-none select-none"
                      fill="#374151"
                      fontSize="1.8"
                      fontWeight="600"
                      textAnchor={labelOffset.x < 0 ? "end" : "start"}
                      x={point.x + labelOffset.x}
                      y={point.y + labelOffset.y}
                    >
                      {location.name}
                    </text>
                  </g>
                );
              })}

              {/* Render custom dots from props */}
            {/*
              {dots.map((dot) => {
                const startPoint = projectPoint(dot.start.lat, dot.start.lng);
                const endPoint = projectPoint(dot.end.lat, dot.end.lng);
                const dotKey = `${dot.start.lat}-${dot.start.lng}-${dot.end.lat}-${dot.end.lng}`;
                return (
                  <g key={dotKey}>
                    <circle
                      cx={startPoint.x}
                      cy={startPoint.y}
                      fill={lineColor}
                      r="0.6"
                      stroke="white"
                      strokeWidth="0.2"
                    />
                    <circle
                      cx={endPoint.x}
                      cy={endPoint.y}
                      fill={lineColor}
                      r="0.6"
                      stroke="white"
                      strokeWidth="0.2"
                    />
                  </g>
                );
              })}
            </svg>
            */}
          </div>
        </div>
      </div>
    </div>
  );
}
