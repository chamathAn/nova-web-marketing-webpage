import styles from "./Features.module.css"

const Features = () => {

    // eslint-disable-next-line react/prop-types
    function IconTitleText({ icon, title, text }) {
        return (
            <div className={styles.feature}>
                <img 
                    src={icon} 
                    alt=""
                    aria-hidden="true" 
                    className={styles.icon}
                />
                <p className={styles.subtitle}>{title}</p>
                <p className={styles.description}>{text}</p>
            </div>
        );
    }

    return (
        <section className={styles.features}>
            <h2 className={styles.title}>Features</h2>
            <div className={styles.wrapper}>
                <IconTitleText 
                    icon={"images/icon-snappy-process.svg"}
                    title={"Sturectured Note"}
                    text={
                        "The note where all content of the video order into very structed format."
                    }
                />
                <IconTitleText 
                    icon={"images/icon-affordable-prices.svg"}
                    title={"Cue Questions"}
                    text={
                        "Application will geneate question to cue the content of the video and to measure your understanding."
                    }
                />
                <IconTitleText 
                    icon={"images/icon-people-first.svg"}
                    title={"Summary"}
                    text={
                        "In this section, you will get a concise summary of the content of the video. This section will depict the overall content of the video."
                    }
                />
            </div>
        </section>
    )
}

export default Features