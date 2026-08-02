import PaymentInitiate from "@/app/(dashboardGroup)/_components/PaymentPage/PaymentInitiate";
import { getSingleRentalRequest } from "@/app/(publicGroup)/_actions/rentalRequestActions";
import { notFound } from "next/navigation";

interface IPageProps {
  params: Promise<{ id: string }>;
}

const CompletePaymentPage =  async ({ params }: IPageProps) => {
      const { id } = await params;

      const rentalReqRes=await getSingleRentalRequest(id as string)

      console.log(rentalReqRes,'this is the rental req res')

        const rentalRequest = rentalReqRes?.data;

  if (!rentalRequest) return notFound();

    return (
          <div className="mx-auto max-w-lg px-4 py-10">
      <PaymentInitiate rentalRequest={rentalRequest} />
    </div>
    );
};

export default CompletePaymentPage;