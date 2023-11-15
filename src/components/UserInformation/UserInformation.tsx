import "./UserInformation.css";
import { UserAvatar } from "./UserAvatar";
import { UserContent } from "./UserContent";

export function UserInformation() {
  return (
    <>
    <div className="wrapper-content">

    </div>
      <div className="user-wrapper">
        <UserAvatar />
        <div className="user-informations">
        <UserContent/>
        </div>
      </div>
    </>
  );
}
