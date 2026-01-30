# Estilos de Referência — workshop-ia.techleads.club

> **📌 IMPORTANTE:** Use o arquivo `GUIA_INSPECAO.md` para o passo a passo da inspeção.
>
> **Legenda:**
> - ✅ **Confirmado**: já estava documentado.
> - ⚠️ **A confirmar**: preenchido como hipótese (base Shadcn/Tailwind) — substitua pelo CSS real do site.

---

## 🎨 Fontes (✅ Confirmado)

### Fonte Principal
- **Nome:** `Inter`
- **Fonte do Google Fonts:** `Sim - Google Fonts`
- **Link de import:** `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap`
- **Pesos usados:** `400, 500, 600, 700`
- **Fonte secundária (código):** `JetBrains Mono` (pesos: 400, 500, 600)
- **CSS encontrado:**
```css
font-family: Inter, system-ui, sans-serif;
-webkit-font-smoothing: antialiased;
```

---

## 🎨 Paleta de Cores

### Cores Principais (✅ Confirmado)
- **Background principal:** `hsl(222 47% 6%)`  
  - Hex aproximado: `#080c16`
- **Texto principal:** `hsl(210 40% 98%)`  
  - Hex aproximado: `#f8fafc`
- **Cor de destaque/primária:** `hsl(199 89% 48%)`  
  - Hex aproximado: `#0ea5e9` (aprox)

### Cores Secundárias (⚠️ A confirmar)
> Se o site for Shadcn/Tailwind dark com ajustes, estes valores são bem prováveis. **Confirme no DevTools**.

- **Cor secundária:** `hsl(217 33% 17%)` (hex aprox `#1d283a`)
- **Muted foreground (textos suaves):** `hsl(215 20% 65%)` (hex aprox `#94a3b8`)
- **Card/background de seções:** `hsl(222 47% 9%)` (hex aprox `#0c1322`)
- **Bordas/inputs:** `hsl(217 33% 17%)`

### Variáveis CSS (✅ Base confirmada / ⚠️ completar)
```css
:root {
  /* ✅ Confirmado */
  --background: 222 47% 6%;
  --foreground: 210 40% 98%;
  --primary: 199 89% 48%;

  /* ⚠️ A confirmar (provável) */
  --card: 222 47% 9%;
  --card-foreground: 210 40% 98%;
  --secondary: 217 33% 17%;
  --secondary-foreground: 210 40% 98%;
  --muted: 217 33% 17%;
  --muted-foreground: 215 20% 65%;
  --border: 217 33% 17%;
  --input: 217 33% 17%;
  --ring: 199 89% 48%;
  --radius: 0.75rem;
}
```

### Cores Adicionais (PREENCHER NA INSPEÇÃO MANUAL)
- **Background seções:** `_________________`
- **Bordas:** `_________________`
- **Links:** `_________________` (normal) / `_________________` (hover)
- **Botões - Background normal:** `_________________`
- **Botões - Background hover:** `_________________`
- **Botões - Texto:** `_________________`
- **Outras:** `_________________`

---

## 🖼️ Background Geométrico (PREENCHER NA INSPEÇÃO MANUAL) — PRIORIDADE #1

### Tipo de Background
- [ ] Gradiente CSS
- [ ] Padrão geométrico (shapes)
- [ ] Imagem de fundo
- [ ] Animação CSS
- [ ] SVG pattern
- [ ] Outro: `_________________`

### CSS do Background (cole o CSS REAL do site)
> Inspecione `html/body` e wrappers + `::before/::after` e cole **tudo**.

```css
/* Cole aqui o CSS completo do background (real) */

```

### MODELO (⚠️ não confirmado — apenas referência)
> Se você quiser um *placeholder* até copiar o CSS real, este modelo cria “glows + grid” típico de landing dark.

