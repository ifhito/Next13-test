import { Test } from "../components/test.server";

export default function RootLayout({ children }) {
  return (
    <html>
      <head></head>
      <body>{children}<Test /></body>
      
    </html>
  )
}
