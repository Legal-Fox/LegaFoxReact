import React from 'react';
import { StarFilledIcon } from "@radix-ui/react-icons";

import { SocialLinks } from './SocialLinks';

export default function ProfileHighlights() {
  return (
    <div className="flex justify-end items-end">
      <aside className="w-[160px] mb-4">
        <span className="flex justify-end space-x-1" aria-label="Star rating: 5 out of 5">
          <StarFilledIcon className='h-8 w-8'/>
          <StarFilledIcon className='h-8 w-8'/>
          <StarFilledIcon className='h-8 w-8'/>
          <StarFilledIcon className='h-8 w-8'/>
          <StarFilledIcon className='h-8 w-8'/>
        </span>
        <p className="text-4xl text-right font-bold">6 Years</p>
        <p className="text-2xl text-right">Experience</p>
      </aside>
      <SocialLinks variant="sidebar"/>
    </div>
  );
}
