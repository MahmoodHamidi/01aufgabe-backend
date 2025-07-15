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
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (showModal && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showModal]);

  // فقط وقتی مودال باز است، کیبورد را با input کنترل کن
  function handleInput(e) {
    const value = e.target.value;
    setInputValue(value);
    if (value.length > 0) {
      const lastKey = value[value.length - 1];
      setKeyInfo({
        key: lastKey,
        location: 0,
        code: "",
        which: lastKey.charCodeAt(0),
      });
      setShowModal(false);
    }
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!showModal) {
        setKeyInfo({
          key: event.key,
          location: event.location,
          code: event.code,
          which: event.which,
        });
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showModal]);

  return (
    <div className="min-h-screen flex justify-center items-center bg-transparent">
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="keylogger-modal" style={{ position: "relative" }}>
            <h2>Press any key</h2>
            <p>Please press a keyboard key to continue.</p>
            <input
              ref={inputRef}
              className="keylogger-modal-input"
              value={inputValue}
              onChange={handleInput}
              autoFocus
              tabIndex={0}
              aria-hidden="false"
              type="text"
              inputMode="text"
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
