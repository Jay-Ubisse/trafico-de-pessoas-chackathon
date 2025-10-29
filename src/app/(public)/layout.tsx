
import Footer from "@/components/Footer";
import Header from "@/components/Header";


export default function PublicLayput({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
