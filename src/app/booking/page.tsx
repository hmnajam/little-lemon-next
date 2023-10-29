import Image from "next/image";
import Header from "@/components/Header";
import ReservationForm from "@/components/BookingForm";
import Footer from "@/components/Footer";

export default function BookingPage() {
  return (
    <>
      <Header />

      <ReservationForm />

      <Footer />
    </>
  );
}
