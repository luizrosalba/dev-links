import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        {/* <img src='https://previews.dropbox.com/p/thumb/ABxgAIr0Zgj-OPrni19kmcG2TvhBmzfP7otVH79QB3S9vMyDigSNtLhj7UJz_vO-jYdO37FXdu7dTIyNKSS3C7OoBZBiLeBKoJz-0GnzPZkNqtUI9pVwVV9hmIMWRLQ7uwWnc_lqd1JxZMHuA3dWIIfogsXqDRVxhzp_MTN_UXni_VWxm8Se67vBYWAS7cOoTL63cN2AIwUMvzXfg3ELNlgQKo34dFZ7_9Q_MG4uJEtCE5D3JyM6S6iG9OsyAEGpAzbmSLf5TgQS9RNXZZANaZM_IVnFnOPbL2FUi5VRypC27wLIFvXWrBtclkTUQnTthJtjF7xDIIE696ULDz8RyeoLijMhEXII0DWYhY-aWa9zIK50Ct7srVuBVKE_sHm8vko/p.png'></img> */}
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}  
      description="A website for good dev links">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
