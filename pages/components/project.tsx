import type { NextPage } from "next";
import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";
import { GoLinkExternal } from "react-icons/go";

interface Props {
    direction: "left" | "right";
    image: string;
    imageAlt: string;
    type: "Collaborative" | "Personal";
    title: string;
    description: string;
    technologies: string[];
    github?: string;
    link?: string;
}

const Project: NextPage<Props> = (props) => {
    return (
        <>
            {props.direction == "left" ? (
                <motion.li
                    initial={{ opacity: 0, x: "-25vh" }}
                    whileInView={{ opacity: 1, x: "0px" }}
                    transition={{ duration: 1.5 }}
                    viewport={{ once: true }}
                >
                    <article className="flex items-center">
                        <img
                            src={props.image}
                            alt={props.imageAlt}
                            className="w-7/12"
                        />
                        <div className="w-5/12 flex flex-col gap-2">
                            <h5 className="text-mainRed text-base text-right">
                                {props.type}
                            </h5>
                            <h2 className="text-mainWhite text-2xl text-right mb-3">
                                {props.title}
                            </h2>
                            <div className="w-[calc(100%+4rem)] z-10 -ml-16 bg-mainBlue rounded p-4 shadow-lg">
                                <p className="text-mainWhite text-right text-sm">
                                    {props.description}
                                </p>
                            </div>
                            <div className="flex gap-2 text-mainWhite self-end items-center flex-wrap text-right">
                                {props.technologies.map(function (
                                    technology,
                                    i
                                ) {
                                    return (
                                        <span className="text-sm" key={i}>
                                            {technology}
                                        </span>
                                    );
                                })}
                            </div>
                            <div className="flex gap-2 justify-end">
                                {props.github ? (
                                    <a
                                        href={props.github}
                                        target="_blank"
                                        className="group"
                                    >
                                        <FiGithub
                                            size="20"
                                            className="text-mainWhite group-hover:text-mainRed transition-colors"
                                        />
                                    </a>
                                ) : (
                                    ""
                                )}
                                {props.link ? (
                                    <a
                                        href={props.link}
                                        target="_blank"
                                        className="group"
                                    >
                                        <GoLinkExternal
                                            size="20"
                                            className="text-mainWhite group-hover:text-mainRed transition-colors"
                                        />
                                    </a>
                                ) : (
                                    ""
                                )}
                            </div>
                        </div>
                    </article>
                </motion.li>
            ) : (
                <motion.li
                    initial={{ opacity: 0, x: "25vh" }}
                    whileInView={{ opacity: 1, x: "0px" }}
                    transition={{ duration: 1.5 }}
                    viewport={{ once: true }}
                >
                    <article className="flex items-center">
                        <div className="w-5/12 flex flex-col gap-2">
                            <h5 className="text-mainRed text-base text-left">
                                {props.type}
                            </h5>
                            <h2 className="text-mainWhite text-2xl text-left mb-3">
                                {props.title}
                            </h2>
                            <div className="w-[calc(100%+4rem)] z-10 -mr-16 bg-mainBlue rounded p-4 shadow-lg">
                                <p className="text-mainWhite text-left text-sm">
                                    {props.description}
                                </p>
                            </div>
                            <div className="flex gap-2 text-mainWhite self-start items-center flex-wrap text-left">
                                {props.technologies.map(function (
                                    technology,
                                    i
                                ) {
                                    return (
                                        <span className="text-sm" key={i}>
                                            {technology}
                                        </span>
                                    );
                                })}
                            </div>
                            <div className="flex gap-2">
                                {props.github ? (
                                    <a
                                        href={props.github}
                                        target="_blank"
                                        className="group"
                                    >
                                        <FiGithub
                                            size="20"
                                            className="text-mainWhite group-hover:text-mainRed transition-colors"
                                        />
                                    </a>
                                ) : (
                                    ""
                                )}
                                {props.link ? (
                                    <a
                                        href={props.link}
                                        target="_blank"
                                        className="group"
                                    >
                                        <GoLinkExternal
                                            size="20"
                                            className="text-mainWhite group-hover:text-mainRed transition-colors"
                                        />
                                    </a>
                                ) : (
                                    ""
                                )}
                            </div>
                        </div>
                        <img
                            src={props.image}
                            alt={props.imageAlt}
                            className="w-7/12"
                        />
                    </article>
                </motion.li>
            )}
        </>
    );
};

export default Project;
