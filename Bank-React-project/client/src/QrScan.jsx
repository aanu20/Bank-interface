import { useEffect, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

function QRScanner() {
  const [scanResult, setScanResult] = useState(null);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      fps: 5,
      qrbox: { width: 250, height: 250 },
    });

    const success = (result) => {
      scanner.clear(); // stop scanning after first success
      setScanResult(result);
    };

    const error = (err) => {
      console.warn("QR Scan Error:", err);
    };

    scanner.render(success, error);

    // Cleanup on unmount
    return () => {
      scanner.clear().catch((e) => console.warn("Failed to clear scanner:", e));
    };
  }, []);

 return (
  <div className="qr bg-white w-[500px] flex justify-center p-6 rounded-lg shadow-md ml-[500px] mt-[200px]">
    <div className="flex flex-col items-center">
      <h1 className="text-xl font-bold mb-4">QR Scanner</h1>
      <div id="reader"></div>
      {scanResult && (
        <p className="mt-4 text-green-500">
          Scan Result: {scanResult}
        </p>
      )}
    </div>
  </div>
);


}

export default QRScanner;
