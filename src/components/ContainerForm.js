import Form from "./Form";

function ContainerForm(props) {
  return (
    <>
      <div className="text-center mt-3">
        <h3 className="font-Oswald text-2xl">Get NBA Games Statistics</h3>
      </div>
      <div className="text-center border-2 rounded-lg w-3/4 mx-auto mt-3">
        <Form
          setYear={props.functions[2]}
          setMonth={props.functions[1]}
          setDay={props.functions[0]}
          request={props.functions[3]}
        />
      </div>
    </>
  );
}

export default ContainerForm;
