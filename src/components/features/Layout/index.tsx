import type { PropsWithChildren } from 'react';

import Footer from './Footer';
import Header from './Header';

type Props = {
  noLayout: boolean;
};

const Layout = ({ noLayout, children }: PropsWithChildren<Props>) => {
  if (noLayout) return <main>{children}</main>;

  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
