import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
    <>
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
    </>
  );
};

export default HeroSection;
