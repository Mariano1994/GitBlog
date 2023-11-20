import "./EmptyMessage.css";
import { EmptyMessageIcon } from "../UserInformation/Icons/EmptyMessageIcon";
export function EmptyMessage() {
  return (
    <>
      <div className="empty-message">
        <EmptyMessageIcon size="48" />
        <div className="empty-message-content">
          <span> Loading...</span>
        </div>
      </div>
    </>
  );
}
