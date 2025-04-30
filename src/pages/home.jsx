import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from '../components/header';
import Footer from '../components/footer';
import './home.css';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState('recreation');
  const [showServiceDetails, setShowServiceDetails] = useState(null);
  const [activeTransport, setActiveTransport] = useState('car');
  const [copySuccess, setCopySuccess] = useState('');
  const location = useLocation();
  
  const roomImages = [
    'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1470&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?q=80&w=1470&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1471&auto=format&fit=crop'
  ];
  
  const cultureImages = [
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1470&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1566495392483-283daea73e47?q=80&w=1471&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1470&auto=format&fit=crop'
  ];
  
  const activities = {
    recreation: [
      {
        id: 'hiking',
        title: 'Треккинг и пешие прогулки',
        description: 'Маршруты разной сложности по живописным окрестностям и лесным тропам.',
        icon: '🥾',
        image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=1470&auto=format&fit=crop'
      },
      {
        id: 'bbq',
        title: 'Барбекю-зона',
        description: 'Оборудованная зона для барбекю с дровами и всем необходимым инвентарем.',
        icon: '🔥',
        image: 'https://images.unsplash.com/photo-1555658636-6e4a36218be7?q=80&w=1470&auto=format&fit=crop'
      },
      {
        id: 'cycling',
        title: 'Велопрогулки',
        description: 'Аренда велосипедов и маршруты для велопрогулок разной сложности.',
        icon: '🚲',
        image: 'https://images.unsplash.com/photo-1541625602330-2277a4c46182?q=80&w=1470&auto=format&fit=crop'
      }
    ],
    wellness: [
      {
        id: 'sauna',
        title: 'Сауна и баня',
        description: 'Традиционная русская баня и финская сауна с зоной отдыха.',
        icon: '♨️',
        image: 'https://images.unsplash.com/photo-1554629947-334ff61d85dc?q=80&w=1576&auto=format&fit=crop'
      },
      {
        id: 'yoga',
        title: 'Йога на природе',
        description: 'Утренние и вечерние занятия йогой на специальной площадке с видом на лес.',
        icon: '🧘',
        image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1470&auto=format&fit=crop'
      },
      {
        id: 'massage',
        title: 'Массаж и спа',
        description: 'Различные виды массажа и спа-процедур для релаксации и оздоровления.',
        icon: '💆',
        image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1470&auto=format&fit=crop'
      }
    ],
    food: [
      {
        id: 'restaurant',
        title: 'Эко-ресторан',
        description: 'Блюда из органических продуктов местного производства.',
        icon: '🍽️',
        image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop'
      },
      {
        id: 'breakfast',
        title: 'Завтрак из местных продуктов',
        description: 'Свежие завтраки из экологически чистых продуктов с фермерских хозяйств.',
        icon: '🍳',
        image: 'https://images.unsplash.com/photo-1533089860892-a9b9ac6cd6b4?q=80&w=1470&auto=format&fit=crop'
      },
      {
        id: 'picnic',
        title: 'Пикник-корзины',
        description: 'Возможность заказать корзину для пикника и насладиться трапезой на природе.',
        icon: '🧺',
        image: 'https://images.unsplash.com/photo-1526555197554-31c242e35f8b?q=80&w=1473&auto=format&fit=crop'
      }
    ]
  };
  
  const nearbyAttractions = [
    {
      name: 'Горячие источники Кындыг',
      distance: '0.5 км',
      description: 'Природные термальные источники с целебными свойствами.',
      image: 'https://images.unsplash.com/photo-1584515201197-43dc9dcba5e4?q=80&w=1587&auto=format&fit=crop'
    },
    {
      name: 'Черное море',
      distance: '2 км',
      description: 'Прекрасные пляжи Черного моря с чистой водой и живописными бухтами.',
      image: 'https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?q=80&w=1633&auto=format&fit=crop'
    },
    {
      name: 'Национальный парк',
      distance: '15 км',
      description: 'Заповедная территория с уникальной флорой и фауной.',
      image: 'https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?q=80&w=1471&auto=format&fit=crop'
    }
  ];
  
  const transportOptions = {
    car: {
      title: 'На автомобиле',
      directions: [
        'Из Сочи: двигайтесь по трассе E97/А-147 в сторону Абхазии',
        'Пересеките границу на КПП "Псоу"',
        'Продолжайте движение по основной дороге примерно 25 км',
        'Поверните направо на указателе "Кындыг"',
        'Через 3 км поверните налево на ул. Школьную'
      ],
      icon: '🚗',
      duration: 'Около 1 часа 20 минут из Сочи'
    },
    bus: {
      title: 'На общественном транспорте',
      directions: [
        'Сядьте на автобус Сочи-Сухум',
        'Выйдите на остановке "Кындыг"',
        'Пройдите пешком или возьмите такси до ул. Школьной (около 10 минут)'
      ],
      icon: '🚌',
      duration: 'Около 2 часов из Сочи'
    },
    train: {
      title: 'На поезде',
      directions: [
        'Доберитесь на поезде до ж/д вокзала Сухума',
        'Возьмите такси или автобус до Кындыга',
        'Следуйте указателям до ул. Школьной'
      ],
      icon: '🚂',
      duration: 'Около 4 часов общего времени в пути'
    }
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
  
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setShowServiceDetails(null);
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
  
  useEffect(() => {
    // Имитация загрузки карты
    const loadMapScript = () => {
      const existingScript = document.getElementById('googleMapsScript');
      if (!existingScript) {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
        script.id = 'googleMapsScript';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
      }
    };

    // Раскомментируйте для реальной интеграции с Google Maps
    // loadMapScript();
  }, []);
  
  return (
    <div className="alra-home-container">
      <div className="alra-background-overlay"></div>
      
      <Header />
      
      <main className="alra-main-content">
        <div className="alra-branding">
          <div className="alra-logo">
            <span className="alra-tree-icon">&#127794;</span>
          </div>
          <h1 className="alra-title">ALRA</h1>
          <h2 className="alra-subtitle">Eco Village</h2>
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
                <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1470&auto=format&fit=crop" alt="ALRA Eco Village" className="alra-slick-image" />
              </div>
              <div className="alra-slick-slide">
                <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1470&auto=format&fit=crop" alt="ALRA Eco Village" className="alra-slick-image" />
              </div>
              <div className="alra-slick-slide">
                <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1470&auto=format&fit=crop" alt="ALRA Eco Village" className="alra-slick-image" />
              </div>
              <div className="alra-slick-slide">
                <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1470&auto=format&fit=crop" alt="ALRA Eco Village" className="alra-slick-image" />
              </div>
              <div className="alra-slick-slide">
                <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1470&auto=format&fit=crop" alt="ALRA Eco Village" className="alra-slick-image" />
              </div>
            </Slider>
          </div>
        </div>
      </section>
      
      <section className="alra-activities-section">
        <div className="alra-activities-container">
          <div className="alra-activities-heading">
            <h2 className="alra-activities-title">Услуги и активности</h2>
            <p className="alra-activities-subtitle">Откройте для себя множество возможностей для отдыха и релаксации</p>
          </div>
          
          <div className="alra-tabs-container">
            <div className="alra-tabs-header">
              <button 
                className={`alra-tab-button ${activeTab === 'recreation' ? 'alra-tab-active' : ''}`}
                onClick={() => handleTabChange('recreation')}
              >
                <span className="alra-tab-icon">🌳</span>
                Отдых на природе
              </button>
              <button 
                className={`alra-tab-button ${activeTab === 'wellness' ? 'alra-tab-active' : ''}`}
                onClick={() => handleTabChange('wellness')}
              >
                <span className="alra-tab-icon">💆</span>
                Оздоровление
              </button>
              <button 
                className={`alra-tab-button ${activeTab === 'food' ? 'alra-tab-active' : ''}`}
                onClick={() => handleTabChange('food')}
              >
                <span className="alra-tab-icon">🍽️</span>
                Питание
              </button>
            </div>
            
            <div className="alra-tabs-content">
              <div className="alra-services-grid">
                {activities[activeTab].map((service) => (
                  <div 
                    key={service.id} 
                    className={`alra-service-card ${showServiceDetails === service.id ? 'alra-service-expanded' : ''}`}
                    onClick={() => toggleServiceDetails(service.id)}
                  >
                    <div className="alra-service-header">
                      <span className="alra-service-icon">{service.icon}</span>
                      <h3 className="alra-service-title">{service.title}</h3>
                      <span className="alra-service-toggle">
                        {showServiceDetails === service.id ? '−' : '+'}
                      </span>
                    </div>
                    
                    <div className="alra-service-details">
                      <div className="alra-service-image-container">
                        <img src={service.image} alt={service.title} className="alra-service-image" />
                      </div>
                      <p className="alra-service-description">{service.description}</p>
                      <button className="alra-service-button">Подробнее</button>
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
                {/* Здесь будет интегрирована реальная карта Google или Yandex Maps */}
                <img 
                  src="https://images.unsplash.com/photo-1569336415962-a4bd9f69c07b?q=80&w=1631&auto=format&fit=crop" 
                  alt="Карта местоположения" 
                  className="alra-map-image" 
                />
                <div className="alra-map-pin">
                  <span className="alra-map-pin-icon">📍</span>
                  <span className="alra-map-pin-pulse"></span>
                </div>
              </div>
              
              <div className="alra-location-address">
                <div className="alra-address-card">
                  <div className="alra-address-header">
                    <span className="alra-address-icon">📍</span>
                    <h3 className="alra-address-title">Наш адрес</h3>
                  </div>
                  <p className="alra-address-text">Республика Абхазия, Кындыг, ул. Школьная</p>
                  <div className="alra-address-actions">
                    <button className="alra-address-copy" onClick={copyAddressToClipboard}>
                      <span className="alra-copy-icon">📋</span>
                      Скопировать адрес
                    </button>
                    {copySuccess && <span className="alra-copy-success">{copySuccess}</span>}
                    <a href="https://maps.google.com/maps?q=Кындыг,+Абхазия,+улица+Школьная" 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       className="alra-address-directions">
                      <span className="alra-directions-icon">🧭</span>
                      Построить маршрут
                    </a>
                  </div>
                </div>
                
                <div className="alra-contact-info">
                  <div className="alra-contact-item">
                    <span className="alra-contact-icon">📱</span>
                    <p className="alra-contact-text">+7 (940) 123-45-67</p>
                  </div>
                  <div className="alra-contact-item">
                    <span className="alra-contact-icon">✉️</span>
                    <p className="alra-contact-text">info@alra-eco.com</p>
                  </div>
                  <div className="alra-contact-item">
                    <span className="alra-contact-icon">⏰</span>
                    <p className="alra-contact-text">Заезд с 14:00, выезд до 12:00</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="alra-transport-container">
              <h3 className="alra-transport-title">Как добраться</h3>
              
              <div className="alra-transport-tabs">
                <button 
                  className={`alra-transport-tab ${activeTransport === 'car' ? 'alra-transport-active' : ''}`}
                  onClick={() => setActiveTransport('car')}
                >
                  <span className="alra-transport-icon">🚗</span>
                  На автомобиле
                </button>
                <button 
                  className={`alra-transport-tab ${activeTransport === 'bus' ? 'alra-transport-active' : ''}`}
                  onClick={() => setActiveTransport('bus')}
                >
                  <span className="alra-transport-icon">🚌</span>
                  На автобусе
                </button>
                <button 
                  className={`alra-transport-tab ${activeTransport === 'train' ? 'alra-transport-active' : ''}`}
                  onClick={() => setActiveTransport('train')}
                >
                  <span className="alra-transport-icon">🚂</span>
                  На поезде
                </button>
              </div>
              
              <div className="alra-transport-content">
                <div className="alra-transport-details">
                  <div className="alra-transport-header">
                    <span className="alra-transport-detail-icon">{transportOptions[activeTransport].icon}</span>
                    <h4 className="alra-transport-detail-title">{transportOptions[activeTransport].title}</h4>
                    <span className="alra-transport-duration">{transportOptions[activeTransport].duration}</span>
                  </div>
                  
                  <ol className="alra-directions-list">
                    {transportOptions[activeTransport].directions.map((direction, index) => (
                      <li key={index} className="alra-direction-item">{direction}</li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
          
          <div className="alra-nearby-attractions">
            <h3 className="alra-attractions-title">Что посмотреть рядом</h3>
            
            <div className="alra-attractions-grid">
              {nearbyAttractions.map((attraction, index) => (
                <div key={index} className="alra-attraction-card">
                  <div className="alra-attraction-image-container">
                    <img src={attraction.image} alt={attraction.name} className="alra-attraction-image" />
                    <span className="alra-attraction-distance">{attraction.distance}</span>
                  </div>
                  <div className="alra-attraction-content">
                    <h4 className="alra-attraction-name">{attraction.name}</h4>
                    <p className="alra-attraction-description">{attraction.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Home; 