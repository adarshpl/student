import "./Tileview.css";

function Tileview(props: any) {
  return (
    <div>
      <div className="grid">
        {props.students.map((item: any, key: any) => {
          if (key < props.count) {
            return (
              <div className="div">
                <h4>{item.name}</h4>
                <h4>{item.email}</h4>
                <h4>{item.phone}</h4>
                <h4>{item.zip}</h4>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
export default Tileview;
