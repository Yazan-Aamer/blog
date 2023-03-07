import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';
import Pagination from '../../components/pagination';



function PostsPage({ title, totalPostsCount, posts }) {
    const postsASListItems = posts.map(post => {
        return (<div key={`div_${post.id}`}>
            <Link href="#" key={`link__${post.id}`}>
                <li key={`post__${post.id}`}>{post.title}</li>
            </Link>
            <p key={`parag__${post.id}`}>{post.body}</p>
        </div>);
    });


    return (
        <Layout>

            <Head>
                <title>{title}</title>
            </Head>


            {/* <h1>{title}</h1> */}
            {/* <p>{shortSummary}</p> */}
            <section>
                <ul>
                    {postsASListItems}
                </ul>
            </section>
            <Pagination totalPostsCount={totalPostsCount} />
        </Layout>

    );
}
export async function getServerSideProps(context) {
    let { id } = context.query;
    id = parseInt(id);

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
    const tempPosts = await response.json()
    const totalPostsCount = tempPosts.length;
    const posts = tempPosts.filter(p => {
        return (p.id >= id) && (p.id < id + 10);
    })
    // console.log(filteredPosts);
    // .filter(post => post.id >= id && post.id < id + 10);

    return {
        props: {
            posts,
            totalPostsCount,
        }
    };
}


// export async function getStaticProps() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const posts = await response.json();
//     const totalPostsCount = posts.length;
//     posts.slice(0, 10);

//     return {
//         props: {
//             posts,
//             totalPostsCount,
//             title: 'Posts',
//         }
//     };
// }




export default PostsPage;