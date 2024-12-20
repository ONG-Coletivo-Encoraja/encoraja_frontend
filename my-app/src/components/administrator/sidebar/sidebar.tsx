'use client';

import { Fragment, useState } from 'react';
import Link from 'next/link';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { NavItems } from '@/app/(authenticated)/(config)/(administrator)/config';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function SideNav({ initialExpanded, toggleSidebar }: { initialExpanded: boolean, toggleSidebar: () => void }) {
  const navItems = NavItems();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(initialExpanded);

  const handleToggle = () => {
    const newSidebarState = !isSidebarExpanded;
    setIsSidebarExpanded(newSidebarState);
    sessionStorage.setItem('sidebarExpanded', newSidebarState.toString());
    toggleSidebar();
  };

  return (
    <div className="flex h-screen mt-[65px]">
      <div
        className={cn(
          isSidebarExpanded ? 'w-[250px]' : 'w-[68px]',
          'border-r transition-all duration-300 ease-in-out transform flex h-full bg-white'
        )}
      >
        <aside className="flex h-full flex-col w-full break-words px-4 overflow-x-hidden columns-1">
          <div className="mt-4 relative pb-2">
            <div className="flex flex-col space-y-1 gap-5">
              {navItems.map((item, idx) => {
                if (item.position === 'top') {
                  return (
                    <Fragment key={idx}>
                      <div className="space-y-1">
                        <SideNavItem
                          label={item.name}
                          icon={item.icon}
                          path={item.href}
                          active={item.active}
                          isSidebarExpanded={isSidebarExpanded}
                        />
                      </div>
                    </Fragment>
                  );
                }
              })}
            </div>
          </div>
          <div className="sticky bottom-0 mt-auto whitespace-nowrap mb-4 transition duration-200 block">
            {navItems.map((item, idx) => {
              if (item.position === 'bottom') {
                return (
                  <Fragment key={idx}>
                    <div className="space-y-1">
                      <SideNavItem
                        label={item.name}
                        icon={item.icon}
                        path={item.href}
                        active={item.active}
                        isSidebarExpanded={isSidebarExpanded}
                      />
                    </div>
                  </Fragment>
                );
              }
            })}
          </div>
        </aside>
        <div className="mt-[calc(calc(90vh)-40px)] relative">
          <button
            type="button"
            className="absolute bottom-32 right-[-12px] flex h-6 w-6 items-center justify-center border border-muted-foreground/20 rounded-full bg-accent shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
            onClick={handleToggle}
          >
            {isSidebarExpanded ? (
              <ChevronLeft size={16} className='stroke-foreground'/>
            ) : (
              <ChevronRight size={16} className='stroke-foreground'/>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

const SideNavItem: React.FC<{
  label: string;
  icon: any;
  path: string;
  active: boolean;
  isSidebarExpanded: boolean;
}> = ({ label, icon, path, active, isSidebarExpanded }) => {
  return (
    <>
      {isSidebarExpanded ? (
        <Link
          href={path}
          className={`h-full relative flex items-center whitespace-nowrap rounded-md ${active
            ? 'font-base text-sm bg-neutral-200 shadow-sm text-neutral-700 dark:bg-neutral-800 dark:text-white'
            : 'hover:bg-neutral-200 hover:text-neutral-700 text-neutral-500 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white'
          }`}
        >
          <div className="relative font-base text-sm py-1.5 px-2 flex flex-row items-center space-x-2 rounded-md duration-100 gap-3">
            <span className="w-5 h-5">{icon}</span> 
            <span>{label}</span>
          </div>
        </Link>
      ) : (
        <TooltipProvider delayDuration={70}>
          <Tooltip>
            <TooltipTrigger>
              <Link
                href={path}
                className={`h-full relative flex items-center justify-center p-2 rounded-full ${active
                  ? 'bg-neutral-200 text-neutral-700 dark:bg-neutral-800 dark:text-white'
                  : 'hover:bg-neutral-200 hover:text-neutral-700 text-neutral-500 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white'
                }`}
              >
                <span className="w-5 h-5">{icon}</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent>{label}</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
    </>
  );
};

