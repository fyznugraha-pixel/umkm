import { useState, useRef } from "react";
import { printerConfig } from "@/config/printerConfig";

export function usePrinterConnection() {
  const [isConnected, setIsConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [deviceName, setDeviceName] = useState<string>("");
  const [error, setError] = useState<string>("");

  const characteristicRef = useRef<BluetoothRemoteGATTCharacteristic | null>(null);
  const deviceRef = useRef<BluetoothDevice | null>(null);

  const connectPrinter = async () => {
    setError("");
    
    if (!navigator.bluetooth) {
      setError("Bluetooth printing tidak didukung di browser ini, gunakan Chrome di Android atau Desktop.");
      return;
    }

    setIsConnecting(true);

    try {
      const device = await navigator.bluetooth.requestDevice({
        acceptAllDevices: true,
        optionalServices: [printerConfig.serviceUUID],
      });

      device.addEventListener('gattserverdisconnected', disconnectPrinter);

      if (!device.gatt) {
        throw new Error("Device tidak mendukung GATT server.");
      }

      const server = await device.gatt.connect();
      const service = await server.getPrimaryService(printerConfig.serviceUUID);
      const characteristic = await service.getCharacteristic(printerConfig.characteristicUUID);

      deviceRef.current = device;
      characteristicRef.current = characteristic;
      
      setDeviceName(device.name || "Printer Bluetooth");
      setIsConnected(true);
    } catch (err: unknown) {
      console.error("Gagal terhubung ke printer:", err);
      if (err instanceof Error) {
        if (err.name === 'NotFoundError') {
          setError("Koneksi dibatalkan oleh pengguna.");
        } else {
          setError(`Gagal terhubung, pastikan printer menyala dan dalam mode pairing. Detail: ${err.message}`);
        }
      } else {
        setError("Terjadi kesalahan yang tidak diketahui saat menyambungkan printer.");
      }
    } finally {
      setIsConnecting(false);
    }
  };

  const disconnectPrinter = () => {
    if (deviceRef.current && deviceRef.current.gatt && deviceRef.current.gatt.connected) {
      deviceRef.current.gatt.disconnect();
    }
    deviceRef.current = null;
    characteristicRef.current = null;
    setIsConnected(false);
    setDeviceName("");
  };

  const printReceipt = async (receiptDataBytes: Uint8Array) => {
    if (!isConnected || !characteristicRef.current) {
      setError("Printer belum terhubung.");
      return false;
    }

    try {
      const chunkSize = printerConfig.chunkSize;
      
      // Kirim data ke printer dalam potongan kecil karena MTU Bluetooth LE biasanya sangat terbatas (~20 bytes)
      for (let i = 0; i < receiptDataBytes.length; i += chunkSize) {
        const chunk = receiptDataBytes.slice(i, i + chunkSize);
        await characteristicRef.current.writeValue(chunk);
        
        // Delay kecil antar pengiriman chunk agar buffer printer tidak penuh
        await new Promise(resolve => setTimeout(resolve, 10));
      }
      return true;
    } catch (err: unknown) {
      console.error("Gagal mencetak struk:", err);
      if (err instanceof Error) {
        setError(`Gagal mencetak: ${err.message}`);
      } else {
        setError("Gagal mencetak: Kesalahan tidak diketahui.");
      }
      return false;
    }
  };

  // Simulasi cetak untuk keperluan development jika tidak ada hardware
  const simulatePrint = (receiptDataBytes: Uint8Array) => {
    console.log("=== SIMULASI CETAK STRUK ===");
    console.log("Total bytes:", receiptDataBytes.length);
    console.log("Raw bytes:", receiptDataBytes);
    console.log("============================");
    return true;
  };

  return {
    isConnected,
    isConnecting,
    deviceName,
    error,
    connectPrinter,
    disconnectPrinter,
    printReceipt,
    simulatePrint
  };
}
