import { PaymentStatus } from "~/types/status";

export const paymentStatusIsNotNull = (
  paymentStatus: PaymentStatus | null
): paymentStatus is PaymentStatus => {
  return (
    !!paymentStatus && "id" in paymentStatus && "order_number" in paymentStatus
  );
};
