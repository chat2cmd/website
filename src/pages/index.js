import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Introduce from '@site/src/components/Introduce';
import SubscribeForm from '../components/SubscribeForm';

import QuickStart from '../components/QuickStart';


import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>

      <div className="container">
        <Introduce />
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <QuickStart />
      <main>
        <HomepageFeatures />
        <SubscribeForm />
      </main>
    </Layout>
  );
}