```css
/* PLACEHOLDER (substituir pelo CSS real do site) */
html { scroll-behavior: smooth; }

body {
  background-color: hsl(var(--background));
  color: hsl(var(--foreground));

  /* glows */
  background-image:
    radial-gradient(900px circle at 20% 10%, hsl(var(--primary) / 0.22), transparent 55%),
    radial-gradient(800px circle at 80% 30%, hsl(250 90% 60% / 0.12), transparent 55%),
    radial-gradient(1000px circle at 50% 110%, hsl(170 90% 55% / 0.10), transparent 60%);
  background-repeat: no-repeat;
}

body::before {
  content: "";
  position: fixed;
  inset: 0;
  pointer-events: none;

  /* grid geométrico */
  background-image:
    linear-gradient(to right, hsl(var(--foreground) / 0.06) 1px, transparent 1px),
    linear-gradient(to bottom, hsl(var(--foreground) / 0.06) 1px, transparent 1px);
  background-size: 72px 72px;

  /* vignette */
  mask-image: radial-gradient(circle at top, black 0%, transparent 70%);
}
```

### Animações (se houver) — cole o CSS real
```css
/* Cole aqui @keyframes e animações */

```

### Propriedades (preencher com valores reais)
- `background-attachment:` `_________________`
- `background-size:` `_________________`
- `background-position:` `_________________`
- `background-repeat:` `_________________`

---

## 📜 Efeitos de Rolagem — PRIORIDADE #3

### Scroll Behavior (✅ Confirmado)
- **Tipo:** `smooth`
- **CSS:** `scroll-behavior: smooth` (no `html`)

### Efeitos Parallax (PREENCHER NA INSPEÇÃO MANUAL)
- [ ] Sim
- [ ] Não
- **Descrição:** `_________________`
- **Como funciona:** `_________________` (CSS transform? JavaScript?)

### Animações ao Scroll (PREENCHER NA INSPEÇÃO MANUAL)
- [ ] Fade in
- [ ] Slide in
- [ ] Outro: `_________________`

### JavaScript de Scroll (se houver)
```js
// Cole aqui código JavaScript relacionado a scroll

```

---

## 📐 Estilos Gerais

### Tipografia (PREENCHER NA INSPEÇÃO MANUAL)
- **Tamanho base:** `_________________` (ex: 16px)
- **Line-height:** `_________________`
- **Espaçamento entre letras:** `_________________`

### Layout (PREENCHER NA INSPEÇÃO MANUAL)
- **Largura máxima do container:** `_________________`
- **Padding padrão:** `_________________`
- **Margin padrão:** `_________________`

---

## 🔘 Botões — PRIORIDADE #2

### CSS (cole o CSS real)
```css
/* Estilo de botões (normal) */

/* Estilo de botões (hover) */

```

### Referência provável (⚠️ a confirmar)
```css
/* PLACEHOLDER (substituir pelo CSS real do site) */
.btn-primary {
  background: hsl(var(--primary));
  color: hsl(var(--foreground));
  border: 1px solid hsl(var(--primary) / 0.35);
  box-shadow: 0 10px 30px hsl(var(--primary) / 0.20);
}

.btn-primary:hover {
  background: hsl(var(--primary) / 0.90);
  box-shadow: 0 14px 40px hsl(var(--primary) / 0.28);
}
```

---

## 🔗 Links (PREENCHER NA INSPEÇÃO MANUAL)
```css
/* Estilo de links (normal / hover) */

```

---

## 📸 Screenshots e Observações

### Screenshots
- [ ] Screenshot da página inicial
- [ ] Screenshot do header
- [ ] Screenshot de uma seção
- [ ] Screenshot do background isolado

### Observações
```

```

---

## ✅ Checklist de Inspeção

### ✅ Já completo
- [x] Fontes (Inter + JetBrains Mono)
- [x] Variáveis base: background / foreground / primary
- [x] `scroll-behavior: smooth`

### ⏳ Pendente (inspeção manual)
- [ ] Background geométrico (CSS completo + ::before/::after)
- [ ] Botões (normal e hover)
- [ ] Links (normal e hover)
- [ ] Efeitos de scroll/parallax
- [ ] `@keyframes` / animações

---

**Data da inspeção:** `19/01/2026`
