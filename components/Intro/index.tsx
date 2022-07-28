type DescWithStarIconProps = {content: string, className: string};
const  DescWithStarIcon = ({content, className}: DescWithStarIconProps) => {
  return (
    <div className={`flex items-start ${className}`}>
      <img src="/images/icon-star.svg" width={57}/>
      <div className="font-light italic text-lg tracking-widest m-[8px]">{content}</div>
    </div>
  )
}

const Intro = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 ml-[120px]">
        <div className="col-start-2 col-span-2 mt-[100px]">
          <img src="/logo.svg" />
        </div>
        <div className="col-start-2 col-span-4 space-y-4  mt-[150px]">
          <h1 className="text-4xl uppercase font-black leading-[44px] intro-title-text">Smart Wifi<br/> for Smart People</h1>
          <div className="font-light text-lg leading-[30px] tracking-widest">
            <p>Das Leben ist zu kurz für schlechtes WIFI.</p>
            <p>AirZen bietet Highend-Netzwerk-Technologien für einen entspannteren Alltag und Arbeitswelt.</p>
            <p>Und das außergewöhnlich einfach, sicher und zuverlässig.</p>
          </div>
        </div>
        <div className="col-span-3  mt-[60px]"><img src="/images/air zen.png" /></div>
        <div className="col-span-3">
          <DescWithStarIcon content="Europäische, unabhängige Hard- und Software" className="ml-[93px] mt-[115px]" />
          <DescWithStarIcon content="übersteigt alle gängigen Sicherheitszertifizierungen" className="ml-[35px] mt-[150px]" />
        </div>
        
      </div>
    </>
  )

};

export default Intro;