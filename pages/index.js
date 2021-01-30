import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello 👋,
          I'm <em>Justin Hager</em>. 
          This is my simple blog where I share my acroyoga practice and my stories, my learnings, and those things that I wish I would have known sooner.
        </p>
      </section>
    </Layout>
  )
}