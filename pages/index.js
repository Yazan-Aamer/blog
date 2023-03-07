import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi there, my name is <b>Yazan Aamer</b> and I'm from Syria. I am
        proud to say that I graduated from Damascus University, where I ranked
        4th overall in my class. Ever since I can remember, I have always been
        drawn to technical subjects and anything related to IT. My passion for
        technology has only grown stronger over the years, and I am always
        excited to learn about the latest advancements in the field. Join me on
        my journey as I explore and share my insights on all things tech!</p>
      </section>

      <Link href="/posts/posts-page?id=0">Go to posts</Link>

    </Layout>
  );
}
