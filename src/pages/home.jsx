import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from '../components/header';
import Footer from '../components/footer';
import './home.css';
import 'leaflet/dist/leaflet.css';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab] = useState('recreation');
  const [showServiceDetails, setShowServiceDetails] = useState(null);
  const [copySuccess, setCopySuccess] = useState('');
  

  const roomImages = [
    'https://i.postimg.cc/B6Q5ym4s/Frame-1499.png',
    'https://i.postimg.cc/28FQkpym/Frame-1500.png',
    'https://i.postimg.cc/t4vVJ9j0/Frame-1498.png',
    'https://i.postimg.cc/C1tLjKKD/Frame-1497.png',
    'https://i.postimg.cc/fT5RwZ4x/Frame-1496.png',
    'https://i.postimg.cc/QxNjYPBV/Frame-1494.png'
  ];

  const position = [43.0071, 41.0153]; // Approximate coordinates for Abkhazia
  const activities = {
    recreation: [
      {
        id: 'hiking',
        title: 'Кухонная утварь',
        description: 'Номер оборудован чайной станцией, холодильником, столовыми приборами.',
        icon: 'https://i.postimg.cc/MG7bNGH8/Frame-1455.png',
      },
      {
        id: 'bbq',
        title: 'Ванная комната',
        description: 'Душевая кабина, c/e, фен, косметические средства..',
        icon: 'https://i.postimg.cc/D0MqLJj1/Group.png',
      },
      {
        id: 'cycling',
        title: 'WI-FI',
        description: 'Во всех нкоттеджах уверенный сигнал скоростного Wi-fi.',
        icon: 'https://i.postimg.cc/Vsp4VvWd/Frame-1457.png',
      },
      {
        id: 'sauna',
        title: 'Время заезда/выезда',
        description: 'Заселение после 13:00 / Выезд до 12:00',
        icon: 'https://i.postimg.cc/DwK67NDh/Frame-1458.png',
      },
    ]
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === roomImages.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? roomImages.length - 1 : prev - 1));
  };
  
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    centerMode: true,
    centerPadding: '0',
    initialSlide: 1,
    swipeToSlide: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };
  
  const toggleServiceDetails = (serviceId) => {
    if (showServiceDetails === serviceId) {
      setShowServiceDetails(null);
    } else {
      setShowServiceDetails(serviceId);
    }
  };
  
  const copyAddressToClipboard = () => {
    navigator.clipboard.writeText('Республика Абхазия, Кындыг, ул. Школьная')
      .then(() => {
        setCopySuccess('Адрес скопирован!');
        setTimeout(() => {
          setCopySuccess('');
        }, 2000);
      })
      .catch(err => {
        setCopySuccess('Не удалось скопировать');
      });
  };
  
  return (
    <div className="alra-home-container">
      <div className="alra-background-overlay"></div>
      
      <Header />
      
      <main className="alra-main-content">
        <div className="alra-branding">
          <div className="alra-logo">
            <img src="https://i.postimg.cc/kGzy2pyX/Magic-Eraser-250403-143630-1.png" alt="Alra" className="alra-tree-icon" />
            <div className="alra-title-subtitle">
            <h1 className="alra-title" style={{ fontFamily: 'cridea', letterSpacing: '1.5px' }}>ALRA</h1>
            <h2 className="alra-subtitle" style={{ fontFamily: 'masvol', letterSpacing: '1px', transform: 'scaleY(0.75)' }}>Eco Village</h2>
            </div>
          </div>
          <button className="alra-book-button">Забронировать</button>
        </div>
      </main>
      
      <section className="alra-room-section">
        <div className="alra-room-container">
          <div className="alra-room-info">
            <h3 className="alra-room-title">Стандартный номер</h3>
            
            <p className="alra-room-desc">
              Размещение 2 взрослых (плюс 1 место за дополнительную плату);
            </p>
            
            <p className="alra-room-desc">
              В номере есть все необходимое: холодильник, чайник, столовые приборы, телевизор, wi-fi, кондиционер, вешалка, фен, ванная комната, с/у;
            </p>
            
            <p className="alra-room-desc">
              На территории комплекса есть: бар, мангальная зона, костровая зона;
            </p>
            
            <p className="alra-room-desc">
              Панорамное остекление;
            </p>
            
            <p className="alra-room-desc">
              Веранда с уличной мебелью;
            </p>
            
            <button className="alra-book-room-button">Забронировать</button>
          </div>
          
          <div className="alra-room-slider">
            <div className="alra-slider-container">
              <img 
                src={roomImages[currentSlide]} 
                alt="Стандартный номер" 
                className="alra-slider-image" 
              />
              <button className="alra-slider-arrow alra-slider-prev" onClick={prevSlide}>
                &lt;
              </button>
              <button className="alra-slider-arrow alra-slider-next" onClick={nextSlide}>
                &gt;
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <section className="alra-culture-section">
        <div className="alra-culture-container">
          <div className="alra-culture-heading">
            <h2 className="alra-culture-title">Мы создаем новую культуру туризма</h2>
            <h3 className="alra-culture-subtitle">и сервис высочайшего уровня</h3>
          </div>
          
          <div className="alra-culture-content">
            <div className="alra-culture-text">
              <p className="alra-culture-paragraph">
                ЭКО-ОТЕЛЬ "ALRA" — это уникальное место, которое сочетает в себе комфорт и заботу о природе. Удачное расположение коттеджей позволяет насладиться живописными пейзажами и уединением.
              </p>
            </div>
            
            <div className="alra-culture-text">
              <p className="alra-culture-paragraph">
                Мы стремимся создать пространство, где гости могут не только отдыхать, но и взаимодействовать друг с другом, обмениваться опытом и идеями, создавая тем самым сообщество единомышленников.
              </p>
            </div>
          </div>
          
          <div className="alra-slider-wrapper">
            <Slider {...sliderSettings} className="alra-culture-slider">
              <div className="alra-slick-slide">
                <img src="https://i.postimg.cc/43pz2nM6/IMG-6013.avif" alt="ALRA Eco Village" className="alra-slick-image" />
              </div>
              <div className="alra-slick-slide">
                <img src="https://i.postimg.cc/021V8RG2/IMG-6027.avif" alt="ALRA Eco Village" className="alra-slick-image" />
              </div>
              <div className="alra-slick-slide">
                <img src="https://i.postimg.cc/vTKMV8Gj/IMG-6015.avif" alt="ALRA Eco Village" className="alra-slick-image" />
              </div>
              <div className="alra-slick-slide">
                <img src="https://i.postimg.cc/sXRLHvF4/IMG-6011.avif" alt="ALRA Eco Village" className="alra-slick-image" />
              </div>
              <div className="alra-slick-slide">
                <img src="https://i.postimg.cc/sxj1c2dg/IMG-6030.avif" alt="ALRA Eco Village" className="alra-slick-image" />
              </div>
            </Slider>
          </div>
        </div>
      </section>
      
      <section className="alra-activities-section">
        <div className="alra-activities-container">
          <div className="alra-activities-heading">
            <h2 className="alra-activities-title">В каждом номере</h2>
          </div>
          
          <div className="alra-tabs-container">
            <div className="alra-tabs-content">
              <div className="alra-services-grid">
                {activities[activeTab].map((service) => (
                  <div 
                    key={service.id} 
                    className={`alra-service-card ${showServiceDetails === service.id ? 'alra-service-expanded' : ''}`}
                    onClick={() => toggleServiceDetails(service.id)}
                  >
                    <div className="alra-service-header">
                      <div className="alra-service-icon">
                        <img src={service.icon} className="alra-service-icon-img" alt="iconImg" />
                      </div>
                      <h3 className="alra-service-title">{service.title}</h3>
                      <span className="alra-service-toggle">
                        {showServiceDetails === service.id ? '−' : '+'}
                      </span>
                    </div>
                    
                    <div className="alra-service-details">
                      <p className="alra-service-description">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="alra-activities-cta">
            <p className="alra-activities-cta-text">Забронируйте свой отдых в ALRA Eco Village уже сегодня!</p>
            <form className="alra-booking-form">
              <div className="alra-form-row">
                <div className="alra-form-group">
                  <label className="alra-form-label">Дата заезда</label>
                  <input type="date" className="alra-form-input" />
                </div>
                <div className="alra-form-group">
                  <label className="alra-form-label">Дата выезда</label>
                  <input type="date" className="alra-form-input" />
                </div>
                <div className="alra-form-group">
                  <label className="alra-form-label">Гости</label>
                  <select className="alra-form-select">
                    <option>1 гость</option>
                    <option>2 гостя</option>
                    <option>3 гостя</option>
                    <option>4 гостя</option>
                  </select>
                </div>
                <button type="submit" className="alra-form-button">Проверить доступность</button>
              </div>
            </form>
          </div>
        </div>
      </section>
      
      <section className="alra-location-section">
        <div className="alra-location-container">
          <div className="alra-location-heading">
            <h2 className="alra-location-title">Наше расположение</h2>
            <p className="alra-location-subtitle">Откройте для себя красоту Абхазии и уникальное расположение ALRA Eco Village</p>
          </div>
          
          <div className="alra-location-content">
            <div className="alra-location-map-container">
              <div className="alra-map-placeholder">
                          <div className="home-section-container">
                            <div className="home-map-wrapper">
                              <MapContainer center={position} zoom={13} scrollWheelZoom={false} className="contact-map">
                                <TileLayer
                                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <Marker position={position}>
                                  <Popup>
                                    ALRA Eco Village <br /> Добро пожаловать!
                                  </Popup>
                                </Marker>
                              </MapContainer>
                            </div>
                          </div>
                <div className="alra-map-pin">
                  <span className="alra-map-pin-icon">📍</span>
                  <span className="alra-map-pin-pulse"></span>
                </div>
              </div>
              
              
            </div>
            <div className="alra-location-address">
                <div className="alra-address-card">
                  <div className="alra-address-header">
                    <img src="https://i.postimg.cc/7bvZF0KH/Frame-1450-3.png" alt="location" className="alra-address-icon" />
                    <h3 className="alra-address-title">Наш адрес</h3>
                  </div>
                  <p className="alra-address-text">Республика Абхазия, Кындыг, ул. Школьная</p>
                  <div className="alra-address-actions">
                    <button className="alra-address-copy" onClick={copyAddressToClipboard}>
                    <img src="https://i.postimg.cc/wjgwzPyN/solar-copy-bold.png" alt="location" className="alra-copy-icon" />
                      Скопировать адрес
                    </button>
                    {copySuccess && <span className="alra-copy-success">{copySuccess}</span>}
                    <a href="https://maps.google.com/maps?q=Кындыг,+Абхазия,+улица+Школьная" 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       className="alra-address-directions">
                       <img src="https://i.postimg.cc/zBbjpYMs/tabler-location-filled.png" alt="location" className="alra-directions-icon" />
                      Построить маршрут
                    </a>
                  </div>
                </div>
                
                <div className="alra-contact-info">
                  <div className="alra-contact-item">
                  <img src="https://i.postimg.cc/0QLHg0JH/ic-round-phone.png" alt="location" className="alra-contact-icon" />
                    <p className="alra-contact-text">+7 (940) 123-45-67</p>
                  </div>
                  <div className="alra-contact-item">
                  <img src="https://i.postimg.cc/x1DPRZy7/Group-2.png" alt="location" className="alra-contact-icon" />
                    <p className="alra-contact-text">info@alra-eco.com</p>
                  </div>
                  <div className="alra-contact-item">
                  <img src="https://i.postimg.cc/DwK67NDh/Frame-1458.png" alt="location" className="alra-contact-icon" />
                    <p className="alra-contact-text">Заезд с 14:00, выезд до 12:00</p>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Home; 