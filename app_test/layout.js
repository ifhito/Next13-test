import { Test } from "../components/test.server";
import { TestClient } from "../components/test.client";
export default function RootLayout({ children }) {
  return (
    <html>
      <head></head>
      <body>
        {children}
      </body>
      
    </html>
  )
}
