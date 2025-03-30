import { useState } from "react";

import "./App.css";

function App() {
  const number = "01740363401";
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(number);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };
  return (
    <div className="main">
      {Array.from({ length: 15 }).map((_, index) => (
        <div key={index} className="firework"></div>
      ))}
      <div className="text">
        <h3> ত্বাকাব্বালাল্লাহু মিন্না ওয়া মিনকুম ❣❤ ঈদ মোবারক।</h3>
        <button onClick={copyToClipboard} className="flex items-center gap-1">
          Bkash Number
        </button>
        {copied && <span className="text-green-500">Copied!</span>}
      </div>
      <div style={{ width: "50%" }}>
        <img
          src={`/Eid-Mubarak/eidmubarak.jpg`}
          alt="Eid Mubarak"
          width="100%"
        />
      </div>
    </div>
  );
}

export default App;
