import styles from "./Advantages.module.sass";
import cn from "classnames";
import Image from "../../Image";

type AdvantagesProps = {};

const Advantages = ({ }: AdvantagesProps) => (
    <div className={styles.section}>
        <div className={cn("container-md container-window", styles.container)}>
            <div className={styles.wrap}>
                <h2 className={cn("h2", styles.title)}>
                    See Athena in Action
                </h2>
                <div>

                </div>
                Experience the magic of Athena AI firsthand. Watch how Athena AI transforms the classroom, turning learning into a dynamic, interactive, and highly personalized process.
            </div>
            <div className={styles.preview}>
                <video
                    className="jet-video-player jet-video-html5-player jet-video-custom-play-button"
                    src="https://stateless.sellful.com/2023/07/ce1a0e4a-cleanshot-2023-07-17-at-22.55.01.mp4"
                    autoPlay
                    loop
                    controls
                    width={675}
                    height={523}
                    controlsList="nodownload"
                ></video>
            </div>
        </div>
    </div>
);

export default Advantages;
