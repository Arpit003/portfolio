import React from 'react';
import { AboutWrapper } from './About.style';
import { HtmlTagWrapper, BodyTagWrapper, AnimationTextWrapper } from 'Components/Website.style';


function About() {
    return (
        <AboutWrapper>
            <HtmlTagWrapper>{"<html>"}</HtmlTagWrapper>
            <BodyTagWrapper>{"<body>"}</BodyTagWrapper>

            <div className="html-tag-h1-start">{"<h1>"}</div>
            <AnimationTextWrapper>
                <div className="intro anim-typewriter">
                    <span className="blast">A</span>
                    <span className="blast">b</span>
                    <span className='blast'>o</span>
                    <span className="blast">u</span>
                    <span className="blast">t</span>
                    &nbsp;
                    <span className="blast">m</span>
                    <span className="blast">e</span>
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

                <section id="pyramid">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </section>
            </div>
            <BodyTagWrapper>{"</body>"}</BodyTagWrapper>
            <HtmlTagWrapper>{"</html>"}</HtmlTagWrapper>
        </AboutWrapper>
    )
}

export default About;