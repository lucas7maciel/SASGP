import styles from "./index.module.css"

interface Skeleton {
    extraClasses?: string;
    width: string;
    height: string;
}

export function Skeleton(props: Skeleton) {
    return (
        <div className={`bg-gray-200 rounded-2xl shadow ${styles.skeleton_anim} ${props.extraClasses}`} style={{
            width: props.width,
            height: props.height
        }}>

        </div>
    )
}
