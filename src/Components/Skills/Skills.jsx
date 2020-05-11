import React from 'react';
import { SkillsWrapper } from './Skills.style';
import { HtmlTagWrapper, BodyTagWrapper, AnimationTextWrapper } from 'Components/Website.style';
import { Link } from 'react-router-dom';
import { URL_CONTACT } from 'Helpers/Paths';

function Skills() {
    return (
        <SkillsWrapper>

            <HtmlTagWrapper>{"<html>"}</HtmlTagWrapper>
            <BodyTagWrapper>{"<body>"}</BodyTagWrapper>

            <div className="container">
                <div className="left-side">
                    <div className="html-tag-h1-start">{"<h1>"}</div>
                    <AnimationTextWrapper>
                        <div className="intro anim-typewriter">
                            {separateWords('Skills', 'word')} &nbsp;

                            {separateWords("&", 'word')} &nbsp;

                            {separateWords("Experience", 'word')}

                        </div>
                    </AnimationTextWrapper>

                    <div className="html-tag-h1-end">{"<h1/>"}</div>

                    <div className="paragraph">
                        <h3>{"The main area of my expertise is fullstack web development (client & server side of the web)."}</h3>
                    </div>

                    <div className="paragraph">
                        <h3>{"HTML, CSS, JS , building small,medium and large web apps with React & Node Js, custom plugins, features, animations, and coding interactive layouts."}</h3>
                    </div>

                    <div className="paragraph">
                        <h3>Visit my <a href="https://www.linkedin.com/in/arpit-vyas-01b506180">LinkedIn </a>profile for more details or just <Link to={URL_CONTACT}>contact </Link>me.</h3>
                    </div>

                </div>

                {
                    //     <div className="right-side">
                    //     <div className="graph-div">
                    //         {skills.map((item, index) => (
                    //             <SkillsAnimationWrapper>
                    //                 <div className="skill-name">{item.skill}</div>
                    //                 <div className="skill-width" style={{ width: `calc(70% - (100% - ${item.percent}))` }}><div className="child-skill"></div></div>
                    //                 <div className="percent">{item.percent}</div>
                    //             </SkillsAnimationWrapper>
                    //         ))}
                    //     </div>
                    // </div>
                }

            </div>

            <BodyTagWrapper>{"</body>"}</BodyTagWrapper>
            <HtmlTagWrapper>{"</html>"}</HtmlTagWrapper>

        </SkillsWrapper>
    )

}

export default Skills;

/*
 *  COMMON FUNCTION FOR CREATE WORD & SINGLE CHARACTER ANIMATION
 */
const separateWords = (words, type = "single") => {

    let text = (type === "single") ? words.split('') : words.split(' ');

    let spans = undefined;

    spans = text.map(item => {
        return <span className="blast">{item}</span>
    })

    return spans;
}

// let skills = [
//     { skill: "React", percent: "90%" },
//     { skill: "Node", percent: "70%" }
// ]
