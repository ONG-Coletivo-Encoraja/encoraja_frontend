import BackgroundImage from '@/components/ui/background-image';
import { EventsList } from '@/components/beneficiary/events/eventsList';

export default function Events() {
  return (
    <div className="h-screen">
      <div className="h-full w-full flex items-center justify-center"  style={{
        backgroundImage: "url('/img/backgroundgirls.png')",
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        backgroundAttachment: "fixed", 
      }}>
    
        <EventsList />
      </div>
    </div>
  );
};
