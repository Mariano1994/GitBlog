import "./EmptyMessage.css";
import { EmptyMessageIcon } from "../UserInformation/Icons/EmptyMessageIcon";
export function EmptyMessage() {
  return (
    <>
      <div className="empty-message">
        <EmptyMessageIcon size="48" />
        <div className="empty-message-content">
          <span> Sem publicações no momento</span>
          <span> Crie publicações e compartilhe com outras pessoas</span>
        </div>
      </div>
    </>
  );
}
