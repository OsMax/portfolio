import { ReactComponent as Facebook } from "../../assets/сontacts/facebook.svg";
import { ReactComponent as Linkedin } from "../../assets/сontacts/linkedin.svg";
import { ReactComponent as Telegram } from "../../assets/сontacts/telegram.svg";
import { ReactComponent as Viber } from "../../assets/сontacts/viber.svg";
import { ReactComponent as Whatsup } from "../../assets/сontacts/whatsapp.svg";
import { ReactComponent as Email } from "../../assets/сontacts/email.svg";

import css from "./ContactPage.module.css";

const ContactPage = () => {
  return (
    <div style={{ padding: 10 }}>
      <h2 style={{ color: "#fff", margin: 0, paddingLeft: 10 }}>
        <span style={{ color: "#C778DD" }}>/</span>contacts
      </h2>
      <ul style={{ listStyle: "none", maxWidth: 600 }} className={css.list}>
        <li className={css.item}>
          <a
            className={css.link}
            href="https://www.facebook.com/max.os.10"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook width={50} height={50} />
            <p className={css.text}>facebook.com/max.os.10</p>
          </a>
        </li>
        <li className={css.item}>
          <a
            className={css.link}
            href="https://www.linkedin.com/in/maksym-osovik/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin width={50} height={50} />
            <p className={css.text}>linkedin.com/in/maksym-osovik</p>
          </a>
        </li>
        <li className={css.item}>
          <a
            className={css.link}
            href="https://t.me/Os_Max"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Telegram width={50} height={50} />
            <p className={css.text}>t.me/Os_Max</p>
          </a>
        </li>
        <li className={css.item}>
          <a
            className={css.link}
            href="viber://chat?number=+380665553093"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Viber width={50} height={50} />
            <p className={css.text}>380665553093</p>
          </a>
        </li>
        <li className={css.item}>
          <a
            className={css.link}
            href="https://wa.me/380665553093"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Whatsup width={50} height={50} />
            <p className={css.text}>380665553093</p>
          </a>
        </li>
        <li className={css.item}>
          <a
            className={css.link}
            href="mailto:www.osmax@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Email width={50} height={50} />
            <p className={css.text}>www.osmax@gmail.com</p>
          </a>
        </li>
      </ul>
    </div>
  );
};
export default ContactPage;
