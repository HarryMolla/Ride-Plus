import { cn } from '@/lib/utils';
import Marquee from './components/Marquee';

const reviews = [
  { name: 'Abebe Mekonnen', username: 'CEO at 2F Capital', body: "Tracking employee rides is so simple now. The dashboard gives me full visibility at a glance.", img: 'https://avatar.vercel.sh/jack' },
  { name: 'Liya Tesfaye', username: 'HR Manager at EthioTech', body: "Setting limits and applying discounts for our team is much easier. It saves us both time and money.", img: 'https://avatar.vercel.sh/jill' },
  { name: 'Getachew Alemu', username: 'Operations Head at BlueSky Ltd', body: "Creating and managing packages takes just a few minutes. Everything is organized and easy to update.", img: 'https://avatar.vercel.sh/john' },
  { name: 'Mekdes Solomon', username: 'Finance Director at Nile Logistics', body: "The billing system is clear and reliable. I can generate reports anytime without any hassle.", img: 'https://avatar.vercel.sh/jane' },
  { name: 'Fikadu Yared', username: 'Procurement Lead at Addis Ventures', body: "Employee vouchers are a great feature. Our team saves money and I can easily monitor usage.", img: 'https://avatar.vercel.sh/jenny' },
  { name: 'Rahel Abate', username: 'COO at Horizon Corp', body: "Managing corporate travel has become stress-free. The dashboard is intuitive and very user-friendly.", img: 'https://avatar.vercel.sh/james' },
  { name: 'Samuel Tadesse', username: 'CTO at Axum Digital', body: "I now have full control over employee trips. Everything from package creation to tracking is smooth.", img: 'https://avatar.vercel.sh/samuel' },
  { name: 'Hirut Fikre', username: 'Project Manager at EthioLogistics', body: "All our rides and trips are organized in one place. It makes managing travel much easier.", img: 'https://avatar.vercel.sh/hirut' },
  { name: 'Kebede Tesfahun', username: 'Business Head at VisionTech', body: "Managing employee rides has never been simpler. The dashboard shows everything clearly.", img: 'https://avatar.vercel.sh/kebede' },
  { name: 'Selamawit Desta', username: 'Operations Manager at Unity PLC', body: "The voucher system is excellent. It helps our team save and keeps everything transparent.", img: 'https://avatar.vercel.sh/selamawit' },
  { name: 'Tewodros Haile', username: 'CEO at Rift Valley Energy', body: "Trip reports are detailed and easy to access. It really helps with our monthly audits.", img: 'https://avatar.vercel.sh/tewodros' },
  { name: 'Aster Gebremariam', username: 'HR Director at EthioFoods', body: "Corporate travel has become effortless. The system is reliable and very convenient.", img: 'https://avatar.vercel.sh/aster' },
  { name: 'Bereket Alemayehu', username: 'Operations Lead at Horizon Logistics', body: "I can easily access all employee activity. It helps in managing trips efficiently.", img: 'https://avatar.vercel.sh/bereket' },
  { name: 'Genet Abebe', username: 'Finance Manager at BlueSky Ltd', body: "Custom packages for our team are easy to create. Everything is smooth and hassle-free.", img: 'https://avatar.vercel.sh/genet' },
  { name: 'Yonas Wondimu', username: 'COO at Addis Ventures', body: "The dashboard gives full control over corporate travel. It's both simple and effective.", img: 'https://avatar.vercel.sh/yonas' },
  { name: 'Mulugeta Bekele', username: 'CTO at VisionTech', body: "Tracking and billing employee rides has never been easier. The interface is very intuitive.", img: 'https://avatar.vercel.sh/mulugeta' },
  { name: 'Rahel Tsegaye', username: 'HR Lead at Nile Logistics', body: "Employee rides are fully transparent now. It helps us plan budgets more efficiently.", img: 'https://avatar.vercel.sh/rahelt' },
  { name: 'Dawit Abiy', username: 'Business Manager at 2F Capital', body: "Vouchers and discounts are very useful for our team. Everything is simple to manage.", img: 'https://avatar.vercel.sh/dawit' },
  { name: 'Samrawit Hailu', username: 'Project Director at EthioTech', body: "Creating packages is fast and easy. The system saves us a lot of time every week.", img: 'https://avatar.vercel.sh/samrawit' },
  { name: 'Eyob Assefa', username: 'Operations Director at Axum Digital', body: "Corporate travel management is now simplified. I can monitor all trips without stress.", img: 'https://avatar.vercel.sh/eyob' }
]
;

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        'relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4',
        // light styles
        'border-neutral-900 bg-neutral-950 hover:bg-neutral-900'
        
      )}
    >
      <div className='flex flex-row items-center gap-2'>
        <img className='rounded-full' width='32' height='32' alt='' src={img} />
        <div className='flex flex-col'>
          <figcaption className='text-sm font-medium dark:text-white'>
            {name}
          </figcaption>
          <p className='text-xs font-medium dark:text-white/40'>{username}</p>
        </div>
      </div>
      <blockquote className='mt-2 text-sm text-white'>{body}</blockquote>
    </figure>
  );
};

const Testemonial = () => {
  return (
    <div className='relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border dark:bg-black py-10 md:shadow-xl'>
      <div className='my-10'>
<div className=" px-4 mx-auto max-w-screen-xl text-center lg:py-5 lg:px-8 z-40">
        <h1
          className="mb-4 text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight leading-snug text-transparent bg-clip-text 
           bg-gradient-to-r from-gray-400 via-white to-gray-400 "
        >
          What Our Clients Say
        </h1>
        <p className="text-gray-300 md:text-lg text-sm">
          Companies across Ethiopia are streamlining corporate travel, saving time and costs with our easy-to-use dashboard.
        </p>
      </div>
      </div>
      <Marquee pauseOnHover className='[--duration:10s]'>
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className='[--duration:10s]'>
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className='pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black dark:from-background'></div>
      <div className='pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black dark:from-background'></div>
    </div>
  );
};

export default Testemonial;
