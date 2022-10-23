import "./AboutUs.css";
import React from "react";

function AboutUs() {
  return (
    <div className="about_us">
      <h1 className="d-flex justify-content-center text-light text-bg-dark fw-lighter">About</h1>
      <div className="d-flex mb-2">
        <div>
          <img width="100%" src="https://static8.depositphotos.com/1594308/1073/i/600/depositphotos_10734011-stock-photo-cocktail-party.jpg" alt="" />
          <h4 className="fst-italic">Vistion</h4>
        </div>
        <div>
          <img width="100%" src="https://st3.depositphotos.com/9880800/18116/i/600/depositphotos_181167000-stock-photo-happy-stylish-multiethnic-girls-sitting.jpg" alt="" />
          <h4 className="fst-italic">Dreams</h4>
        </div>
        <div>
          <img width="100%" src="https://st3.depositphotos.com/13194036/19273/i/600/depositphotos_192738284-free-stock-photo-three-multiethnic-men-suits-smoking.jpg" alt="" />
          <h4 className="fst-italic">And much more</h4>
        </div>
      </div>
      
      <div className="d-flex justify-content-center align-items-center flex-column">
        <div className="w-50 d-flex justify-content-center align-items-center flex-column gap-2">
          <h2 className="fst-italic">Who are we?</h2>
          <img className="w-100" src="https://st4.depositphotos.com/3812753/23599/i/600/depositphotos_235992494-stock-photo-concentrated-young-woamn-wipe-glass.jpg" alt="" />
          <p className="d-flex justify-content-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, nulla necessitatibus! Quia, sequi distinctio! Earum rem non repellat inventore pariatur error, dolorem, deleniti alias sit recusandae, sed in omnis animi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, laborum nostrum. Enim inventore, accusantium neque veniam, possimus, incidunt voluptatem rem odio dolorum ipsam minus. Unde dolorem error aperiam fugiat vitae!</p>
          <h2 className="fst-italic">Vistion</h2>
          <img className="w-100" src="https://st.depositphotos.com/1743476/3119/i/600/depositphotos_31199437-stock-photo-dreaming-and-planning-the-future.jpg" alt="" />
          <p className="d-flex justify-content-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, nulla necessitatibus! Quia, sequi distinctio! Earum rem non repellat inventore pariatur error, dolorem, deleniti alias sit recusandae, sed in omnis animi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, laborum nostrum. Enim inventore, accusantium neque veniam, possimus, incidunt voluptatem rem odio dolorum ipsam minus. Unde dolorem error aperiam fugiat vitae!</p>

          <h2 className="fst-italic">Dream</h2>
          <img className="w-100" src="https://st3.depositphotos.com/3261171/18796/i/600/depositphotos_187961230-stock-photo-pensive-african-american-guy-smiling.jpg" alt="" />
          <p className="d-flex justify-content-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, nulla necessitatibus! Quia, sequi distinctio! Earum rem non repellat inventore pariatur error, dolorem, deleniti alias sit recusandae, sed in omnis animi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, laborum nostrum. Enim inventore, accusantium neque veniam, possimus, incidunt voluptatem rem odio dolorum ipsam minus. Unde dolorem error aperiam fugiat vitae!</p>

          <h2 className="fst-italic">Much More</h2>
          <img className="w-100" src="https://st4.depositphotos.com/13324256/22343/i/600/depositphotos_223436070-free-stock-photo-close-view-bucket-confetti-bottle.jpg" alt="" />
          <p className="d-flex justify-content-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, nulla necessitatibus! Quia, sequi distinctio! Earum rem non repellat inventore pariatur error, dolorem, deleniti alias sit recusandae, sed in omnis animi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, laborum nostrum. Enim inventore, accusantium neque veniam, possimus, incidunt voluptatem rem odio dolorum ipsam minus. Unde dolorem error aperiam fugiat vitae!</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
