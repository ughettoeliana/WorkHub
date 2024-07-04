import { useState } from "react";
import "./About.css";
import PropTypes from "prop-types";

export default function About() {
  const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="faq-item">
        <div className="faq-question" onClick={() => setIsOpen(!isOpen)}>
         <div> {question}</div>
          <div className="arrow">
            <img src="./src/assets/svg/icons/arrow-icon.svg" />
          </div>
        </div>
        {isOpen && <div className="faq-answer">{answer}</div>}
      </div>
    );
  };

  const FAQ = () => {
    const faqData = [
      {
        question: (
          <>
            Is <strong>workhub</strong> free to use?
          </>
        ),
        answer: (
          <>
            Yes, <strong>workhub</strong> offers a free version that allows
            users to search for and apply to jobs. We also offer premium plans
            with additional features to enhance your experience.
          </>
        ),
      },
      {
        question: (
          <>
            What types of jobs can I find on <strong>workhub</strong>?
          </>
        ),
        answer: (
          <>
            On <strong>workhub</strong>, you can find a wide variety of job
            opportunities across multiple industries. Whether you are looking
            for skilled trades such as plumbers and tailors, service positions
            like cleaning staff, or professional roles including web developers
            and community managers, <strong>workhub</strong> connects you with
            the right job for your skills or the rigth worker you need.
          </>
        ),
      },
      {
        question: (
          <>
            How can I improve my profile visibility on <strong>workhub</strong>?
          </>
        ),
        answer: (
          <>
            To improve your profile visibility on <strong>workhub</strong>,
            follow these tips:
            <ol>
              <li>
                <strong>Complete Your Profile:</strong> Ensure all sections of
                your profile are filled out, including your skills, experience,
                education, and a professional photo.
              </li>
              <br />
              <li>
                <strong>Use Keywords:</strong> Include relevant keywords in your
                profile that potential employers might search for.
              </li>
              <br />
              <li>
                <strong>Get Endorsements:</strong> Request endorsements from
                colleagues and clients to add credibility to your skills.
              </li>
              <br />
              <li>
                <strong>Stay Active:</strong> Regularly update your profile,
                apply for jobs, and engage with the community.
              </li>
              <br />
              <li>
                <strong>Upgrade to Premium:</strong> Consider upgrading to a
                premium plan for additional features that can enhance your
                profile visibility.
              </li>
            </ol>
          </>
        ),
      },
      {
        question: (
          <>
            How does <strong>workhub</strong> ensure the quality of job
            listings?
          </>
        ),
        answer: (
          <>
            <strong>workhub</strong> ensures the quality of job listings through
            rigorous verification processes and proactive content review
            mechanisms. Each employer is verified to confirm their authenticity,
            helping to prevent fraudulent activities. Job listings undergo
            thorough scrutiny to ensure they are accurate, relevant, and meet
            <strong>workhub</strong> standards. Users also play a crucial role
            by providing feedback on listings, which helps identify and address
            any issues promptly. Additionally, <strong>workhub</strong> enforces
            strict policies to maintain the integrity of its platform, actively
            monitoring and removing any misleading or inappropriate postings.
            This commitment to quality assurance ensures that job seekers can
            trust the listings they find on <strong>workhub</strong>,
            facilitating a reliable and secure job search experience.
          </>
        ),
      },
    ];

    return (
      <div className="faq-container">
        {faqData.map((item, index) => (
          <>
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          </>
        ))}
      </div>
    );
  };

  return (
    <div>
      <div className="home__banner">
        <div className="home__banner-logo">
          <div className="home__banner-logo-placeholder">
            <img src="/public/logo-desktop.svg" />
          </div>
        </div>
      </div>
      <section className="home__section">
        <h1 className="home__section-header wh-text-center">About us</h1>
        <div className="home__section description-container">
          <p className="home__section description-text">
            workhub is your go-to platform for finding and offering job
            opportunities across various industries worldwide. Whether you are
            looking for a plumber or a web developer, WorkHub connects talents
            with opportunities seamlessly.
          </p>
        </div>
      </section>
      <div className="brand-values__cards">
        <div className="brand-values__card wh-bg-tertiary">
          <h4 className="brand-values__title wh-color-primary">Mission</h4>
          <p className="brand-values__text">
            At <strong>workhub</strong>, our mission is to empower individuals
            by providing a global platform that bridges the gap between job
            seekers and employers. We strive to make the job search process
            simple, efficient, and accessible for everyone.
          </p>
        </div>
        <div className="brand-values__card wh-bg-tertiary">
          <h4 className="brand-values__title wh-color-primary">Vision</h4>
          <p className="brand-values__text">
            Our vision is to become the leading global employment network where
            every individual can find their ideal job and every company can find
            the perfect talent. We aim to revolutionize the way people connect
            with opportunities
          </p>
        </div>
      </div>
      <section className="faq-section">
        <h2 className="faq-header">Frequently Asked Questions</h2>
        <FAQ />
      </section>
    </div>
  );
}

About.propTypes = {
  question: PropTypes.func,
  answer: PropTypes.string,
};
