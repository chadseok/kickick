import type { PropsWithChildren } from 'react';

import Footer from './Footer';
import Header from './Header';

type Props = {
  withLayout?: boolean;
};

const Layout = ({ withLayout, children }: PropsWithChildren<Props>) => {
  if (!withLayout) return <main>{children}</main>;

  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
