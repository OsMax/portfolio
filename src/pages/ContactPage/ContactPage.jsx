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
          <a
            href="https://www.facebook.com/max.os.10"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook width={50} height={50} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/maksym-osovik/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin width={50} height={50} />
          </a>
        </li>
        <li>
          <a
            href="https://t.me/Os_Max"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Telegram width={50} height={50} />
          </a>
        </li>
        <li>
          <a
            href="viber://chat?number=+380665553093"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Viber width={50} height={50} />
          </a>
        </li>
        <li>
          <a
            href="https://wa.me/380665553093"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Whatsup width={50} height={50} />
          </a>
        </li>
        <li>
          <a
            href="mailto:www.osmax@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Email width={50} height={50} />
          </a>
        </li>
      </ul>
    </div>
  );
};
export default ContactPage;
