import "../styles/popUpModel.css"

export default function PopUpModel({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="popup_model_overlay">
      <div className="popup_model_content">
        <button className="popup_model_closebutton" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}
