import HeroSection from '@/components/HeroSection';
import RecruitmentSection from '@/components/RecruitmentSection';
import StoriesSection from '@/components/StoriesSection';
import GalleryContactSection from '@/components/GalleryContactSection';

const Index = () => {
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

      <HeroSection />
      <RecruitmentSection />
      <StoriesSection />
      <GalleryContactSection />

      <footer className="py-8 px-4 border-t-2 border-primary/30">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 АНТИ-ДЕД МОРОЗ. Все права защищены патентами на злодейские изобретения.
          </p>
          <p className="text-muted-foreground text-xs mt-2">
            ⚠ Предупреждение: использование устройств может привести к отмене праздников в вашем регионе
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
