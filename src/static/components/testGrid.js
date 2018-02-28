import React, { Component } from 'react';
import styled from "styled-components";

// # Resources
// Responsive Grid: https://medium.com/samsung-internet-dev/common-responsive-layouts-with-css-grid-and-some-without-245a862f48df
//   - CSS: https://glitch.com/edit/#!/grid-cats?path=styles.css:1:0
// Styled Components
//   - https://www.styled-components.com/docs/basics
export default class TestGrid extends Component {
  
  render() {
    return (
      <div>
        <Header>
          <Logo src="https://emojipedia-us.s3.amazonaws.com/thumbs/120/facebook/111/crystal-ball_1f52e.png" alt="heart" />
          <h1>Grid into the future</h1>
        </Header>
        <main>
          <LeadingSection>
            <LeadingBigtext>Hello</LeadingBigtext>
            <LeadingText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae semper quam. Praesent lobortis tellus quis erat condimentum, a bibendum tortor volutpat.</LeadingText>
          </LeadingSection>
          <Cards>
            <Article>
              <ArticleImg src="http://placekitten.com/305/205" alt=" " />
              <ArticleTitle>
                Title of Article
              </ArticleTitle>
            </Article>
            <Article>
              <ArticleImg src="http://placekitten.com/320/220" alt=" " />
              <ArticleTitle>
                Title of Article
              </ArticleTitle>
            </Article>
            <Article>
              <ArticleImg src="http://placekitten.com/330/240" alt=" " />
              <ArticleTitle>
                Title of Article
              </ArticleTitle>
            </Article>
            <Article>
              <ArticleImg src="http://placekitten.com/280/250" alt=" " />
              <ArticleTitle>
                Title of Article
              </ArticleTitle>
            </Article>
            <Article>
              <ArticleImg src="http://placekitten.com/310/210" alt=" " />
              <ArticleTitle>
                Title of Article
              </ArticleTitle>
            </Article>
            <Article>
              <ArticleImg src="http://placekitten.com/430/240" alt=" " />
              <ArticleTitle>
                Title of Article
              </ArticleTitle>
            </Article>
          </Cards>
        </main>
      </div>
    );
  }
}

const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 10px;
  font-size: 2em;
  color: white;
  background-color: #333;
`;
const Cards = styled.section`
  max-width: 960px;
  margin: 0 auto 30px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 30px;
`;
const Article = styled.article`
  position: relative;
`;
const ArticleImg = styled.img`
  height: 200px;
  width: 100%;
  object-fit: cover;
`;
const ArticleTitle = styled.h1`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.2);
`;
const Logo = styled.img`
  height: 50px;
  margin-right: 20px;
`;
const LeadingBigtext = styled.p`
  margin-right: 60px;
  font-weight: bold;
  font-size: 24vw;
  
  @media (min-width: 700px) {
    font-size: 140px;
}
`;
const LeadingText = styled.p`
  max-width: 900px;
  font-size: 1.2em;
  line-height: 1.4em;
`;
const LeadingSection = styled.section`
  height: 240px;
  margin-bottom: 30px;
  padding: 30px;
  color: white;
  background: url('https://cdn.glitch.com/a5121e34-96b3-4a70-8227-040c51e64fae%2Fcat.jpg?1509635989509') center #333 no-repeat;
  background-size: cover;
  text-shadow: 0 0 5px #000;
  
  @media (min-width: 700px) {
    display: flex;
    align-items: center;
  }
`;
