import React, { useEffect, useState } from "react";
import "./KeyLogger.css";
const KeyLogger = () => {
  const [keyInfo, setKeyInfo] = useState({
    key: "",
    location: "",
    code: "",
    which: "",
  });
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    const handleKeyDown = (event) => {
      setKeyInfo({
        key: event.key,
        location: event.location,
        code: event.code,
        which: event.which,
      });
      setShowModal(false);
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-center bg-transparent">
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="bg-white rounded-xl shadow-xl px-8 py-6 text-center max-w-xs w-full">
            <h2 className="text-lg font-semibold mb-2">Press any key</h2>
            <p className="text-gray-600">
              Please press a keyboard key to continue.
            </p>
          </div>
        </div>
      )}

      <div className="w-full max-w-lg mx-auto text-center rounded-2xl shadow-lg bg-white/30 backdrop-blur p-6">
        <p className="mb-4 text-2xl font-mono font-bold">
          The key you pressed:{" "}
          <span className="text-blue-700">{keyInfo.key}</span>
        </p>
        <h1 className="mb-4 text-amber-500 font-semibold text-3xl">
          {keyInfo.which}
        </h1>
        <p className="mb-4 font-semibold text-xl">Key Code Information</p>

        <div className="flex flex-wrap justify-center gap-4">
          <div className="flex-1 min-w-[120px] rounded-lg shadow text-center bg-white/80 mb-2">
            <p className="h-10 flex items-center justify-center bg-blue-600 text-white rounded-t-lg">
              event.key
            </p>
            <p className="p-2 break-words">{keyInfo.key}</p>
          </div>
          <div className="flex-1 min-w-[120px] rounded-lg shadow text-center bg-white/80 mb-2">
            <p className="h-10 flex items-center justify-center bg-blue-600 text-white rounded-t-lg">
              event.location
            </p>
            <p className="p-2 break-words">{keyInfo.location}</p>
          </div>
          <div className="flex-1 min-w-[120px] rounded-lg shadow text-center bg-white/80 mb-2">
            <p className="h-10 flex items-center justify-center bg-blue-600 text-white rounded-t-lg">
              event.code
            </p>
            <p className="p-2 break-words">{keyInfo.code}</p>
          </div>
          <div className="flex-1 min-w-[120px] rounded-lg shadow text-center bg-white/80 mb-2">
            <p className="h-10 flex items-center justify-center bg-blue-600 text-white rounded-t-lg">
              event.which
            </p>
            <p className="p-2 break-words">{keyInfo.which}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyLogger;
