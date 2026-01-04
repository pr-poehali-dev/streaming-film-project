import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');

  const navItems = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'movies', label: 'Фильмы', icon: 'Film' },
    { id: 'series', label: 'Сериалы', icon: 'Tv' },
    { id: 'genres', label: 'Жанры', icon: 'Grid3x3' },
    { id: 'search', label: 'Поиск', icon: 'Search' },
  ];

  const featuredMovie = {
    title: 'Интерстеллар',
    description: 'Когда засуха приводит человечество к продовольственному кризису, коллектив исследователей и учёных отправляется сквозь червоточину в путешествие, чтобы превзойти прежние ограничения для космических путешествий человека.',
    year: 2014,
    rating: 8.6,
    duration: '2ч 49мин',
    genres: ['Фантастика', 'Драма', 'Приключения'],
  };

  const movies = [
    { id: 1, title: 'Начало', year: 2010, rating: 8.8, genre: 'Фантастика', views: 2500 },
    { id: 2, title: 'Темный рыцарь', year: 2008, rating: 9.0, genre: 'Боевик', views: 3200 },
    { id: 3, title: 'Бойцовский клуб', year: 1999, rating: 8.8, genre: 'Драма', views: 2800 },
    { id: 4, title: 'Форрест Гамп', year: 1994, rating: 8.8, genre: 'Драма', views: 2100 },
    { id: 5, title: 'Матрица', year: 1999, rating: 8.7, genre: 'Фантастика', views: 2900 },
    { id: 6, title: 'Зеленая миля', year: 1999, rating: 8.6, genre: 'Драма', views: 1900 },
  ];

  const recommended = [
    { id: 7, title: 'Дюна', year: 2021, rating: 8.0, genre: 'Фантастика', reason: 'Похоже на Интерстеллар' },
    { id: 8, title: 'Прибытие', year: 2016, rating: 7.9, genre: 'Фантастика', reason: 'Вам понравится' },
    { id: 9, title: 'Гравитация', year: 2013, rating: 7.7, genre: 'Фантастика', reason: 'Ваш стиль' },
    { id: 10, title: 'Марсианин', year: 2015, rating: 8.0, genre: 'Фантастика', reason: 'Рекомендуем' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <h1 className="text-2xl font-bold text-primary">КИНОПОИСК</h1>
              <nav className="hidden md:flex items-center gap-6">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`flex items-center gap-2 transition-colors ${
                      activeSection === item.id
                        ? 'text-primary'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <Icon name={item.icon as any} size={18} />
                    <span>{item.label}</span>
                  </button>
                ))}
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden md:block relative">
                <Icon name="Search" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Поиск фильмов..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-64 bg-accent border-border"
                />
              </div>
              <Button variant="ghost" size="icon">
                <Icon name="User" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="pt-20">
        <section className="relative h-[70vh] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1920&h=1080&fit=crop)',
            }}
          />
          
          <div className="relative z-20 container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl animate-fade-in">
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                  Рекомендуем
                </Badge>
                <Badge variant="outline" className="border-primary/50 text-primary">
                  IMDb {featuredMovie.rating}
                </Badge>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-bold mb-4">
                {featuredMovie.title}
              </h2>
              
              <div className="flex items-center gap-4 text-muted-foreground mb-6">
                <span>{featuredMovie.year}</span>
                <span>•</span>
                <span>{featuredMovie.duration}</span>
                <span>•</span>
                <div className="flex gap-2">
                  {featuredMovie.genres.map((genre) => (
                    <span key={genre}>{genre}</span>
                  ))}
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {featuredMovie.description}
              </p>
              
              <div className="flex gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Icon name="Play" size={20} className="mr-2" />
                  Смотреть
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="Plus" size={20} className="mr-2" />
                  В избранное
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold">Популярные фильмы</h3>
            <Button variant="ghost" className="text-primary">
              Смотреть все
              <Icon name="ChevronRight" size={20} className="ml-1" />
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {movies.map((movie) => (
              <div
                key={movie.id}
                className="group cursor-pointer animate-scale-in"
                style={{ animationDelay: `${movie.id * 50}ms` }}
              >
                <div className="relative aspect-[2/3] bg-accent rounded-lg overflow-hidden mb-3 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-primary/20">
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-2 right-2 bg-secondary text-secondary-foreground px-2 py-1 rounded text-sm font-semibold">
                    {movie.rating}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="icon" className="bg-primary/90 hover:bg-primary rounded-full w-14 h-14">
                      <Icon name="Play" size={24} />
                    </Button>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center bg-muted/20 backdrop-blur-sm">
                    <Icon name="Film" size={48} className="text-muted-foreground" />
                  </div>
                </div>
                <h4 className="font-semibold mb-1 line-clamp-1">{movie.title}</h4>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>{movie.year}</span>
                  <span>•</span>
                  <span>{movie.genre}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <div className="flex items-center gap-3 mb-6">
            <Icon name="Sparkles" size={24} className="text-secondary" />
            <h3 className="text-2xl font-bold">Рекомендации для вас</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recommended.map((movie) => (
              <div
                key={movie.id}
                className="group cursor-pointer bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="relative aspect-video bg-accent">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon name="Film" size={48} className="text-muted-foreground" />
                  </div>
                  <div className="absolute top-2 left-2 bg-secondary text-secondary-foreground px-2 py-1 rounded text-sm font-semibold">
                    {movie.rating}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-4">
                  <h4 className="font-bold mb-1">{movie.title}</h4>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <span>{movie.year}</span>
                    <span>•</span>
                    <span>{movie.genre}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-primary">
                    <Icon name="Lightbulb" size={14} />
                    <span>{movie.reason}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <h3 className="text-2xl font-bold mb-6">Жанры</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {['Боевик', 'Комедия', 'Драма', 'Ужасы', 'Фантастика', 'Триллер', 'Мелодрама', 'Детектив', 'Документальный', 'Фэнтези', 'Приключения', 'Анимация'].map((genre) => (
              <Button
                key={genre}
                variant="outline"
                className="h-auto py-6 text-base hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
              >
                {genre}
              </Button>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-accent border-t border-border mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Film" size={24} className="text-primary" />
              <span className="font-bold">КИНОПОИСК</span>
            </div>
            <p className="text-muted-foreground text-sm">
              © 2024 Бесплатный онлайн-кинотеатр. Все права защищены.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon">
                <Icon name="Facebook" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Twitter" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Instagram" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
