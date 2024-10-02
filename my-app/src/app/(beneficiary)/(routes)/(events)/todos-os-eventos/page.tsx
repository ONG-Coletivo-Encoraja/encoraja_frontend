import { EventsList } from '@/components/beneficiary/events/eventsList';

export default function Events() {
  return (
    <div className="h-screen">
      <div className="h-full w-full flex items-center justify-center bg-[#ededed]" >
        <EventsList />
      </div>
    </div>
  );
};
