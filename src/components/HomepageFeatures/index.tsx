import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
  link?:string
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Link Tool',
    Svg: require('@site/static/img/links.svg').default,
    description: (
      <>
        A context driven solution for finding good links on web development
      </>
    ),
    link: '/docs/intro'
  },
  {
    title: 'Blog',
    Svg: require('@site/static/img/blog.svg').default,
    description: (
      <>
        Content for developers. Find some good posts, tutorials and more ! 
      </>
    ),
    link: '/blog'
  }
];

function Feature({title, Svg, description, link}: FeatureItem) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <Link href={link}>
          <Svg className={styles.featureSvg} role="img" />
        </Link>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
      <strong>Hello Devs !</strong>
      <br></br>
     Dev Links 7 is built using <Link href='https://docusaurus.io/' >Docusaurus </Link>
     and consists in a blog and searchable link tool. Please select where to go: 
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
