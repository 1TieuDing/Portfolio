import { Col, Row } from "react-bootstrap";
import AnimationLottie from "components/share/animation-lottie";
import codingJSON from 'assets/lottie/coding.json';
import { DEVELOPMENT_LOTTIE } from "assets/lottie/string/development";
import { CONTACT_LOTTIE } from "assets/lottie/string/contact";

import GlowCard from "components/share/glow-card";
import { FaGraduationCap } from "react-icons/fa6";
import Divider from "components/sections/divider";
import { APP_DATA } from "helpers/data";
import SocialMedia from "components/sections/social.media";

const About = () => {
    return (
        <>
            <Row>
                <Col md={6} xs={12}>
                    <h3 className="text-center mb-md-5 mb-2"><span className="brand-red">XIN CHÀO!!!</span> </h3>
                    <div>
                        <div>
                            <p> Tôi là Tuấn Anh.</p>

                            <p> Tôi đã hoàn thành bằng kỹ sư hệ thống thông tin tại Đại học Công Nghệ Giao Thông Vận Tải (UTT).</p>
                        </div>
                    </div>
                    <div>
                        <p>Sở thích:

                        </p>
                        <ul>
                            <li>Cờ vua</li>
                            <li>Bóng đá</li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-center brand-red">"Pursuing Your Dreams Is How You Become Homeless ~.~"</p>
                        <p className="text-center brand-red">--Jimmy O Yang</p>
                    </div>
                </Col >
                <Col md={6} xs={12} className="d-flex align-items-center justify-content-center">
                    <AnimationLottie
                        width="80%"
                        animationPath={codingJSON} />
                </Col>
            </Row>

            <Row>
                <Col md={6} xs={12}
                    className="d-none d-md-flex align-items-center justify-content-center mt-md-5 mt-3"
                >
                    <AnimationLottie
                        width="50%"
                        //animation with rp => convert sang text
                        // https://github.com/airbnb/lottie-web/issues/2070
                        animationPath={JSON.parse(DEVELOPMENT_LOTTIE)}
                    />
                </Col>
                <Col md={6} xs={12} className="mt-md-5 mt-3">
                    <div className="d-flex flex-column align-items-center gap-3">
                        <div><h4 className="text-center brand-red">Học vấn</h4></div>
                        <div >
                            <GlowCard identifier={`experience-5`}>
                                <div className="p-3 relative">
                                    <div className="experience-container">
                                        <div className="duration-text">
                                            <p>2021-2025</p>
                                        </div>
                                        <div className="details">
                                            <div className="icon">
                                                <FaGraduationCap size={36} />
                                            </div>
                                            <div className="info">
                                                <p className="title">Hệ thống thông tin</p>
                                                <p className="company">Đại học Công Nghệ Giao Thông Vận Tải (UTT)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </GlowCard>
                        </div>
                    </div>
                </Col>
            </Row>

            <Divider />
            <Row>
                <Col md={6} xs={12} className=" mt-md-5 mt-3">
                    <h3 className="mb-md-5 mb-2">Hãy xem qua </h3>
                    <SocialMedia
                        github={APP_DATA.GITHUB_URL}
                    />
                </Col >
                <Col md={6} xs={12} className="d-flex flex-column align-items-center justify-content-center">
                    <AnimationLottie
                        width="50%"
                        //animation with rp => convert sang text
                        // https://github.com/airbnb/lottie-web/issues/2070
                        animationPath={JSON.parse(CONTACT_LOTTIE)}
                    />
                    <h6 className="text-center">Kết nối : vtuananhh@gmail.com</h6>
                </Col>
            </Row>
            <div className="mb-5"></div>
        </>
    )
}

export default About;