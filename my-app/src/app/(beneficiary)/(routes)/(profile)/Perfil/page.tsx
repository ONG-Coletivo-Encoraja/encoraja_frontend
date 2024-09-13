import BackgroundImage from '@/components/ui/background-image';
import { Profile } from '@/components/beneficiary/profile/profile';

export default function Perfil() {
  return (
    <div className="h-screen">
      <BackgroundImage className="h-full w-full flex items-center justify-center">
        <Profile />
      </BackgroundImage>
    </div>
  );
};
