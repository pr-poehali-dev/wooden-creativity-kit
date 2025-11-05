import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function Index() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заказ принят! 🎉",
      description: "Мы свяжемся с вами в ближайшее время",
    });
    setFormData({ name: '', phone: '', email: '' });
  };

  const scrollToOrder = () => {
    document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-pink-500/20 to-orange-500/20 animate-pulse"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-pink-500 to-orange-500 bg-clip-text text-transparent leading-tight">
              Волшебный Олень
            </h1>
            <p className="text-2xl md:text-3xl text-gray-700 font-medium">
              Деревянный набор для творчества
            </p>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Первые инструменты вашего ребёнка! Учимся работать молотком и отвёрткой, создавая настоящее волшебство своими руками
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-pink-500 hover:scale-105 transition-transform"
                onClick={scrollToOrder}
              >
                Заказать набор
                <Icon name="ShoppingCart" className="ml-2" size={20} />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 hover-scale"
                onClick={() => document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Узнать больше
                <Icon name="ChevronDown" className="ml-2" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
            Почему родители выбирают нас
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'Hammer',
                title: 'Развитие навыков',
                description: 'Ребёнок учится работать с настоящими инструментами в безопасной форме'
              },
              {
                icon: 'TreePine',
                title: 'Экологичность',
                description: 'Изготовлено из натурального дерева, без вредных красок и пластика'
              },
              {
                icon: 'ShieldCheck',
                title: 'Безопасность',
                description: 'Все детали обработаны, без острых углов. Рекомендовано с 4 лет'
              },
              {
                icon: 'Brain',
                title: 'Развитие мышления',
                description: 'Улучшает моторику, логику и пространственное мышление'
              },
              {
                icon: 'Users',
                title: 'Время с семьёй',
                description: 'Отличный способ провести время вместе с ребёнком'
              },
              {
                icon: 'Star',
                title: 'Гордость результатом',
                description: 'Ребёнок создаёт игрушку своими руками и гордится достижением'
              }
            ].map((benefit, index) => (
              <Card 
                key={index} 
                className="p-6 hover-scale transition-all hover:shadow-xl animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-pink-500 flex items-center justify-center mb-4">
                  <Icon name={benefit.icon as any} size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's Inside Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
            Что внутри набора
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: 'Package',
                title: 'Деревянные детали',
                description: 'Все элементы для сборки фигуры оленя из качественного дерева'
              },
              {
                icon: 'Hammer',
                title: 'Детский молоток',
                description: 'Безопасный молоточек идеального размера для детских рук'
              },
              {
                icon: 'Wrench',
                title: 'Детская отвёртка',
                description: 'Удобная отвёртка с нескользящей ручкой'
              },
              {
                icon: 'Puzzle',
                title: 'Крепёжные элементы',
                description: 'Гвоздики и винтики, безопасные для детей'
              },
              {
                icon: 'BookOpen',
                title: 'Инструкция',
                description: 'Понятная пошаговая инструкция с картинками'
              },
              {
                icon: 'Sparkles',
                title: 'Элементы декора',
                description: 'Детали для украшения готовой фигурки'
              }
            ].map((item, index) => (
              <Card 
                key={index} 
                className="p-6 hover-scale transition-all hover:shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-orange-400 to-pink-500 flex items-center justify-center flex-shrink-0">
                    <Icon name={item.icon as any} size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Order Form Section */}
      <section id="order" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
              Заказать набор
            </h2>
            <p className="text-xl text-gray-600">Оставьте заявку и мы свяжемся с вами для уточнения деталей</p>
          </div>
          
          <Card className="p-8 shadow-xl animate-scale-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-lg">Ваше имя *</Label>
                <Input 
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  placeholder="Иван Иванов"
                  className="text-lg p-6"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-lg">Телефон *</Label>
                <Input 
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                  placeholder="+7 (999) 123-45-67"
                  className="text-lg p-6"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-lg">Email</Label>
                <Input 
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="example@mail.ru"
                  className="text-lg p-6"
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full text-lg py-6 bg-gradient-to-r from-primary to-pink-500 hover:scale-105 transition-transform"
              >
                Отправить заявку
                <Icon name="Send" className="ml-2" size={20} />
              </Button>
            </form>
          </Card>

          <p className="text-center text-gray-500 mt-6">
            * Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-900 to-pink-900 text-white py-8 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-lg">© 2025 Волшебный Олень. Развиваем с любовью ❤️</p>
        </div>
      </footer>
    </div>
  );
}
