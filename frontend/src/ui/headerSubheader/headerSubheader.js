import "./headerSubheader.css"

export default function HeaderSubheader({ header, subheader }) {
  return (
    <div className="main_container2">
      <div className="header_container2">
        {header}
      </div>
      <div className="subheader_container2">
        <span>{subheader}</span>
      </div>
    </div>
  );
}