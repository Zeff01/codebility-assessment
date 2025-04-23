import Link from 'next/link';
import styles from './postCard.module.css';
import { formatDate } from '@/lib/formatdate';
import Image from 'next/image';

interface propPost {
	post: {
		id: number;
		title: string;
		excerpt: string;
		content: string;
		date: string;
	};
}

const postCard = ({ post }: propPost) => {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.top}>
					<div className={styles.imgContainer}>
						<Image
							src={`https://media.istockphoto.com/id/2164764645/photo/students-giving-exam-test-in-university.jpg?s=1024x1024&w=is&k=20&c=TqtlGrsm31v-29sO1ZhkuB8aji23exrq12M-GtKBoTA=`}
							alt=''
							fill
							className={styles.img}
						/>
					</div>
					<span className={styles.date}>
						{post?.date && formatDate(post?.date)}
					</span>
				</div>
				<div className={styles.bottom}>
					<h1 className={styles.title}>{post.title}</h1>
					<p className={styles.desc}>{post.content}</p>
					<Link className={styles.link} href={`/post/${post.id}`}>
						READ MORE
					</Link>
				</div>
			</div>
		</>
	);
};

export default postCard;
