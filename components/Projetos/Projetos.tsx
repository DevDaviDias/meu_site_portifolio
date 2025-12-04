import{motion} from'framer-motion';
import {Card,CardContent,CardHeader,CardTitle} from '@/components/ui/card';
import{Button} from '@/components/ui/button';
import {Badge} from '@/components/ui/badge';
import { ExternalLink, Github, Eye } from 'lucide-react';


export default function Progetos(){
const projetos = [
  {
    title: "Sistema de Gestão de Clientes e Serviços",
    description: "Aplicação web moderna para cadastro de clientes, controle de serviços e peças utilizadas. Desenvolvida inicialmente com JavaScript e Node.js. Futuras melhorias incluem Express, EJS e MongoDB.",
    imagem: "/projeto1.png",
    techologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
    github: "https://github.com/DevDaviDias/Gestor-De-Servicos",
    demo: "https://devdavidias.github.io/Gestor-De-Servicos/",
    Featured: true
  },
 {
  title: "Dashboard de Criptomoedas",
  description: "Um dashboard interativo que exibe preços em tempo real, variação das últimas 24 horas e gráficos dos últimos 7 dias de diversas criptomoedas. Atualização automática e interface moderna e responsiva.",
  imagem: "/cripto.jpg", 
  techologies: ["HTML5", "CSS3", "JavaScript", "Chart.js", "API CoinGecko"],
  github: "https://github.com/DevDaviDias/meu-crypto-dashboard",
  demo: "https://devdavidias.github.io/meu-crypto-dashboard/",
  Featured: true
}
,
  {
    title: "Aplicação de Adoção de Pets",
    description: "Um site interativo onde usuários podem cadastrar pets para adoção, visualizar animais disponíveis e entrar em contato com os responsáveis.",
    imagem: "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=500&fit=crop",
    techologies: ["React", "Firebase", "Tailwind", "Node.js"],
    github: "#",
    demo: "#",
    Featured: false
  },
  {
  title: "Meteora – Loja de Moda Responsiva",
  description:
    "Loja fictícia de moda desenvolvida como meu primeiro projeto com Bootstrap. O site conta com carrossel responsivo, categorias de produtos, pesquisa, newsletter e design moderno baseado em componentes do framework.",
  imagem: "/meteora.png", 
  techologies: ["HTML5", "CSS3", "Bootstrap 5", "JavaScript"],
  github: "https://github.com/DevDaviDias/Meteora",
  demo: "https://devdavidias.github.io/Meteora/",
  Featured: false
}
,
  {
    title: "Landing Page para Cafeteria",
    description: "Landing page moderna e responsiva criada para uma cafeteria fictícia, focada em conversão e experiência visual.",
    imagem: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&fit=crop",
    techologies: ["HTML", "CSS", "JavaScript", "GSAP"],
    github: "#",
    demo: "#",
    Featured: false
  }
];

const FeaturedProjects = projetos.filter(p => p.Featured);
const FeaturedOuthers = projetos.filter(p => !p.Featured);

return (
  <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 md:ml-[22em]">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >

        <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
         Meus Projetos
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-4"></div>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Uma seleção dos meus trabalhos mais recentes e projetos que demonstram
          minhas habilidades técnicas e criatividade.
        </p>
      </motion.div>

      {/* Featured Projects */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Projetos em Destaque</h3>
        <div className="grid lg:grid-cols-2 gap-8">
          {FeaturedProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={project.imagem}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2">
                    <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl text-slate-800">{project.title}</CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-slate-600">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.techologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-purple-100 text-purple-800">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Github className="w-4 h-4 mr-2" /> Código
                    </Button>
                    <Button size="sm" className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                      <ExternalLink className="w-4 h-4 mr-2" /> Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Other Projects */}
      <div>
        <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Outros Projetos</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FeaturedOuthers.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm h-full">
                <div className="relative overflow-hidden">
                  <img
                    src={project.imagem}
                    alt={project.title}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-slate-800">{project.title}</CardTitle>
                </CardHeader>

                <CardContent className="space-y-3">
                  <p className="text-sm text-slate-600 line-clamp-2">{project.description}</p>

                  <div className="flex flex-wrap gap-1">
                    {project.techologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs bg-blue-100 text-blue-800">
                        {tech}
                      </Badge>
                    ))}
                    {project.techologies.length > 3 && (
                      <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-600">
                        +{project.techologies.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button variant="outline" size="sm" className="flex-1 text-xs">
                      <Github className="w-3 h-3 mr-1" /> Código
                    </Button>
                    <Button size="sm" className="flex-1 text-xs bg-gradient-to-r from-purple-600 to-blue-600">
                      <ExternalLink className="w-3 h-3 mr-1" /> Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

}