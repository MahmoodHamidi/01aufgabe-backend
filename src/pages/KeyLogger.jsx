import React, { useEffect, useState } from "react";

const KeyLogger = () => {
  const [keyInfo, setKeyInfo] = useState({
    key: "",
    location: "",
    code: "",
    which: "",
  });
  useEffect(() => {
    const handleKeyDown = (event) => {
      setKeyInfo({
        key: event.key,
        location: event.location,
        code: event.code,
        which: event.which,
      });
      console.log(event);
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="h-screen flex justify-center items-center ">
      <div className=" text-center w-300 h-100 backdrop-blur bg-white/30 rounded-lg shadow-lg">
        <p className=" m-6 text-2xl font-mono font-bold">
          The key you pressed: {keyInfo.key}
        </p>
        <h1 className=" m-6 text-amber-500 font-semibold ">{keyInfo.which}</h1>
        <p className=" m-6 font-semibold text-2xl">Key Code Information</p>

        <div className="flex flex-wrap justify-center gap-2">
          <div className=" w-full sm:w-1/2 lg:w-1/5  rounded-lg shadow-lg text-center bg-white">
            <p className="h-10 flex items-center justify-center bg-blue-600 text-white rounded-t-lg">
              event.key
            </p>
            <p className="p-2">{keyInfo.key}</p>
          </div>
          <div className=" w-full sm:w-1/2 lg:w-1/5  rounded-lg shadow-lg text-center bg-white">
            <p className="h-10 flex items-center justify-center bg-blue-600 text-white rounded-t-lg">
              event.location
            </p>
            <p className="p-2">{keyInfo.location}</p>
          </div>
          <div className=" w-full sm:w-1/2 lg:w-1/5 rounded-lg shadow-lg text-center bg-white">
            <p className="h-10 flex items-center justify-center bg-blue-600 text-white rounded-t-lg">
              event.code
            </p>
            <p className="p-2">{keyInfo.code}</p>
          </div>
          <div className=" w-full sm:w-1/2 lg:w-1/5  rounded-lg shadow-lg text-center bg-white">
            <p className="h-10 flex items-center justify-center bg-blue-600 text-white rounded-t-lg">
              event.which
            </p>
            <p className="p-2">{keyInfo.which}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyLogger;
