import Header from "../../components/header/Header";
import mediaQueries from "../../assets/css/mediaQueries.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "../../assets/css/App.module.css";

interface IFormInput {
  select_merchnat: string;
  select_bank: string;
  account_issuer: string;
  account_issuer_name: string;
  account_name: string;
  account_number: string;
  amount: string;
  start_date: Date;
  end_date: Date;
  description: string;
}

const SettlementForm = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <>
      <Header>
        <div
          className={`col-md-8 d-flex align-items-center justify-content-start ${mediaQueries.header_height}`}
        >
          <h6 className="text-danger m-0">Add New Administrator</h6>
        </div>
      </Header>

      {/* Form */}
      <div className="container">
        <div className="row m-0 w-100 h-100 py-5 d-flex align-items-center justify-content-center">
          <div className={`col-12 col-lg-10 ${mediaQueries.form_width}`}>
            <h6 className="text-danger m-0 pb-4 d-flex d-lg-none mb-4">
              Add New Administrator
            </h6>
            <div
              className={`card w-100 d-flex align-items-center justify-content-center border-0 py-5 rounded ${styles.box_shadow}`}
            >
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-100 h-100 px-4 pe-lg-auto d-flex flex-column align-items-center justify-content-center"
              >
                <div className="row w-100 h-100 d-flex justify-content-center align-items-center">
                  <div className="col-md-6">
                    <div className="form-control border-0 px-0 d-flex flex-column">
                      <label className="px-2">Select Merchant</label>
                      <select
                        id="select_merchnat"
                        {...register("select_merchnat")}
                        className={`mt-3 py-2 px-2 rounded ${styles.border_color}`}
                        defaultValue="select"
                      >
                        <option value="select" disabled>
                          Select merchant
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
                  </div>
                  <div className="col-md-6">
                    <div className="form-control border-0 px-0 d-flex flex-column">
                      <label className="px-2">Select Bank</label>
                      <select
                        id="select_bank"
                        {...register("select_bank")}
                        className={`mt-3 py-2 px-2 rounded ${styles.border_color}`}
                        defaultValue="select"
                      >
                        <option value="select" disabled>
                          Select bank
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
                  </div>
                  <div className="col-md-6">
                    <div className="form-control border-0 px-0 d-flex flex-column">
                      <label className="px-2">Account Issuer</label>
                      <input
                        type="text"
                        {...register("account_issuer")}
                        className={`mt-3 py-2 px-2 rounded ${styles.border_color}`}
                        placeholder="Account Issuer"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-control border-0 px-0 d-flex flex-column">
                      <label className="px-2">Account Issuer Name</label>
                      <input
                        type="text"
                        {...register("account_issuer_name")}
                        className={`mt-3 py-2 px-2 rounded ${styles.border_color}`}
                        placeholder="Account Issuer Name"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="form-control border-0 px-0 d-flex flex-column">
                      <label className="px-2">Account Number</label>
                      <input
                        type="text"
                        {...register("account_number")}
                        className={`mt-3 py-2 px-2 rounded ${styles.border_color}`}
                        placeholder="Account Number"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="form-control border-0 px-0 d-flex flex-column">
                      <label className="px-2">Account Name</label>
                      <input
                        type="text"
                        {...register("account_name")}
                        className={`mt-3 py-2 px-2 rounded ${styles.border_color}`}
                        placeholder="Account Name"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="form-control border-0 px-0 d-flex flex-column">
                      <label className="px-2">Amount</label>
                      <input
                        type="text"
                        {...register("amount")}
                        className={`mt-3 py-2 px-2 rounded ${styles.border_color}`}
                        placeholder="Amount"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-control border-0 px-0 d-flex flex-column">
                      <label className="px-2">Start date</label>
                      <input
                        type="date"
                        {...register("start_date")}
                        className={`mt-3 py-2 px-2 rounded ${styles.border_color}`}
                        placeholder="Start date"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-control border-0 px-0 d-flex flex-column">
                      <label className="px-2">End Date</label>
                      <input
                        type="date"
                        {...register("end_date")}
                        className={`mt-3 py-2 px-2 rounded ${styles.border_color}`}
                        placeholder="End Date"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-control border-0 px-0 d-flex flex-column">
                      <label className="px-2">Description</label>
                      <textarea
                        id="description"
                        {...register("description")}
                        className={`mt-3 py-2 px-2 rounded ${styles.border_color}`}
                        autoComplete="off"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-8">
                    <div className="form-control border-0 px-0 mt-4">
                      <button
                        type="submit"
                        className={`w-100 border py-2 bg-danger text-white rounded`}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettlementForm;
