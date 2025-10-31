import React from "react";
import Header from "../../components/Header-legacy/Header-legacy";
import Footer from "../../components/Footer/Footer";
import "./AboutUs.css";
import PageBlueprint from "../../components/utilities/PageBlueprint/PageBlueprint";

function AboutUs() {
  return (
    <PageBlueprint title={"About Us"}>
      {/* ===== MISSION & VISION ===== */}
      {/* ===== MISSION & VISION ===== */}
      <section className="mission-vision-section">
        <div className="mission-block">
          <h2>
            `111`1  {" "}
            OUR MISSION
          </h2>
          <ul>
            <li>
              Changing society's attitude towards homeless children through
              public participation in social activities.
            </li>
            <li>
              Invite homeless children for education by educating them according
              to their skill and ability.
            </li>
            <li>
              Offering them the experience of the sweetness of a relationship by
              giving them love like family members.
            </li>
            <li>Acknowledging social responsibility through participation.</li>
          </ul>
        </div>
        <div className="vision-block">
          <h2>
            <span role="img" aria-label="Vision Icon">
              👁️
            </span>{" "}
            OUR VISION
          </h2>
          <p>
            To rehabilitate homeless children afflicted with social problems and
            create a healthy youth for a self-reliant society.
          </p>
        </div>
      </section>

      {/* ===== WHO WE ARE ===== */}
      <section className="who-we-are-section">
        <h3>WHO WE ARE</h3>
        <div className="about-summary">
          <div className="summary-text">
            <h4>Summary of Jeevan samvardhan Foundation</h4>
            <p>
              Born in a typical Maharashtrian rural Warkari family, he was
              closely associated with school culture from almost 15 years. Out
              of which 8 years he was teacher. After that he worked for a
              organization working for homeless children. While working in such
              a setup he came across various issues and issues towards many
              kinds of kids. Going deep in this matter he realized a bigger
              issue of Homeless kids and need of their upliftment.
              <br />
              <br />
              So he formed a NGO JSF and working for this noble cause.
            </p>
            <span className="founder-name">Sadashiv Chavan</span>
          </div>
          <div className="summary-image">
            {/* Image of founder goes here */}
            <img src="/src/assets/sadashivchahan.jpg" alt="Founder" />
          </div>
        </div>
      </section>

      {/* ===== BASIC NEEDS SECTION ===== */}
      <section className="basic-needs-section">
        <h4>The basic needs of such colonies are :</h4>
        <ul>
          <li>
            Education for all ages. We would like to start a Ekal Vidyalaya
            (Biswadi) and also providing Nutrition to these children.
          </li>
          <li>To inculcate civilization in entire Community.</li>
          <li>
            Health Awareness and Medical Aid, Sanitation and cleanliness, habit
            cultivation.
          </li>
          <li>
            And lastly for final development, Vocational Training to youth and
            ladies.
          </li>
          <li>Skill training for Livelihood.</li>
        </ul>
      </section>

      {/* ===== DOCUMENTS SECTION ===== */}
      <section className="documents-section">
        <div className="documents-gallery">
          <img src="/src/assets/img1.jpg" alt="Document 1" />
          <img src="/src/assets/img3.jpg" alt="Document 2" />
        </div>
      </section>
    </PageBlueprint>

    // <>
    //   {/* ===== ABOUT SECTION ===== */}
    //   <section className="about-section">
    //     <h2 className="about-title">About us</h2>

    //     <div className="about-container">
    //       <div className="about-image">
    //         <img src="/src/assets/q5.jpg" alt="About Us" />
    //       </div>

    //       <div className="about-points">
    //         <ul>
    //           <li>
    //             Changing society’s attitude towards homeless children through
    //             public participation in social activities.
    //           </li>
    //           <li>
    //             To make homeless children self-reliant by educating them
    //             according to their skill and ability.
    //           </li>
    //           <li>
    //             Giving them the experience of the sweetness of a relationship by
    //             giving them love like a family.
    //           </li>
    //           <li>Awakening of social responsibility through patriotism.</li>
    //         </ul>
    //       </div>
    //     </div>
    //   </section>

    //   {/* ===== WHO WE ARE SECTION ===== */}
    //   <section className="who-section">
    //     <h3 className="who-title">WHO WE ARE ?</h3>

    //     <div className="who-container">
    //       <div className="who-text">
    //         <p>
    //           <strong>Summary of Jeevan Samvardhan Foundation</strong> <br />
    //           Born in a typical Maharashtrian rural Warkari family, he was
    //           closely associated with the student union for almost 15 years. Out
    //           of which 8 years he was a full-timer. Post that he worked for an
    //           organization working for north-east India. While working in this
    //           subject he came across various and severe issues mainly of kids.
    //           Going deep in this matter he realized a larger issue of homeless
    //           kids and need of their upliftment.
    //         </p>
    //         <p>So he formed an NGO JSF and is working for this noble cause.</p>
    //       </div>

    //       <div className="who-image">
    //         <img src="/src/assets/sadashivchahan.jpg" alt="Founder" />
    //       </div>
    //     </div>
    //   </section>

    //   {/* ===== BASIC NEEDS SECTION ===== */}
    //   <section className="needs-section">
    //     <h3 className="needs-title">The basic needs of such colonies are :</h3>

    //     <div className="needs-container">
    //       <div className="needs-points">
    //         <ul>
    //           <li>
    //             • Education for all ages. We would like to start an Ekal
    //             Vidyalaya (Balwadi) and also provide Nutrition to these
    //             children.
    //           </li>
    //           <li>• To inculcate civilization in the entire community.</li>
    //           <li>
    //             • Health awareness and medical aid. Sanitation and cleanliness
    //             habit cultivation.
    //           </li>
    //           <li>
    //             • And lastly, for final development, vocational training to
    //             youth and ladies.
    //           </li>
    //           <li>• Skill training for livelihood.</li>
    //         </ul>
    //       </div>

    //       <div className="needs-images">
    //         <img src="/src/assets/img1.jpg" alt="Recognition Letter" />
    //         <img src="/src/assets/img3.jpg" alt="Award Certificate" />
    //       </div>
    //     </div>
    //   </section>
    // </>
  );
}

export default AboutUs;
