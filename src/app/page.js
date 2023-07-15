import styles from './page.module.css';
import Image from 'next/Image';
import Hero from 'public/hero.png';

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.text}>
        <h1 className={styles.head}>Better design for your digital products.</h1>
        <p className={styles.paragraph}>Turning your idea into Reality. We bring together the teams
        from the global tech industry.</p>
        <button className={styles.btn}>See Our Works</button>
      </div>
      <Image src={Hero} alt="home" className={styles.imgContainer} />
    </div>
  );
};
