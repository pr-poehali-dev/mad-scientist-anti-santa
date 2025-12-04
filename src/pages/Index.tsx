import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    specialty: '',
    motivation: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Новый помощник:', formData);
    alert('Заявка принята! Ожидайте вызова из секретной лаборатории...');
    setFormData({ name: '', specialty: '', motivation: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 vintage-border border-t-0 border-x-0 bg-card/95 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-primary glow-text">АНТИ-ДЕД МОРОЗ</h1>
          <div className="flex gap-6">
            {['Манифест', 'Схемы', 'Вербовка', 'Хроники', 'Команда', 'Дневник', 'Галерея', 'Контакты'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-foreground hover:text-primary transition-colors text-sm uppercase tracking-wider"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 border-2 border-primary rounded-full animate-rotate-slow"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-secondary rounded-full animate-rotate-slow" style={{ animationDirection: 'reverse' }}></div>
        </div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-block mb-6 px-6 py-2 vintage-border bg-card animate-flicker">
            <span className="text-destructive text-sm font-bold uppercase tracking-widest">⚠ СЕКРЕТНЫЙ ПРОЕКТ ⚠</span>
          </div>
          
          <h2 className="text-7xl font-bold mb-6 glow-text text-primary">
            ОПЕРАЦИЯ<br />«ОТМЕНА ПРАЗДНИКА»
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Величайший научный эксперимент по нейтрализации новогоднего веселья.<br />
            Разработано безумным гением для тех, кто устал от праздничной суеты.
          </p>
          
          <div className="flex gap-4 justify-center">
            <Button 
              size="lg" 
              className="vintage-border bg-primary hover:bg-primary/90 text-primary-foreground uppercase tracking-wider"
              onClick={() => document.getElementById('вербовка')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Icon name="Zap" className="mr-2" size={20} />
              Присоединиться
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="vintage-border uppercase tracking-wider"
              onClick={() => document.getElementById('схемы')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Icon name="FileText" className="mr-2" size={20} />
              Изучить схемы
            </Button>
          </div>
        </div>
      </section>

      <section id="манифест" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <div className="vintage-border bg-card p-8 relative">
            <div className="absolute top-4 right-4 text-destructive animate-spark">
              <Icon name="Skull" size={32} />
            </div>
            
            <h2 className="text-5xl font-bold mb-8 text-primary">МАНИФЕСТ БЕЗУМНОГО УЧЕНОГО</h2>
            
            <div className="space-y-6 text-lg">
              <div className="flex items-start gap-4">
                <Icon name="AlertTriangle" className="text-destructive mt-1 flex-shrink-0" size={24} />
                <p className="text-foreground">
                  <strong className="text-primary">ТЕЗИС №1:</strong> Дед Мороз — это миф, созданный корпорациями для стимуляции потребительского спроса. Пора раскрыть глаза!
                </p>
              </div>
              
              <div className="flex items-start gap-4">
                <Icon name="Microscope" className="text-primary mt-1 flex-shrink-0" size={24} />
                <p className="text-foreground">
                  <strong className="text-primary">ТЕЗИС №2:</strong> Наука побеждает магию! Мои изобретения способны нейтрализовать любое «новогоднее волшебство».
                </p>
              </div>
              
              <div className="flex items-start gap-4">
                <Icon name="Flame" className="text-destructive mt-1 flex-shrink-0" size={24} />
                <p className="text-foreground">
                  <strong className="text-primary">ТЕЗИС №3:</strong> Праздники делают людей слабыми и сентиментальными. Мир нуждается в рациональном мышлении, а не в гирляндах!
                </p>
              </div>
              
              <div className="flex items-start gap-4">
                <Icon name="Cog" className="text-secondary mt-1 flex-shrink-0 animate-rotate-slow" size={24} />
                <p className="text-foreground">
                  <strong className="text-primary">ТЕЗИС №4:</strong> Моя машина для отмены праздника — это вершина инженерной мысли. Скоро мир узнает её мощь!
                </p>
              </div>
            </div>
            
            <div className="mt-8 p-4 border-2 border-destructive bg-destructive/10">
              <p className="text-center text-sm text-destructive font-bold uppercase tracking-wider">
                ⚡ Подписано: Профессор И. Злодеев, доктор антипраздничных наук ⚡
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="схемы" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-12 text-primary glow-text">СЕКРЕТНЫЕ СХЕМЫ УСТРОЙСТВ</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Генератор Антирадости',
                icon: 'Radio',
                description: 'Излучает волны, подавляющие праздничное настроение в радиусе 5 км',
                specs: ['Мощность: 1.21 ГВт', 'Частота: 666 Гц', 'Дальность: 5000 м']
              },
              {
                title: 'Нейтрализатор Подарков',
                icon: 'Package',
                description: 'Квантовый дестабилизатор упаковочной бумаги и праздничных бантов',
                specs: ['Точность: 99.9%', 'Скорость: 100 п/сек', 'Энергия: Холод']
              },
              {
                title: 'Дефолиатор Ёлок',
                icon: 'Sparkles',
                description: 'Биологическое оружие против новогодних деревьев и их украшений',
                specs: ['Радиус: 2 км', 'Эффект: Мгновенный', 'Побочные: Нет']
              }
            ].map((device, index) => (
              <Card key={index} className="vintage-border hover:shadow-lg hover:shadow-primary/20 transition-all group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Icon name={device.icon as any} className="text-primary group-hover:animate-spark" size={48} />
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">Устройство #{index + 1}</span>
                  </div>
                  <CardTitle className="text-2xl text-primary">{device.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground mb-4">{device.description}</p>
                  <div className="space-y-2">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider font-bold">Технические характеристики:</p>
                    {device.specs.map((spec, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary animate-flicker"></div>
                        <span className="text-sm text-foreground">{spec}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="вербовка" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-2xl">
          <div className="vintage-border bg-card p-8">
            <div className="text-center mb-8">
              <Icon name="Users" className="inline-block text-primary mb-4 animate-flicker" size={64} />
              <h2 className="text-5xl font-bold mb-4 text-primary">ВЕРБОВКА ПОМОЩНИКОВ</h2>
              <p className="text-muted-foreground">
                Требуются специалисты для реализации величайшего злодейского плана!
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold uppercase tracking-wider mb-2 text-foreground">
                  Имя (псевдоним)
                </label>
                <Input
                  required
                  placeholder="Доктор Злодей"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="vintage-border"
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold uppercase tracking-wider mb-2 text-foreground">
                  Специализация
                </label>
                <Input
                  required
                  placeholder="Квантовая механика, взрывчатка, злодейство..."
                  value={formData.specialty}
                  onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                  className="vintage-border"
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold uppercase tracking-wider mb-2 text-foreground">
                  Мотивация (почему вы ненавидите Деда Мороза)
                </label>
                <Textarea
                  required
                  placeholder="Расскажите о своей ненависти к праздникам..."
                  value={formData.motivation}
                  onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                  className="vintage-border min-h-32"
                />
              </div>
              
              <Button type="submit" className="w-full vintage-border bg-primary hover:bg-primary/90 uppercase tracking-wider" size="lg">
                <Icon name="Zap" className="mr-2" size={20} />
                Присоединиться к тёмной стороне
              </Button>
            </form>
          </div>
        </div>
      </section>

      <section id="хроники" className="py-20 px-4 bg-card/20">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-5xl font-bold text-center mb-4 text-primary glow-text">ХРОНИКИ ЭКСПЕРИМЕНТОВ</h2>
          <p className="text-center text-muted-foreground mb-12 italic">Секретные записи из лабораторного журнала</p>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="exp1" className="vintage-border bg-card hover:shadow-lg hover:shadow-destructive/20 transition-all">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-4 text-left">
                  <Icon name="AlertTriangle" className="text-destructive flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-xl font-bold text-primary">Эксперимент №13: Первое испытание</h3>
                    <p className="text-sm text-muted-foreground">24 декабря 2019 г. • Статус: Катастрофический провал</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 text-foreground">
                <div className="space-y-3 border-l-2 border-primary/30 pl-4 ml-6">
                  <p className="leading-relaxed">
                    Первый запуск Генератора Антирадости завершился взрывом лаборатории №3. 
                    Радиус поражения: 500 метров. Побочный эффект: все ёлки в округе начали петь 
                    новогодние песни на 300% громче обычного.
                  </p>
                  <p className="text-destructive font-semibold">Потери: 2 ассистента, 47 колб, моё достоинство.</p>
                  <p className="italic text-muted-foreground">Вывод: увеличить мощность реактора в 10 раз и добавить глушитель.</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="exp2" className="vintage-border bg-card hover:shadow-lg hover:shadow-primary/20 transition-all">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-4 text-left">
                  <Icon name="CheckCircle" className="text-primary flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-xl font-bold text-primary">Эксперимент №27: Прорыв</h3>
                    <p className="text-sm text-muted-foreground">15 января 2021 г. • Статус: Частичный успех</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 text-foreground">
                <div className="space-y-3 border-l-2 border-primary/30 pl-4 ml-6">
                  <p className="leading-relaxed">
                    После 14 неудачных попыток удалось создать стабильное поле антирадости. 
                    Тестовый субъект (снеговик) растаял от экзистенциального кризиса за 3.4 секунды.
                  </p>
                  <p className="text-primary font-semibold">Достижение: подтверждена теория эмоционального резонанса!</p>
                  <p className="italic text-muted-foreground">Примечание: коллега Игорь плакал от счастья. Или от излучения. Надо проверить.</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="exp3" className="vintage-border bg-card hover:shadow-lg hover:shadow-destructive/20 transition-all">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-4 text-left">
                  <Icon name="Zap" className="text-destructive flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-xl font-bold text-primary">Эксперимент №42: Инцидент с оленями</h3>
                    <p className="text-sm text-muted-foreground">3 декабря 2022 г. • Статус: Слишком эффективно</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 text-foreground">
                <div className="space-y-3 border-l-2 border-primary/30 pl-4 ml-6">
                  <p className="leading-relaxed">
                    Протестировали Нейтрализатор Подарков на упряжке северных оленей. 
                    Результат превзошёл ожидания: олени организовали профсоюз и потребовали 
                    достойную оплату труда и 8-часовой рабочий день.
                  </p>
                  <p className="text-destructive font-semibold">Осложнение: Дед Мороз подал в суд за подрыв трудовой дисциплины.</p>
                  <p className="italic text-muted-foreground">Заключение: оружие работает. Побочные эффекты требуют изучения.</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="exp4" className="vintage-border bg-card hover:shadow-lg hover:shadow-primary/20 transition-all">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-4 text-left">
                  <Icon name="Flame" className="text-primary flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-xl font-bold text-primary">Эксперимент №56: Полевые испытания</h3>
                    <p className="text-sm text-muted-foreground">31 декабря 2023 г. • Статус: В процессе</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 text-foreground">
                <div className="space-y-3 border-l-2 border-primary/30 pl-4 ml-6">
                  <p className="leading-relaxed">
                    Выбрал маленький городок для финального теста всех трёх устройств одновременно. 
                    23:59 активировали комплекс. Результаты: праздник отменён в радиусе 10 км, 
                    ёлки массово сбросили иголки, подарки испарились.
                  </p>
                  <p className="text-primary font-semibold">Триумф! Система работает безупречно!</p>
                  <p className="italic text-muted-foreground">P.S. Жители города написали мне благодарность за избавление от праздничного стресса. Не ожидал.</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section id="команда" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 text-primary glow-text">ДОСЬЕ КОМАНДЫ</h2>
          <p className="text-center text-muted-foreground mb-12 italic">Лучшие злодеи науки собрались вместе</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: 'Профессор Грим',
                role: 'Главный злодей',
                bio: 'Бывший физик-ядерщик. Разочаровался в новогодних праздниках после инцидента с фейерверком в 1987 году.',
                icon: 'Skull',
                color: 'text-destructive'
              },
              {
                name: 'Доктор Винтер',
                role: 'Биохимик',
                bio: 'Эксперт по антирадостным соединениям. Может испортить настроение одним взглядом. Любит кошек.',
                icon: 'Flask',
                color: 'text-primary'
              },
              {
                name: 'Инженер Болт',
                role: 'Механик-изобретатель',
                bio: 'Собрал свой первый робот-злодей в 12 лет. Спит 3 часа в сутки. Ненавидит мишуру.',
                icon: 'Wrench',
                color: 'text-secondary'
              },
              {
                name: 'Ассистент Игорь',
                role: 'Подопытный кролик',
                bio: 'Выживает после всех экспериментов. Говорят, у него 9 жизней. Или запасные органы в лаборатории.',
                icon: 'User',
                color: 'text-muted-foreground'
              }
            ].map((member, index) => (
              <Card key={index} className="vintage-border hover:shadow-lg hover:shadow-primary/20 transition-all group">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon name={member.icon} className={member.color} size={48} />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-1">{member.name}</h3>
                  <p className="text-sm text-destructive uppercase tracking-wider mb-3 font-semibold">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="дневник" className="py-20 px-4 bg-card/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl font-bold text-center mb-4 text-primary glow-text">ДНЕВНИК БЕЗУМНОГО УЧЁНОГО</h2>
          <p className="text-center text-muted-foreground mb-12 italic">Избранные страницы из личных записей Профессора Грима</p>
          
          <div className="space-y-6">
            {[
              {
                date: '15 ноября 2018',
                title: 'День первый',
                text: 'Сегодня принял окончательное решение. Хватит! Каждый год одно и то же: снег, ёлки, поддельные улыбки. Люди притворяются счастливыми, а потом 11 месяцев страдают. Я положу этому конец. Наука даст мне силу изменить мир!'
              },
              {
                date: '3 декабря 2019',
                title: 'Момент озарения',
                text: 'Эврика! Понял, как работает праздничная радость — это всего лишь химическая реакция в мозгу. А значит, её можно нейтрализовать. Нужны: плутоний-238, жидкий азот и... много кофе. Очень много кофе.'
              },
              {
                date: '24 декабря 2020',
                title: 'Неудача',
                text: 'Взорвал ещё одну лабораторию. Соседи снова жалуются. Но я близок к цели, я это чувствую! Игорь выжил (опять), это хороший знак. Завтра попробую увеличить напряжение до 1.21 гигаватт.'
              },
              {
                date: '31 декабря 2023',
                title: 'Триумф',
                text: 'Свершилось! Мои машины работают! Праздник отменён! Но... почему я чувствую пустоту? Люди благодарят меня за избавление от стресса. Дети перестали плакать из-за несбывшихся ожиданий. Может... я что-то упустил?'
              },
              {
                date: '1 января 2024',
                title: 'Переосмысление',
                text: 'Игорь принёс мне горячего шоколада и сказал: "Профессор, а вы заметили, как люди начали общаться по-настоящему, когда убрали праздничную суету?". Чёрт. Кажется, я случайно сделал мир лучше. Нужно срочно это исправить!'
              }
            ].map((entry, index) => (
              <div key={index} className="vintage-border bg-card p-6 hover:shadow-lg hover:shadow-primary/20 transition-all">
                <div className="flex items-start gap-4 mb-3">
                  <Icon name="BookOpen" className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-primary">{entry.title}</h3>
                      <span className="text-sm text-muted-foreground italic">{entry.date}</span>
                    </div>
                    <p className="text-foreground leading-relaxed">{entry.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="галерея" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-12 text-primary glow-text">ГАЛЕРЕЯ ИЗОБРЕТЕНИЙ</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Лаборатория', desc: 'Секретная база операций', img: 'https://cdn.poehali.dev/projects/d0689604-5918-4057-9a8c-52fea21cf04e/files/9d6395d4-3211-4ad7-93fa-5a9250028a33.jpg' },
              { title: 'Первый прототип', desc: 'Генератор Антирадости v0.1', img: null },
              { title: 'Испытания', desc: 'Тестирование на подопытных ёлках', img: 'https://cdn.poehali.dev/projects/d0689604-5918-4057-9a8c-52fea21cf04e/files/1173b994-ffb6-49e0-bcb0-f77c031ef0b3.jpg' },
              { title: 'Схема №47', desc: 'Чертёж главного устройства', img: 'https://cdn.poehali.dev/projects/d0689604-5918-4057-9a8c-52fea21cf04e/files/0be0a46c-85d8-4e4a-bd25-22e32fc89fa0.jpg' },
              { title: 'Команда', desc: 'Лучшие злодеи науки', img: null },
              { title: 'Финальная сборка', desc: 'Машина готова к запуску', img: null }
            ].map((item, index) => (
              <Card key={index} className="vintage-border hover:shadow-lg hover:shadow-primary/20 transition-all overflow-hidden group">
                <div className="aspect-video bg-muted flex items-center justify-center relative overflow-hidden">
                  {item.img ? (
                    <>
                      <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
                    </>
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
                      <Icon name="Image" className="text-primary/50 group-hover:scale-110 transition-transform" size={64} />
                    </>
                  )}
                  <div className="absolute top-2 right-2 bg-destructive text-destructive-foreground px-2 py-1 text-xs uppercase tracking-wider">
                    Секретно
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg text-primary mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="контакты" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <div className="vintage-border bg-card p-8 text-center">
            <Icon name="MapPin" className="inline-block text-destructive mb-4 animate-flicker" size={64} />
            <h2 className="text-5xl font-bold mb-6 text-primary">КОНТАКТЫ СЕКРЕТНОЙ ЛАБОРАТОРИИ</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <Icon name="Mail" className="inline-block text-primary mb-2" size={32} />
                <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">Почта</p>
                <p className="text-foreground">evil@antisanta.lab</p>
              </div>
              
              <div>
                <Icon name="Phone" className="inline-block text-primary mb-2" size={32} />
                <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">Телефон</p>
                <p className="text-foreground">+7 (666) 666-66-66</p>
              </div>
              
              <div>
                <Icon name="MapPin" className="inline-block text-primary mb-2" size={32} />
                <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">Адрес</p>
                <p className="text-foreground">Секретный бункер, -100 этаж</p>
              </div>
            </div>
            
            <div className="border-t-2 border-primary/30 pt-6">
              <p className="text-destructive font-bold uppercase tracking-wider">
                ⚠ Внимание: все переговоры ведутся в условиях полной секретности ⚠
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t-2 border-primary/30">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 АНТИ-ДЕД МОРОЗ | Все права защищены патентным злодейским законом
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Сайт создан в юмористических целях. Никакие Деды Морозы не пострадали при разработке.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;