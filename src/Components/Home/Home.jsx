import React from "react";
import { HomeWrapper } from './Home.style'
import { Button } from "@material-ui/core";
import { BodyTagWrapper, HtmlTagWrapper, AnimationTextWrapper } from "Components/Website.style";

function User(props) {

    return (
        <HomeWrapper>
            <div className="start-tag">
                <HtmlTagWrapper>{"<html>"}</HtmlTagWrapper>
                <BodyTagWrapper>{"<body>"}</BodyTagWrapper>
            </div>
            {/* MAIN CONTAINER */}
            <div className="container">

                {/* LEFT SIDE TEXT */}
                <div className="left-side">
                    {
                        <div className="html-tag-h1-start">{"<h1>"}</div>
                    }
                    <AnimationTextWrapper>

                        {/* ANIMATION ON WORDS */}
                        <div className="intro anim-typewriter">
                            {separateWords("Hi,")}
                            <br />
                            {separateWords("I'm")}
                            &nbsp;
                            {separateWords("Arpit,")}
                            <br />
                            {separateWords("FullStack")}
                            &nbsp;
                            {separateWords("Developer.")}
                            <br />
                        </div>
                    </AnimationTextWrapper>
                    {
                        <div className="html-tag-h1-end">{"<h1/>"}</div>
                    }
                    <div className="stacks">Front End Developer / Back End Developer</div>
                    <Button variant="outlined" className="contact">CONTACT ME</Button>
                </div>
                {/* RIGHT SIDE ANIMATION */}
                {
                    <div className="right-side">
                        <div className="image-logo">
                            <svg viewBox="0 0 10px 10px">
                                <symbol id="s-text">
                                    <text text-anchor="middle"
                                        x="50%"
                                        y="35%"
                                        style={{ transform: "translate(0,50%)" }}
                                        className="text-line"
                                    >A</text>
                                </symbol>
                                <g class="g-ants">

                                    <use xlinkHref="#s-text" className="text-copy" />
                                    <use xlinkHref="#s-text" className="text-copy" />
                                    <use xlinkHref="#s-text" className="text-copy" />
                                    <use xlinkHref="#s-text" className="text-copy" />
                                    <use xlinkHref="#s-text" className="text-copy" />

                                </g>
                            </svg>
                        </div>
                    </div>
                }
            </div>
            <div className="end-tag" >
                <BodyTagWrapper>{"</body>"}</BodyTagWrapper>
                <HtmlTagWrapper>{"</html>"}</HtmlTagWrapper>
            </div>
        </HomeWrapper>
    )
}

export default User;

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