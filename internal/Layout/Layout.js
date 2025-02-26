import React, { useEffect, useState } from 'react';
import { MDXProvider } from '@mdx-js/react';
import Navigation from '../Navigation/Navigation';
import styles from './Layout.module.css';
import MobileNavigation from '../MobileNavigation/MobileNavigation';

const Layout = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Evita errores de hidratación mostrando nada en SSR
  }

  return (
    <div className={styles.layout}>
      <MobileNavigation />
      <Navigation />
      <div className={styles.content}>
        <MDXProvider>{children}</MDXProvider>
      </div>
    </div>
  );
};

export default Layout;
