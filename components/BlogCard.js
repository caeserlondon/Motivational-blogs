import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/BlogCard.module.css';

const BlogCard = ({ key, title, datePublished, slug, coverPhoto, author }) => {
	return (
		<div className={styles.card}>
			<Link href={'/posts/' + slug}>
				<div className={styles.imgContainer}>
					{/* <Image
						src={coverPhoto.url}
						alt={title}
						width={376}
						height={190}
						layout="fixed"
					/> */}
					<img src={coverPhoto.url} alt={title} />
				</div>
			</Link>
			<div className={styles.text}>
				<h2>{title}</h2>
				<div className={styles.details}>
					<div className={styles.author}>
						<img src={author.avatar.url} alt={author.name} />
						<h3>{author.name}</h3>
					</div>
					<div className={styles.date}>
						<h4>{datePublished}</h4>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BlogCard;
