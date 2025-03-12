import Image from 'next/image';

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <div className={`aspect-square relative ${className}`}>
      <Image src={'/logo30.png'} fill priority alt="Logo da Life" />
    </div>
  );
}
