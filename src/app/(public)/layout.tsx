import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function PublicLayput({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="pb-5 pt-32">{children}</main>
      <Footer />
    </>
  );
}
