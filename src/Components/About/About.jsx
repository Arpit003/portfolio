import React from 'react';
import { AboutWrapper } from './About.style';
import { HtmlTagWrapper, BodyTagWrapper, AnimationTextWrapper } from 'Components/Website.style';
import ReactIcon from 'Assets/icons/react.png';
import NodeIcon from 'Assets/icons/node.png';
import JsIcon from 'Assets/icons/js-icon.png';
import CssIcon from 'Assets/icons/css.png';

function About() {
    return (
        <AboutWrapper>
            <div className="start-tag">
                <HtmlTagWrapper>{"<html>"}</HtmlTagWrapper>
                <BodyTagWrapper>{"<body>"}</BodyTagWrapper>
            </div>
            <div className='container'>
                <div className="html-tag-h1-start">{"<h1>"}</div>
                <AnimationTextWrapper>
                    <div className="intro anim-typewriter">
                        {separateWords('About', 'word')}
                    &nbsp;
                    {separateWords("me", 'word')}
                    </div>
                </AnimationTextWrapper>
                <div className="html-tag-h1-end">{"<h1/>"}</div>
                <div className="middle-section">
                    <p className="paragraph">
                        <h3>
                            {"Professionally connected with the web development industry and information technology for many years."}
                        </h3>
                        <h3>
                            {"Well-organised person, problem solver with high attention to detail."}
                        </h3>
                        <h3>
                            {"Interested in the entire frontend/backend spectrum and working on ambitious projects with positive people."}
                        </h3>
                    </p>
                    {
                        // <section id="pyramid">
                        //     <div></div>
                        //     <div></div>
                        //     <div></div>
                        //     <div></div>
                        // </section>
                    }
                    <div className="circle">
                        <div className="parent">
                            {
                                <div className="image-position">
                                    <div className="common react" style={{ backgroundImage: `url(${ReactIcon})` }}></div>
                                    <div className="common js" style={{ backgroundImage: `url(${JsIcon})` }}></div>
                                    <div className="common node" style={{ backgroundImage: `url(${NodeIcon})` }}></div>
                                    <div className="common css" style={{ backgroundImage: `url(${CssIcon})` }}></div>
                                </div>
                            }
                            <div className="profile" style={{ backgroundImage: `url(${ReactIcon})` }}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="end-tag">
                <BodyTagWrapper>{"</body>"}</BodyTagWrapper>
                <HtmlTagWrapper>{"</html>"}</HtmlTagWrapper>
            </div>
        </AboutWrapper>
    )
}

export default About;

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