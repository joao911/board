import Header from "./Header";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="max-w-405 flex flex-col w-full mx-auto p-10 gap-8 h-dvh">
      <Header />
      {children}
    </div>
  );
}
