import { lazy, Suspense, useState } from 'react';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Menu, X } from 'lucide-react';

const ThreeScene = lazy(() => import('./ThreeScene'));

const cases = [
  {
    id: 'esocial', index: '01', kicker: 'Integração governamental', title: 'Sincronização com eSocial sem perder o controle da operação',
    description: 'Projetei um motor de carga inicial e incremental com backfill, checkpoints, limite diário de requisições, reconciliação e parsers XML. A entrega transformou uma integração sensível em um fluxo observável e testável.',
    result: '97 arquivos · ~9 mil linhas · cobertura unitária', stack: ['Laravel', 'PHP', 'PostgreSQL', 'XML', 'Pest'],
  },
  {
    id: 'seufisio', index: '02', kicker: 'Performance em SaaS', title: 'Uma rotina crítica duas vezes mais rápida',
    description: 'Uma rotina noturna ainda executava quando clínicas começavam o expediente, gerando relatórios incorretos. Revi as consultas, acrescentei os índices ausentes e retirei trabalho que já não alterava o resultado.',
    result: 'De 2 horas para 1 hora · base com ~4 mil clínicas', stack: ['PHP', 'Laravel', 'MySQL', 'Jobs', 'APIs'],
  },
  {
    id: 'automacao', index: '03', kicker: 'Automação e IA aplicada', title: 'Ferramentas que fazem agentes executarem trabalho real',
    description: 'Construí workflows de agendamento, integrações entre sistemas, rotinas de dados e tool calls usadas por agentes de atendimento. O trabalho atendia uma operação enterprise distribuída em cerca de 2 mil unidades.',
    result: 'n8n · agentes · integrações enterprise', stack: ['n8n', 'Node.js', 'MongoDB', 'WhatsApp', 'APIs'],
  },
];

const products = [
  { name: 'LeadHunter', status: 'Em produção', description: 'Pesquisa e qualificação de empresas com dados públicos, scoring por evidências, deduplicação, funil auditável e rascunhos com aprovação humana.', meta: 'Python · React · SQLite · Codex CLI' },
  { name: 'Fluxo', status: 'Em produção', description: 'Operação de conteúdo para clínicas: transforma estratégia, pautas, produção, revisão e aprovação em um fluxo único, com IA e decisão humana.', meta: 'React · TypeScript · Supabase · IA aplicada' },
  { name: 'Bruno-vault', status: 'Em produção', description: 'Um segundo cérebro capaz de operar decisões e rotinas de uma empresa com agentes de IA, preservando contexto, evidências e histórico entre cada execução.', meta: 'Obsidian · Markdown · Git · agentes' },
  { name: 'Frambo', status: 'Em produção', description: 'SaaS de gestão para clínicas de fisioterapia e pilates, reunindo agenda, prontuário, financeiro e implantação acompanhada por quem constrói o produto.', meta: 'Laravel · React · MariaDB · VPS', href: 'https://brunofrancio.com.br' },
];

const experience = [
  { period: '2025 — agora', company: 'Contus', role: 'Senior Backend Developer', text: 'Integrações contábeis e financeiras, pipelines de dados, APIs em Laravel e infraestrutura em nuvem.' },
  { period: '2026', company: 'Convert Company', role: 'Full-stack Developer', text: 'Plataforma omnichannel, automações em n8n e integrações para operações enterprise.' },
  { period: '2023 — 2026', company: 'Artemidas', role: 'Backend Developer', text: 'Produtos SaaS para clínicas, integrações de pagamento, performance e qualidade com testes automatizados.' },
  { period: '2023', company: 'Elevor', role: 'Desenvolvedor', text: 'Manutenção e evolução de ERP para comércio e agronegócio.' },
];

