import ForgotPassForm from "@/components/forgotPass/forgotPass";

export default function ForgetPassPage() {
    return (
        <div className="flex items-center justify-center min-h-screen" style={{
            backgroundImage: "url('/img/backgroundgirls.png')",
            backgroundSize: "cover",
            backgroundAttachment: "fixed", 
          }}>
            <ForgotPassForm/>
          </div>
    );
}