import LoginForm from "../../../components/login/loginform"


export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen" style={{
      backgroundImage: "url('/img/backgroundgirls.png')",
      backgroundSize: "cover",
      backgroundAttachment: "fixed", 
    }}>
      <LoginForm/>
    </div>
  );
}