import React from 'react';
import { ContactWrapper } from './Contact.style';
import { BodyTagWrapper, HtmlTagWrapper, AnimationTextWrapper } from 'Components/Website.style';

function Contact() {
    return (
        <ContactWrapper>
            <HtmlTagWrapper>{"<html>"}</HtmlTagWrapper>
            <BodyTagWrapper>{"<body>"}</BodyTagWrapper>

            <div className="html-tag-h1-start">{"<h1>"}</div>
            <AnimationTextWrapper>
                <div className="intro anim-typewriter">
                    {separateWords('Contact', 'word')}
                &nbsp;
                {separateWords("me", 'word')}
                </div>
            </AnimationTextWrapper>
            <div className="html-tag-h1-end">{"</h1>"}</div>
            <BodyTagWrapper>{"</body>"}</BodyTagWrapper>
            <HtmlTagWrapper>{"</html>"}</HtmlTagWrapper>
        </ContactWrapper>
    )
}

export default Contact;

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