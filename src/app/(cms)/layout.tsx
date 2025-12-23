import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html suppressHydrationWarning>
         <body id="outstatic">
            {children}
         </body>
    </html>
     );
 }