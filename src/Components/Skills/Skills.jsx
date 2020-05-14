import React from 'react';
import { SkillsWrapper } from './Skills.style';
import { HtmlTagWrapper, BodyTagWrapper, AnimationTextWrapper } from 'Components/Website.style';
import { Link } from 'react-router-dom';
import { URL_CONTACT } from 'Helpers/Paths';

function Skills() {

    return (
        <SkillsWrapper>
            <div className="start-tag">
                <HtmlTagWrapper>{"<html>"}</HtmlTagWrapper>
                <BodyTagWrapper>{"<body>"}</BodyTagWrapper>
            </div>
            <div className='container'>
                <div className="html-tag-h1-start">{"<h1>"}</div>
                <AnimationTextWrapper>
                    <div className="intro anim-typewriter">
                        {separateWords('Skills', 'word')}
                        &nbsp;
                        {separateWords('&')}
                        &nbsp;
                        {separateWords("Experience", 'word')}
                    </div>
                </AnimationTextWrapper>
                <div className="html-tag-h1-end">{"<h1/>"}</div>
                <div className="middle-section">
                    <div className="paragraph">
                        <h3>{"The main area of my expertise is fullstack web development (client & server side of the web)."}</h3>
                        <h3>{"HTML, CSS, JS , building small,medium and large web apps with React & Node Js, custom plugins, features, animations, and coding interactive layouts."}</h3>
                        <h3>Visit my <a href="https://www.linkedin.com/in/arpit-vyas-01b506180">LinkedIn </a>profile for more details or just <Link to={URL_CONTACT}>contact </Link>me.</h3>
                    </div>
                    {
                        <div className="main-container">
                            <div className="section">
                                <div className="partition">
                                    <div className="description rotate"></div>
                                    <div className="square">html</div>
                                </div>
                            </div>
                            <div className="section">
                                <div className="partition">
                                    <div className="description rotate"></div>
                                    <div className="square"></div>
                                </div>
                                <div className="partition">
                                    <div className="square"></div>
                                    <div className="description"></div>
                                </div>
                            </div>
                            <div className="section">
                                <div className="partition">
                                    <div className="description rotate"></div>
                                    <div className="square"></div>
                                </div>
                                <div className="partition">
                                    <div className="square"></div>
                                    <div className="description"></div>
                                </div>
                            </div>
                            <div className="section">
                                <div className="partition">
                                    <div className="square"></div>
                                    <div className="description"></div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
            <div className="end-tag">
                <BodyTagWrapper>{"</body>"}</BodyTagWrapper>
                <HtmlTagWrapper>{"</html>"}</HtmlTagWrapper>
            </div>
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

    spans = text.map((item, index) => {
        return <span className="blast" key={index} >{item}</span>
    })

    return spans;
}