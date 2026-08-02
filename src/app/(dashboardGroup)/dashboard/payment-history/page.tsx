import { getPaymentHistory } from "../../_actions/paymentActions";
import PaymentHistory from "../../_components/PaymentPage/PaymentHistory";

const MyPaymentHistory = async () => {
  const paymentHistoryRes = await getPaymentHistory();
  return (
    <div className="px-4 lg:px-12">
      <div className="mb-8">
        <h2 className="font-lora text-2xl font-bold text-foreground">
          My Payment History
        </h2>

        <p className="mt-1 font-inter text-sm text-foreground/60">
          Review all Payment history that you made.
        </p>
      </div>

      <PaymentHistory paymentHistoryRes={paymentHistoryRes} />
    </div>
  );
};

export default MyPaymentHistory;
