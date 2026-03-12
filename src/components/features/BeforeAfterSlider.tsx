"use client";

import {
  ReactCompareSlider,
  ReactCompareSliderImage,
  ReactCompareSliderHandle,
} from "react-compare-slider";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Avant",
  afterLabel = "Après",
}: BeforeAfterSliderProps) {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
      <ReactCompareSlider
        handle={
          <ReactCompareSliderHandle
            buttonStyle={{
              background: "oklch(0.64 0.16 25)",
              border: "none",
              boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
            }}
            linesStyle={{ background: "oklch(0.64 0.16 25)", width: 2 }}
          />
        }
        itemOne={
          <div className="relative h-full w-full">
            <ReactCompareSliderImage src={beforeImage} alt="Avant" style={{ objectFit: "cover" }} />
            <span className="absolute top-3 left-3 text-xs font-semibold text-white bg-black/50 px-2 py-1 rounded-full">
              {beforeLabel}
            </span>
          </div>
        }
        itemTwo={
          <div className="relative h-full w-full">
            <ReactCompareSliderImage src={afterImage} alt="Après" style={{ objectFit: "cover" }} />
            <span className="absolute top-3 right-3 text-xs font-semibold text-white bg-accent-500/80 px-2 py-1 rounded-full">
              {afterLabel}
            </span>
          </div>
        }
        style={{ height: "100%", width: "100%" }}
      />
    </div>
  );
}
