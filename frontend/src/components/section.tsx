interface SectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export default function Section({ title, subtitle, children }: SectionProps) {
  return (
    <div className='mt-14 w-full'>
      <div className='w-full flex flex-col justify-center items-center gap-10'>
        <div className=' text-center  flex flex-col items-center'>
          <h1 className='text-3xl lg:text-4xl text-violet-900 font-bold leading-[3rem] w-full lg:w-[30rem]'>
            {title}
          </h1>
          <p className='text-xs w-full lg:w-[45rem] text-center mt-5'>
            {subtitle}
          </p>
        </div>
      </div>

      <div className='flex flex-col lg:flex-row  gap-10 w-full mt-10'>
        {children}
      </div>
    </div>
  );
}
