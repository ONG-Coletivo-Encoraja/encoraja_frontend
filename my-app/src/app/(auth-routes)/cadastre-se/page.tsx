import RegisterForm from "../../../components/register/registerform";

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen p-0" style={{
      backgroundImage: "url('/img/backgroundgirls.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
      <RegisterForm />
    </div>
  );
}