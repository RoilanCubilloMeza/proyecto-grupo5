
interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata = {
  title: "Proyecto - Grupo 5",
};

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html>
      <body>
          <div className="bg-gray-900 text-white h-[calc(100vh-4rem)] ">
            <main className="h-5/6 px-28 py-10">{children}</main>
          </div>
      </body>
    </html>
  );
}
