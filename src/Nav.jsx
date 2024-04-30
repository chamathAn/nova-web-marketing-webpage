import styles from "./Nav.module.css"
import { Link } from "react-scroll"

const Nav = () => {
    
    const options = [
        {
            id: 0,
            text: "How we work"
        },
        {
            id: 1,
            text: "Blog"
        },
        {
            id: 2,
            text: "Account"
        }
    ]

    const listOptions = options.map((option) => {
        return <li key={option.id}> <a href="#" className={styles.option}>{option.text}</a> </li>
    })

  return (
    <nav className={styles.nav}>
        <ul className={styles.list}>
        <li > <Link to="id" className={styles.option}>Home</Link> </li>
            <li > <Link to="features" className={styles.option}>Features</Link> </li>
            <li > <Link to="work" className={styles.option}>How it works</Link> </li>
        </ul>
        <a href="https://nova-web-app.vercel.app">
        <button className={styles.view_plans_btn_bar}>Go to</button>
        </a>
    </nav>
  )
}

export default Nav