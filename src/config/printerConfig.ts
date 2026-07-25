export const printerConfig = {
  // UUID ini bisa berbeda tergantung merek printer fisik yang digunakan.
  // Cek datasheet/dokumentasi printer yang dibeli klien dan sesuaikan di sini.
  // Umumnya printer thermal Bluetooth BLE menggunakan UUID generic ini:
  serviceUUID: "000018f0-0000-1000-8000-00805f9b34fb",
  
  // Characteristic untuk operasi write (biasanya mendukung properti write / writeWithoutResponse)
  characteristicUUID: "00002af1-0000-1000-8000-00805f9b34fb",
  
  // Lebar kertas printer dalam mm. Umumnya printer portabel UMKM adalah 58mm.
  paperWidth: 58 as 58 | 80,
  
  // MTU (Maximum Transmission Unit) BLE biasanya sekitar 20 bytes
  // Data akan dipecah menjadi chunk berukuran ini saat dikirim
  chunkSize: 20
};
