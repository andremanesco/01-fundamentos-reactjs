import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/andremanesco.png',
      name: 'André Manesco',
      role: 'Developer'
    },
    content: [],
  },
]

import styles from './App.module.css'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
            author="Andre"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id corporis, illo dicta nisi quam minima dolore perspiciatis! Corporis, perferendis dolorum, quae ab neque cum culpa praesentium explicabo at officia quidem."
          />

          <Post
            author="joão"
            content="ashdaioshd"
          />
        </main>
      </div>
    </div>
  )
}
