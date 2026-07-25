import ReceiptPrinterEncoder from "@point-of-sale/receipt-printer-encoder";
import { Order } from "@/components/demo/StoreContext";
import { Booking, Service } from "@/components/demo/booking/BookingContext";
import { printerConfig } from "@/config/printerConfig";

export function generateOrderReceiptBytes(businessName: string, order: Order): Uint8Array {
  const encoder = new ReceiptPrinterEncoder({
    language: 'esc-pos',
    width: printerConfig.paperWidth,
  });

  const formatter = new Intl.NumberFormat("id-ID");

  encoder.initialize()
         .align('center')
         .bold(true)
         .text(businessName)
         .bold(false)
         .text("================================")
         .align('left')
         .text(`ID: #${order.id}`)
         .text(`Tgl: ${new Date(order.createdAt).toLocaleString('id-ID')}`)
         .text(`Nama: ${order.customerName}`)
         .text("================================");

  order.items.forEach(item => {
    encoder.text(`${item.name} x${item.quantity}`);
    if (item.selectedSize) {
      encoder.text(`  Ukuran: ${item.selectedSize}`);
    }
    const itemTotal = (item.price + (item.optionPrice || 0)) * item.quantity;
    encoder.align('right').text(`Rp ${formatter.format(itemTotal)}`).align('left');
  });

  encoder.text("================================")
         .align('right')
         .bold(true)
         .text(`Total: Rp ${formatter.format(order.totalAmount)}`)
         .bold(false)
         .align('center')
         .text("--------------------------------")
         .text("Terima Kasih")
         .newline()
         .newline()
         .newline();

  return encoder.encode();
}

export function generateBookingReceiptBytes(businessName: string, booking: Booking, services: Service[]): Uint8Array {
  const encoder = new ReceiptPrinterEncoder({
    language: 'esc-pos',
    width: printerConfig.paperWidth,
  });

  const formatter = new Intl.NumberFormat("id-ID");

  encoder.initialize()
         .align('center')
         .bold(true)
         .text(businessName)
         .bold(false)
         .text("================================")
         .align('left')
         .text(`ID: #${booking.id}`)
         .text(`Tgl Reservasi: ${booking.bookingDate} ${booking.bookingTime}`)
         .text(`Nama: ${booking.customerName}`)
         .text("================================");

  booking.serviceIds.forEach(serviceId => {
    const service = services.find(s => s.id === serviceId);
    if (service) {
      encoder.text(`${service.name}`);
      encoder.align('right').text(`Rp ${formatter.format(service.price)}`).align('left');
    }
  });

  encoder.text("================================")
         .align('right')
         .bold(true)
         .text(`Total: Rp ${formatter.format(booking.totalPrice)}`)
         .bold(false)
         .align('center')
         .text("--------------------------------")
         .text("Terima Kasih")
         .newline()
         .newline()
         .newline();

  return encoder.encode();
}
