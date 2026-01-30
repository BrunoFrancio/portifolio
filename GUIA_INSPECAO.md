# GUIA_INSPECAO.md — workshop-ia.techleads.club

> Objetivo: coletar **CSS real** do site (background geométrico, botões normal/hover e efeitos de scroll) e colar no `ESTILOS_REFERENCIA.md`.

## 0) Setup rápido no DevTools
1. Abra o site: https://workshop-ia.techleads.club/
2. Abra o DevTools (**F12**)
3. Aba **Network**:
   - marque **Disable cache**
   - recarregue a página (Ctrl+R)
4. Aba **Elements**: deixe o painel de **Styles** aberto.

## 1) Background geométrico (prioridade #1)
### 1.1 Onde olhar
- No **Elements**, selecione:
  - `html`
  - `body`
  - o wrapper principal (geralmente `main`, `#__next`, `#root`, `.app`, `.layout`)

### 1.2 O que procurar no painel **Styles**
Procure por qualquer coisa envolvendo:
- `background`, `background-color`, `background-image`
- `linear-gradient(`, `radial-gradient(`, `conic-gradient(`
- `mask-image`, `filter: blur`, `opacity`, `mix-blend-mode`
- pseudo-elementos `::before` / `::after`

> Dica: no painel **Styles**, use Ctrl+F e busque por `gradient`, `radial`, `conic`, `before`, `after`, `mask`.

### 1.3 Capturar o CSS completo
1. Com o elemento selecionado, no lado direito clique em **:hov** e verifique se há estados especiais.
2. Expanda regras que estejam aplicando background (inclusive utilitários de Tailwind).
3. Se existir `::before`/`::after`, clique neles no breadcrumb do DevTools e copie também.

✅ Cole no `ESTILOS_REFERENCIA.md`:
- Regra do elemento (ex.: `body { ... }`)
- Regra do pseudo-elemento (ex.: `body::before { ... }`)
- Qualquer `@keyframes` e `animation` relacionados.

### 1.4 Atalho para copiar propriedades do elemento selecionado
No **Console**, com o elemento selecionado no painel Elements (vira `$0`):

```js
// Copia um “dump” do background + props comuns
(() => {
  const el = $0;
  const cs = getComputedStyle(el);
  const keys = [
    'background', 'backgroundColor', 'backgroundImage', 'backgroundSize',
    'backgroundPosition', 'backgroundRepeat', 'backgroundAttachment',
    'maskImage', 'filter', 'opacity', 'mixBlendMode'
  ];
  const out = keys.map(k => `${k}: ${cs[k]}`).join('\n');
  copy(out);
  return out;
})();
```

## 2) Botões (normal e hover) — prioridade #2
### 2.1 Escolha os botões certos
- CTA principal (ex.: “Garantir vaga”, “Entrar”, “Começar”, etc.)
- Um botão secundário (outline/ghost) se existir

### 2.2 Capturar normal
1. Selecione o botão no **Elements**.
2. No **Styles**, copie regras que definem:
   - `background-color` / `background`
   - `color`
   - `border-color`
   - `box-shadow`

### 2.3 Capturar hover
1. Clique em **:hov** e marque `:hover`.
2. Copie tudo que muda (muito comum: `background-color`, `filter`, `opacity`, `transform`, `box-shadow`).

✅ Cole no `ESTILOS_REFERENCIA.md` em **Botões**:
- CSS normal
- CSS hover
- Se for Tailwind, copie a classe completa do botão (ajuda muito na reprodução)

## 3) Efeitos de scroll (parallax / animações) — prioridade #3
### 3.1 Observação visual
Role a página e note:
- elementos entrando com fade/slide
- background “andando” (parallax)
- blur/glow mudando

### 3.2 Checar listeners e libs
1. Aba **Sources** → Ctrl+Shift+F e busque por:
   - `IntersectionObserver`
   - `addEventListener('scroll'`
   - `requestAnimationFrame`
   - `framer-motion`, `motion`, `lenis`, `locomotive`, `gsap`, `aos`
2. Aba **Elements**: procure atributos como `data-aos`, `data-animate`, `data-scroll`.

✅ Cole no `ESTILOS_REFERENCIA.md`:
- trechos de JS relacionados a scroll (se houver)
- classes/atributos que indiquem animação

## 4) Finalização
Antes de encerrar:
- garanta que o `ESTILOS_REFERENCIA.md` tenha:
  - **CSS completo do background** (incluindo `::before`/`::after` e `@keyframes`)
  - **Botão normal + hover** (pelo menos 1 CTA)
  - **Conclusão sobre scroll** (tem parallax? tem animação ao scroll?)

