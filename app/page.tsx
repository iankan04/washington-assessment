'use client'

import WSelectBox from "@/components/ui/WSelectBox";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-empty">
      <div className="w-[500px] h-[500px] white flex flex-col items-center justify-center text-body-l">
        <WSelectBox />
      </div>
    </div>
  );
}
