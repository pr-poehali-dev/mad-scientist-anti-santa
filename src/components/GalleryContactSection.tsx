import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const GalleryContactSection = () => {
  return (
    <>
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
    </>
  );
};

export default GalleryContactSection;
