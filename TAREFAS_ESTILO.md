# Lista de Tarefas - Aplicar Estilo do Site de Exemplo

## FASE 1: Análise e Documentação

### Tarefa 1.1: Inspecionar o site de exemplo
- [ ] Acessar https://workshop-ia.techleads.club/ no navegador
- [ ] Abrir DevTools (F12)
- [ ] Identificar a fonte usada (aba Computed > font-family)
- [ ] Anotar os códigos de cores principais (hex/rgb)
- [ ] Inspecionar o background geométrico (aba Elements > Styles)
- [ ] Verificar efeitos de rolagem (scroll behavior, parallax)
- [ ] Capturar screenshots para referência

### Tarefa 1.2: Documentar estilos identificados
- [ ] Criar arquivo `ESTILOS_REFERENCIA.md` na raiz do projeto
- [ ] Documentar:
  - [ ] Nome da fonte e link do Google Fonts (se aplicável)
  - [ ] Paleta de cores (códigos hex/rgb)
  - [ ] CSS do background geométrico
  - [ ] Configurações de scroll/animações

---

## FASE 2: Atualização de Fontes

### Tarefa 2.1: Atualizar import de fontes
- [ ] Editar `index.html`
- [ ] Remover ou comentar a linha do Roboto (linha 54)
- [ ] Adicionar import da nova fonte identificada (Google Fonts)
- [ ] Adicionar `preconnect` para otimização

### Tarefa 2.2: Configurar fonte no Tailwind
- [ ] Editar `tailwind.config.js`
- [ ] Adicionar a nova fonte em `theme.extend.fontFamily`
- [ ] Definir como fonte padrão: `fontFamily: { sans: ['NovaFonte', ...] }`

---

## FASE 3: Atualização de Cores

### Tarefa 3.1: Configurar paleta de cores no Tailwind
- [ ] Editar `tailwind.config.js`
- [ ] Adicionar paleta de cores do exemplo em `theme.extend.colors`
- [ ] Criar variantes para dark mode
- [ ] Manter cores de skills existentes

### Tarefa 3.2: Atualizar cores no App.tsx
- [ ] Editar `src/App.tsx`
- [ ] Substituir `bg-white dark:bg-gray-900` pela nova cor de background
- [ ] Substituir `text-gray-900 dark:text-white` pela nova cor de texto

### Tarefa 3.3: Atualizar cores no Header
- [ ] Editar `src/components/Header.tsx`
- [ ] Substituir `text-indigo-600 dark:text-indigo-400` (linha 24)
- [ ] Substituir `bg-white/80 dark:bg-gray-900/80` (linha 20)
- [ ] Atualizar cores de hover nos links de navegação

### Tarefa 3.4: Atualizar cores no Hero
- [ ] Editar `src/components/Hero.tsx`
- [ ] Substituir `text-indigo-600 dark:text-indigo-400` (linha 23)
- [ ] Substituir `bg-indigo-600` e `hover:bg-indigo-700` nos botões (linhas 36-37)
- [ ] Substituir `border-indigo-600` e `text-indigo-600` (linha 45)
- [ ] Atualizar `cursorColor` do typewriter (linha 31)

### Tarefa 3.5: Atualizar cores no About
- [ ] Editar `src/components/About.tsx`
- [ ] Substituir `text-indigo-600 dark:text-indigo-400` (linha 9)
- [ ] Atualizar cores dos ícones de hobbies
- [ ] Atualizar `bg-gray-50 dark:bg-gray-800` (linha 16)

### Tarefa 3.6: Atualizar cores no Skills
- [ ] Editar `src/components/Skills/SkillBar.tsx`
- [ ] Substituir `bg-indigo-600 dark:bg-indigo-500` (linha 17)
- [ ] Verificar e atualizar `src/components/Skills/Skills.tsx` se necessário

