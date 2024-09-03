import BackgroundImage from '@/components/ui/background-image';
import { EventsList } from '@/components/beneficiary/events/eventsList';

export default function Perfil() {
  return (
    <div className="h-screen">
      <BackgroundImage className="h-full w-full flex items-center justify-center">
        
        <EventsList />
      </BackgroundImage>
    </div>
  );
};
