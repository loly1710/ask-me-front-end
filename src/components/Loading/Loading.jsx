import styles from './Loading.module.css'
import LoadingIcon from '../../assets/images/loading.png'

const Loading = () => {
    return (
        <main className={styles.container}>
            <img src={LoadingIcon} />
        </main>
    )
}

export default Loading