import { memo, SVGProps } from 'react';

const InterfaceAlertAlarmBell2AlertB = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <rect width={40} height={40} rx={20} fill='white' fillOpacity={0.8} />
    <rect width={40} height={40} rx={20} stroke='black' strokeOpacity={0.1} strokeWidth={0.666667} />
    <path
      d='M20 11.7645C21.4427 11.7645 22.8263 12.3376 23.8465 13.3577C24.8667 14.3779 25.4398 15.7615 25.4398 17.2042C25.4398 23.2526 27.6461 24.4445 28.2421 24.4445H11.758C12.3666 24.4445 14.5603 23.2399 14.5603 17.2042C14.5603 15.7615 15.1334 14.3779 16.1535 13.3577C17.1737 12.3376 18.5573 11.7645 20 11.7645V11.7645Z'
      stroke='black'
      strokeWidth={1.33333}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M18.098 26.7653C18.2076 27.1863 18.4538 27.5591 18.798 27.8251C19.1422 28.0912 19.565 28.2356 20 28.2356C20.4351 28.2356 20.8578 28.0912 21.202 27.8251C21.5462 27.5591 21.7924 27.1863 21.902 26.7653'
      stroke='black'
      strokeWidth={1.33333}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <circle cx={24.6667} cy={12.6667} r={3.33333} fill='#C80000' />
  </svg>
);

const Memo = memo(InterfaceAlertAlarmBell2AlertB);
export { Memo as InterfaceAlertAlarmBell2AlertB };
