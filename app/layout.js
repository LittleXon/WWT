import "./globals.css";

export const metadata = {
  title: "$WWT Official | Solana",
  description: "WWT is forever on Solana",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}
