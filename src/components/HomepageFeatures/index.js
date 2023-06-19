import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '沉浸式命令行Aigc体验',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        对接当前最火的GPT模型<br />将AI能力赋能CMD命令行终端.
      </>
    ),
  },
  {
    title: '告别复杂命令琐碎记忆,告别搜索引擎',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        留在CMD终端完成最终所有命令操作<br />告别搜索引擎查阅相关命令.
      </>
    ),
  },
  {
    title: '为开发者&运维赋能',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        开发者&运维人员终端利器.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
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
