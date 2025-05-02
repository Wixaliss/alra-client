import React, { useState, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Link } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import 'leaflet/dist/leaflet.css';
import './contacts.css';

// Fix Leaflet icon issue
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const addressRef = useRef(null);

  // ALRA position coordinates in Abkhazia
  const position = [43.0071, 41.0153]; // Approximate coordinates for Abkhazia

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Здесь была бы логика отправки формы на сервер
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const copyToClipboard = () => {
    const addressText = addressRef.current.innerText;
    navigator.clipboard.writeText(addressText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const socialLinks = [
    { name: 'Instagram', icon: '📸', url: 'https://instagram.com/alra_ecohotel' },
    { name: 'Facebook', icon: '👍', url: 'https://facebook.com/alra_ecohotel' },
    { name: 'Twitter', icon: '🐦', url: 'https://twitter.com/alra_ecohotel' },
    { name: 'YouTube', icon: '📹', url: 'https://youtube.com/alra_ecohotel' },
    { name: 'TripAdvisor', icon: '✈️', url: 'https://tripadvisor.com/alra_ecohotel' }
  ];

  const testimonials = [
    {
      name: 'Мария К.',
      photo: 'https://i.postimg.cc/65nXZ5Rs/kqajk0xyhm84fywysrhbzmpvfqylih2q.png',
      text: 'Потрясающее место для отдыха! В Абхазии уже второй раз, хочется возвращаться снова и снова. В этот раз решили остановаиться в Алра. Чистый воздух, уютные домики, вкусная еда и дружелюбный персонал. Провели неделю и обязательно вернемся в будущем.',
      rating: 5
    },
    {
      name: 'Сергей Д.',
      photo: 'https://i.postimg.cc/HkmC9D4r/1678385566.jpg',
      text: 'Это место изменило мое представление об экологичном отдыхе. Всё продумано до мелочей: от органических средств для душа до велосипедов для передвижения. Особенно запомнились вечера у костра.',
      rating: 5
    },
    {
      name: 'Анна',
      photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1376&auto=format&fit=crop',
      text: 'Уже второй раз приезжаем в ALRA, и каждый раз открываем для себя что-то новое. Идеальное место для перезагрузки от городской суеты. Хочу отменить классное расположение домиков и отдельное спасибо за вкуснейшие завтраки!',
      rating: 5
    }
  ];

  return (
    <div className="contact-container">
      <Header />
      
      <main className="contact-main">
        {/* Заголовок и вступление */}
        <section className="contact-hero">
          <div className="contact-hero-content">
            <h1 className="contact-title">Свяжитесь с нами</h1>
            <p className="contact-subtitle">
              Мы всегда рады ответить на ваши вопросы и помочь с бронированием. 
              Выберите удобный способ связи или приезжайте к нам в гости!
            </p>
          </div>
        </section>
        
        {/* Интерактивная карта */}
        <section className="contact-map-section">
          <div className="contact-section-container">
            <h2 className="contact-section-title">Наше расположение</h2>
            <div className="contact-map-wrapper">
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
        </section>
        
        {/* Контактные данные */}
        <section className="contact-info-section">
          <div className="contact-section-container">
            <div className="contact-info-grid">
              <div className="contact-info-card">
                <div class="contact-info-card-title-text">
                  <img src="https://i.postimg.cc/0QLHg0JH/ic-round-phone.png" alt="location" className="contact-info-icon" />
                  <h3 className="contact-info-title">Телефон</h3>
                </div>
                <p className="contact-info-text">+7 (940) 717-99-88</p>
              </div>
              
              <div className="contact-info-card">
                <div class="contact-info-card-title-text">
                  <img src="https://i.postimg.cc/x1DPRZy7/Group-2.png" alt="location" className="contact-info-icon" />
                  <h3 className="contact-info-title">Email</h3>
                </div>
                <p className="contact-info-text">info@alra-eco.com</p>
              </div>
              
              <div className="contact-info-card">
              <div class="contact-info-card-title-text">
                <img src="https://i.postimg.cc/DwK67NDh/Frame-1458.png" alt="location" className="contact-info-icon" />
                <h3 className="contact-info-title">Адрес</h3>
              </div>
                <p className="contact-info-text" ref={addressRef}>
                  Республика Абхазия, Кындыг, <br />
                  ул. Школьная
                </p>
                <button 
                  className="contact-copy-btn" 
                  onClick={copyToClipboard}
                >
                  {copied ? 'Скопировано!' : 'Скопировать адрес'}
                </button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Форма обратной связи */}
        <section className="contact-form-section">
          <div className="contact-section-container">
            <h2 className="contact-section-title">Отправьте нам сообщение</h2>
            
            {formSubmitted ? (
              <div className="contact-form-success">
                <div className="contact-success-icon">✓</div>
                <h3 className="contact-success-title">Спасибо за сообщение!</h3>
                <p className="contact-success-text">
                  Мы получили ваше сообщение и ответим вам в ближайшее время.
                </p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleFormSubmit}>
                <div className="contact-form-grid">
                  <div className="contact-form-group">
                    <label className="contact-form-label">Ваше имя*</label>
                    <input
                      type="text"
                      name="name"
                      className="contact-form-input"
                      value={formData.name}
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                  
                  <div className="contact-form-group">
                    <label className="contact-form-label">Email*</label>
                    <input
                      type="email"
                      name="email"
                      className="contact-form-input"
                      value={formData.email}
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                  
                  <div className="contact-form-group contact-form-full">
                    <label className="contact-form-label">Тема сообщения</label>
                    <input
                      type="text"
                      name="subject"
                      className="contact-form-input"
                      value={formData.subject}
                      onChange={handleFormChange}
                    />
                  </div>
                  
                  <div className="contact-form-group contact-form-full">
                    <label className="contact-form-label">Сообщение*</label>
                    <textarea
                      name="message"
                      className="contact-form-textarea"
                      value={formData.message}
                      onChange={handleFormChange}
                      rows="5"
                      required
                    ></textarea>
                  </div>
                </div>
                
                <div className="contact-form-submit">
                  <button type="submit" className="contact-form-button">Отправить сообщение</button>
                </div>
              </form>
            )}
          </div>
        </section>
        
        {/* Часы работы и заселения */}
        <section className="contact-hours-section">
          <div className="contact-section-container">
            <h2 className="contact-section-title">Часы работы и заселения</h2>
            <div className="contact-hours-wrapper">
              <div className="contact-hours-card">
                <h3 className="contact-hours-title">Ресепшн</h3>
                <ul className="contact-hours-list">
                  <li className="contact-hours-item">
                    <span className="contact-hours-day">Пн-Вс</span>
                    <span className="contact-hours-time">Круглосуточно</span>
                  </li>
                </ul>
              </div>
              
              <div className="contact-hours-card">
                <h3 className="contact-hours-title">Заселение и выезд</h3>
                <ul className="contact-hours-list">
                  <li className="contact-hours-item">
                    <span className="contact-hours-day">Заселение</span>
                    <span className="contact-hours-time">с 14:00</span>
                  </li>
                  <li className="contact-hours-item">
                    <span className="contact-hours-day">Выезд</span>
                    <span className="contact-hours-time">до 12:00</span>
                  </li>
                </ul>
                <p className="contact-hours-note">
                  Ранний заезд и поздний выезд возможны по предварительной договоренности 
                  (при наличии свободных номеров)
                </p>
              </div>
              
              <div className="contact-hours-card">
                <h3 className="contact-hours-title">Ресторан</h3>
                <ul className="contact-hours-list">
                  <li className="contact-hours-item">
                    <span className="contact-hours-day">Завтрак</span>
                    <span className="contact-hours-time">08:00 - 10:00</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Блок "Мы открыты для сотрудничества" */}
        <section className="contact-collab-section">
          <div className="contact-section-container">
            <h2 className="contact-section-title">Мы открыты для сотрудничества</h2>
            <div className="contact-collab-content">
              <p className="contact-collab-text">
                Eсли вы представляете туристическое агентство, блогер, специалист в сфере 
                экологического туризма или любой другой бизнес, заинтересованный в партнерстве, 
                мы будем рады обсудить возможности сотрудничества.
              </p>
              <div className="contact-collab-options">
                <div className="contact-collab-item">
                <img src="https://i.postimg.cc/PxV75kvJ/material-symbols-handshake.png" alt="location" className="contact-collab-icon" />
                  <h4 className="contact-collab-item-title">Туристические агентства</h4>
                </div>
                <div className="contact-collab-item">
                <img src="https://i.postimg.cc/NFWPR74w/fluent-phone-16-regular.png" alt="location" className="contact-collab-icon" />
                  <h4 className="contact-collab-item-title">Блогеры и инфлюенсеры</h4>
                </div>
                <div className="contact-collab-item">
                <img src="https://i.postimg.cc/MG7bNGH8/Frame-1455.png" alt="location" className="contact-collab-icon-goods" />
                  <h4 className="contact-collab-item-title">Поставщики продуктов</h4>
                </div>
                <div className="contact-collab-item">
                <img src="https://i.postimg.cc/0j6B6H7f/prime-gift.png" alt="location" className="contact-collab-icon" />
                  <h4 className="contact-collab-item-title">Производители сувениров</h4>
                </div>
              </div>
              <a href="mailto:partnership@alra-eco.com" className="contact-collab-button">
                Написать о сотрудничестве
              </a>
            </div>
          </div>
        </section>

        
        {/* Отзывы или сообщения от гостей */}
        <section className="contact-testimonials-section">
          <div className="contact-section-container">
            <h2 className="contact-section-title">Отзывы наших гостей</h2>
            <div className="contact-testimonials-grid">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="contact-testimonial-card">
                  <div className="contact-testimonial-header">
                    <div className="contact-testimonial-avatar">
                      <img src={testimonial.photo} alt={testimonial.name} />
                    </div>
                    <div className="contact-testimonial-info">
                      <h4 className="contact-testimonial-name">{testimonial.name}</h4>
                      <div className="contact-testimonial-rating">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={`contact-star ${i < testimonial.rating ? 'contact-star-filled' : ''}`}>★</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="contact-testimonial-text">{testimonial.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Юридическая информация */}
        <section className="contact-legal-section">
          <div className="contact-section-container">
            <div className="contact-legal-content">
              <h3 className="contact-legal-title">Юридическая информация</h3>
              <div className="contact-legal-details">
                <p className="contact-legal-text">
                  ООО "АЛРА Эко Вилладж" <br />
                  ИНН: 1234567890 <br />
                  ОГРН: 1234567890123 <br />
                  Юридический адрес: Республика Абхазия, Кындыг, ул. Школьная
                </p>
                <div className="contact-legal-links">
                  <Link to="/house-rules" className="contact-legal-link">Правила проживания</Link>
                  <Link to="/booking-terms" className="contact-legal-link">Условия бронирования</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contacts; 