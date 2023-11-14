import "./UserInformation.css";
import { UserAvatar } from "./UserAvatar";
import { GitIcon } from "././Icons/GitIcon";
import { CompanyIcon } from "./Icons/CompanyIcon";
import { FellowsIcon } from "./Icons/FellowsIcon";
import { GitLinkIcon } from "./Icons/GitLinkIcon";
export function UserInformation() {
  return (
    <>
      <div className="user-wrapper">
        <UserAvatar />
        <div className="user-informations">
          <div className="title">
            <h2>Mariano Capiliku</h2>

            <div className="git-link">
              <a href="https://github.com/mariano1994" target='_blanck'>Github</a>
              <GitLinkIcon />
            </div>
          </div>

          <div className="content">
            <p>
              I am a dedicated and passionate Software Engineer with background
              in front-end development, specializing in ReactJS and TypeScript.
            </p>
          </div>

          <div className="user-info">
            <div className="user-name">
              <GitIcon />
              <span>Mariano1994</span>
            </div>

            <div className="user-company">
              <CompanyIcon />
              <span>Pcsnet</span>
            </div>

            <div className="user-fellows">
              <FellowsIcon />
              <span>3 fellows</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