### Tarefa 3.7: Atualizar cores no Experience
- [ ] Editar `src/components/Experience/TimelineItem.tsx`
- [ ] Substituir `bg-indigo-200 dark:bg-indigo-900` (linha 8)
- [ ] Substituir `bg-indigo-600 dark:bg-indigo-500` (linha 9)
- [ ] Substituir `text-indigo-600 dark:text-indigo-400` (linha 14)

### Tarefa 3.8: Verificar outros componentes
- [ ] Verificar `src/components/Portfolio/ProjectCard.tsx`
- [ ] Verificar `src/components/Footer/Footer.tsx`
- [ ] Verificar `src/pages/Projetos.tsx`
- [ ] Verificar `src/pages/Sobre.tsx`
- [ ] Atualizar cores indigo/gray encontradas

---

## FASE 4: Implementar Background Geométrico

### Tarefa 4.1: Criar CSS do background
- [ ] Editar `src/index.css`
- [ ] Adicionar CSS para padrão geométrico/animação
- [ ] Implementar background fixo ou animado
- [ ] Adicionar media queries para responsividade mobile
- [ ] Garantir performance (usar `will-change` se necessário)

### Tarefa 4.2: Aplicar background no App
- [ ] Editar `src/App.tsx`
- [ ] Adicionar classe de background no container principal
- [ ] Ajustar opacidade/overlay se necessário para legibilidade
- [ ] Testar em diferentes seções

---

## FASE 5: Ajustar Efeitos de Rolagem

### Tarefa 5.1: Configurar scroll behavior
- [ ] Editar `src/index.css`
- [ ] Verificar `scroll-behavior: smooth` (já existe na linha 6)
- [ ] Ajustar timing se necessário
- [ ] Adicionar efeitos de parallax se presente no exemplo

### Tarefa 5.2: Ajustar scroll no Header
- [ ] Editar `src/components/Header.tsx`
- [ ] Verificar `duration={500}` no react-scroll (linha 37)
- [ ] Ajustar duração se necessário
- [ ] Verificar offset de scroll para navegação

---

## FASE 6: Testes e Ajustes Finais

### Tarefa 6.1: Testes de responsividade
- [ ] Testar em desktop (1920x1080, 1366x768)
- [ ] Testar em tablet (768px, 1024px)
- [ ] Testar em mobile (375px, 414px)
- [ ] Verificar se background geométrico funciona em todos os tamanhos

### Tarefa 6.2: Testes de acessibilidade
- [ ] Verificar contraste de cores (WCAG AA mínimo)
- [ ] Testar navegação por teclado
- [ ] Verificar legibilidade de textos
- [ ] Testar com leitores de tela (se possível)

### Tarefa 6.3: Testes de dark mode
- [ ] Alternar entre dark/light mode
- [ ] Verificar se todas as cores funcionam em ambos os modos
- [ ] Ajustar cores se necessário para melhor contraste

### Tarefa 6.4: Testes de performance
- [ ] Verificar tempo de carregamento
- [ ] Otimizar animações CSS se necessário
- [ ] Verificar uso de memória com animações
- [ ] Testar em navegadores diferentes (Chrome, Firefox, Safari)

### Tarefa 6.5: Ajustes finais
- [ ] Ajustar espaçamentos se necessário
- [ ] Verificar alinhamentos
- [ ] Remover código comentado ou não utilizado
- [ ] Limpar arquivo `ESTILOS_REFERENCIA.md` ou movê-lo para docs/

---

## Checklist de Arquivos Modificados

- [ ] `index.html`
- [ ] `tailwind.config.js`
- [ ] `src/index.css`
- [ ] `src/App.tsx`
- [ ] `src/components/Header.tsx`
- [ ] `src/components/Hero.tsx`
- [ ] `src/components/About.tsx`
- [ ] `src/components/Skills/SkillBar.tsx`
- [ ] `src/components/Experience/TimelineItem.tsx`
- [ ] Outros componentes conforme necessário

---

**Dica:** Execute as tarefas na ordem apresentada. A Fase 1 (análise) é essencial antes de começar a implementação. Após completar cada fase, teste antes de avançar para a próxima.
