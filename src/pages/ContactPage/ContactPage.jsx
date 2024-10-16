import { ReactComponent as Facebook } from "../../assets/сontacts/facebook.svg";
import { ReactComponent as Linkedin } from "../../assets/сontacts/linkedin.svg";
import { ReactComponent as Telegram } from "../../assets/сontacts/telegram.svg";
import { ReactComponent as Viber } from "../../assets/сontacts/viber.svg";
import { ReactComponent as Whatsup } from "../../assets/сontacts/whatsapp.svg";
import { ReactComponent as Email } from "../../assets/сontacts/email.svg";

const ContactPage = () => {
  return (
    <div style={{ padding: 10 }}>
      <h2 style={{ color: "#fff", margin: 0, paddingLeft: 10 }}>
        <span style={{ color: "#C778DD" }}>/</span>contacts
      </h2>
      <ul style={{ listStyle: "none" }}>
        <li>
          <Facebook width={50} height={50} />
        </li>
        <li>
          <Linkedin width={50} height={50} />
        </li>
        <li>
          <Telegram width={50} height={50} />
        </li>
        <li>
          <Viber width={50} height={50} />
        </li>
        <li>
          <Whatsup width={50} height={50} />
        </li>
        <li>
          <Email width={50} height={50} />
        </li>
      </ul>
    </div>
  );
};
export default ContactPage;
