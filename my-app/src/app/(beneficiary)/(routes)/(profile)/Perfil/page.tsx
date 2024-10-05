import BackgroundImage from '@/components/ui/background-image';
import { Profile } from '@/components/beneficiary/profile/profile';

export default function Perfil() {
  return (
    <div className="h-screen">
      <div className="h-full w-full flex items-center justify-center" style={{
      backgroundImage: "url('/img/backgroundgirls.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
        <Profile />
      </div>
    </div>
  );
};
