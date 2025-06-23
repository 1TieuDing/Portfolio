import { FaGithub } from "react-icons/fa6";
import { SiYoutubeshorts } from "react-icons/si";

const SocialMedia = (props) => {
    const { github } = props;

    return (
        <div className="my-4 d-flex items-center gap-3">
            <a href={github} target='_blank' className="highlight" title="1TieuDing">
                <FaGithub size={50} />
            </a>
        </div>
    )
}

export default SocialMedia;