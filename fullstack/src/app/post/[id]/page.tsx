import Image from 'next/image';
import styles from './singlePost.module.css';
import { formatDate } from '@/lib/formatdate';

// FETCH DATA WITH AN API
const getPost = async (id: number) => {
	const res = await fetch(`http://localhost:3000/api/post/${id}`);

	if (!res.ok) {
		throw new Error('Something went wrong');
	}
	return res.json();
};

interface Params {
	id: number;
}

interface Posts {
	id: number;
	title: string;
	excerpt: string;
	content: string;
	date: string;
}

const singlePost = async ({ params }: { params: Params }) => {
	const { id } = await params;

	const post: Posts = await getPost(id);
	return (
		<div className={styles.container}>
			<div className={styles.imgContainer}>
				<Image
					src={`https://media.istockphoto.com/id/2164764645/photo/students-giving-exam-test-in-university.jpg?s=1024x1024&w=is&k=20&c=TqtlGrsm31v-29sO1ZhkuB8aji23exrq12M-GtKBoTA=`}
					alt=''
					fill
					className={styles.img}
				/>
			</div>
			<div className={styles.textContainer}>
				<h1 className={styles.title}>{post?.title ? post.title : ''}</h1>
				<div className={styles.detail}>
					<div className={styles.detailText}>
						<span className={styles.detailTitle}>Published</span>
						<span className={styles.detailValue}>
							{post?.date && formatDate(post?.date)}
						</span>
					</div>
				</div>
				<div className={styles.content}>{post?.content}</div>
			</div>
		</div>
	);
};

export default singlePost;
