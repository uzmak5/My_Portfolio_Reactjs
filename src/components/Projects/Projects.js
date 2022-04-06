import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import ecommerce from "../../Assets/Projects/ecommerce.png";
import api from "../../Assets/Projects/api.png";
import shopping from "../../Assets/Projects/shopping.png";
import leetcode from "../../Assets/Projects/leetcode.png";
import grade from "../../Assets/Projects/grade.png";
import weather from "../../Assets/Projects/weather.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="Ecommerce Shopping Mart"
              description="” Ecommerce website is implemented using javascript to connect shoppers to products or services for trading online. On the most basic level,
               it provides everything we need for online shopping.An easy-to-use checkout,Search engine optimized code and layout.               
               Provides Clear navigation menus that make it easy to browse all products by category.Improving customer experience results in higher revenues for e-commerce website. "
              link="https://github.com/uzmak5/Ecommerce_ShoppingMart"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={api}
              isBlog={false}
              title="Movie Based Restful Api"
              description="A REST Server simply provides access to resources and REST client accesses and modifies the resources using HTTP protocol. 
              Here each movie based API resource is identified by URIs/ global IDs. REST uses various representation to represent a resource like text, JSON, XML but JSON is the most popular one.
              It revolves around resource where every component is a resource and is accessed by a common interface using HTTP standard methods"
              link="https://github.com/uzmak5/NodejsMovie_RestApi"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shopping}
              isBlog={false}
              title="Online Shopping Cart"
              description="Online shopping cart is built using react.js technology that facilitates checkout and product purchase. Online cart supports html, css, and js code with instant view of website.
              It provides the user with a list of the various products available for purchase in the store.
              To combat this include product availability information for each of your products in a prominent way on the product page."
              link="https://github.com/uzmak5/ShoppingCartReact"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather Prediction"
              description="Weather Prediction build with React.js and Css which takes the content from web api files and renders it using React.js. 
              weather forecasting, the prediction of the weather through application of the principles of physics, supplemented by a variety of statistical and empirical techniques. In addition to predictions of atmospheric phenomena themselves, 
              it includes predictions of changes on Earth’s surface caused by atmospheric conditions"
              link="https://github.com/uzmak5/ReactWeather"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leetcode}
              isBlog={false}
              title="Leetcode Solutions"
              description="Leetcode solutions are implemented in javascript, it is an optimization technique that is used to optimize recursion problems. 
               When we have a large number of recursion calls, in which each subproblem can be called many times with the same result,
               we can memorize these results so that we can avoid re-computing them when we subsequently solve problems of larger sizes. "
              link="https://github.com/uzmak5/leetcode-1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={grade}
              isBlog={false}
              title="Student Grade Calculator"
              description="This calculator is designed with javascript,html and css to find out the grade of a course based on weighted averages.This calculator accepts the numerical digits, 
              and calculate the grade needed for the remaining assignments in order to get a desired grade for an ongoing course.
              It calculates the grade of a student based on the marks entered by user in each subject."
              link="https://github.com/uzmak5/Student-Grade-Calc"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
