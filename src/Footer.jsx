import styles from "./Footer.module.css"

const Footer = () => {

    const more = [
 
        {
            id: 2,
            title:"Address",
            links: [
                {id: 20, link: "57, Ramakrishna Road, Colombo 06, Sri Lanka."},
            ]
        },
        {
            id: 3,
            title:"contact",
            links: [
                {id: 30, link: "novawebapp368@gmail.com"},
            ]
        },
    ]

    return (
        <footer className={styles.footer}>
        
            <div className={styles.more}>
                <Lists />
            </div>
        </footer>
    )

    function Lists() {
        return (
            more.map((list) => {
                return (
                    <ul 
                        className={styles.more_list} 
                        key={list.id}
                    >
                        <li className={styles.title}>{list.title}</li>
                        {list.links.map((linkTxt) => {
                            return (
                                <li 
                                    key={linkTxt.id}
                                    className={styles.item}
                                >
                                    <span  className={styles.redirect}>{linkTxt.link}</span>
                                </li>
                            )
                        })}
                    </ul>
                )
            })
        );
    }
}

export default Footer