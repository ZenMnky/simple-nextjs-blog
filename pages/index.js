import Head from 'next/head';
import Link from 'next/link';
import Date from '../components/date';
import { getSortedPostsData } from '../lib/posts';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';


export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello 👋,
          I'm Justin Hager. 
        </p>
        <p>
          This is a a place for me to spill out creative chaos and try to make sense of things.
        </p>
        <p>
          This will be messy.
        </p>
        <div>
          <blockquote>
            <em>
              So you stumble around like an idiot, when you try to do something new. [...] you have to be a fool before you can be a master, and if you’re not willing to be a fool, you can’t be a master.
            </em>
          </blockquote>
          <p>
            - Jordan B Peterson, <a href='https://www.jordanbpeterson.com/transcripts/biblical-series-xv/' target='_blank'>Biblical Series XV</a>
          </p>
          </div>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>        
            </li>
          ))}
        </ul>
      </section>

    </Layout>
  )
}