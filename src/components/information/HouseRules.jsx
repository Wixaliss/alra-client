import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';
import './HouseRules.css';

const HouseRules = () => {
  // Scroll to the top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const [activeTab, setActiveTab] = useState('general');
  
  // Function to handle printing the rules
  const handlePrintRules = () => {
    window.print();
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="rules-container">
      <Header />
      
      <main className="rules-main">
        <div className="rules-header">
          <div className="rules-header-overlay">
            <h1 className="rules-title">Правила проживания</h1>
            <p className="rules-subtitle">Ознакомьтесь с основными правилами и информацией для гостей ALRA Eco Village</p>
          </div>
        </div>
        
        <div className="rules-content">
          <div className="rules-actions">
            <button className="rules-print-btn" onClick={handlePrintRules}>
              <span className="rules-print-icon">🖨️</span> Распечатать правила
            </button>
            <div className="rules-last-update">Последнее обновление: 01.11.2023</div>
          </div>
          
          <div className="rules-tabs">
            <button 
              className={`rules-tab ${activeTab === 'general' ? 'rules-tab-active' : ''}`}
              onClick={() => handleTabChange('general')}
            >
              Общие правила
            </button>
            <button 
              className={`rules-tab ${activeTab === 'checkin' ? 'rules-tab-active' : ''}`}
              onClick={() => handleTabChange('checkin')}
            >
              Заезд и выезд
            </button>
            <button 
              className={`rules-tab ${activeTab === 'roomcare' ? 'rules-tab-active' : ''}`}
              onClick={() => handleTabChange('roomcare')}
            >
              Уход за номером
            </button>
            <button 
              className={`rules-tab ${activeTab === 'facilities' ? 'rules-tab-active' : ''}`}
              onClick={() => handleTabChange('facilities')}
            >
              Удобства и услуги
            </button>
            <button 
              className={`rules-tab ${activeTab === 'eco' ? 'rules-tab-active' : ''}`}
              onClick={() => handleTabChange('eco')}
            >
              Эко-принципы
            </button>
            <button 
              className={`rules-tab ${activeTab === 'security' ? 'rules-tab-active' : ''}`}
              onClick={() => handleTabChange('security')}
            >
              Безопасность
            </button>
          </div>
          
          <div className="rules-tab-content">
            {activeTab === 'general' && (
              <div className="rules-section">
                <h2 className="rules-section-title">Общие правила проживания</h2>
                
                <div className="rules-cards">
                  <div className="rules-card">
                    <div className="rules-card-icon">⏰</div>
                    <h3 className="rules-card-title">Время заезда и выезда</h3>
                    <p className="rules-card-text">
                      Время заезда: с 14:00<br />
                      Время выезда: до 12:00
                    </p>
                    <p className="rules-card-note">
                      Ранний заезд и поздний выезд возможны при наличии свободных номеров и за дополнительную плату.
                    </p>
                  </div>
                  
                  <div className="rules-card">
                    <div className="rules-card-icon">🔞</div>
                    <h3 className="rules-card-title">Возрастные ограничения</h3>
                    <p className="rules-card-text">
                      Регистрация гостей осуществляется только при достижении совершеннолетия (18 лет). Дети и подростки могут проживать только в сопровождении взрослых.
                    </p>
                  </div>
                  
                  <div className="rules-card">
                    <div className="rules-card-icon">🧾</div>
                    <h3 className="rules-card-title">Документы</h3>
                    <p className="rules-card-text">
                      При заселении все гости должны предоставить действующее удостоверение личности с фотографией (паспорт).
                    </p>
                  </div>
                  
                  <div className="rules-card">
                    <div className="rules-card-icon">💰</div>
                    <h3 className="rules-card-title">Оплата</h3>
                    <p className="rules-card-text">
                      Полная оплата проживания производится при заезде. Принимаются наличные, банковские карты Мир, UnionPay.
                    </p>
                  </div>
                  
                  <div className="rules-card">
                    <div className="rules-card-icon">🚭</div>
                    <h3 className="rules-card-title">Курение</h3>
                    <p className="rules-card-text">
                      ALRA Eco Village является зоной, свободной от курения. Курение запрещено во всех помещениях. Для курящих гостей предусмотрены специальные зоны на открытом воздухе.
                    </p>
                    <p className="rules-card-note">
                      Штраф за курение в номере: 5000 ₽
                    </p>
                  </div>
                  
                  <div className="rules-card">
                    <div className="rules-card-icon">🐕</div>
                    <h3 className="rules-card-title">Домашние животные</h3>
                    <p className="rules-card-text">
                      Мы приветствуем гостей с домашними животными в некоторых категориях номеров при условии предварительного согласования.
                    </p>
                    <p className="rules-card-note">
                      Дополнительная плата: 1500 ₽ за весь период проживания
                    </p>
                  </div>
                </div>
                
                <div className="rules-important">
                  <h3 className="rules-important-title">Важная информация</h3>
                  <p className="rules-important-text">
                    Нарушение правил проживания и пребывания может привести к досрочному выселению без компенсации. Просим соблюдать правила проживания и уважать комфорт других гостей.
                  </p>
                </div>
              </div>
            )}
            
            {activeTab === 'checkin' && (
              <div className="rules-section">
                <h2 className="rules-section-title">Заезд и выезд</h2>
                
                <div className="rules-process">
                  <div className="rules-process-item">
                    <div className="rules-process-step">1</div>
                    <div className="rules-process-content">
                      <h3 className="rules-process-title">Подготовка к заезду</h3>
                      <p className="rules-process-text">
                        Подготовьте документы, удостоверяющие личность, для всех гостей (включая детей). Проверьте детали бронирования, включая даты пребывания и особые запросы.
                      </p>
                    </div>
                  </div>
                  
                  <div className="rules-process-item">
                    <div className="rules-process-step">2</div>
                    <div className="rules-process-content">
                      <h3 className="rules-process-title">Регистрация заезда</h3>
                      <p className="rules-process-text">
                        Прибудьте на ресепшн с 14:00 до 22:00. Для заезда после 22:00 необходимо заранее уведомить отель. При заезде заполните регистрационные карточки, предоставьте документы и внесите оплату за проживание.
                      </p>
                    </div>
                  </div>
                  
                  <div className="rules-process-item">
                    <div className="rules-process-step">3</div>
                    <div className="rules-process-content">
                      <h3 className="rules-process-title">Проверка номера</h3>
                      <p className="rules-process-text">
                        При заселении проверьте состояние номера и инвентарь. О любых проблемах или недостатках сообщите на ресепшн в течение первого часа после заселения.
                      </p>
                    </div>
                  </div>
                  
                  <div className="rules-process-item">
                    <div className="rules-process-step">4</div>
                    <div className="rules-process-content">
                      <h3 className="rules-process-title">Проживание</h3>
                      <p className="rules-process-text">
                        Соблюдайте тишину с 23:00 до 8:00. Уважайте других гостей и следуйте эко-принципам отеля. Если вам потребуется дополнительные услуги, обратитесь на ресепшн.
                      </p>
                    </div>
                  </div>
                  
                  <div className="rules-process-item">
                    <div className="rules-process-step">5</div>
                    <div className="rules-process-content">
                      <h3 className="rules-process-title">Подготовка к выезду</h3>
                      <p className="rules-process-text">
                        Перед выездом проверьте номер, чтобы не забыть личные вещи. Оплатите все дополнительные услуги, если они не были оплачены ранее.
                      </p>
                    </div>
                  </div>
                  
                  <div className="rules-process-item">
                    <div className="rules-process-step">6</div>
                    <div className="rules-process-content">
                      <h3 className="rules-process-title">Выезд</h3>
                      <p className="rules-process-text">
                        Выезд производится до 12:00. Ключи от номера сдайте на ресепшн. При позднем выезде (при наличии возможности) взимается дополнительная плата: до 18:00 - 50% от стоимости суток, после 18:00 - полная стоимость суток.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'roomcare' && (
              <div className="rules-section">
                <h2 className="rules-section-title">Уход за номером</h2>
                
                <div className="rules-grid">
                  <div className="rules-grid-item">
                    <h3 className="rules-grid-title">График уборки</h3>
                    <ul className="rules-grid-list">
                      <li>Ежедневная уборка проводится с 10:00 до 16:00</li>
                      <li>Смена полотенец - ежедневно по запросу</li>
                      <li>Смена постельного белья - каждые 3 дня (или по запросу)</li>
                      <li>Если вы не хотите, чтобы вас беспокоили, повесьте соответствующую табличку на дверь</li>
                    </ul>
                  </div>
                  
                  <div className="rules-grid-item">
                    <h3 className="rules-grid-title">Бережное использование</h3>
                    <ul className="rules-grid-list">
                      <li>Пожалуйста, экономно используйте воду и электроэнергию</li>
                      <li>Закрывайте краны и выключайте свет, когда они не используются</li>
                      <li>Сортируйте отходы согласно указаниям в номере</li>
                      <li>Не используйте приборы с высоким энергопотреблением</li>
                    </ul>
                  </div>
                  
                  <div className="rules-grid-item">
                    <h3 className="rules-grid-title">Сохранение имущества</h3>
                    <ul className="rules-grid-list">
                      <li>Бережно относитесь к мебели и оборудованию в номере</li>
                      <li>Запрещается выносить полотенца, халаты и другое имущество за пределы отеля</li>
                      <li>В случае повреждения имущества взимается компенсация согласно прейскуранту</li>
                    </ul>
                  </div>
                  
                  <div className="rules-grid-item">
                    <h3 className="rules-grid-title">Дополнительная уборка</h3>
                    <ul className="rules-grid-list">
                      <li>Дополнительная уборка может быть заказана на ресепшн</li>
                      <li>Стоимость дополнительной уборки: 1000 ₽</li>
                      <li>Срочная уборка выполняется в течение 30 минут (доплата 500 ₽)</li>
                    </ul>
                  </div>
                </div>
                
                <div className="rules-note">
                  <h3 className="rules-note-title">Обратите внимание</h3>
                  <p className="rules-note-text">
                    Мы используем экологически чистые средства для уборки и стирки. Эти средства гипоаллергенны и безопасны как для вас, так и для окружающей среды.
                  </p>
                </div>
              </div>
            )}
            
            {activeTab === 'facilities' && (
              <div className="rules-section">
                <h2 className="rules-section-title">Удобства и услуги</h2>
                
                <div className="rules-facilities">
                  <div className="rules-facility">
                    <div className="rules-facility-icon">🍽️</div>
                    <div className="rules-facility-content">
                      <h3 className="rules-facility-title">Ресторан и питание</h3>
                      <p className="rules-facility-text">
                        Ресторан работает ежедневно:
                      </p>
                      <ul className="rules-facility-list">
                        <li>Завтрак: 07:00 - 10:00</li>
                        <li>Обед: 12:30 - 15:00</li>
                        <li>Ужин: 18:00 - 22:00</li>
                      </ul>
                      <p className="rules-facility-text">
                        Заказ в номер доступен с 07:00 до 22:00 (доплата 300 ₽).
                        Специальное питание (вегетарианское, безглютеновое и т.д.) доступно по предварительному запросу.
                      </p>
                    </div>
                  </div>
                  
                  <div className="rules-facility">
                    <div className="rules-facility-icon">🧖‍♀️</div>
                    <div className="rules-facility-content">
                      <h3 className="rules-facility-title">Спа и оздоровление</h3>
                      <p className="rules-facility-text">
                        Спа-центр работает ежедневно с 10:00 до 21:00.
                      </p>
                      <ul className="rules-facility-list">
                        <li>Бронирование процедур желательно за 24 часа</li>
                        <li>Посещение сауны и бани – по предварительной записи</li>
                        <li>При отмене записи менее чем за 4 часа взимается 50% стоимости услуги</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="rules-facility">
                    <div className="rules-facility-icon">🚶‍♂️</div>
                    <div className="rules-facility-content">
                      <h3 className="rules-facility-title">Экскурсии и активности</h3>
                      <p className="rules-facility-text">
                        Экскурсии проводятся ежедневно по расписанию.
                      </p>
                      <ul className="rules-facility-list">
                        <li>Запись на экскурсии – на ресепшн или в мобильном приложении</li>
                        <li>Рекомендуем бронировать за 24 часа</li>
                        <li>При неблагоприятных погодных условиях экскурсии могут быть отменены</li>
                        <li>При отмене бронирования менее чем за 12 часов взимается 30% стоимости</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="rules-facility">
                    <div className="rules-facility-icon">🚗</div>
                    <div className="rules-facility-content">
                      <h3 className="rules-facility-title">Транспорт и парковка</h3>
                      <p className="rules-facility-text">
                        Бесплатная парковка доступна для всех гостей.
                      </p>
                      <ul className="rules-facility-list">
                        <li>Трансфер от/до аэропорта – по предварительному запросу (за 24 часа)</li>
                        <li>Аренда велосипедов – на ресепшн</li>
                        <li>Такси можно заказать на ресепшн (время ожидания около 15-20 минут)</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="rules-facility">
                    <div className="rules-facility-icon">👨‍👩‍👧‍👦</div>
                    <div className="rules-facility-content">
                      <h3 className="rules-facility-title">Услуги для семей</h3>
                      <p className="rules-facility-text">
                        Детский клуб работает ежедневно с 10:00 до 19:00.
                      </p>
                      <ul className="rules-facility-list">
                        <li>Детская анимация проводится по расписанию</li>
                        <li>Услуги няни – по предварительному запросу (за 4 часа)</li>
                        <li>Детские стульчики в ресторане предоставляются бесплатно</li>
                        <li>Детские кроватки в номер – по запросу при бронировании</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="rules-facility">
                    <div className="rules-facility-icon">📶</div>
                    <div className="rules-facility-content">
                      <h3 className="rules-facility-title">Интернет и связь</h3>
                      <p className="rules-facility-text">
                        Бесплатный Wi-Fi доступен на всей территории отеля.
                      </p>
                      <ul className="rules-facility-list">
                        <li>Логин и пароль предоставляются при заселении</li>
                        <li>Бизнес-центр работает круглосуточно</li>
                        <li>Для видеоконференций рекомендуем использовать бизнес-зону</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'eco' && (
              <div className="rules-section">
                <h2 className="rules-section-title">Эко-принципы</h2>
                
                <div className="rules-eco-intro">
                  <p>
                    ALRA Eco Village придерживается принципов устойчивого развития и бережного отношения к природе. 
                    Мы просим наших гостей разделять эти ценности и соблюдать следующие эко-правила:
                  </p>
                </div>
                
                <div className="rules-eco-principles">
                  <div className="rules-eco-principle">
                    <div className="rules-eco-icon">💧</div>
                    <h3 className="rules-eco-title">Экономия воды</h3>
                    <p className="rules-eco-text">
                      Пожалуйста, используйте воду экономно. Закрывайте краны, когда они не используются.
                      Повторное использование полотенец снижает потребление воды и энергии.
                    </p>
                    <div className="rules-eco-tip">
                      <strong>Совет:</strong> Сократите время принятия душа на 1 минуту, и вы сэкономите до 150 литров воды в неделю.
                    </div>
                  </div>
                  
                  <div className="rules-eco-principle">
                    <div className="rules-eco-icon">⚡</div>
                    <h3 className="rules-eco-title">Энергосбережение</h3>
                    <p className="rules-eco-text">
                      Выключайте свет и электроприборы, когда покидаете номер.
                      Используйте кондиционер только при необходимости и закрывайте окна при его работе.
                    </p>
                    <div className="rules-eco-tip">
                      <strong>Совет:</strong> Установка температуры кондиционера на 24-25°C оптимальна для комфорта и энергоэффективности.
                    </div>
                  </div>
                  
                  <div className="rules-eco-principle">
                    <div className="rules-eco-icon">♻️</div>
                    <h3 className="rules-eco-title">Управление отходами</h3>
                    <p className="rules-eco-text">
                      Сортируйте отходы в соответствии с указаниями в номере (пластик, бумага, стекло, органические отходы).
                      Избегайте использования одноразовых предметов.
                    </p>
                    <div className="rules-eco-tip">
                      <strong>Совет:</strong> В каждом номере есть многоразовые бутылки для воды, которые можно наполнить очищенной водой в специальных автоматах.
                    </div>
                  </div>
                  
                  <div className="rules-eco-principle">
                    <div className="rules-eco-icon">🌿</div>
                    <h3 className="rules-eco-title">Уважение к природе</h3>
                    <p className="rules-eco-text">
                      При прогулках по территории и экскурсиях оставайтесь на обозначенных тропах.
                      Не собирайте растения и не беспокойте животных.
                      Не оставляйте мусор на природе.
                    </p>
                    <div className="rules-eco-tip">
                      <strong>Совет:</strong> Фотографировать флору и фауну лучше без вспышки, чтобы не беспокоить животных.
                    </div>
                  </div>
                  
                  <div className="rules-eco-principle">
                    <div className="rules-eco-icon">🍽️</div>
                    <h3 className="rules-eco-title">Ответственное питание</h3>
                    <p className="rules-eco-text">
                      Старайтесь брать порции, которые сможете съесть, чтобы уменьшить пищевые отходы.
                      Отдавайте предпочтение местным и сезонным продуктам.
                    </p>
                    <div className="rules-eco-tip">
                      <strong>Совет:</strong> В нашем ресторане блюда, приготовленные из местных и органических продуктов, отмечены специальным значком.
                    </div>
                  </div>
                  
                  <div className="rules-eco-principle">
                    <div className="rules-eco-icon">🚗</div>
                    <h3 className="rules-eco-title">Транспорт</h3>
                    <p className="rules-eco-text">
                      Для передвижения по территории используйте велосипеды или ходите пешком.
                      При поездках в город рассмотрите возможность группового трансфера.
                    </p>
                    <div className="rules-eco-tip">
                      <strong>Совет:</strong> На ресепшн можно бесплатно взять велосипед для прогулок по окрестностям.
                    </div>
                  </div>
                </div>
                
                <div className="rules-eco-certificate">
                  <h3 className="rules-eco-certificate-title">Наши сертификаты</h3>
                  <p className="rules-eco-certificate-text">
                    ALRA Eco Village имеет сертификаты Green Key и TripAdvisor GreenLeaders, подтверждающие наше стремление к экологической устойчивости и ответственному туризму.
                  </p>
                </div>
              </div>
            )}
            
            {activeTab === 'security' && (
              <div className="rules-section">
                <h2 className="rules-section-title">Безопасность</h2>
                
                <div className="rules-security">
                  <div className="rules-security-item">
                    <h3 className="rules-security-title">Пожарная безопасность</h3>
                    <div className="rules-security-content">
                      <ul className="rules-security-list">
                        <li>Ознакомьтесь с планом эвакуации на двери номера</li>
                        <li>Запоминайте расположение аварийных выходов</li>
                        <li>Запрещается использовать в номере нагревательные приборы, не предусмотренные комплектацией</li>
                        <li>Запрещается накрывать светильники и лампы тканью или бумагой</li>
                        <li>В случае пожара немедленно позвоните на ресепшн (9) или в экстренные службы (112)</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="rules-security-item">
                    <h3 className="rules-security-title">Личная безопасность</h3>
                    <div className="rules-security-content">
                      <ul className="rules-security-list">
                        <li>Всегда закрывайте дверь номера на замок и используйте дверную цепочку</li>
                        <li>Не открывайте дверь незнакомым людям</li>
                        <li>Не приглашайте в номер посторонних лиц, не зарегистрированных в отеле</li>
                        <li>Храните ценные вещи и документы в сейфе</li>
                        <li>При выходе из номера закрывайте окна и балконные двери</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="rules-security-item">
                    <h3 className="rules-security-title">Безопасность на природе</h3>
                    <div className="rules-security-content">
                      <ul className="rules-security-list">
                        <li>При прогулках по лесу не сходите с обозначенных маршрутов</li>
                        <li>При плавании соблюдайте правила безопасности на воде</li>
                        <li>Не разводите костры вне специально оборудованных мест</li>
                        <li>Перед экскурсиями надевайте соответствующую обувь и одежду</li>
                        <li>При грозе не находитесь на открытом пространстве и не укрывайтесь под высокими деревьями</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="rules-security-item">
                    <h3 className="rules-security-title">Медицинская помощь</h3>
                    <div className="rules-security-content">
                      <ul className="rules-security-list">
                        <li>Аптечка первой помощи находится на ресепшн</li>
                        <li>В случае недомогания обратитесь к администратору</li>
                        <li>При серьезных проблемах со здоровьем звоните 103 (скорая помощь) или 112 (единый номер)</li>
                        <li>Ближайшая больница находится в 10 км от отеля</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="rules-emergency">
                  <h3 className="rules-emergency-title">Экстренные контакты</h3>
                  <div className="rules-emergency-contacts">
                    <div className="rules-emergency-contact">
                      <div className="rules-emergency-icon">📞</div>
                      <div className="rules-emergency-label">Ресепшн:</div>
                      <div className="rules-emergency-number">9 (внутренний)</div>
                    </div>
                    
                    <div className="rules-emergency-contact">
                      <div className="rules-emergency-icon">🚑</div>
                      <div className="rules-emergency-label">Скорая помощь:</div>
                      <div className="rules-emergency-number">103</div>
                    </div>
                    
                    <div className="rules-emergency-contact">
                      <div className="rules-emergency-icon">🚒</div>
                      <div className="rules-emergency-label">Пожарная служба:</div>
                      <div className="rules-emergency-number">101</div>
                    </div>
                    
                    <div className="rules-emergency-contact">
                      <div className="rules-emergency-icon">👮</div>
                      <div className="rules-emergency-label">Полиция:</div>
                      <div className="rules-emergency-number">102</div>
                    </div>
                    
                    <div className="rules-emergency-contact">
                      <div className="rules-emergency-icon">🆘</div>
                      <div className="rules-emergency-label">Единый номер:</div>
                      <div className="rules-emergency-number">112</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div className="rules-back-link">
            <Link to="/contacts" className="rules-back-button">
              <span>←</span> Вернуться к контактам
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default HouseRules; 