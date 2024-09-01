import BackgroundImage from '@/components/ui/background-image';
import { Events } from '@/components/beneficiary/events/events';

export default function Perfil() {
  return (
    <div className="h-screen">
      <BackgroundImage className="h-full w-full flex items-center justify-center">
        <Events />
      </BackgroundImage>
    </div>
  );
};
