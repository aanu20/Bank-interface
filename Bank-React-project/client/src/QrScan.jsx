import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Html5QrcodeScanner } from "html5-qrcode";

// Helper functions for offline queue
const addToOfflineQueue = (paymentData) => {
  let queue = JSON.parse(localStorage.getItem("offlineQueue") || "[]");
  queue.push(paymentData);
  localStorage.setItem("offlineQueue", JSON.stringify(queue));
};

const sendQueuedPayments = async () => {
  let queue = JSON.parse(localStorage.getItem("offlineQueue") || "[]");
  if (queue.length === 0) return;

  for (let paymentData of queue) {
    try {
      await fetch("http://localhost:5000/pay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(paymentData),
      });
      console.log("Offline payment sent:", paymentData);
    } catch (err) {
      console.warn("Failed to send offline payment:", err);
    }
  }

  localStorage.removeItem("offlineQueue");
};

function QRScanner() {
  const [scanResult, setScanResult] = useState(null);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const navigate = useNavigate();

  useEffect(() => {
    // Handle online/offline status
    const handleOnline = () => {
      setIsOnline(true);
      sendQueuedPayments();
    };
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Clear previous scanner if any
    const readerDiv = document.getElementById("reader");
    if (readerDiv.children.length > 0) readerDiv.innerHTML = "";

    // Initialize scanner
    const scanner = new Html5QrcodeScanner("reader", {
      fps: 5,
      qrbox: { width: 250, height: 250 },
    });

    const success = async (result) => {
      scanner.clear(); // stop scanning
      setScanResult(result);

      // Parse QR data
      let paymentData;
      if (result.startsWith("upi://pay")) {
        const params = new URLSearchParams(result.split("?")[1]);
        paymentData = {
          vpa: params.get("pa"),
          name: params.get("pn"),
          amount: params.get("am"),
          currency: params.get("cu"),
          txnId: Date.now().toString()  // unique transaction ID (nonce)
        };
      } else {
        // Not a valid UPI QR
        alert("Invalid QR: Not a UPI payment QR");
        return;
      }


      if (navigator.onLine) {
        // Online payment
        try {
          const res = await fetch("http://localhost:5000/pay", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(paymentData),
          });
          const data = await res.json();
          console.log("Payment success:", data);
        } catch (err) {
          console.warn("Online payment failed, queued offline:", err);
          addToOfflineQueue(paymentData);
        }
      } else {
        // Offline: queue payment
        addToOfflineQueue(paymentData);
        console.log("Offline: Payment queued");
      }

      // Navigate to amount/PIN page
      navigate("/confirm-payment", { state: { qrData: paymentData } });

      //navigate("/enter-pin", { state: { qrData: paymentData } });
    };

    const error = (err) => console.warn("QR Scan Error:", err);

    scanner.render(success, error);

    // Cleanup on unmount
    return () => {
      scanner.clear().catch(() =>
        console.warn("Failed to clear scanner on unmount")
      );
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [navigate]);

  return (
    <div className="qr bg-white w-[500px] flex flex-col items-center p-6 rounded-lg shadow-md ml-[500px] mt-[200px]">
      <h1 className="text-xl font-bold mb-4">QR Scanner</h1>
      {/* Online/Offline Indicator */}
      <p
        className={`mb-4 font-semibold ${
          isOnline ? "text-green-500" : "text-red-500"
        }`}
      >
        {isOnline ? "Online" : "Offline - payments will queue"}
      </p>

      <div id="reader"></div>

      {scanResult && (
        <p className="mt-4 text-blue-500 break-all">
          Scan Result: {scanResult}
        </p>
      )}
    </div>
  );
}

export default QRScanner;
