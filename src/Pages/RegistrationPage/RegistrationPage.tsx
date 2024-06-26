import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../Elements/Btn";
import { Input } from "../../Elements/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { login } from "../../Redux-Toolkit/Slices/UserSlices";
import * as yup from "yup";
import s from "./RegistrationPage.module.css";
import visible from "../../Assets/icons/visible_iconsvg.svg";
import notvisible from "../../Assets/icons/notvisible_icon.svg";
import email_icon from "../../Assets/icons/FormIcons/email_icon.svg";
import user_icon from "../../Assets/icons/FormIcons/user_icon.svg";
import { useState } from "react";
import { ApiRegistration, UserRegister } from "../../Https/Https";

// Схема валидации
const schema = yup.object({
  username: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Please confirm your password"),
});

export default function RegisterPage() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [password, setPassword] = useState(""); 

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserRegister>({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  const onSubmit = async (data: UserRegister) => {
    try {
      console.log(data);
      const response = await ApiRegistration(data);
      console.log("Registration successful:", response.data);
      dispatch(login(response.data));
      navigate("/"); 
    } catch (error: any) {
      if (error.response) {
        console.error("Ошибка регистрации:", error.response.data);
      } else if (error.request) {
        console.error("Ошибка запроса:", error.request);
      } else {
        console.error("Ошибка:", error.message);
      }
    }
  };

  return (
    <div className={s.register_page}>
      <div className={s.register_page_greeting}>
        <h1>Sign up for delicious</h1>
        <h1>
          <strong>Discoveries!</strong>
        </h1>
      </div>
      <div className={s.register_form_wrapper}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={s.input_block}>
            <label htmlFor="username">Name</label>
            <div className={s.input_wrapper}>
              <Input
                type="text"
                id="username"
                {...register("username")}
                placeholder="Enter your name"
              />
              <button type="button">
                <img src={user_icon} alt="user_icon" />
              </button>
            </div>
            <p className={s.valid_error}>{errors.username?.message}</p>
          </div>
          <div className={s.input_block}>
            <label htmlFor="email">Gmail</label>
            <div className={s.input_wrapper}>
              <Input
                type="email"
                id="email"
                {...register("email")}
                placeholder="Enter your Email"
              />
              <button type="button">
                <img src={email_icon} alt="email_icon" />
              </button>
            </div>
            <p className={s.valid_error}>{errors.email?.message}</p>
          </div>
          <div className={s.input_block}>
            <label htmlFor="password">Password</label>
            <div className={s.input_wrapper}>
              <Input
                type={passwordVisible ? "text" : "password"}
                id="password"
                placeholder="Enter your Password"
                {...register("password")}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
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
          <div className={s.input_block}>
            <label htmlFor="confirmPassword">Re-Password</label>
            <div className={s.input_wrapper}>
              <Input
                type={confirmPasswordVisible ? "text" : "password"}
                id="confirmPassword"
                placeholder="Re-Enter your Password"
                {...register("confirmPassword")}
              />
              <button
                onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                type="button"
              >
                <img
                  src={confirmPasswordVisible ? visible : notvisible}
                  alt="eye"
                />
              </button>
            </div>
            <p className={s.valid_error}>{errors.confirmPassword?.message}</p>
          </div>

          <ul className="text-start list-disc mx-6 text-[#767676] font-medium text-xs">
            <li className={`${!password ? "text-gray-500" : password.length >= 8 && password.length <= 15 ? "text-green-500" : "text-red-500"}`}>
              От 8 до 15 символов {password && password.length >= 8 && password.length <= 15 ? "✅" : "❌"}
            </li>
            <li className={`${!password ? "text-gray-500" : /[a-z]/.test(password) && /[A-Z]/.test(password) ? "text-green-500" : "text-red-500"}`}>
              Строчные и прописные буквы {password && /[a-z]/.test(password) && /[A-Z]/.test(password) ? "✅" : "❌"}
            </li>
            <li className={`${!password ? "text-gray-500" : /[0-9]/.test(password) ? "text-green-500" : "text-red-500"}`}>
              Минимум 1 цифра {password && /[0-9]/.test(password) ? "✅" : "❌"}
            </li>
            <li className={`${!password ? "text-gray-500" : /[!@#$%^&*()_+=[\]{};':"\\|,.<>/?]/.test(password) ? "text-green-500" : "text-red-500"}`}>
              Минимум 1 спецсимвол (!, #, $...) {password && /[!@#$%^&*()_+=[\]{};':"\\|,.<>/?]/.test(password) ? "✅" : "❌"}
            </li>
          </ul>

          <Button type="submit">Sign Up</Button>
        </form>
        <div className={s.link_to_register}>
          Already have an account? <Link to={"/login"} style={{ textDecoration: 'none', color: 'orange' }}>Sign In Now</Link>
        </div>
      </div>
    </div>
  );
}
