import "./SinglePriceGrid.css";
import "./normalize.css";

function SinglePriceGrid() {
  return (
    <main id="container">
      <section id="top" className="box">
        <h1 id="join">Join our community</h1>

        <h2 id="join-sub">30-day, hassle-free money back guarantee</h2>
        <p className="gray-p">
          Gain access to our full library of tutorials along with expert code
          reviews. Perfect for any developers who are serious about honing their
          skills.
        </p>
      </section>
      <section id="bottom">
        <article id="subscription" className="box">
          <h2 id="subscription-header">Monthly Subscription</h2>
          <p id="price" className="margin-top">
            <span className="big">&#36;29</span>
            <span className="small">per month</span>
          </p>
          <p className="margin-top">Full access for less than &#36;1 a day</p>
          <a href="#" id="sing-up" className="button">
            Sign Up
          </a>
        </article>
        <article id="why" className="box">
          <h2 id="why-header">Why Us</h2>
          <ul id="why-list">
            <li>Tutorials by industry experts</li>
            <li>Peer &amp; expert code review</li>
            <li>Coding exercises</li>
            <li>Access to our GitHub repos</li>
            <li>Community forum</li>
            <li>Flashcard decks</li>
            <li>New videos every week</li>
          </ul>
        </article>
      </section>
    </main>
  );
}

export default SinglePriceGrid;
