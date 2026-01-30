import React, { useEffect, useState } from 'react';
import { ExternalLink } from 'lucide-react';

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  languages: string[];
}

const Projetos: React.FC = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await fetch('https://api.github.com/users/BrunoFrancio/repos');
        const repos = await response.json();

        const fetchLanguages = async (repo: any) => {
          const langResponse = await fetch(repo.languages_url);
          const languagesData = await langResponse.json();
          return Object.keys(languagesData);
        };

        const enrichedRepos = await Promise.all(
          repos.map(async (repo: any) => ({
            id: repo.id,
            name: repo.name,
            description: repo.description,
            html_url: repo.html_url,
            languages: await fetchLanguages(repo),
          }))
        );

        setRepositories(enrichedRepos);
      } catch (error) {
        console.error('Erro ao buscar repositórios do GitHub:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRepositories();
  }, []);

  return (
    <div className="p-8 bg-background min-h-screen">
      <h1 className="text-3xl font-extrabold text-center text-foreground mb-8">
        Meus Projetos
      </h1>
      {isLoading ? (
        <p className="text-center text-muted-foreground">Carregando projetos...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {repositories.map((project) => (
            <div
              key={project.id}
              className="bg-card p-6 rounded-lg shadow-lg flex flex-col justify-between border border-border"
            >
              <div>
                <h2 className="text-xl font-bold text-foreground mb-2">
                  {project.name}
                </h2>
                <p className="text-muted-foreground mb-4">
                  {project.description || 'Sem descrição disponível.'}
                </p>
                <ul className="flex flex-wrap gap-2 mb-4">
                  {project.languages.length > 0 ? (
                    project.languages.map((lang, index) => (
                      <li
                        key={index}
                        className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm"
                      >
                        {lang}
                      </li>
                    ))
                  ) : (
                    <li className="px-3 py-1 bg-secondary text-muted-foreground rounded-full text-sm">
                      Sem linguagens
                    </li>
                  )}
                </ul>
              </div>
              <a
                href={project.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-foreground bg-primary rounded-lg shadow-md hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Ver Projeto
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Projetos;
