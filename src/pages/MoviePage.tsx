import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import VideoPlayer from '@/components/VideoPlayer';

const MoviePage = () => {
  const navigate = useNavigate();
  const [isWatchlisted, setIsWatchlisted] = useState(false);
  const [userRating, setUserRating] = useState(0);

  const movie = {
    title: 'Интерстеллар',
    originalTitle: 'Interstellar',
    year: 2014,
    rating: 8.6,
    duration: '2ч 49мин',
    genres: ['Фантастика', 'Драма', 'Приключения'],
    director: 'Кристофер Нолан',
    cast: ['Мэттью МакКонахи', 'Энн Хэтэуэй', 'Джессика Честейн', 'Майкл Кейн'],
    country: 'США, Великобритания',
    budget: '$165 млн',
    boxOffice: '$677 млн',
    description: 'Когда засуха приводит человечество к продовольственному кризису, коллектив исследователей и учёных отправляется сквозь червоточину в путешествие, чтобы превзойти прежние ограничения для космических путешествий человека и найти планету с подходящими для человечества условиями.',
    storyline: 'В недалёком будущем Земля страдает от экологической катастрофы. Бывший пилот NASA Купер, проживающий на ферме вместе со своими детьми, узнаёт, что у человечества есть последний шанс на выживание — путешествие сквозь червоточину для поиска новой планеты для жизни. Купер принимает решение отправиться в космос, оставив детей на Земле, в надежде найти новый дом для человечества.',
  };

  const similarMovies = [
    { id: 1, title: 'Дюна', year: 2021, rating: 8.0, genre: 'Фантастика' },
    { id: 2, title: 'Прибытие', year: 2016, rating: 7.9, genre: 'Фантастика' },
    { id: 3, title: 'Гравитация', year: 2013, rating: 7.7, genre: 'Фантастика' },
    { id: 4, title: 'Марсианин', year: 2015, rating: 8.0, genre: 'Фантастика' },
    { id: 5, title: 'Начало', year: 2010, rating: 8.8, genre: 'Фантастика' },
    { id: 6, title: 'Бегущий по лезвию 2049', year: 2017, rating: 8.0, genre: 'Фантастика' },
  ];

  const reviews = [
    {
      id: 1,
      author: 'Александр М.',
      rating: 10,
      date: '15 января 2024',
      text: 'Невероятный фильм! Нолан в очередной раз доказал, что он мастер своего дела. Визуальные эффекты потрясающие, музыка Ханса Циммера создаёт нужную атмосферу, а игра актёров на высшем уровне.',
    },
    {
      id: 2,
      author: 'Мария К.',
      rating: 9,
      date: '10 января 2024',
      text: 'Один из лучших научно-фантастических фильмов за последние годы. Сюжет заставляет задуматься о многом. Особенно впечатлила сцена с чёрной дырой.',
    },
    {
      id: 3,
      author: 'Дмитрий П.',
      rating: 10,
      date: '5 января 2024',
      text: 'Эмоциональное путешествие, которое не оставит равнодушным. Связь отца и дочери показана очень трогательно. Визуальные эффекты и научная точность на высоте.',
    },
  ];

  const handleRating = (rating: number) => {
    setUserRating(rating);
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

      <main className="pt-20">
        <div className="container mx-auto px-4 py-8">
          <VideoPlayer title={movie.title} onBack={() => navigate('/')} />

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-4xl font-bold mb-2">{movie.title}</h1>
                    <p className="text-muted-foreground text-lg">{movie.originalTitle}</p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-secondary text-secondary-foreground text-lg px-3 py-1">
                        {movie.rating}
                      </Badge>
                      <Icon name="Star" size={20} className="text-secondary" />
                    </div>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          onClick={() => handleRating(star)}
                          className="transition-transform hover:scale-110"
                        >
                          <Icon
                            name="Star"
                            size={20}
                            className={star <= userRating ? 'text-secondary fill-secondary' : 'text-muted-foreground'}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="text-muted-foreground">{movie.year}</span>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-muted-foreground">{movie.duration}</span>
                  <span className="text-muted-foreground">•</span>
                  {movie.genres.map((genre) => (
                    <Badge key={genre} variant="outline">
                      {genre}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 mb-8">
                  <Button
                    variant={isWatchlisted ? 'secondary' : 'outline'}
                    onClick={() => setIsWatchlisted(!isWatchlisted)}
                    className="flex-1"
                  >
                    <Icon name={isWatchlisted ? 'Check' : 'Plus'} size={20} className="mr-2" />
                    {isWatchlisted ? 'В избранном' : 'В избранное'}
                  </Button>
                  <Button variant="outline">
                    <Icon name="Share2" size={20} className="mr-2" />
                    Поделиться
                  </Button>
                </div>

                <Tabs defaultValue="about" className="w-full">
                  <TabsList className="w-full justify-start">
                    <TabsTrigger value="about">О фильме</TabsTrigger>
                    <TabsTrigger value="reviews">Отзывы ({reviews.length})</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="about" className="space-y-6 mt-6">
                    <div>
                      <h3 className="text-xl font-bold mb-3">Описание</h3>
                      <p className="text-muted-foreground leading-relaxed">{movie.description}</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-3">Сюжет</h3>
                      <p className="text-muted-foreground leading-relaxed">{movie.storyline}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2">Режиссёр</h4>
                        <p className="text-muted-foreground">{movie.director}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Страна</h4>
                        <p className="text-muted-foreground">{movie.country}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Бюджет</h4>
                        <p className="text-muted-foreground">{movie.budget}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Сборы</h4>
                        <p className="text-muted-foreground">{movie.boxOffice}</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">В главных ролях</h4>
                      <div className="flex flex-wrap gap-2">
                        {movie.cast.map((actor) => (
                          <Badge key={actor} variant="secondary">
                            {actor}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="reviews" className="space-y-4 mt-6">
                    {reviews.map((review) => (
                      <div key={review.id} className="bg-card border border-border rounded-lg p-6">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                              <Icon name="User" size={20} className="text-primary" />
                            </div>
                            <div>
                              <h4 className="font-semibold">{review.author}</h4>
                              <p className="text-sm text-muted-foreground">{review.date}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            <Icon name="Star" size={16} className="text-secondary fill-secondary" />
                            <span className="font-bold text-secondary">{review.rating}</span>
                          </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{review.text}</p>
                      </div>
                    ))}
                  </TabsContent>
                </Tabs>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Детали</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Год выпуска</p>
                    <p className="font-semibold">{movie.year}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Длительность</p>
                    <p className="font-semibold">{movie.duration}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Жанры</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {movie.genres.map((genre) => (
                        <Badge key={genre} variant="outline">
                          {genre}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Рейтинг IMDb</p>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-secondary">{movie.rating}</span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Icon
                            key={i}
                            name="Star"
                            size={16}
                            className={`${i < Math.floor(movie.rating / 2) ? 'text-secondary fill-secondary' : 'text-muted-foreground'}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Похожие фильмы</h3>
                <div className="space-y-3">
                  {similarMovies.map((similar) => (
                    <div
                      key={similar.id}
                      className="group cursor-pointer bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300"
                    >
                      <div className="flex gap-3 p-3">
                        <div className="relative w-16 aspect-[2/3] bg-accent rounded overflow-hidden flex-shrink-0">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Icon name="Film" size={24} className="text-muted-foreground" />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold mb-1 line-clamp-1">{similar.title}</h4>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                            <span>{similar.year}</span>
                            <span>•</span>
                            <span>{similar.genre}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Icon name="Star" size={14} className="text-secondary fill-secondary" />
                            <span className="text-sm font-semibold text-secondary">{similar.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MoviePage;
