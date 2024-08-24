import React from 'react';
import { LinkedInLogoIcon, NotionLogoIcon, InstagramLogoIcon, StarFilledIcon } from "@radix-ui/react-icons";

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

      <div className="flex flex-col items-center w-10">
        <ul className="space-y-2">
          <li>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 border-emerald-400 border-2 rounded-full">
              <LinkedInLogoIcon />
            </a>
          </li>
          <li>
            <a href="https://www.notion.so/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 border-emerald-400 border-2 rounded-full">
              <NotionLogoIcon />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 border-emerald-400 border-2 rounded-full">
              <InstagramLogoIcon />
            </a>
          </li>
        </ul>

        <div className="flex flex-col justify-center items-center mx-auto h-32 w-1 bg-red-400 mt-6" />
      </div>
    </div>
  );
}
