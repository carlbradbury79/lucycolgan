import type { Metadata } from "next";
import StyledComponentsRegistry from "./registry";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lucy Colgan Studio",
  description: "Lucy Colgan Studio - Coming Soon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
