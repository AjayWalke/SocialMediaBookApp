import "./headerSubheader.css"

export default function HeaderSubheader({ header, data }) {
  const restrictedKeys = ["id", "password", "created_at", "updated_at"];
  const filteredEntries = Object.entries(data).filter(
    ([key, value]) => !restrictedKeys.includes(key)
  );
  return (
    <div className="main_container2">
      <div className="header_container2">
        {header}
      </div>
      <div className="subheader_container2">
        {
          filteredEntries.map(([key, value], index) => (
            <div key={index} className="data_container">
              <span className="data_key">{key.toUpperCase()}: </span>
              <span className="data_value">{value}</span>
            </div>
          ))
        }
      </div>
    </div>
  );
}