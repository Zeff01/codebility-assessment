// components/HQLocationMap.tsx
import dynamic from 'next/dynamic';

const MapComponent = dynamic(() => import('./mapcomponent'), {
  ssr: false,
});


const HQLocationMap = () => {
  return (
    <div className="max-w-4xl mx-auto my-8 rounded-xl shadow-lg overflow-hidden border border-gray-300 bg-white">
      <div className="text-center py-2 font-semibold text-gray-700 text-lg">📍 We are here</div>
      <div className="h-[400px] w-full">
        <MapComponent />
      </div>
    </div>
  );
};

export default HQLocationMap;
