import Attachment from "../assets/gifs/attachment.gif";
import "./Feature.css";

const Feature = () => {
  return (
    <>
      <section className="feature">
        <div className="header-wrapper">
          <h2>Virtual Gifting With A Personal Touch</h2>
          <p>
            You can't always be there in person for special celebrations, but
            you can always send your regards and congratulations through email
            or text.
            <i>It's the thought that counts!!</i> Through Moola, you can send
            gifts from big and niche brands to your loved ones instantly.
          </p>
        </div>
        <div className="content-wrapper">
          <img src={Attachment} alt="" />
          <div className="description-1">
            <h3>
              Hassle-free
              <span> long distance gift giving</span>
            </h3>
            <p>
              Say goodbye to the stress of finding the perfect gift and having
              it arrive on-time. With Moola, you can easily search, purchase and
              send digital gift cards in less than 1 minute.
            </p>
          </div>
          <div className="description-2">
            <h3>
              Monitor gift delivery as if
              <span> you're there</span>
            </h3>
            <p>
              Stop questioning if a recipient has received your gift. Track gift
              card delivery and open rates on the Moola App.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Feature;
