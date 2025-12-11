import Image from 'next/image';
import { Diploma } from '@/lib/types/diplomas';

type DiplomaItemProps = {
  diploma: Diploma;
};

export default function DiplomaItem({ diploma }: DiplomaItemProps) {
  return (
    <div className="relative w-full h-[28rem]">
      <Image
        src={diploma.icon}
        alt={diploma.name}
        className="w-full h-full object-cover"
        width={100}
        height={100}
      />

      <div className="absolute bottom-0 left-0 w-full p-2.5 pt-0">
        <h3
          className="flex justify-start items-center min-h-16 px-4 text-xl font-semibold text-primary-foreground
        bg-blue-600/50 backdrop-blur-[6px]"
        >
          {diploma.name}
        </h3>
      </div>
    </div>
  );
}
