import React, { ReactNode, useEffect, useState } from 'react'
import '../styles/container.scss'
import { BsFillCaretUpFill, BsFillCaretDownFill } from 'react-icons/bs'
import { MdConnectWithoutContact } from 'react-icons/md'
import { BsYoutube, BsGithub, BsFacebook } from 'react-icons/bs'
import { BiLogoInstagramAlt, BiLogoWhatsappSquare } from 'react-icons/bi'
import { HiOutlineTranslate } from 'react-icons/hi'
import { PiCaretLeftLight } from 'react-icons/pi'
import { GrClose } from 'react-icons/gr'
import { Link } from 'react-router-dom'
import { ModalContext } from '../contexts/ModalContext'
import { Carousel } from 'react-responsive-carousel'
import { DarkModeContext } from '../contexts/DarkModeContext'
import '../responsivestyles/container.scss'


type boxItemsType = {
  id: number,
  image?: string,
  image2?: string,
  image3?: string,
  image4?: string,
  image5?: string,
  video?: string,
  title?: string,
  content?: string, 
}

const Container = () => {
  
  //click the caretdown icon change interface
  const [nextMessage, setNextMessage] = React.useState<boolean>(false);
  const handleNext = () => {
    setNextMessage(!nextMessage);
  }

  //first message
  const FirstHomePageMessage = () => {
    return (
      <div className={`top-title ${!nextMessage && 'deactiveTitle'}`}>
          <div className='hello'>
           <h1>Hello!🫡</h1>
           <BsFillCaretDownFill id='caret-down'
           onClick={handleNext}
           />
          </div>
          <p>My name is Azad! This is my Portfolio Website.</p>
          <span id='dont-hesitate-msg'>Please, don't hesitate to try!✌️</span>
      </div>
    )
  }
  //if the first message works then run this
  const SecondHomePageMessage = () => {
    return(
      <div className={`top-title ${nextMessage && 'toptitleTwo'}`}>
          <div className='hello'>
            <h1>The road to success💻</h1>
           <BsFillCaretUpFill id='caret-down'
           onClick={handleNext}
           />
          </div>
          <p>I'am Full Stack Developer.</p>
          <span id='dont-hesitate-msg'>And work for this..</span>
      </div>
      )
  }

  //box Items
  const BoxItems:boxItemsType[] = [
    {
      id: 1, 
      content: 'If you want, watch me YouTube!❤️',
      video: '../youtubeme.mp4'
    },
    {
      id: 2, 
      image: '../math1.png',
      image2: '../ebay2.png',
      image3: '../goko1.png',
      image4: '../aldim1.png',
      image5: '../sakit1.png',
      content: 'salam',
    },
    {
      id: 3, 
      content: "Hello! I'm Azad. Despite starting my career in October 2022, I have been involved in various computer-related tasks since I was 10 years old. This includes design, editing, small coding projects, and more. Since the beginning of my career, I have worked and continue to work as a responsible professional, constantly striving for improvement. I also participated in the Second Karabakh War in the Kelbajar region from 2019 to 2022. My greatest aspiration in life is to support my family and loved ones in the future, to overcome challenges and easy paths together, and to move forward towards my dreams without leaving them behind. I have been familiar with computer technology since childhood. As someone who closely follows technology, I keep a close eye on advancements in the field of Computer Technology and apply the latest trends to my work. To enhance efficiency, I constantly research and implement new processes and tools. Additionally, through my analytical thinking and data-driven approach, I focus on solving various problems and improving my work rather than dwelling on mistakes, implementing necessary processes to eliminate errors. In line with my career goals, I seek new opportunities to participate in value-creating projects in a dynamic company and contribute to the growth of my employers.",
    },
  ]

  const image1 = React.useRef<HTMLImageElement | null>(null);
  const image2 = React.useRef<HTMLImageElement | null>(null);
  const image3 = React.useRef<HTMLImageElement | null>(null);
  const image4 = React.useRef<HTMLImageElement | null>(null);
  const image5 = React.useRef<HTMLImageElement | null>(null);
  

  //text trimmed
  const [trimmedText, setTrimmedText] = React.useState<string>("");
  const maxCharText:number = 500;
  const Text = BoxItems.map((item) => item.id === 3 ? item.content : "").filter(Boolean);
  const stringText:string = Text.join("");
  React.useEffect(() => {
    if (stringText.length > maxCharText) {
      const trimmed =  stringText.slice(0, maxCharText);
      setTrimmedText(trimmed);
    }
  }, [])

  //if aboutMehomePage on hover , when open modal and new architecture
  const [showingTitle, setShowing] = React.useState<boolean>(false);
  const handleHover = () => {
    setShowing(true);
  }
  const handleHoverExit = () => {
    setShowing(false);
  }
  //open about me modal (if onclick the Who Am I ? text.)
  const { modal, setModal } = React.useContext(ModalContext)!;
  const handleOpenAboutModal = () => {
    setModal(true);
  }
  const handleCloseAboutModal = () => {
    setModal(false)
  }

  //translate my about text
  const [translate, setTranslate] = React.useState<boolean>(false);
  //translate flags
  const [flags, setFlags] = React.useState<boolean>(false);
  const handleTranslate = () => {
    setFlags(true);
    setTranslate(!translate);
  }
  //if translate flags display visible, then skipped translation area
  const handleSkipTranslation = () => {
    setFlags(false)
  }
  //on Translated texts:
  const defaultText:any = BoxItems.map((items) => (items.id === 3) ? items.content : "").join("");
  const turkishText:string = "Merhaba! Adım Azad. Kariyerime Ekim 2022'de başlamama rağmen, 10 yaşımdayken tasarım, düzenleme, küçük kodlama projeleri ve daha birçok bilgisayarla ilgili görevlerde bulundum. Kariyerimin başlangıcından itibaren sorumlu bir profesyonel olarak çalıştım ve sürekli olarak gelişmeyi hedefledim. Ayrıca, 2019'dan 2022'ye kadar Kelbecer bölgesindeki İkinci Karabağ Savaşı'na katıldım. Hayattaki en büyük amaçlarımdan biri, ailemi ve sevdiklerimi gelecekte desteklemek, zorlukları aşmak ve hayallerimi geride bırakmadan birlikte ilerleyebilmek. Çocukluğumdan beri bilgisayar teknolojilerine aşinayım. Teknolojiyi yakından takip eden biri olarak, Bilgisayar Teknolojisi alanındaki gelişmeleri yakından takip ediyor ve çalışmalarıma en son trendleri uyguluyorum. Verimliliği artırmak için sürekli olarak yeni süreçler ve araçlar araştırıyor ve uyguluyorum. Ayrıca, analitik düşünme ve veri odaklı bir yaklaşım benimseyerek, hatalara takılmak yerine çeşitli sorunları çözmeye ve çalışmalarımı geliştirmeye odaklanıyorum, hataları ortadan kaldırmak için gerekli süreçleri uyguluyorum. Kariyer hedeflerim doğrultusunda, dinamik bir şirkette değer yaratan projelerde yer almak ve işverenlerimin işlerinin daha da gelişip, büyümesine katkıda bulunmak için yeni fırsatlar arıyorum."
  const azerbaijanText:string = "Salam! Mən Azad. Karyerama 2022-ci il Oktyabr ayında başlamağıma baxmayaraq, 10 yaşlarımdan kompyuterdə müxtəlif işlər sərgiləmişəm. Design, montaj, kiçik kodlaşdırmalar və s. Karyerama başlayandan sonra isə məsulliyyətli bir işçi kimi davamlı inkişaf üçün çalışmışam və çalışıram. 2019-2022ci illərdə Kəlbəcər zonasında 2-ci Qarabağ döyüşlərində iştirak etmişəm. Həyatda ən böyük arzum gələcəkdə ailəmə və sevdiklərimə dəstək olub onları geridə qoymadan onlarla birgə çətin, asan yolları keçmək, xəyallarıma doğru hər nə olursa olsun irəliləməkdir. Uşaqlıqdan kompyuter texnologiyalarına aşinayam. Texnologiyanı yaxından izləyən biri kimi Komputer Texnologiyaları sahəsindəki irəliləyişləri diqqətlə izləyirəm və bu sahələrdəki ən son tendensiyaları işimə əks etdirirəm. Səmərəliliyi artırmaq üçün daim yeni iş və texnologiyaları araşdırır, tətbiq edirəm. Həmçinin, analitik düşüncə və məlumatlara əsaslanan yanaşmam sayəsində müxtəlif problemlərə əsəbləşmək və işimdən soyumaq deyil, problemə fokuslanıb işimi necə daha da təkmilləşdirəcəyimi düşünür, xətaları aradan necə qaldıracağım barədə lazımi tədbirləri həyata keçirməyə daim çalışıram. Karyera məqsədlərimə uyğun olaraq, dinamik bir şirkətdə dəyər yaradan layihələrdə iştirak etmək və istedadlarımı işəgötürənlərimin böyüməsinə töhfə vermək üçün yeni imkanlar axtarışındayam."
  //if AZ and TR clicked, change text language
  const [languageAz, setLanguageAz] = React.useState<boolean>(false);
  const [languageTr, setLanguageTr] = React.useState<boolean>(false);
  const changeTextAz = () => {
    setLanguageAz((prevLang) => !prevLang);  
    if (languageAz) {
      setLanguageTr(true);
    }  
  } 
  const changeTextTr = () => {
    setLanguageTr((prevLang) => !prevLang);
  } 
 

  //Who Am I Text Modal Container
  const AboutMe = () => {
    return (
      <div className={`about-me-modal ${darkmode ? 'aboutmeDark' : ""}`}>
        <div className='top-header'>
          <span>Who Am I ?</span>
          <div id='translation'>
            <HiOutlineTranslate
            id='translateIcon'/>
          <button
          style={{display: flags ? 'none' : ''}}
          onClick={handleTranslate}
          className='transBtn'
          >Translate the text</button>
          {flags && (
            <div className='flags'>
              <PiCaretLeftLight id='flagsLeftCaret'
              onClick={handleSkipTranslation}
              />
            <span id='aze' onClick={changeTextAz}>AZ</span>
            <span id='tr' onClick={changeTextTr}>TR</span>
            </div>
          )}
          </div>
          <GrClose id='closeIcon' onClick={handleCloseAboutModal}/>
        </div>

        <div className='text'>
            <p>{languageAz ? (azerbaijanText) : languageTr ? (turkishText) : defaultText}</p>
        </div>

      </div>
    )
  }

  const { darkmode } = React.useContext(DarkModeContext)!;
  const [mobileMod, setMobileMod] = React.useState<boolean>(false);
  useEffect(() => {
    const MobileModActived = () => {
      if (window.innerWidth <=768) {
        setMobileMod(true)
      } else {
        setMobileMod(false)
      }
    }
    window.addEventListener('resize', MobileModActived);
    return () => {window.removeEventListener('resize', MobileModActived)}
  }, [])


  return (
    <React.Fragment>
      {modal && (<AboutMe />)}
    <div className={`container ${darkmode ? 'activeDarkModeContainer' : ""}`} id={modal ? 'outline' : ""}>
      <div className='left-area'>
        {nextMessage ? (
          <SecondHomePageMessage />
          ) : (
            <FirstHomePageMessage />
          )}
        <div className='main'>
          <section className="contactme">
          <span><MdConnectWithoutContact id='contacticon'/>contact me</span>
          </section>
          <section className='icons'>
            <div className="icon-field">
              <Link to='https://github.com/azadikk' target='_blank' id='iconlogo'><BsGithub id='github'/></Link>
              <Link to='https://github.com/azadikk' target='_blank' id='span'>Github</Link>
            </div>
            <div className="icon-field">
              <Link to='https://www.instagram.com/azaad.dd/' target='_blank' id='iconlogo'><BiLogoInstagramAlt id='instagram'/></Link>
              <Link to='https://www.instagram.com/azaad.dd/' target='_blank' id='span'>Instagram</Link>
            </div>
            <div className="icon-field">
              <Link to='https://wa.me/994513641920?text=Salam.%20Sizin%20n%C3%B6mr%C9%99nizi%20portfolio%20s%C9%99hif%C9%99nizd%C9%99n%20ald%C4%B1m.%20Siz%C9%99%20t%C9%99klifim%20/%20sual%C4%B1m%20var.' target='_blank' id='iconlogo'><BiLogoWhatsappSquare id='whatsapp'/></Link>
              <Link to='https://wa.me/994513641920?text=Salam.%20Sizin%20n%C3%B6mr%C9%99nizi%20portfolio%20s%C9%99hif%C9%99nizd%C9%99n%20ald%C4%B1m.%20Siz%C9%99%20t%C9%99klifim%20/%20sual%C4%B1m%20var.' target='_blank' id='span'>Whatsapp</Link>
            </div>
            <div className="icon-field">
              <Link to='https://www.youtube.com/@azadevv' target='_blank' id='iconlogo'><BsYoutube id='youtube'/></Link>
              <Link to='https://www.youtube.com/@azadevv' target='_blank' id='span'>Youtube</Link>
            </div>
            <div className="icon-field">
              <Link to='https://www.facebook.com/AzadRapGoood/' target='_blank' id='iconlogo'><BsFacebook id='facebook'/></Link>
              <Link to='https://www.facebook.com/AzadRapGoood/' target='_blank' id='span'>Facebook</Link>
            </div>
          </section>
        </div>
      </div>
      <div className='right-area'>
          {BoxItems.map((items) => (
          <div className='box1' id={items.id === 3 ? 'box3-actived' : ''} key={items.id}>
              {items.id === 1 && (
                <div className='video'>
                <Link to='https://www.youtube.com/@azadevv' target='_blank' id='videolink'>
                <video src={mobileMod ? '../compressyoutube.mp4' : items.video} autoPlay muted loop >
                  Tarayıcınız videoyu desteklemiyor veya video yüklenemedi.
                </video>

                </Link>
                <h3>{items.content}</h3>
                </div>
              )}
              
              {items.id === 2 && (
                <div className='images'>
                <Link to='/projects'>
                <img src={items.image4} 
                 alt='project-images'
                 style={{width: '100%'}}/>
                 </Link>
                </div>
              )}

              {items.id === 3 && (
                <>
                {showingTitle && <h1 id='whoami'>Who am I ?</h1>}
                <div
                onClick={handleOpenAboutModal} 
                className={`aboutMehomePage ${showingTitle ? 'showHover' : ''}`} 
                onMouseEnter={handleHover} onMouseLeave={handleHoverExit}
                >
                  <p>
                    {trimmedText}
                  </p>
                </div>
                </>
              )}
          </div>
          ))}
      </div>
    </div></React.Fragment>
  )
}

export default Container

