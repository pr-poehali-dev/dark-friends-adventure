import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const rules = [
    {
      icon: "ShieldBan",
      title: "Читы запрещены",
      description: "Использование любых читов и модификаций, дающих преимущество, строго запрещено"
    },
    {
      icon: "UserX",
      title: "Оскорбление администрации запрещено",
      description: "Уважительное отношение к администрации сервера обязательно для всех игроков"
    },
    {
      icon: "MessageSquareX",
      title: "Маты запрещены",
      description: "Нецензурная лексика в любом виде запрещена в чате и голосовом общении"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="text-center mb-20 animate-fade-in">
          <div className="mb-8 flex justify-center">
            <div className="w-24 h-24 border-4 border-foreground flex items-center justify-center">
              <Icon name="Gamepad2" size={48} className="text-foreground" />
            </div>
          </div>
          <h1 className="text-7xl md:text-8xl font-bold tracking-tight mb-6 uppercase">
            FRENDS MINE
          </h1>
          <p className="text-2xl text-muted-foreground font-light tracking-wide uppercase">
            Игровой сервер
          </p>
        </div>

        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold uppercase tracking-wide mb-2 animate-fade-in">
            Правила сервера
          </h2>
          <div className="w-24 h-1 bg-foreground mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 animate-scale-in">
          {rules.map((rule, index) => (
            <Card 
              key={index} 
              className="border-2 border-foreground bg-card hover:bg-muted transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 border-2 border-foreground flex items-center justify-center group-hover:border-4 transition-all">
                    <Icon name={rule.icon} size={32} className="text-foreground" />
                  </div>
                </div>
                <h3 className="text-xl font-bold uppercase mb-4 tracking-wide">
                  {rule.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {rule.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 text-center animate-fade-in">
          <div className="inline-block border-2 border-foreground px-8 py-4">
            <p className="text-lg uppercase tracking-widest font-medium">
              Соблюдайте правила и наслаждайтесь игрой
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
