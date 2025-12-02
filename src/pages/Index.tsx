import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const benefits = [
    {
      icon: 'Clock',
      title: 'Круглосуточный доступ',
      description: 'Чистая вода в шаговой доступности от дома 24/7'
    },
    {
      icon: 'Shield',
      title: 'Здоровье и безопасность',
      description: 'Проверенное качество для всей семьи'
    },
    {
      icon: 'Leaf',
      title: 'Экологичность',
      description: 'Сокращаем использование пластиковых бутылей'
    },
    {
      icon: 'Wallet',
      title: 'Экономия',
      description: 'Цена ниже магазинной, экономия времени'
    },
    {
      icon: 'TrendingUp',
      title: 'Устойчивость',
      description: 'Работающая бизнес-модель, 9 действующих точек'
    }
  ];

  const locations = [
    'ул. Ленина, 25',
    'ул. Гагарина, 102',
    'пр. Гагарина, 50',
    'ул. Родионова, 165',
    'ул. Бекетова, 13',
    'ул. Чаадаева, 28',
    'ул. Березовская, 96',
    'пр. Кирова, 12',
    'ул. Ванеева, 205'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Droplet" className="text-primary" size={32} />
              <span className="text-xl font-bold text-foreground">Водный комфорт</span>
            </div>
            <div className="hidden md:flex gap-6">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'about', label: 'О проекте' },
                { id: 'benefits', label: 'Преимущества' },
                { id: 'ecology', label: 'Экология' },
                { id: 'locations', label: 'Локации' },
                { id: 'contacts', label: 'Контакты' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        <section id="home" className="py-20 px-4">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
                Водный комфорт —<br />в каждый двор
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Социально-предпринимательский проект по созданию доступной инфраструктуры чистой питьевой воды в Нижнем Новгороде
              </p>
              <div className="flex gap-4 justify-center">
                <Button
                  size="lg"
                  onClick={() => scrollToSection('locations')}
                  className="gap-2"
                >
                  <Icon name="MapPin" size={20} />
                  Найти точку
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection('about')}
                >
                  Узнать больше
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold mb-8 text-center text-foreground">О проекте</h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p className="animate-fade-in">
                <strong className="text-foreground">Водный комфорт</strong> — социально-предпринимательский проект по созданию в жилых дворах доступной инфраструктуры для обеспечения горожан качественной питьевой водой через сеть круглосуточных вендинговых аппаратов.
              </p>
              <Card className="animate-scale-in bg-primary/5 border-primary/20">
                <CardContent className="pt-6">
                  <p className="text-lg font-semibold text-foreground mb-2">Наша цель:</p>
                  <p className="text-muted-foreground">
                    Повысить качество жизни и бытовой комфорт жителей многоквартирных домов, решив проблему физической и экономической доступности чистой воды.
                  </p>
                </CardContent>
              </Card>
              <p>
                Проект основан на работающей бизнес-модели с <strong className="text-primary">9 действующими точками</strong> и реализуется семейным предпринимательским тандемом под руководством директора <strong className="text-foreground">Южакова Сергея Александровича</strong>.
              </p>
            </div>
          </div>
        </section>

        <section id="benefits" className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-foreground">Преимущества</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="animate-scale-in hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center gap-4">
                      <div className="p-3 rounded-full bg-primary/10">
                        <Icon name={benefit.icon as any} className="text-primary" size={32} />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="ecology" className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-4xl font-bold mb-12 text-center text-foreground">Экологический эффект</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-secondary/10 border-secondary animate-scale-in">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center gap-4">
                    <Icon name="Recycle" className="text-secondary" size={48} />
                    <h3 className="text-2xl font-semibold text-foreground">Сокращение пластика</h3>
                    <p className="text-muted-foreground text-lg">
                      Использование многоразовой тары вместо одноразовых пластиковых бутылей снижает загрязнение окружающей среды
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-primary/10 border-primary animate-scale-in" style={{ animationDelay: '0.2s' }}>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center gap-4">
                    <Icon name="Trees" className="text-primary" size={48} />
                    <h3 className="text-2xl font-semibold text-foreground">Устойчивое потребление</h3>
                    <p className="text-muted-foreground text-lg">
                      Локальная инфраструктура сокращает транспортные расходы и выбросы CO₂ от доставки воды
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="mt-12 text-center">
              <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-0 animate-fade-in">
                <CardContent className="pt-6 pb-6">
                  <p className="text-2xl font-semibold text-foreground mb-2">
                    Каждый литр из автомата
                  </p>
                  <p className="text-lg text-muted-foreground">
                    — это вклад в чистую экологию города и здоровье будущих поколений
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="locations" className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold mb-4 text-center text-foreground">Наши локации</h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              9 действующих точек в Нижнем Новгороде
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {locations.map((location, index) => (
                <Card
                  key={index}
                  className="animate-scale-in hover:shadow-md transition-shadow"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <CardContent className="pt-4 pb-4">
                    <div className="flex items-center gap-3">
                      <Icon name="MapPin" className="text-primary" size={24} />
                      <span className="text-foreground font-medium">{location}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contacts" className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-2xl">
            <h2 className="text-4xl font-bold mb-12 text-center text-foreground">Контакты</h2>
            <Card className="animate-scale-in">
              <CardContent className="pt-8 pb-8">
                <div className="space-y-6 text-center">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Директор проекта</p>
                    <p className="text-2xl font-semibold text-foreground">
                      Южаков Сергей Александрович
                    </p>
                  </div>
                  <div className="flex flex-col gap-4 pt-4">
                    <div className="flex items-center justify-center gap-3">
                      <Icon name="MapPin" className="text-primary" size={24} />
                      <span className="text-muted-foreground">Нижний Новгород</span>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                      <Icon name="Building2" className="text-primary" size={24} />
                      <span className="text-muted-foreground">ООО "Водный комфорт"</span>
                    </div>
                  </div>
                  <div className="pt-6">
                    <Button size="lg" className="gap-2">
                      <Icon name="Phone" size={20} />
                      Связаться с нами
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="bg-foreground text-background py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Droplet" size={24} />
            <span className="font-bold">Водный комфорт</span>
          </div>
          <p className="text-sm opacity-80">
            © 2024 Водный комфорт. Социально-предпринимательский проект.
          </p>
        </div>
      </footer>
    </div>
  );
}
