const WeatherPreloader = () => {
  return (
    <div className="animate-pulse space-x-4 pt-4">
      <div className="h-4 w-[100px] rounded bg-gray-200 mb-4"></div>
      <div className="h-2 w-[70px] rounded bg-gray-200 mb-8"></div>

      <div className="w-full flex flex-col items-center mb-8">
        <div className="size-[70px] rounded-full bg-gray-200 mb-8"></div>
        <div className="h-2 w-[50px] rounded bg-gray-200 mb-2"></div>
        <div className="h-2 w-[50px] rounded bg-gray-200 mb-2"></div>
        <div className="h-2 w-[50px] rounded bg-gray-200 mb-2"></div>
      </div>

      <div className="w-full flex justify-between">
        <div className="flex flex-col items-center">
          <div className="h-2 w-[70px] rounded bg-gray-200 mb-2"></div>
          <div className="h-2 w-[30px] rounded bg-gray-200 mb-2"></div>
        </div>
        <div className="flex flex-col items-center">
          <div className="h-2 w-[70px] rounded bg-gray-200 mb-2"></div>
          <div className="h-2 w-[30px] rounded bg-gray-200 mb-2"></div>
        </div>
        <div className="flex flex-col items-center">
          <div className="h-2 w-[70px] rounded bg-gray-200 mb-2"></div>
          <div className="h-2 w-[30px] rounded bg-gray-200 mb-2"></div>
        </div>
      </div>
    </div>
  );
};

export default WeatherPreloader;
