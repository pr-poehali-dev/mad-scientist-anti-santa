import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const StoriesSection = () => {
  return (
    <>
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
    </>
  );
};

export default StoriesSection;
