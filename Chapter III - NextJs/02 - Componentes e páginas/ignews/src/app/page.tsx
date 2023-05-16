import { Header } from '@/components/Header'
import styles from './page.module.scss'
import { SubscribeButton } from '@/components/SubscribeButton'

export default function Page() {
  return (
    <div>
      <Header />

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>
            👏 Hey, wellcome
          </span>

          <h1>News about the <span>React</span> world.</h1>

          <p>
            Get access to all the publications <br />
            <span>for $9.90 month</span>
          </p>

          <SubscribeButton />
        </section>

        <img src="images/avatar.svg" alt="Girl Coding" />
      </main>
    </div>
  )
}
