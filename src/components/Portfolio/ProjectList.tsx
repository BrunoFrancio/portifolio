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

        // Requisição para obter linguagens
        const fetchLanguages = async (repo: any) => {
          const langResponse = await fetch(repo.languages_url);
          const languagesData = await langResponse.json();
          return Object.keys(languagesData);
        };

        // Adiciona linguagens aos repositórios
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
    <div className="p-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-extrabold text-center text-gray-900 dark:text-white mb-8">
        Meus Projetos
      </h1>
      {isLoading ? (
        <p className="text-center text-gray-600 dark:text-gray-400">Carregando projetos...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {repositories.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col justify-between"
            >
              <div>
                <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {project.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description || 'Sem descrição disponível.'}
                </p>
                <ul className="flex flex-wrap gap-2 mb-4">
                  {project.languages.length > 0 ? (
                    project.languages.map((lang, index) => (
                      <li
                        key={index}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                      >
                        {lang}
                      </li>
                    ))
                  ) : (
                    <li className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-sm">
                      Sem linguagens
                    </li>
                  )}
                </ul>
              </div>
              <a
                href={project.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
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
