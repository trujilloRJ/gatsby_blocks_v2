import React from "react"
import "../../node_modules/font-awesome/css/font-awesome.min.css"
import Layout from "../components/Layout"
import Showcase from "../components/showcase/Showcase"
import Section from "../components/Section/Section"
import Card from "../components/Card/Card"
import CardTeam from "../components/CardTeam/CardTeam"
import CardWork from "../components/CardWork/CardWork"
import Brand from "../components/SVG/Brand"
import ImgSlider from "../components/ImgSlider/ImgSlider"

import img1 from "../images/pic1.jpg"
import img2 from "../images/pic2.jpg"
import imgPerson1 from "../images/person1.jpg"
import imgPerson2 from "../images/person2.jpg"

// Card-Section
const sectionCardProps = {
  idSection: "Cards",
  headline: "Card Components",
  classList: "light-primary",
}
const cardProps1 = {
  img: `url(${img1}) no-repeat center center/cover`,
  faIcon: "fa fa-gg-circle fa-2x",
  headline: "Card Type 1",
}
const cardProps2 = {
  img: `url(${img2}) no-repeat center center/cover`,
  faIcon: "fa fa-gg-circle fa-2x",
  headline: "Card Type 1",
}

// Team-Section
const sectionTeamProps = {
  idSection: "Team",
  headline: "Team Card Components",
  classList: "dark-primary",
}
const cardTeamProps1 = {
  img: `url(${imgPerson1}) no-repeat center center/cover`,
  name: "Jane Doe",
}
const cardTeamProps2 = {
  img: `url(${imgPerson2}) no-repeat center center/cover`,
  name: "Martha López",
}

// Work-Section
const sectionWorkProps = {
  idSection: "Work",
  headline: "Work Card Components",
  classList: "light-primary",
}
const cardWorkProps1 = {
  text:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur at a veniam, id error ducimus. Quas, veritatis dolorum! Obcaecati fugit laudantium fuga officia voluptatem saepe temporibus iste, necessitatibus accusantium eum.",
  linkCode: "#",
  linkWeb: "#",
}

// SliderImg section
const sectionSliderProps = {
  idSection: "Slider",
  headline: "Slider Image Component",
  classList: "dark-primary",
}
const sliderImgProps = {
  type: "fade",
  automatedTime: 3000,
  img_list: [
    { id: 1, img: img1, caption: "This is img 1" },
    { id: 2, img: img2, caption: "This is img 2" },
    { id: 3, img: imgPerson1, caption: "This is img 3" },
    { id: 4, img: img2, caption: "This is img 4" },
  ],
}

const IndexPage = () => (
  <Layout>
    <Showcase />
    <Section props={sectionCardProps}>
      <div className="grid g3">
        <Card props={cardProps1}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero,
          dignissimos.
        </Card>
        <Card props={cardProps2}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero,
          dignissimos.
        </Card>
      </div>
    </Section>
    <Section props={sectionTeamProps}>
      <div className="grid g2">
        <CardTeam props={cardTeamProps1}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A nemo est at
          adipisci earum repellendus nulla excepturi accusamus qui architecto.
        </CardTeam>
        <CardTeam props={cardTeamProps2}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A nemo est at
          adipisci earum repellendus nulla excepturi accusamus qui architecto.
        </CardTeam>
      </div>
    </Section>
    <Section props={sectionWorkProps}>
      <div className="grid g3">
        <CardWork props={cardWorkProps1}>
          <Brand width="200" />
        </CardWork>
      </div>
    </Section>
    <Section props={sectionSliderProps}>
      <ImgSlider props={sliderImgProps} />
    </Section>
  </Layout>
)

export default IndexPage
