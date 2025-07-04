import { Col, Row } from "react-bootstrap"
import ProjectCard from "./project.card";
import { PROJECTS } from "helpers/data";
import { useTranslation } from 'react-i18next';

const Project = () => {
    const { i18n } = useTranslation();

    return (
        <>
            <Row>
                <Col xs={12}>
                    <h3 className="text-center">
                        {i18n.resolvedLanguage === "en" ? <>
                            My work recent
                        </>
                            :
                            <>
                                Dự án gần đây
                            </>
                        }
                    </h3>
                    <h6 className="text-center mb-md-5 mb-2">
                        {i18n.resolvedLanguage === "en" ? <>
                            These projects I learned and did myself.
                        </>
                            :
                            <>
                                Những dự án này tôi <span className="brand-red">đã học và tự làm.</span>
                            </>
                        }
                    </h6>
                </Col>
            </Row>
            <Row
                style={{ justifyContent: "center", paddingBottom: "10px" }}
            >
                {PROJECTS?.map(item => {
                    return (
                        <Col md={4} className="project-card" key={item.id}>
                            <ProjectCard
                                imgPath={item.imgPath}
                                title={item.title}
                                description={item.description}
                                githubLink={item.githubLink}
                                demoLink={item.demoLink}
                            />
                        </Col>
                    )
                })}

            </Row>
            <div className="mb-7"></div>
        </>
    )
}

export default Project;