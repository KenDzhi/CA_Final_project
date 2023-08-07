import { Form } from "react-bootstrap";

const AttributesFilterComponent = () => {
  return (
    <>
      {[
        { Platform: ["PC", "Xbox", "Playstation", "Nintendo"] },
        { Color: ["Red", "Blue", "Green"] }
      ].map((item, i) => (
        <div key={i} className="mb-3">
          <Form.Label><b>{Object.keys(item)}</b></Form.Label>
          {item[Object.keys(item)].map((item,i) => (
            <Form.Check key={i} type="checkbox" id="default-checkbox" label={item} />
          ))}
        
        </div>
      ))}
    </>
  );
};

export default AttributesFilterComponent;