function App() {
  const [activeCase, setActiveCase] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const selected = cases[activeCase];

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="Bruno Francio — início"><span className="brand-mark">BF</span><span>Bruno Francio.</span></a>
        <nav className={menuOpen ? 'nav-open' : ''} aria-label="Navegação principal">
          <a href="#trabalho" onClick={() => setMenuOpen(false)}>Trabalho</a>
          <a href="#produtos" onClick={() => setMenuOpen(false)}>Produtos</a>
          <a href="#experiencia" onClick={() => setMenuOpen(false)}>Experiência</a>
          <a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a>
        </nav>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <main>
        <section className="hero" id="inicio">
          <Suspense fallback={null}><ThreeScene /></Suspense>
          <div className="hero-orbit" aria-hidden="true"><span className="orbit orbit-one"/><span className="orbit orbit-two"/><img src="/brunofrancio.webp" alt="" /></div>
          <p className="eyebrow">Desenvolvedor de produtos digitais</p>
          <h1>Sistemas que resolvem<em> problemas de verdade.</em></h1>
          <p className="hero-copy">Transformo regras de negócio complexas em produtos web, APIs e automações que funcionam no mundo real — com clareza, testes e responsabilidade.</p>
          <div className="hero-actions"><a className="button button-primary" href="#trabalho">Ver o que já construí</a><a className="button button-secondary" href="mailto:brunofrancio@gmail.com">Conversar comigo</a></div>
          <div className="social-row" aria-label="Redes profissionais"><a href="https://github.com/BrunoFrancio" target="_blank" rel="noreferrer"><Github/><span>GitHub</span></a><a href="https://www.linkedin.com/in/bruno-francio/" target="_blank" rel="noreferrer"><Linkedin/><span>LinkedIn</span></a><a href="mailto:brunofrancio@gmail.com"><Mail/><span>E-mail</span></a></div>
          <a className="scroll-cue" href="#trabalho" aria-label="Ir para trabalhos selecionados"><ArrowDown/></a>
        </section>

        <section className="proof-strip" aria-label="Números da experiência">
          <div><strong>4 mil</strong><span>clínicas na base de um SaaS que ajudei a evoluir</span></div>
          <div><strong>10 mil</strong><span>check-ins processados por dia nos aplicativos</span></div>
          <div><strong>2 mil</strong><span>unidades em operações enterprise atendidas</span></div>
          <div><strong>4 anos</strong><span>transformando regra de negócio em software</span></div>
        </section>

        <section className="work-section section" id="trabalho">
          <div className="section-intro"><p className="eyebrow">Trabalho selecionado</p><h2>Problemas complexos.<br/><em>Resultados que dá para medir.</em></h2></div>
          <div className="case-layout">
            <div className="case-tabs" role="tablist" aria-label="Casos profissionais">
              {cases.map((item, index) => <button key={item.id} className={activeCase === index ? 'active' : ''} onClick={() => setActiveCase(index)} role="tab" aria-selected={activeCase === index}><span>{item.index}</span>{item.kicker}</button>)}
            </div>
            <article className="case-card" key={selected.id}>
              <span className="case-number">{selected.index}</span><p className="case-kicker">{selected.kicker}</p><h3>{selected.title}</h3><p>{selected.description}</p><strong className="result">{selected.result}</strong><div className="tags">{selected.stack.map(item => <span key={item}>{item}</span>)}</div>
            </article>
          </div>
        </section>

        <section className="products-section section" id="produtos">
          <div className="section-intro split"><div><p className="eyebrow">Produtos próprios</p><h2>Do problema até<br/><em>o software no ar.</em></h2></div><p>Projetos em que assumo produto, interface, arquitetura, implantação e a parte difícil: decidir o que vale construir.</p></div>
          <div className="product-grid">{products.map((product, index) => {
            const content = <><span className="product-index">0{index + 1}</span><span className="status">{product.status}</span><h3>{product.name}</h3><p>{product.description}</p><span className="product-meta">{product.meta}</span>{product.href && <ArrowUpRight/>}</>;
            return product.href
              ? <a className="product-card" href={product.href} target="_blank" rel="noreferrer" key={product.name}>{content}</a>
              : <article className="product-card" key={product.name}>{content}</article>;
          })}</div>
        </section>

        <section className="experience-section section" id="experiencia">
          <div className="section-intro"><p className="eyebrow">Experiência</p><h2>Construindo com contexto,<br/><em>da sustentação ao produto.</em></h2></div>
          <div className="timeline">{experience.map(item => <article key={`${item.company}-${item.period}`}><span className="timeline-period">{item.period}</span><div><h3>{item.company}</h3><strong>{item.role}</strong><p>{item.text}</p></div></article>)}</div>
        </section>

        <section className="stack-section section" aria-label="Tecnologias">
          <p className="eyebrow">Ferramentas recorrentes</p>
          <div className="stack-marquee"><div>{['PHP','Laravel','TypeScript','React','Node.js','PostgreSQL','MySQL','Docker','n8n','Supabase','GitHub Actions'].map(item => <span key={item}>{item}</span>)}</div></div>
        </section>

        <section className="contact-section" id="contato">
          <p className="eyebrow">Vamos conversar</p><h2>Tem um problema difícil<br/>que precisa virar <em>produto?</em></h2><p>Estou aberto a boas conversas sobre produto, back-end, integrações, automação e oportunidades em times que valorizam responsabilidade técnica.</p><a className="contact-link" href="mailto:brunofrancio@gmail.com">brunofrancio@gmail.com <ArrowUpRight/></a>
        </section>
      </main>

      <footer><span>Bruno Francio · Passo Fundo, RS</span><span>Trabalho, contexto e resultados.</span><a href="#inicio">Voltar ao topo</a></footer>
    </div>
  );
}

export default App;
