import axios from 'axios';
import s from './CardOverlay.module.css';
import { IPosts } from './../../modelsPosts';
import { useEffect, useState, useMemo } from 'react';

interface simpleUserProps {
    cardUserId: any
}

function fetchPosts() {
    return axios.get<IPosts[]>('https://jsonplaceholder.typicode.com/posts').then((response) => response.data);
};

const CardOverlay = ({ cardUserId }: simpleUserProps) => {
    const [posts, setPosts] = useState<IPosts[]>([])

    useEffect(() => {
        fetchPosts().then((allPosts) => setPosts(allPosts))
    }, [])

    const sortedPosts = useMemo(() => {
        return posts.filter((post) => {
            if (post.userId === cardUserId) {
                return post
            }
        })
    }, [posts, cardUserId])

    const simpleUserCard = sortedPosts.map((post) => {
        return (
            <div className={s.user_posts__item} key={post.id}>
                <p className={s.post_title}>{post.title}</p>
                <p className={s.post_text}>{post.body}</p>
            </div>
        )
    })

    if (!cardUserId) {
        return null
    }

    return (
        <div className={s.card_overlay}>
            {simpleUserCard}
        </div>
    )
}

export default CardOverlay;