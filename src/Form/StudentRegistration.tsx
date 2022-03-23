import "./Form.css";
import { useForm } from "react-hook-form";

function Form(props: any) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField
  } = useForm();

  const submit = (data: any, e: any) => {
    props.setStudents([
      {
        name: data.name,
        email: data.email,
        phone: data.phone,
        zip: data.zip
      },
      ...props.students
    ]);

    props.setCount(Number(props.count) + 1);
  };

  const reset = (data: any) => {
    resetField("name"),
      resetField("phone"),
      resetField("email"),
      resetField("zip");
  };
  const onError = (errors: any) => {};
  return (
    <div className="App">
      <main role="main">
        <form onSubmit={handleSubmit(submit, onError)} id="js-form">
          <div className="form-group">
            <label htmlFor="username">Name</label>
            {errors?.name?.type === "required" ? (
              <h5 style={{ color: "red" }}>this field required</h5>
            ) : null}
            {errors?.name?.type === "maxLength" ? (
              <h5 style={{ color: "red" }}>max length exceeded</h5>
            ) : null}

            <input
              type="text"
              id="name"
              {...register("name", { required: true, maxLength: 30 })}
              className="form-field"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            {errors?.email?.type === "required" ? (
              <h5 style={{ color: "red" }}>this field required</h5>
            ) : null}
            {errors?.email?.type === "pattern" ? (
              <h5 style={{ color: "red" }}>Email is not valid</h5>
            ) : // alert("this field required")
            null}

            <input
              type="text"
              id="email"
              {...register("email", {
                required: true,
                pattern: {
                  value: /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i,
                  message: "Email is not valid"
                }
              })}
              placeholder="examble@gmail.com"
              className="form-field"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Num</label>
            {errors?.phone?.type === "required" ? (
              <h5 style={{ color: "red" }}>this field required</h5>
            ) : null}
            {errors?.phone?.type === "maxLength" ? (
              <h5 style={{ color: "red" }}>maxLength exceeded</h5>
            ) : null}

            <input
              type="number"
              id="Phone"
              {...register("phone", { required: true, maxLength: 15 })}
              placeholder="123-45-678"
              className="form-field"
            />
          </div>
          <div className="form-group">
            <label htmlFor="zip">Zip Code</label>

            <input
              type="number"
              id="zip"
              {...register("zip", { minLength: 6, maxLength: 6 })}
              placeholder="123456"
              className="form-field"
            />
          </div>
          <div className="form-controls">
            <button className="button" type="submit">
              Submit
            </button>
            <button className="button" onClick={reset}>
              Reset
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
export default Form;
