import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { GraphQLClient, gql } from 'graphql-request';
import Navbar from '../components/Navbar';
import BlogCard from '../components/BlogCard';

const graphcms = new GraphQLClient(process.env.CONTENT_API);

const QUERY = gql`
	{
		posts {
			id
			title
			datePublished
			slug
			content {
				html
			}
			coverPhoto {
				url
			}
			author {
				name
				avatar {
					url
				}
			}
		}
	}
`;

export async function getStaticProps() {
	const { posts } = await graphcms.request(QUERY);
	return {
		props: {
			posts,
		},
		revalidate: 10,
	};
}

export default function Home({ posts }) {
	return (
		<div className={styles.container}>
			<Head>
				<title>Motivational Blogs</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				{/* <Navbar /> */}
				{posts.map((post) => (
					<BlogCard
						key={post.id}
						title={post.title}
						datePublished={post.datePublished}
						slug={post.slug}
						coverPhoto={post.coverPhoto}
						author={post.author}
					/>
				))}
			</main>
		</div>
	);
}
