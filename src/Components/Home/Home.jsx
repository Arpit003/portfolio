import React, { useState } from "react";
import { HomeWrapper } from './Home.style'
import { Button } from "@material-ui/core";
import { BodyTagWrapper, HtmlTagWrapper, AnimationTextWrapper } from "Components/Website.style";
import { Redirect } from "react-router-dom";
import { URL_CONTACT } from "Helpers/Paths";

function User(props) {
    const [redirect, redirectContact] = useState(false);

    const redirectToContact = () => {
        redirectContact(true)
    }

    if (redirect)
        return <Redirect to={URL_CONTACT}></Redirect>;

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
                            {separateWords("A", "single", "rotate-word")}
                            {separateWords("rpit,")}
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
                    <Button variant="outlined" className="contact" onClick={redirectToContact}>CONTACT ME</Button>
                </div>
                {/* RIGHT SIDE ANIMATION */}
                {
                    <div className="right-side">
                        <div className="image-logo">
                            <svg viewBox="0 0 10px 10px">
                                <symbol id="s-text">
                                    <text textAnchor="middle"
                                        x="50%"
                                        y="35%"
                                        style={{ transform: "translate(0,50%)" }}
                                        className="text-line"
                                    >A</text>
                                </symbol>
                                <g className="g-ants">

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
const separateWords = (words, type = "single", className = "") => {

    let text = (type === "single") ? words.split('') : words.split(' ');

    let spans = undefined;

    spans = text.map((item, index) => {
        return <span className={`blast ${className}`} key={index}>{item}</span>
    })

    return spans;
}