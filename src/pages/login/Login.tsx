import { useForm, SubmitHandler } from "react-hook-form";
import Logo from "/images/logo.png";
import Logo_SM from "/images/logo.svg";
import styles from "../../assets/css/App.module.css";
import mediaQueries from "../../assets/css/mediaQueries.module.css";

interface IFormInput {
    email: string;
    password: string;
}

const Login = () => {
    const { register, handleSubmit } = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
    return (
        <>
            <section className="container d-flex justify-content-center align-items-center overflow-y-auto w-100 h-100">
                <div className={`row m-0 py-5 py-lg-0 bg-white p-0 m-0 rounded ${styles.box_shadow} ${mediaQueries.form_card}`}>
                    <div className="col-lg-6 h-100 d-md-none d-none d-lg-block p-0">
                        <img
                            src={Logo}
                            alt="PeoplesPay logo"
                            className="w-100 h-100 d-flex mx-auto my-auto object-fit-fill"
                        />
                    </div>
                    <div className="col-12 d-flex d-lg-none w-100 h-100 p-0">
                        <img
                            src={Logo_SM}
                            alt="PeoplesPay logo"
                            className="w-75 h-50 d-flex mx-auto mb-5 object-fit-cover"
                        />
                    </div>
                    <div className="col-12 col-lg-6 p-0 px-lg-5 h-100">
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="w-100 h-100 px-3 pe-lg-auto d-flex flex-column align-items-center justify-content-center"
                        >
                            <h4 className="d-md-none d-none d-lg-block">Login with your admin credentials</h4>
                            <h6 className="d-flex d-lg-none">Login with your admin credentials</h6>
                            <div
                                className="form-control border-0 px-0 d-flex flex-column"
                            >
                                <label className="px-2">Email</label>
                                <input
                                    type="text"
                                    {...register("email")}
                                    className={`mt-2 py-2 px-2 rounded ${styles.border_color}`}
                                    placeholder="Email"
                                    autoComplete="off"
                                />
                            </div>

                            <div
                                className="form-control border-0 px-0 d-flex flex-column"
                            >
                                <label className="px-2">Password</label>
                                <input
                                    type="password"
                                    {...register("password")}
                                    className={`mt-2 py-2 px-2 rounded ${styles.border_color}`}
                                    placeholder="Password"
                                    autoComplete="off"
                                />
                            </div>

                            <div className="form-control border-0 px-0 mt-4">
                                <button
                                    type="submit"
                                    className={`w-100 border py-2 bg-danger text-white rounded`}
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>



        </>
    );
};

export default Login;

