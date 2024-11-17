import ForgotPassPage from "@/components/forgotPass/forgotPass";

export default function ForgotPass() {
    return (
        <div className="flex items-center justify-center min-h-screen" style={{
            backgroundImage: "url('/img/backgroundgirls.png')",
            backgroundSize: "cover",
            backgroundAttachment: "fixed", 
          }}>
            <ForgotPassPage/>
          </div>
    );
}