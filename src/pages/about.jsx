import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import './about.css';

const About = () => {
  const location = useLocation();
  
  return (
    <div className="alra-about-container">
      <div className="alra-about-background"></div>
      
      <Header />
      
      <main className="alra-about-main">
        <section className="alra-about-hero">
          <div className="alra-about-hero-content">
            <h1 className="alra-about-title">О нас</h1>
            <p className="alra-about-subtitle">Узнайте историю и философию ALRA Eco Village</p>
          </div>
        </section>
        
        <section className="alra-story-section">
          <div className="alra-story-container">
            <div className="alra-story-image">
              <img src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=1587&auto=format&fit=crop" alt="История ALRA" className="alra-img-rounded" />
            </div>
            <div className="alra-story-content">
              <h2 className="alra-story-title">Наша история</h2>
              <p className="alra-story-text">
                ALRA Eco Village был основан в 2018 году группой энтузиастов, объединенных 
                общей идеей создания уникального места отдыха в гармонии с природой. Расположенный 
                в одном из самых живописных уголков Абхазии, наш эко-отель стал воплощением 
                мечты о сочетании комфорта современной жизни и бережного отношения к окружающей среде.
              </p>
              <p className="alra-story-text">
                С первых дней существования ALRA, мы придерживаемся принципов устойчивого 
                развития и экологичности во всех аспектах нашей деятельности: от строительства 
                домиков из натуральных материалов до использования солнечной энергии и 
                органических продуктов в нашем ресторане.
              </p>
              <p className="alra-story-quote">
                "Мы не просто создаем место для отдыха, мы формируем новое отношение 
                к туризму и природе Абхазии"
              </p>
            </div>
          </div>
        </section>
        
        <section className="alra-philosophy-section">
          <div className="alra-philosophy-container">
            <h2 className="alra-philosophy-title">Наша философия</h2>
            <div className="alra-philosophy-grid">
              <div className="alra-philosophy-item">
                <div className="alra-philosophy-icon">🌿</div>
                <h3 className="alra-philosophy-item-title">Экологичность</h3>
                <p className="alra-philosophy-text">
                  Мы минимизируем наше воздействие на окружающую среду, используя возобновляемые 
                  источники энергии, сортируя отходы и применяя безопасные для природы материалы.
                </p>
              </div>
              <div className="alra-philosophy-item">
                <div className="alra-philosophy-icon">🤝</div>
                <h3 className="alra-philosophy-item-title">Сообщество</h3>
                <p className="alra-philosophy-text">
                  Мы создаем пространство для взаимодействия гостей и обмена опытом, 
                  поддерживаем местных производителей и развиваем локальную экономику.
                </p>
              </div>
              <div className="alra-philosophy-item">
                <div className="alra-philosophy-icon">🧘</div>
                <h3 className="alra-philosophy-item-title">Осознанность</h3>
                <p className="alra-philosophy-text">
                  Мы продвигаем осознанный подход к жизни и отдыху, предлагая практики 
                  для развития тела и духа в гармонии с природой.
                </p>
              </div>
              <div className="alra-philosophy-item">
                <div className="alra-philosophy-icon">🌍</div>
                <h3 className="alra-philosophy-item-title">Ответственность</h3>
                <p className="alra-philosophy-text">
                  Мы берем на себя ответственность за сохранение уникальной природы Абхазии 
                  и культурного наследия региона для будущих поколений.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="alra-team-section">
          <div className="alra-team-container">
            <h2 className="alra-team-title">Наша команда</h2>
            <p className="alra-team-subtitle">
              Познакомьтесь с людьми, которые создают для вас незабываемые впечатления
            </p>
            
            <div className="alra-team-grid">
              <div className="alra-team-member">
                <div className="alra-member-photo">
                  <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1522&auto=format&fit=crop" alt="Анна Иванова" />
                </div>
                <h3 className="alra-member-name">Анна Иванова</h3>
                <p className="alra-member-position">Основатель и директор</p>
                <p className="alra-member-bio">
                  Анна — идейный вдохновитель ALRA. Более 10 лет опыта в сфере экологического туризма.
                </p>
              </div>
              <div className="alra-team-member">
                <div className="alra-member-photo">
                  <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1587&auto=format&fit=crop" alt="Александр Петров" />
                </div>
                <h3 className="alra-member-name">Александр Петров</h3>
                <p className="alra-member-position">Шеф-повар</p>
                <p className="alra-member-bio">
                  Александр создает кулинарные шедевры из местных органических продуктов.
                </p>
              </div>
              <div className="alra-team-member">
                <div className="alra-member-photo">
                  <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1587&auto=format&fit=crop" alt="Елена Сидорова" />
                </div>
                <h3 className="alra-member-name">Елена Сидорова</h3>
                <p className="alra-member-position">Менеджер по гостеприимству</p>
                <p className="alra-member-bio">
                  Елена заботится о том, чтобы ваше пребывание было комфортным и запоминающимся.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="alra-eco-projects-section">
          <div className="alra-eco-container">
            <h2 className="alra-eco-title">Наши эко-проекты</h2>
            <p className="alra-eco-subtitle">
              ALRA активно участвует в различных экологических инициативах
            </p>
            
            <div className="alra-projects-list">
              <div className="alra-project-item">
                <div className="alra-project-icon">🌳</div>
                <div className="alra-project-content">
                  <h3 className="alra-project-title">Посадка деревьев</h3>
                  <p className="alra-project-text">
                    Каждый месяц мы высаживаем новые деревья в окрестностях эко-отеля. 
                    За последний год нами было посажено более 200 деревьев.
                  </p>
                </div>
              </div>
              <div className="alra-project-item">
                <div className="alra-project-icon">♻️</div>
                <div className="alra-project-content">
                  <h3 className="alra-project-title">Переработка отходов</h3>
                  <p className="alra-project-text">
                    Мы внедрили систему раздельного сбора мусора и сотрудничаем с местными 
                    предприятиями по переработке вторсырья.
                  </p>
                </div>
              </div>
              <div className="alra-project-item">
                <div className="alra-project-icon">💧</div>
                <div className="alra-project-content">
                  <h3 className="alra-project-title">Сохранение водных ресурсов</h3>
                  <p className="alra-project-text">
                    Мы используем систему сбора дождевой воды для полива территории и 
                    применяем водосберегающие технологии.
                  </p>
                </div>
              </div>
              <div className="alra-project-item">
                <div className="alra-project-icon">🔆</div>
                <div className="alra-project-content">
                  <h3 className="alra-project-title">Солнечная энергия</h3>
                  <p className="alra-project-text">
                    Часть энергии для нашего комплекса обеспечивается солнечными панелями, 
                    установленными на крышах зданий.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="alra-testimonials-section">
          <div className="alra-testimonials-container">
            <h2 className="alra-testimonials-title">Отзывы наших гостей</h2>
            
            <div className="alra-testimonials-grid">
              <div className="alra-testimonial-card">
                <div className="alra-testimonial-content">
                  <p className="alra-testimonial-text">
                    "Потрясающее место для отдыха! Чистый воздух, уютные домики, вкусная еда и 
                    дружелюбный персонал. Мы провели незабываемую неделю в ALRA Eco Village и 
                    обязательно вернемся снова."
                  </p>
                </div>
                <div className="alra-testimonial-author">
                  <div className="alra-author-photo">
                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop" alt="Мария К." />
                  </div>
                  <div className="alra-author-info">
                    <h4 className="alra-author-name">Мария К.</h4>
                    <p className="alra-author-location">Москва</p>
                    <div className="alra-author-rating">★★★★★</div>
                  </div>
                </div>
              </div>
              
              <div className="alra-testimonial-card">
                <div className="alra-testimonial-content">
                  <p className="alra-testimonial-text">
                    "Это место изменило мое представление об экологичном отдыхе. Здесь всё продумано до мелочей: 
                    от органических средств для душа до велосипедов для передвижения. Особенно 
                    впечатлили экскурсии по окрестностям и вечера у костра."
                  </p>
                </div>
                <div className="alra-testimonial-author">
                  <div className="alra-author-photo">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1587&auto=format&fit=crop" alt="Сергей Д." />
                  </div>
                  <div className="alra-author-info">
                    <h4 className="alra-author-name">Сергей Д.</h4>
                    <p className="alra-author-location">Санкт-Петербург</p>
                    <div className="alra-author-rating">★★★★★</div>
                  </div>
                </div>
              </div>
              
              <div className="alra-testimonial-card">
                <div className="alra-testimonial-content">
                  <p className="alra-testimonial-text">
                    "Уже третий раз приезжаем в ALRA, и каждый раз открываем для себя что-то новое. 
                    Идеальное место для перезагрузки от городской суеты. Отдельное спасибо за 
                    йогу на рассвете и вкуснейшие завтраки!"
                  </p>
                </div>
                <div className="alra-testimonial-author">
                  <div className="alra-author-photo">
                    <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1376&auto=format&fit=crop" alt="Анна и Дмитрий" />
                  </div>
                  <div className="alra-author-info">
                    <h4 className="alra-author-name">Анна и Дмитрий</h4>
                    <p className="alra-author-location">Краснодар</p>
                    <div className="alra-author-rating">★★★★★</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="alra-cta-section">
          <div className="alra-cta-container">
            <h2 className="alra-cta-title">Готовы к новым впечатлениям?</h2>
            <p className="alra-cta-text">
              Забронируйте свой отдых в ALRA Eco Village прямо сейчас и откройте для себя 
              уникальный опыт пребывания в гармонии с природой.
            </p>
            <a href="/book" className="alra-cta-button">Забронировать</a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About; 