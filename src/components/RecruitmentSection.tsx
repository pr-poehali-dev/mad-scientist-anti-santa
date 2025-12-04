import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const RecruitmentSection = () => {
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
    <section id="вербовка" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto max-w-2xl">
        <div className="vintage-border bg-card p-8">
          <div className="text-center mb-8">
            <Icon name="UserPlus" className="inline-block text-primary mb-4" size={64} />
            <h2 className="text-5xl font-bold mb-4 text-primary">ВЕРБОВКА ПОМОЩНИКОВ</h2>
            <p className="text-muted-foreground">
              Требуются амбициозные личности для реализации величайшего плана человечества
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="text-sm font-bold uppercase tracking-wider text-foreground mb-2 block">
                Имя и фамилия
              </label>
              <Input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Ваше злодейское имя"
                required
                className="vintage-border"
              />
            </div>
            
            <div>
              <label className="text-sm font-bold uppercase tracking-wider text-foreground mb-2 block">
                Специализация
              </label>
              <Input
                type="text"
                value={formData.specialty}
                onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                placeholder="Инженер, химик, программист..."
                required
                className="vintage-border"
              />
            </div>
            
            <div>
              <label className="text-sm font-bold uppercase tracking-wider text-foreground mb-2 block">
                Мотивация
              </label>
              <Textarea
                value={formData.motivation}
                onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                placeholder="Почему вы хотите уничтожить праздник?"
                required
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
  );
};

export default RecruitmentSection;
