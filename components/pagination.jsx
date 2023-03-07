import React from 'react'
import Link from "next/link";
import styles from './pagination.module.css'
import { useRouter } from "next/router";

function Pagnation({ totalPostsCount }) {
    let router = useRouter()


    let pageIntoArray = Array.from(Array(totalPostsCount).keys())
    console.log(pageIntoArray);


    return (
        <nav aria-label=" my-6">
            <ul className={styles.flex}>
                {
                    pageIntoArray.map(page => {
                        return <span key={`page_${page}`}>
                            <Link href={page === 0 ? '/posts/posts-page' : `/posts/posts-page?id=${page}`} key={`link_${page.id}`}>
                                {page % 10 === 0 ?
                                    <span className={styles.paddingRight} key={`span_${page.id}`}>
                                        {page}
                                    </span>
                                    : ''}
                            </Link>
                        </span>
                    })
                }

            </ul>
        </nav>
    )
}

export default Pagnation