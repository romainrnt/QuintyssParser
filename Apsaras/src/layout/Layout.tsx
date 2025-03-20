import { FC } from 'react';

import Footer from '../components/Footer/Footer';

const Layout =
  (children: JSX.Element): FC =>
  () => (
    <div className="relative flex flex-col min-h-screen overflow-hidden font-avenir">
      {children}
      <Footer />
    </div>
  );

export default Layout;
