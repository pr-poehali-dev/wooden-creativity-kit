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
              Первые настоящие инструменты вашего ребёнка
            </p>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Помните, как ваш малыш тянулся к папиным инструментам? Теперь у него будут свои! <span className="font-semibold text-gray-800">«Волшебный Олень»</span> — это не просто игрушка. Это первый шаг к настоящему мастерству, где ребёнок собственными руками создаёт деревянную фигурку, учится работать молотком и отвёрткой как взрослый.
            </p>
            <div className="bg-orange-100 border-l-4 border-orange-500 p-4 mx-auto max-w-2xl rounded">
              <p className="text-lg text-gray-700">💡 Видели бы вы его глаза, когда он забивает первый гвоздик сам!</p>
            </div>
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
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
            Почему 10 000+ родителей уже заказали набор
          </h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
            В эпоху гаджетов дети разучились создавать руками. «Волшебный Олень» возвращает радость настоящего творчества и развивает навыки, которые останутся на всю жизнь.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'Hammer',
                title: '"Я как папа!" — развитие через подражание',
                description: 'Дети обожают копировать взрослых. Дайте ребёнку его ПЕРВЫЕ настоящие инструменты — молоток и отвёртку детского размера. Он почувствует себя мастером и полюбит работу руками на всю жизнь.'
              },
              {
                icon: 'TreePine',
                title: 'Натуральное дерево вместо пластика',
                description: 'Тёплое на ощупь, пахнущее лесом дерево. Без токсичных красок, без китайского пластика. Только природные материалы, которые можно трогать и грызть без опасений. Сертификат качества прилагается.'
              },
              {
                icon: 'ShieldCheck',
                title: 'Безопасно, как ваши объятия',
                description: 'Каждая деталь отшлифована вручную — никаких заноз и острых краёв. Молоток и отвёртка специально адаптированы для детских рук. Гвоздики и винты безопасны. Подходит для детей от 4 лет под присмотром взрослых.'
              },
              {
                icon: 'Brain',
                title: 'Вместо планшета — развитие мозга',
                description: 'Пока сверстники залипают в экраны, ваш ребёнок развивает мелкую моторику, пространственное мышление, усидчивость и логику. Педагоги подтверждают: такие навыки в 10 раз важнее для успеха в школе, чем знание букв в 3 года.'
              },
              {
                icon: 'Users',
                title: '1 час качественного времени с ребёнком',
                description: 'Забудьте про мультики на час! Соберите оленя ВМЕСТЕ — держите детали, подбадривайте, радуйтесь каждому забитому гвоздику. Это воспоминание останется на годы. «Помнишь, как мы собирали оленя?» — бесценно.'
              },
              {
                icon: 'Star',
                title: '"Я сам это сделал!" — уверенность в себе',
                description: 'Готовую фигурку ставят на полку как трофей. Каждый гость слышит: "Я сам собрал!". Это чувство гордости и веры в свои силы, которое останется навсегда. Так рождаются будущие инженеры и изобретатели.'
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
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
            Полный набор «под ключ» — начинайте сразу!
          </h2>
          <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto mb-16">
            Открыли коробку — и всё готово к работе. Ничего докупать не нужно. Каждый элемент продуман до мелочей.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: 'Package',
                title: '18 деревянных деталей премиум-качества',
                description: 'Тело, ноги, рога, хвост — каждая деталь вырезана из берёзовой фанеры толщиной 4 мм, отшлифована до идеальной гладкости. Запах настоящего дерева! Ваш олень будет стоять крепко, как памятник.'
              },
              {
                icon: 'Hammer',
                title: 'Настоящий детский молоток (не игрушка!)',
                description: 'Деревянная рукоятка 15 см + резиновый боёк. Весит всего 120 грамм — ребёнок не устанет. Им РЕАЛЬНО можно забивать гвозди! После сборки останется для других поделок и игр в «мастера».'
              },
              {
                icon: 'Wrench',
                title: 'Детская отвёртка с резиновой ручкой',
                description: 'Укороченная отвёртка (12 см) с прорезиненной ручкой — не выскользнет из детской руки. Магнитный наконечник держит винт, пока ребёнок прицеливается. После оленя пригодится для игр и настоящих «ремонтов».'
              },
              {
                icon: 'Puzzle',
                title: '24 гвоздика + 12 винтов (с запасом!)',
                description: 'Специальные детские крепежи: гвоздики 2 см с широкими шляпками (легко бить молотком) и винты 1,5 см с крупной резьбой (легко крутить). Даём с запасом на случай, если пара потеряется под диваном.'
              },
              {
                icon: 'BookOpen',
                title: 'Инструкция, понятная даже 4-летке',
                description: 'Цветная инструкция на 4 страницах с крупными картинками: "Сначала прибей это сюда, потом прикрути то туда". Никакой мелкой писанины — только схемы и стрелочки. Ребёнок может собирать ПОЧТИ самостоятельно!'
              },
              {
                icon: 'Sparkles',
                title: 'Бонус: наклейки для украшения',
                description: 'В подарок — лист с наклейками: глазки, снежинки, звёздочки, цветочки. После сборки ребёнок сам украшает оленя, делая его уникальным. Или раскрасьте вместе красками — фантазии нет предела!'
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
              Закажите сейчас — подарите ребёнку счастье творца!
            </h2>
            <p className="text-xl text-gray-700 mb-4">Оставьте заявку, и наш менеджер свяжется с вами в течение часа</p>
            <div className="bg-green-100 border border-green-400 rounded-lg p-4 mb-6">
              <p className="text-lg text-green-800 font-semibold text-center">🎁 При заказе сегодня — доставка БЕСПЛАТНО!</p>
            </div>
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