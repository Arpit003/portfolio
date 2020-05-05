import React from "react";
import { HomeWrapper } from './Home.style'
import { Button } from "@material-ui/core";
import { BodyTagWrapper, HtmlTagWrapper, AnimationTextWrapper } from "Components/Website.style";

function User(props) {
    return (
        <HomeWrapper>
            <HtmlTagWrapper>{"<html>"}</HtmlTagWrapper>
            <BodyTagWrapper>{"<body>"}</BodyTagWrapper>
            <div className="html-tag-h1-start">{"<h1>"}</div>
            <AnimationTextWrapper>
                <div className="intro anim-typewriter">
                    <span className="blast">H</span>
                    <span className="blast">i</span>
                    <span className='blast'>,</span>
                    <br />
                    <span className="blast">I</span>
                    <span className="blast">'</span>
                    <span className="blast">m</span>
                    &nbsp;
                <span className="blast">A</span>
                    <span className="blast">r</span>
                    <span className="blast">p</span>
                    <span className="blast">i</span>
                    <span className="blast">t</span>
                    <span className="blast">,</span>
                    <br />
                    <span className="blast">F</span>
                    <span className="blast">u</span>
                    <span className="blast">l</span>
                    <span className="blast">l</span>
                    <span className="blast">S</span>
                    <span className="blast">t</span>
                    <span className="blast">a</span>
                    <span className="blast">c</span>
                    <span className="blast">k</span>
                    &nbsp;
                <span className="blast">D</span>
                    <span className="blast">e</span>
                    <span className="blast">v</span>
                    <span className="blast">e</span>
                    <span className="blast">l</span>
                    <span className="blast">o</span>
                    <span className="blast">p</span>
                    <span className="blast">e</span>
                    <span className="blast">r</span>
                    <span className="blast">.</span>
                    <br />
                </div>
            </AnimationTextWrapper>
            <div className="html-tag-h1-end">{"<h1/>"}</div>
            <div className="stacks">Front End Developer / Back End Developer</div>
            <Button variant="outlined" className="contact">CONTACT ME</Button>
            <div className="end-tag" />
            <BodyTagWrapper>{"</body>"}</BodyTagWrapper>
            <HtmlTagWrapper>{"</html>"}</HtmlTagWrapper>
        </HomeWrapper>
    )
}

export default User;