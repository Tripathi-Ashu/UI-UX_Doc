import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';
import team from './team.module.css';

const stats = [
  {value: '2', label: 'Months of training'},
  {value: '9', label: 'Weeks of learning'},
  {value: '11', label: 'App screens designed'},
  {value: '1', label: 'Complete design system'},
];

const sections = [
  {
    icon: '📚',
    title: 'Learning',
    text: 'Week-by-week topics, tools used and key takeaways from UI/UX fundamentals to prototyping.',
    to: '/docs/learning/week-1-2-fundamentals',
  },
  {
    icon: '🎨',
    title: 'Design System',
    text: 'The color palette, typography and reusable components behind the app.',
    to: '/docs/design-system/color-palette',
  },
  {
    icon: '📱',
    title: 'Project',
    text: 'A fashion e-commerce app: problem statement, user flow, wireframes and final UI.',
    to: '/docs/project/overview',
  },
  {
    icon: '🏅',
    title: 'Evidence',
    text: 'Activity log, certificates, LinkedIn posts, challenges and reflections from the training.',
    to: '/docs/evidence/daily-log',
  },
];

const screens = [
  {name: 'Home', img: '/img/final-ui/06-home.png'},
  {name: 'Product Detail', img: '/img/final-ui/10-product-detail.png'},
  {name: 'Bag', img: '/img/final-ui/09-bag.png'},
  {name: 'Checkout', img: '/img/final-ui/11-checkout.png'},
];

const skills = [
  'Figma',
  'Auto Layout',
  'Components & Variants',
  'Design Systems',
  'Wireframing',
  'Prototyping',
  'User Flows',
  'Mobile UI Design',
];

const mentors = [
  {
    initials: 'DS',
    role: 'Trainer',
    name: 'Deepika Sharma',
    title: 'Senior UI/UX Designer',
    dept: 'Technology',
  },
  {
    initials: 'VG',
    role: 'Project Manager',
    name: 'Virendra Gupta',
    title: 'Sr. Project Manager',
    dept: 'Technology',
  },
];

function Screen({name, img}) {
  const src = useBaseUrl(img);
  return (
    <figure className={styles.screen}>
      <div className={styles.phone}>
        <img src={src} alt={`${name} screen`} loading="lazy" />
      </div>
      <figcaption>{name}</figcaption>
    </figure>
  );
}

export default function Home() {
  return (
    <Layout
      title="Training Phase 2 – UI/UX Design with Figma"
      description="Documentation of Phase 2 UI/UX training at Nirvana Lab, Lucknow, including learning evidence and a fashion e-commerce app project.">
      <header className={styles.hero}>
        <div className={styles.container}>
          <span className={styles.badge}>Phase 2 · Nirvana Lab, Lucknow</span>
          <h1 className={styles.title}>
            UI/UX Design <span>with Figma</span>
          </h1>
          <p className={styles.subtitle}>
            A complete record of my two-month training: what I learned, the evidence of that
            learning, and a fashion e-commerce mobile app designed from research to prototype.
          </p>
          <div className={styles.meta}>
            <span>👤 Ashutosh Tripathi</span>
            <span>📅 16 Sep 2026 – 16 Nov 2026</span>
            <span>🛠️ Figma</span>
          </div>
          <div className={styles.actions}>
            <Link className={styles.primaryBtn} to="/docs/intro">
              Explore Documentation
            </Link>
            <Link className={styles.secondaryBtn} to="https://www.figma.com/design/GF4jfDlW3p7lztv7w1uAwm/figma-learning?node-id=0-1&t=FvQpJZToJu4PSSmN-1">
              View Project
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className={styles.statsBar}>
          <div className={styles.container}>
            <div className={styles.statsGrid}>
              {stats.map((s) => (
                <div key={s.label} className={styles.stat}>
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>What is inside</h2>
            <p className={styles.sectionText}>
              The documentation is organized into four sections, from learning to final work.
            </p>
            <div className={styles.cards}>
              {sections.map((s) => (
                <Link key={s.title} className={styles.card} to={s.to}>
                  <span className={styles.cardIcon}>{s.icon}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <span className={styles.cardLink}>Open section →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

       

        <section className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Training team</h2>
            <p className={styles.sectionText}>
              This training was completed under the guidance of experienced professionals.
            </p>
            <div className={team.teamGrid}>
              {mentors.map((m) => (
                <div key={m.name} className={team.member}>
                  <div className={team.avatar}>{m.initials}</div>
                  <div>
                    <span className={team.role}>{m.role}</span>
                    <h3>{m.name}</h3>
                    <p>
                      {m.title} · {m.dept}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className={`${styles.section} ${styles.alt}`}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Skills gained</h2>
            <div className={styles.tags}>
              {skills.map((s) => (
                <span key={s} className={styles.tag}>
                  {s}
                </span>
              ))}
            </div>
            <div className={team.links}>
              {/* TODO: replace with your real GitHub and LinkedIn links */}
              <a className={team.linkBtn} href="https://github.com/Tripathi-Ashu" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a className={team.linkBtn} href="https://www.linkedin.com/in/ashutosh-web-developer/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <Link className={team.linkBtn} to="https://lnkd.in/p/gGDMCVKb">
                Learning Posts
              </Link>
            </div>
          </div>
        </section>

        
      </main>
    </Layout>
  );
}
