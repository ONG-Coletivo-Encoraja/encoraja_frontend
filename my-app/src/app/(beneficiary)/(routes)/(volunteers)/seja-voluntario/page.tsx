import BackgroundImage from '@/components/ui/background-image';
import { BeAVolunteer } from '@/components/beneficiary/beavolunteer/volunteerform';

export default function Perfil() {
  return (
    <div className='h-screen'>
    <BackgroundImage className="h-full w-full flex items-center justify-center">
        <BeAVolunteer />
    </BackgroundImage>
    </div>

  );
};
