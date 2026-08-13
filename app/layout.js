import "./globals.css";

export const metadata = {
  title: "MayurBlog",
  description: "Insights, tutorials, and stories from Mayur's tech journey",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
