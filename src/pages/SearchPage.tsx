import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const SearchPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [yearRange, setYearRange] = useState<number[]>([1990, 2024]);
  const [minRating, setMinRating] = useState<number[]>([0]);
  const [sortBy, setSortBy] = useState('rating');
  const [showFilters, setShowFilters] = useState(true);

  const genres = [
    'Боевик', 'Комедия', 'Драма', 'Ужасы', 'Фантастика', 
    'Триллер', 'Мелодрама', 'Детектив', 'Документальный', 
    'Фэнтези', 'Приключения', 'Анимация'
  ];

  const allMovies = [
    { id: 1, title: 'Начало', year: 2010, rating: 8.8, genre: 'Фантастика', duration: '2ч 28мин', views: 2500 },
    { id: 2, title: 'Темный рыцарь', year: 2008, rating: 9.0, genre: 'Боевик', duration: '2ч 32мин', views: 3200 },
    { id: 3, title: 'Бойцовский клуб', year: 1999, rating: 8.8, genre: 'Драма', duration: '2ч 19мин', views: 2800 },
    { id: 4, title: 'Форрест Гамп', year: 1994, rating: 8.8, genre: 'Драма', duration: '2ч 22мин', views: 2100 },
    { id: 5, title: 'Матрица', year: 1999, rating: 8.7, genre: 'Фантастика', duration: '2ч 16мин', views: 2900 },
    { id: 6, title: 'Зеленая миля', year: 1999, rating: 8.6, genre: 'Драма', duration: '3ч 9мин', views: 1900 },
    { id: 7, title: 'Дюна', year: 2021, rating: 8.0, genre: 'Фантастика', duration: '2ч 35мин', views: 1800 },
    { id: 8, title: 'Прибытие', year: 2016, rating: 7.9, genre: 'Фантастика', duration: '1ч 56мин', views: 1400 },
    { id: 9, title: 'Гравитация', year: 2013, rating: 7.7, genre: 'Фантастика', duration: '1ч 31мин', views: 1600 },
    { id: 10, title: 'Марсианин', year: 2015, rating: 8.0, genre: 'Фантастика', duration: '2ч 24мин', views: 1700 },
    { id: 11, title: 'Интерстеллар', year: 2014, rating: 8.6, genre: 'Фантастика', duration: '2ч 49мин', views: 3500 },
    { id: 12, title: 'Джокер', year: 2019, rating: 8.4, genre: 'Триллер', duration: '2ч 2мин', views: 2400 },
    { id: 13, title: 'Паразиты', year: 2019, rating: 8.6, genre: 'Драма', duration: '2ч 12мин', views: 1900 },
    { id: 14, title: '1+1', year: 2011, rating: 8.8, genre: 'Комедия', duration: '1ч 52мин', views: 2600 },
    { id: 15, title: 'Зеленая книга', year: 2018, rating: 8.2, genre: 'Драма', duration: '2ч 10мин', views: 1500 },
    { id: 16, title: 'Побег из Шоушенка', year: 1994, rating: 9.3, genre: 'Драма', duration: '2ч 22мин', views: 4200 },
    { id: 17, title: 'Крёстный отец', year: 1972, rating: 9.2, genre: 'Драма', duration: '2ч 55мин', views: 3800 },
    { id: 18, title: 'Криминальное чтиво', year: 1994, rating: 8.9, genre: 'Триллер', duration: '2ч 34мин', views: 3100 },
  ];

  const toggleGenre = (genre: string) => {
    setSelectedGenres(prev =>
      prev.includes(genre)
        ? prev.filter(g => g !== genre)
        : [...prev, genre]
    );
  };

  const filteredMovies = useMemo(() => {
    let filtered = allMovies;

    if (searchQuery) {
      filtered = filtered.filter(movie =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedGenres.length > 0) {
      filtered = filtered.filter(movie =>
        selectedGenres.includes(movie.genre)
      );
    }

    filtered = filtered.filter(movie =>
      movie.year >= yearRange[0] && movie.year <= yearRange[1]
    );

    filtered = filtered.filter(movie =>
      movie.rating >= minRating[0]
    );

    switch (sortBy) {
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'year':
        filtered.sort((a, b) => b.year - a.year);
        break;
      case 'views':
        filtered.sort((a, b) => b.views - a.views);
        break;
      case 'title':
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
    }

    return filtered;
  }, [searchQuery, selectedGenres, yearRange, minRating, sortBy]);

  const clearFilters = () => {
    setSelectedGenres([]);
    setYearRange([1990, 2024]);
    setMinRating([0]);
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <Button
                variant="ghost"
                onClick={() => navigate('/')}
                className="flex items-center gap-2"
              >
                <Icon name="ArrowLeft" size={20} />
                <span className="hidden md:inline">Назад</span>
              </Button>
              <h1 className="text-2xl font-bold text-primary">КИНОПОИСК</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Поиск фильмов</h1>
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <Icon name="Search" size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Введите название фильма..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-12 text-lg bg-card border-border"
                />
              </div>
              <Button
                variant="outline"
                size="lg"
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2"
              >
                <Icon name={showFilters ? 'EyeOff' : 'Eye'} size={20} />
                <span className="hidden md:inline">{showFilters ? 'Скрыть' : 'Показать'} фильтры</span>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {showFilters && (
              <aside className="lg:col-span-1 space-y-6">
                <div className="bg-card border border-border rounded-lg p-6 space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold">Фильтры</h3>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={clearFilters}
                      className="text-primary"
                    >
                      Сбросить
                    </Button>
                  </div>

                  <div>
                    <label className="text-sm font-semibold mb-3 block">Сортировка</label>
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="rating">По рейтингу</SelectItem>
                        <SelectItem value="year">По году</SelectItem>
                        <SelectItem value="views">По популярности</SelectItem>
                        <SelectItem value="title">По названию</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-semibold mb-3 block">
                      Минимальный рейтинг: {minRating[0].toFixed(1)}
                    </label>
                    <Slider
                      value={minRating}
                      onValueChange={setMinRating}
                      max={10}
                      step={0.1}
                      className="mt-2"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-2">
                      <span>0</span>
                      <span>10</span>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-semibold mb-3 block">
                      Годы: {yearRange[0]} - {yearRange[1]}
                    </label>
                    <Slider
                      value={yearRange}
                      onValueChange={setYearRange}
                      min={1970}
                      max={2024}
                      step={1}
                      className="mt-2"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-2">
                      <span>1970</span>
                      <span>2024</span>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-semibold mb-3 block">Жанры</label>
                    <div className="space-y-3 max-h-64 overflow-y-auto pr-2">
                      {genres.map((genre) => (
                        <div key={genre} className="flex items-center gap-3">
                          <Checkbox
                            id={genre}
                            checked={selectedGenres.includes(genre)}
                            onCheckedChange={() => toggleGenre(genre)}
                          />
                          <label
                            htmlFor={genre}
                            className="text-sm cursor-pointer flex-1"
                          >
                            {genre}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {selectedGenres.length > 0 && (
                    <div>
                      <label className="text-sm font-semibold mb-2 block">Выбрано:</label>
                      <div className="flex flex-wrap gap-2">
                        {selectedGenres.map((genre) => (
                          <Badge
                            key={genre}
                            variant="secondary"
                            className="cursor-pointer"
                            onClick={() => toggleGenre(genre)}
                          >
                            {genre}
                            <Icon name="X" size={14} className="ml-1" />
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </aside>
            )}

            <div className={showFilters ? 'lg:col-span-3' : 'lg:col-span-4'}>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">
                  Найдено: <span className="text-primary">{filteredMovies.length}</span> {filteredMovies.length === 1 ? 'фильм' : 'фильмов'}
                </h2>
              </div>

              {filteredMovies.length === 0 ? (
                <div className="bg-card border border-border rounded-lg p-12 text-center">
                  <Icon name="SearchX" size={64} className="mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Ничего не найдено</h3>
                  <p className="text-muted-foreground mb-6">
                    Попробуйте изменить параметры поиска или сбросить фильтры
                  </p>
                  <Button onClick={clearFilters}>Сбросить фильтры</Button>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                  {filteredMovies.map((movie, index) => (
                    <div
                      key={movie.id}
                      className="group cursor-pointer animate-scale-in"
                      style={{ animationDelay: `${index * 30}ms` }}
                      onClick={() => navigate('/movie/1')}
                    >
                      <div className="relative aspect-[2/3] bg-accent rounded-lg overflow-hidden mb-3 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-primary/20">
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute top-2 right-2 bg-secondary text-secondary-foreground px-2 py-1 rounded text-sm font-semibold">
                          {movie.rating}
                        </div>
                        <div className="absolute top-2 left-2">
                          <Badge variant="outline" className="text-xs">
                            {movie.year}
                          </Badge>
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
                      <h4 className="font-semibold mb-1 line-clamp-2">{movie.title}</h4>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                        <span>{movie.genre}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Icon name="Clock" size={12} />
                        <span>{movie.duration}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SearchPage;
