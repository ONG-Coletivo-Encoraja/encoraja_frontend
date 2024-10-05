import RecoverPassForm from "@/components/recoverPass/recoverPass";

export default function RecoverPassPage() {
    return (
        <div 
            className="flex items-center justify-center min-h-screen" 
            style={{
                backgroundImage: "url('/img/backgroundgirls.png')",
                backgroundSize: "cover",
                backgroundAttachment: "fixed", 
            }}
        >
            <RecoverPassForm />
        </div>
    );
}
