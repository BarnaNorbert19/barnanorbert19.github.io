import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Telepítések',
    Svg: require('@site/static/img/server_install.svg').default,
    description: (
      <>
        Szerverek, routerek, switchek, stb. -hez telepítési segédletek
      </>
    ),
  },
  {
    title: 'Karbantartás',
    Svg: require('@site/static/img/server_managing.svg').default,
    description: (
      <>
        Szerverek, routerek, switchek, stb. -hez és kliens oldalhoz Karbantartási segédlet
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
