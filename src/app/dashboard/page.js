"use client"
import React, {useState, useEffect} from 'react';
import styles from './page.module.css';
import useSWR from 'swr';
import {useSession} from 'next-auth/react';
import {useRouter} from 'next/navigation';
import Image from 'next/Image';

const Dashboard = () => {
	/*const [data, setData] = useState([]);
	const [err, setErr] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const getData = async () => {
			setIsLoading(true);
			const res = await fetch('https://jsonplaceholder.typicode.com/posts');

			if (!res.ok) {
				setErr(true);
			}
			
			const d = await res.json();
			setData(d);
			setIsLoading(false);
		};
		getData();
	}, []);*/
	const session = useSession();
	console.log(session);
	const router = useRouter();
	const fetcher = (...args) => fetch(...args).then(res => res.json());
	const {data, mutate, error, isLoading} = useSWR(
		`/api/posts?username=${session?.data?.user.name}`,
		fetcher
	);

	console.log("Data: ", data);
	console.log("Mutate: ", mutate);

	if(session.status === "loading"){
		return (<p>Loading.</p>);
	} else if(session.status === "unauthenticated"){
		router?.push("/dashboard/login");
	} else{
		const handleSubmit = async (e) => {
			e.preventDefault();
			console.log("Submit");
			const title = e.target[0].value;
			const desc = e.target[1].value;
			const img = e.target[2].value;
			const content = e.target[3].value;

			try{
				await fetch(
					"/api/posts",
					{
						method: "POST",
						body: JSON.stringify({
							title,
							desc,
							img,
							content,
							username: session.data.user.name
						})
					}
				);
				mutate();
				e.target.reset();
			} catch(error){
				console.log(error);
			}
		};

		const handleDelete = async (id) => {
			try{
				await fetch(`/api/posts/${id}`, {
					method: 'DELETE',
				});
				mutate();
			} catch(err){
				console.log(err);
			}
		};

		return (
			<div className={styles.main}>
				<div className={styles.posts}>
					{data?.map((post) => (
						<div className={styles.post} key={post._id}>
							<div className={styles.imgContainer}>
								<Image className={styles.img} width='200' height='100' src={post.img} alt='post' />
							</div>
							<h2>{post.title}</h2>
							<span onClick={() => handleDelete(post._id)} className={styles.delete}>X</span>
						</div>
					))}
				</div>
				<form className={styles.new} onSubmit={e => handleSubmit(e)}>
					<h1 className={styles.header}>Add New Post</h1>
					<input autoComplete='off' type="text" className={styles.input} placeholder='Title' />
					<input autoComplete='off' type="text" className={styles.input} placeholder='Desc' />
					<input autoComplete='off' type="text" className={styles.input} placeholder='Image Url' />
					<textarea className={styles.input} autoComplete='off' placeholder="Content" cols="30" rows="10"></textarea>
					<button className={styles.btn}>Send</button>
				</form>
			</div>
		);
	}
};

export default Dashboard;
