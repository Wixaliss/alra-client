import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import './services.css';

const Services = () => {
  const location = useLocation();
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

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
        phone: '',
        service: '',
        date: '',
        message: ''
      });
    }, 3000);
  };

  const services = [
    {
      category: "Проживание",
      icon: "🏡",
      items: [
        {
          title: "Стандартные номера",
          description: "Комфортные номера с панорамными окнами, собственной ванной комнатой и всеми необходимыми удобствами.",
          price: "от 5000 ₽ / ночь",
          image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1470&auto=format&fit=crop"
        },
        {
          title: "Эко-домики",
          description: "Отдельно стоящие домики из натуральных материалов с террасой и видом на природу.",
          price: "от 8000 ₽ / ночь",
          image: "https://images.unsplash.com/photo-1568626640293-f19e7a28c68a?q=80&w=1470&auto=format&fit=crop"
        },
        {
          title: "Семейные апартаменты",
          description: "Просторные апартаменты с двумя спальнями, гостиной и кухней для комфортного проживания семей.",
          price: "от 12000 ₽ / ночь",
          image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1470&auto=format&fit=crop"
        }
      ]
    },
    {
      category: "Питание",
      icon: "🍽️",
      items: [
        {
          title: "Эко-ресторан",
          description: "Блюда из органических продуктов местного производства, приготовленные по традиционным и современным рецептам.",
          price: "Средний чек: 1500 ₽",
          image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop"
        },
        {
          title: "Завтраки из местных продуктов",
          description: "Свежие завтраки включены в стоимость проживания, с акцентом на экологически чистые продукты региона.",
          price: "Включено в стоимость проживания",
          image: "https://images.unsplash.com/photo-1533089860892-a9b9ac6cd6b4?q=80&w=1470&auto=format&fit=crop"
        },
        {
          title: "Кулинарные мастер-классы",
          description: "Изучите секреты местной кухни под руководством нашего шеф-повара.",
          price: "от 2000 ₽ / человека",
          image: "https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?q=80&w=1374&auto=format&fit=crop"
        }
      ]
    },
    {
      category: "Велнес и восстановление",
      icon: "💆",
      items: [
        {
          title: "Сауна и баня",
          description: "Традиционная русская баня и финская сауна с зоной отдыха и травяными чаями.",
          price: "от 3000 ₽ / 2 часа",
          image: "https://images.unsplash.com/photo-1554629947-334ff61d85dc?q=80&w=1576&auto=format&fit=crop"
        },
        {
          title: "Массаж и спа-процедуры",
          description: "Различные виды массажа и спа-процедур для релаксации и оздоровления.",
          price: "от 2500 ₽ / сеанс",
          image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1470&auto=format&fit=crop"
        },
        {
          title: "Йога и медитация",
          description: "Групповые и индивидуальные занятия йогой на природе с опытными инструкторами.",
          price: "от 1000 ₽ / занятие",
          image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1470&auto=format&fit=crop"
        }
      ]
    },
    {
      category: "Экскурсии и активный отдых",
      icon: "🥾",
      items: [
        {
          title: "Треккинг и пешие прогулки",
          description: "Маршруты разной сложности по живописным окрестностям и лесным тропам.",
          price: "от 1500 ₽ / человека",
          image: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=1470&auto=format&fit=crop"
        },
        {
          title: "Велопрогулки",
          description: "Аренда велосипедов и экскурсии по специальным маршрутам.",
          price: "от 800 ₽ / день (аренда)",
          image: "https://images.unsplash.com/photo-1541625602330-2277a4c46182?q=80&w=1470&auto=format&fit=crop"
        },
        {
          title: "Водные активности",
          description: "Каякинг, SUP-серфинг и другие водные развлечения на реке и море.",
          price: "от 2000 ₽ / человека",
          image: "https://images.unsplash.com/photo-1520454125123-a0a968ded759?q=80&w=1471&auto=format&fit=crop"
        }
      ]
    },
    {
      category: "Детокс-услуги",
      icon: "🌱",
      items: [
        {
          title: "Детокс-программы",
          description: "Комплексные программы очищения организма под наблюдением специалистов.",
          price: "от 15000 ₽ / 3 дня",
          image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?q=80&w=1374&auto=format&fit=crop"
        },
        {
          title: "Консультации нутрициолога",
          description: "Индивидуальные консультации по питанию и здоровому образу жизни.",
          price: "от 3000 ₽ / консультация",
          image: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?q=80&w=1400&auto=format&fit=crop"
        },
        {
          title: "Фитотерапия",
          description: "Лечебные чаи и настои из местных трав и растений.",
          price: "от 500 ₽ / сеанс",
          image: "https://images.unsplash.com/photo-1563822249366-3efb23b3e95c?q=80&w=1374&auto=format&fit=crop"
        }
      ]
    },
    {
      category: "Услуги по запросу",
      icon: "✨",
      items: [
        {
          title: "Личный консьерж",
          description: "Персональный ассистент для решения любых вопросов во время вашего пребывания.",
          price: "от 5000 ₽ / день",
          image: "https://images.unsplash.com/photo-1560438718-eb61ede255eb?q=80&w=1500&auto=format&fit=crop"
        },
        {
          title: "Трансфер",
          description: "Комфортный трансфер из аэропорта или железнодорожного вокзала.",
          price: "от 3000 ₽",
          image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?q=80&w=1531&auto=format&fit=crop"
        },
        {
          title: "Особые события",
          description: "Организация праздников, романтических ужинов и других особых мероприятий.",
          price: "Индивидуально",
          image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1470&auto=format&fit=crop"
        }
      ]
    },
    {
      category: "Мастер-классы и мероприятия",
      icon: "🎨",
      items: [
        {
          title: "Гончарное дело",
          description: "Создайте собственные керамические изделия под руководством мастера.",
          price: "от 2500 ₽ / человека",
          image: "https://images.unsplash.com/photo-1595111633191-7a8c1f548508?q=80&w=1530&auto=format&fit=crop"
        },
        {
          title: "Живопись на природе",
          description: "Уроки живописи с профессиональными художниками в живописных локациях.",
          price: "от 2000 ₽ / человека",
          image: "https://images.unsplash.com/photo-1579762593175-20226054cad0?q=80&w=1436&auto=format&fit=crop"
        },
        {
          title: "Лекции и воркшопы",
          description: "Тематические мероприятия об экологии, устойчивом развитии и здоровом образе жизни.",
          price: "от 1000 ₽ / человека",
          image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1470&auto=format&fit=crop"
        }
      ]
    },
    {
      category: "Для семей с детьми",
      icon: "👨‍👩‍👧‍👦",
      items: [
        {
          title: "Детская анимация",
          description: "Развлекательные программы для детей разных возрастов.",
          price: "Включено в стоимость проживания",
          image: "https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?q=80&w=1469&auto=format&fit=crop"
        },
        {
          title: "Детский клуб",
          description: "Безопасное пространство для игр и творчества под присмотром воспитателей.",
          price: "от 1000 ₽ / час",
          image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1472&auto=format&fit=crop"
        },
        {
          title: "Семейные активности",
          description: "Специальные мероприятия и экскурсии, разработанные для всей семьи.",
          price: "от 3000 ₽ / семья",
          image: "https://images.unsplash.com/photo-1478071735433-5d8f9a54c00c?q=80&w=1470&auto=format&fit=crop"
        }
      ]
    }
  ];

  return (
    <div className="alra-services-container">
      <Header />
      
      <main className="alra-services-main">
        <section className="alra-services-hero">
          <div className="alra-services-hero-content">
            <h1 className="alra-services-title">Услуги</h1>
            <p className="alra-services-subtitle">Что мы предлагаем для вашего спокойствия</p>
          </div>
        </section>
        
        <section className="alra-services-intro">
          <div className="alra-services-intro-container">
            <p className="alra-services-intro-text">
              В ALRA Eco Village мы создали уникальное пространство, где каждая услуга направлена на 
              восстановление гармонии с природой и самим собой. Наша цель — обеспечить вам незабываемый 
              отдых, наполненный комфортом и новыми впечатлениями, при этом максимально бережно относясь 
              к окружающей среде.
            </p>
          </div>
        </section>
        
        <section className="alra-services-list">
          <div className="alra-services-list-container">
            {services.map((category, index) => (
              <div 
                key={index}
                className={`alra-service-category ${activeAccordion === index ? 'alra-service-active' : ''}`}
              >
                <div 
                  className="alra-service-category-header"
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="alra-service-category-icon">{category.icon}</div>
                  <h2 className="alra-service-category-title">{category.category}</h2>
                  <span className="alra-service-category-toggle">
                    {activeAccordion === index ? '−' : '+'}
                  </span>
                </div>
                
                <div className="alra-service-category-content">
                  <div className="alra-service-items">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="alra-service-item">
                        <div className="alra-service-item-image">
                          <img src={item.image} alt={item.title} />
                        </div>
                        <div className="alra-service-item-info">
                          <h3 className="alra-service-item-title">{item.title}</h3>
                          <p className="alra-service-item-desc">{item.description}</p>
                          <div className="alra-service-item-price">{item.price}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        <section className="alra-booking-section">
          <div className="alra-booking-container">
            <h2 className="alra-booking-title">Забронировать услугу</h2>
            <p className="alra-booking-subtitle">
              Заполните форму, и наш менеджер свяжется с вами для уточнения деталей
            </p>
            
            {formSubmitted ? (
              <div className="alra-booking-success">
                <div className="alra-success-icon">✓</div>
                <h3 className="alra-success-title">Спасибо за заявку!</h3>
                <p className="alra-success-text">
                  Мы получили вашу заявку и свяжемся с вами в ближайшее время.
                </p>
              </div>
            ) : (
              <form className="alra-booking-form" onSubmit={handleFormSubmit}>
                <div className="alra-booking-form-grid">
                  <div className="alra-form-group">
                    <label className="alra-form-label">Ваше имя*</label>
                    <input
                      type="text"
                      name="name"
                      className="alra-form-input"
                      value={formData.name}
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                  
                  <div className="alra-form-group">
                    <label className="alra-form-label">Email*</label>
                    <input
                      type="email"
                      name="email"
                      className="alra-form-input"
                      value={formData.email}
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                  
                  <div className="alra-form-group">
                    <label className="alra-form-label">Телефон</label>
                    <input
                      type="tel"
                      name="phone"
                      className="alra-form-input"
                      value={formData.phone}
                      onChange={handleFormChange}
                    />
                  </div>
                  
                  <div className="alra-form-group">
                    <label className="alra-form-label">Интересующая услуга*</label>
                    <select
                      name="service"
                      className="alra-form-select"
                      value={formData.service}
                      onChange={handleFormChange}
                      required
                    >
                      <option value="">Выберите услугу</option>
                      {services.map((category, catIndex) => (
                        <optgroup key={catIndex} label={category.category}>
                          {category.items.map((item, itemIndex) => (
                            <option key={`${catIndex}-${itemIndex}`} value={item.title}>
                              {item.title}
                            </option>
                          ))}
                        </optgroup>
                      ))}
                    </select>
                  </div>
                  
                  <div className="alra-form-group">
                    <label className="alra-form-label">Предпочтительная дата</label>
                    <input
                      type="date"
                      name="date"
                      className="alra-form-input"
                      value={formData.date}
                      onChange={handleFormChange}
                    />
                  </div>
                  
                  <div className="alra-form-group alra-form-full">
                    <label className="alra-form-label">Сообщение</label>
                    <textarea
                      name="message"
                      className="alra-form-textarea"
                      value={formData.message}
                      onChange={handleFormChange}
                      rows="4"
                    ></textarea>
                  </div>
                </div>
                
                <div className="alra-form-submit">
                  <button type="submit" className="alra-form-button">Отправить заявку</button>
                </div>
              </form>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services; 