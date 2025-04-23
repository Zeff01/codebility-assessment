import styles from './page.module.css';
import PostCard from '@/components/postCard';

interface Posts {
	id: number;
	title: string;
	excerpt: string;
	content: string;
	date: string;
}
// FETCH DATA WITH AN API
const getPosts = async () => {
	const res = await fetch('http://localhost:3000/api/post');

	if (!res.ok) {
		throw new Error('Something went wrong');
	}

	return res.json();
};

export default async function Home() {
	const posts: Posts[] = await getPosts();
	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<div className={styles.container}>
					{posts && posts.length > 0
						? posts.map((post, index) => (
								<div className={styles.post} key={index}>
									<PostCard post={post} />
								</div>
						  ))
						: 'No Post'}
				</div>
			</main>
		</div>
	);
}
