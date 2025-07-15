import React, { useEffect, useRef, useState } from "react";
import "./KeyLogger.css";

const KeyLogger = () => {
  const [keyInfo, setKeyInfo] = useState({
    key: "",
    location: "",
    code: "",
    which: "",
  });
  const [showModal, setShowModal] = useState(true);
  const inputRef = useRef(null);

  useEffect(() => {
    if (showModal && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showModal]);

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
          <div className="keylogger-modal" style={{ position: "relative" }}>
            <h2>Press any key</h2>
            <p>Please press a keyboard key to continue.</p>
            {/* Input for mobile keyboard */}
            <input
              ref={inputRef}
              style={{
                opacity: 0.01,
                position: "absolute",
                left: "50%",
                top: "70%",
                transform: "translate(-50%, -50%)",
                width: "80%",
                height: "2.5rem",
                zIndex: 10,
                border: "none",
                background: "transparent",
              }}
              tabIndex={0}
              aria-hidden="false"
              autoFocus
            />
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
