import {ReactNode} from 'react';

type Props = {
  children: ReactNode;
};
 
export default function RootLayout({ children }: { children: ReactNode }) {
    return (
      <html className="h-full">
        <body>
          {children}
        </body>
      </html>
    );
  }