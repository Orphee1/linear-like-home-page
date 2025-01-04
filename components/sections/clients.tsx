import {
  AlanLogo,
  ArcLogo,
  CashAppLogo,
  DescriptLogo,
  LoomLogo,
  MercuryLogo,
  OpenSeaLogo,
  PitchLogo,
  RampLogo,
  RaycastLogo,
  RetoolLogo,
  VercelLogo,
} from '../logos'

const Clients = () => {
  return (
    <>
      <p className='text-center text-lg text-white md:text-xl mb-12'>
        <span className='text-primary-text'>
          Powering the world&apos;s best products team.
        </span>
        <br className='hidden md:block' /> From next-gen startups to established
        enterprises
      </p>
      <div className='flex flex-wrap justify-around [&_svg]:max-w-[16rem] gap-x-6 gap-y-8 [&_svg]:basis-[calc(50%-12px)] md:[&_svg]:basis-[calc(16.66%-20px)]'>
        <RampLogo />
        <LoomLogo className='hidden md:block' />
        <VercelLogo />
        <DescriptLogo className='hidden md:block' />
        <CashAppLogo />
        <PitchLogo className='hidden md:block' />
        <RaycastLogo />
        <MercuryLogo />
        <RetoolLogo />
        <AlanLogo className='hidden md:block' />
        <ArcLogo className='hidden md:block' />
        <OpenSeaLogo className='hidden md:block' />
      </div>
    </>
  )
}

export default Clients
