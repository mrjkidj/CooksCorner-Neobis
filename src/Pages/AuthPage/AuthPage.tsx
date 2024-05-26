import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../Elements/Btn";
import { Input } from "../../Elements/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { login } from "../../Redux-Toolkit/Slices/UserSlices";
import * as yup from "yup";
import s from "./AuthPage.module.css";
import visible from "../../Assets/icons/visible_iconsvg.svg";
import notvisible from "../../Assets/icons/notvisible_icon.svg";
import email_icon from "../../Assets/icons/FormIcons/email_icon.svg";
import { useState } from "react";
import { ApiAuth } from "../../Https/Https";

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [passwordVisible, setPasswordVisible] = useState(false);

  interface IFormValues {
    email: string;
    password: string;
  }

  const schema = yup.object({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormValues>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: IFormValues) => {
    try {
      const response = await ApiAuth(data);
      console.log(response.data);
      dispatch(login(response.data)); 
      navigate("/");
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <div className={s.login_page}>
      <div className={s.login_page_greeting}>
        <h1>Welcome Back</h1>
        <h1>
          To <strong>CooksCorner</strong>
        </h1>
      </div>
      <div className={s.login_form_wrapper}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={s.input_block}>
            <label htmlFor="email">Email</label>
            <div className={s.input_wrapper}>
              <Input
                type="email"
                id="email"
                placeholder="Enter your Email"
                {...register("email")}
              />
              <button type="button">
                <img src={email_icon} alt="eye" />
              </button>
            </div>
            <p className={s.valid_error}>{errors.email?.message}</p>
          </div>
          <div className={s.input_block}>
            <label htmlFor="password">Password</label>
            <div className={s.input_wrapper}>
              <Input
                type={passwordVisible ? "text" : "password"}
                placeholder="Enter your Password"
                id="password"
                {...register("password")}
              />
              <button
                type="button"
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                <img src={passwordVisible ? visible : notvisible} alt="eye" />
              </button>
            </div>
            <p className={s.valid_error}>{errors.password?.message}</p>
          </div>
          <Button type="submit">Sign In</Button>
        </form>
        <div className={s.link_to_register}>
          I don't have an account? <Link to={"/register"} style={{ textDecoration: 'none', color: 'orange' }}>Sign Up Now</Link>
        </div>
      </div>
    </div>
  );
}
