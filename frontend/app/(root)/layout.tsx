type LayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <main className="px-3">{children}</main>
    </>
  );
}
