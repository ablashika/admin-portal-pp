import Header from "../../components/header/Header";
import mediaQueries from "../../assets/css/mediaQueries.module.css";
import { SubmitHandler, useForm } from "react-hook-form";
import styles from "../../assets/css/App.module.css";

interface IFormInput {
  document_name: string;
  select_client: string;
  role: File;
}

const Documents = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  return (
    <>
      <Header>
        <div
          className={`col-md-8 d-flex align-items-center justify-content-start ${mediaQueries.header_height}`}
        >
          <h6 className="text-danger m-0">Add Documents</h6>
        </div>
      </Header>

      {/* Form */}
      <div className="container">
        <div className="row m-0 w-100 h-100 py-5 d-flex align-items-center justify-content-center">
          <div className={`col-12 col-lg-6 ${mediaQueries.form_width}`}>
            <h6 className="text-danger m-0 pb-4 d-flex d-lg-none mb-4">
              Add Documents
            </h6>
            <div
              className={`card w-100 d-flex align-items-center justify-content-center border-0 py-5 rounded ${styles.box_shadow}`}
            >
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-100 h-100 px-4 pe-lg-auto d-flex flex-column align-items-center justify-content-center"
              >
                <div className="form-control border-0 px-0 d-flex flex-column">
                  <label className="px-2">Select Client</label>
                  <select
                    id="select_client"
                    {...register("select_client")}
                    className={`mt-3 py-2 px-2 rounded ${styles.border_color}`}
                    defaultValue="select"
                  >
                    <option value="select" disabled>
                      Select client
                    </option>
                    <option value="super admin">Super Admin</option>
                    <option value="support officer">Support Officer</option>
                    <option value="operations officer">
                      Operations Officer
                    </option>
                    <option value="finance officer">Finance Officer</option>
                    <option value="auditor">Auditor</option>
                  </select>
                </div>

                <div className="form-control border-0 px-0 d-flex flex-column">
                  <label className="px-2">Document Name</label>
                  <input
                    type="text"
                    {...register("document_name")}
                    className={`mt-3 py-2 px-2 rounded ${styles.border_color}`}
                    placeholder="Document Name"
                    autoComplete="off"
                  />
                </div>

                <div className="form-control border-0 px-0 d-flex flex-column">
                  <label className="px-2">Document</label>
                  <input
                    type="file"
                    {...register("document_name")}
                    className={`mt-3 py-2 px-2 rounded ${styles.border_color}`}
                    placeholder="Document Name"
                    autoComplete="off"
                  />
                </div>

                <div className="form-control border-0 px-0 mt-4">
                  <button
                    type="submit"
                    className={`w-100 border py-2 bg-danger text-white rounded`}
                  >
                    Upload
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Documents;
