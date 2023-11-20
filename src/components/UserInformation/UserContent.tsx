import { useEffect, useState } from "react";
import { Loader } from "../Loader/Loader";
import { GitIcon } from "././Icons/GitIcon";
import { CompanyIcon } from "./Icons/CompanyIcon";
import { FellowsIcon } from "./Icons/FellowsIcon";
import { GitLinkIcon } from "./Icons/GitLinkIcon";

import "./UserContent.css";

export function UserContent() {

  const [userInfo, setInfo] = useState({
    userName: "",
    userBio: "",
    userGit: "",
    userCompany: "",
    userFellows: 0,
  });

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getUserInfo() {
      // setIsLoading(true);
      const user = await fetch("https://api.github.com/users/mariano1994");
      const userData = await user.json();
      setInfo({
        userName: userData.name,
        userBio: userData.bio,
        userGit: userData.login,
        userCompany: userData.company,
        userFellows: userData.followers,
      })
      // setIsLoading(false)
    }
    getUserInfo();
  }, [isLoading]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="title">
            <h2>{userInfo.userName}</h2>

            <div className="git-link">
              <a href="https://github.com/mariano1994" target="_blanck">
                Github
              </a>
              <GitLinkIcon />
            </div>
          </div>

          <div className="content">
            <p>{userInfo.userBio}</p>
          </div>

          <div className="user-info">
            <div className="user-name">
              <GitIcon />
              <span>{userInfo.userGit}</span>
            </div>

            <div className="user-company">
              <CompanyIcon />
              <span>{userInfo.userCompany}</span>
            </div>

            <div className="user-fellows">
              <FellowsIcon />
              <span>{userInfo.userFellows} followers</span>
            </div>
          </div>
        </>
      )}
    </>
  );
}
