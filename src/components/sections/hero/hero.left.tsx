import Typewriter from "typewriter-effect";
import SocialMedia from "components/sections/social.media";
import { useTranslation } from "react-i18next";
import './hero.scss';
import ResizeButton from "components/sections/resize.button";
import { APP_DATA } from 'helpers/data';
import { MdWorkHistory } from "react-icons/md";

interface IProps {
    scrollToExperienceSection: () => void;
}

const HeroLeft = (props: IProps) => {

    const { t, i18n } = useTranslation();

    return (
        <div className='hero-left'>
            {i18n.resolvedLanguage === "en" ? <>
                <h3>
                    Hi There!{" "}
                    <span className="wave" role="img" aria-labelledby="wave">
                        👋🏻
                    </span>
                </h3>
                <h3 style={{ paddingTop: 10, paddingBottom: 5 }}>
                    I'M &nbsp;
                    <strong className="brand-red">{t("appHeader.brand")}</strong>
                </h3>
            </>
                :
                <>
                    <h3>
                        Một ngày tốt lành!{" "}
                        <span className="wave" role="img" aria-labelledby="wave">
                            👋🏻
                        </span>
                    </h3>
                    <h3 style={{ paddingTop: 10, paddingBottom: 5 }}>
                        Tôi là &nbsp;
                        <strong className="brand-red">{t("appHeader.brand")}</strong>
                    </h3>
                </>
            }

            <Typewriter
                options={{
                    strings: [
                        "Freelancer",
                        "MERN Stack Developer",
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                    wrapperClassName: "brand-green"
                }}
            />
            <div
                className="mt-md-6 mt-3 mb-md-5 mb-2"
            >
                <SocialMedia
                    github={APP_DATA.GITHUB_URL}

                />
            </div>
            <div className="d-md-flex d-none gap-4">
                <ResizeButton
                    onClick={props.scrollToExperienceSection}
                    btnText={t("heroSection.exp")}

                    btnIcons={<MdWorkHistory style={{ color: "ghostwhite" }} />}
                    btnStyle={{
                        background: "unset",
                        border: "1px solid var(--border-hero-right)",
                        color: "var(--text-white-1)"
                    }}
                />
            </div>

        </div>
    )
}

export default HeroLeft;