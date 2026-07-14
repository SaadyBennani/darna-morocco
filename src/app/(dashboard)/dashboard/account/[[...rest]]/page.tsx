import { UserProfile } from "@clerk/nextjs";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export default function AccountPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 lg:px-8 flex justify-center">
        <UserProfile routing="path" path="/dashboard/account" />
      </main>
      <Footer />
    </div>
  );
}
