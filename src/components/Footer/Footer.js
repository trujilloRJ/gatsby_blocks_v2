import React from "react"
import footerStyles from "./Footer.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faGoogle,
  faFacebook,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons"

export default function Footer({ siteTitle }) {
  return (
    <>
      <div className={footerStyles.footer}>
        <div className={footerStyles.footer__name}>{siteTitle} &copy; 2020</div>
        <div className={footerStyles.footer__socials}>
          <div className={footerStyles.social__cont}>
            <a href="#">
              <FontAwesomeIcon icon={faFacebook} size="1x" />
            </a>
          </div>
          <div className={footerStyles.social__cont}>
            <a href="#">
              <FontAwesomeIcon icon={faTwitter} size="1x" />
            </a>
          </div>
          <div className={footerStyles.social__cont}>
            <a href="#">
              <FontAwesomeIcon icon={faYoutube} size="1x" />
            </a>
          </div>
          <div className={footerStyles.social__cont}>
            <a href="#">
              <FontAwesomeIcon icon={faGoogle} size="1x" />
            </a>
          </div>
          <div className={footerStyles.social__cont}>
            <a href="#">
              <FontAwesomeIcon icon={faGithub} size="1x" />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
