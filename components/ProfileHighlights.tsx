import React from 'react';
import { Star } from 'lucide-react';

import { SocialLinks } from './SocialLinks';
import { cn } from "@/lib/utils"

interface ProfileHighlightsProps {
  yearsOfExperience: number
  rating: number
  className?: string
}

export default function ProfileHighlights({ yearsOfExperience, rating, className }: ProfileHighlightsProps) {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <Star
      key={index}
      className={`sm:h-8 sm:w-8 h-4 w-4 ${index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      aria-hidden="true"
    />
  ));

  return (
    <div className={cn(className)}>
    <div className="flex justify-end items-end">
        <aside className="mb-4">
        <div className="flex justify-end space-x-1" aria-label={`Рейтинг: ${rating} из 5`}>
          {stars}
        </div>
        <p className="sm:text-4xl text-lg text-right font-bold">{yearsOfExperience} {'Лет'}</p>
        <p className="sm:text-2xl text-xl text-right">Опыта</p>
      </aside>
      <SocialLinks variant="sidebar" className="xl:block hidden" />
      </div>
    </div>
  );
}