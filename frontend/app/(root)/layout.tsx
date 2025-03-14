import Navbar from "@/components/Navbar";
import AnimatedBackground from "@/components/AnimatedBackground";

type LayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <main className="px-3">
        <AnimatedBackground />
        {children}
      </main>
    </>
  );
}
