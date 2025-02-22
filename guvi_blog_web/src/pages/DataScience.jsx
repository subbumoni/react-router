import React from "react";
import { Link } from "react-router-dom";

const cardData = [
  {
    title: "10 Best Data Science Online Courses for Beginners | 2023",
    image: "./image/datascience/data.png",
    link: "https://www.guvi.in/blog/best-data-science-courses-for-beginners/",
    description:
      "In today’s rapidly evolving digital landscape, Data Science has emerged as one of the most",
    date: "14 August 2023",
    comments: "No Comments",
  },
  {
    title: "Data Science Webinars and Workshops",
    image: "./image/datascience/webiners.png",
    link: "https://www.guvi.in/blog/data-science-webinars-and-workshops/",
    description:
      "In today’s world, it’s becoming increasingly important to be knowledgeable in the field of data",
    date: "9 August 2023",
    comments: "No Comments",
  },
  {
    title: "10 Best Data Science Frameworks in 2023",
    image: "./image/datascience/ux.png",
    link: "https://www.guvi.in/blog/10-best-data-science-frameworks/",
    description:
      "Does data scientists fascinate you? If yes, you must definitely know about data science frameworks.",
    date: "5 August 2023",
    comments: "No Comments",
  },
  {
    title:
      "7 Must-Watch Data Science Focused YouTube Channels for Effective Learning",
    image: "./image/datascience/youtube.png",
    link: "https://www.guvi.in/blog/best-data-science-courses-for-beginners/",
    description:
      "Data science has become one of the most sought-after skills in the current job market.",
    date: "5 August 2023",
    comments: "No Comments",
  },
  {
    title: "Everything about Data Scientist Salary in India | 2023",
    image: "./image/datascience/salary.png",
    link: "https://www.guvi.in/blog/everything-about-data-scientist-salary-in-india/",
    description:
      "Are you curious about the highly sought-after field of data science and the potential it",
    date: "5 August 2023",
    comments: "No Comments",
  },
  {
    title: "How Long Would It Take to Learn Data Science?",
    image: "./image/fullstack/fullstack1.png",
    link: "https://www.guvi.in/blog/how-long-would-it-take-to-learn-data-science/",
    description:
      "Have you ever wondered how much time it takes to learn data science? It’s an",
    date: "5 August 2023",
    comments: "No Comments",
  },
];

export default function DataScience() {
  return (
    <div className="container">
      <div className="row g-4 row-cols-1 row-cols-md-2 row-cols-lg-3">
        {cardData.map((card, index) => (
          <div className="col-lg col-md-6" key={index}>
            <div className="card h-100">
              <div>
                <Link className="nav-link" to={card.link}>
                  <img src={card.image} className="card-img-top" alt="..." />
                </Link>
              </div>
              <div className="card-body mt-2">
                <h5
                  className="card-title"
                  style={{
                    fontSize: "21px",
                    lineHeight: "21px",
                    fontWeight: "400",
                    fontFamily: "sans-serif",
                  }}
                >
                  <Link className="nav-link" to={card.link}>
                    {card.title}
                  </Link>
                </h5>
                <p
                  className="card-text text-secondary"
                  style={{ fontSize: "14px" }}
                >
                  {card.description}
                </p>
                <p
                  style={{
                    color: "#007dfe",
                    fontWeight: "bold",
                    fontSize: "12px",
                    lineHeight: "12px",
                  }}
                >
                  <Link
                    className="nav-link read "
                    target="_blank"
                    to={card.link}
                  >
                    READ MORE »
                  </Link>
                </p>
              </div>
              <div className="card-footer" style={{ lineHeight: "15px" }}>
                <small className="text-body-secondary d-inline-flex w-100 text-align-left">
                  {card.date}{" "}
                  <ul>
                    <li>{card.comments}</li>
                  </ul>
                </small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
