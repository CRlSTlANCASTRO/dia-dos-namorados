# 💕 Dia dos Namorados - Presente Interativo

Um site romântico e interativo de página única (Single Page Application) criado como presente especial de Dia dos Namorados.

## 🎨 Características

- **Design Mobile-First** com excelente adaptação para desktop
- **Tema escuro romântico**: midnight, deep purple, burgundy com gold accents
- **Animações suaves** de fade-in e transições fluidas
- **Efeito de partículas** (corações e brilhos) no fundo da tela
- **Corações clicáveis** com explosão de partículas
- **Contador de tempo** do relacionamento em tempo real
- **Galeria de fotos** espalhada com rotações e lightbox
- **Carta principal** personalizada com design 3D
- **Cartas interativas** ("Abra quando...") com envelopes virtuais
- **Player de música** customizado para trilha sonora
- **Mini-quiz** sobre a história do casal com confetti
- **Botão de compartilhamento** nativo

## 📁 Estrutura do Projeto

```
dia-dos-namorados/
├── index.html              # Arquivo principal HTML
├── css/
│   └── style.css          # Estilos CSS
├── js/
│   └── script.js          # JavaScript e interatividade
├── README.md              # Este arquivo
└── assets/
    ├── images/           # Fotos do casal
    │   ├── foto1.jpg
    │   ├── foto2.jpg
    │   ├── foto3.jpg
    │   ├── foto4.jpg
    │   ├── foto5.jpg
    │   └── foto6.jpg
    └── audio/            # Música de fundo
        └── music.mp3
```

## 🚀 Como Usar

### 1. Personalizar as Informações

#### Data do Relacionamento
No arquivo `js/script.js`, procure a função `updateCounter()` e altere a data:

```javascript
const startDate = new Date('2023-01-01'); // Altere para sua data real
```

#### Carta Principal
No arquivo `index.html`, personalize a carta principal na seção `.love-letter-content`:
- Edite o texto da carta de amor
- Altere a data no cabeçalho
- Personalize a assinatura

#### Fotos do Casal
Substitua os arquivos placeholder na pasta `assets/images/`:
- `foto1.jpg` até `foto6.jpg` com suas fotos reais
- Recomendado: fotos com proporção variada para layout espalhado
- Tamanho ideal: 800x800px ou maior

#### Música de Fundo
Substitua o arquivo `assets/audio/music.mp3` com sua música favorita do casal.
- Formato: MP3
- Duração recomendada: 3-5 minutos (irá repetir em loop)

#### Cartas Interativas
No arquivo `js/script.js`, procure o objeto `letterMessages` e personalize as mensagens:

```javascript
const letterMessages = {
    'saudades': {
        title: '💕 Quando você estiver com saudades...',
        message: 'Sua mensagem personalizada aqui...'
    },
    // ... outras cartas
};
```

#### Perguntas do Quiz
No arquivo `index.html`, procure a seção `quiz-questions` e altere:
- As perguntas
- As opções de resposta
- Marque a resposta correta com `data-correct="true"`

### 2. Testar Localmente

Basta abrir o arquivo `index.html` diretamente no seu navegador:
- Clique duas vezes no arquivo `index.html`
- Ou arraste o arquivo para uma aba do navegador

### 3. Hospedar no GitHub Pages

#### Passo 1: Criar Repositório no GitHub
1. Acesse [github.com](https://github.com) e faça login
2. Clique em "New repository"
3. Nome do repositório: `dia-dos-namorados` (ou outro nome)
4. Marque "Public" ou "Private" conforme preferir
5. Clique em "Create repository"

#### Passo 2: Fazer Upload dos Arquivos
1. No repositório criado, clique em "uploading an existing file"
2. Arraste toda a pasta do projeto para a área de upload
3. Certifique-se de incluir:
   - `index.html`
   - Pasta `assets/` com todas as imagens e áudio
4. Clique em "Commit changes"

#### Passo 3: Ativar GitHub Pages
1. No repositório, clique em "Settings"
2. No menu lateral, clique em "Pages"
3. Em "Build and deployment", em "Source", selecione "Deploy from a branch"
4. Em "Branch", selecione `main` (ou `master`) e pasta `/ (root)`
5. Clique em "Save"

#### Passo 4: Aguardar Deploy
- Aguarde alguns minutos (geralmente 1-3 minutos)
- O GitHub irá fornecer uma URL como: `https://seu-usuario.github.io/dia-dos-namorados/`
- Acesse a URL para verificar se está funcionando

## 🎨 Personalização Avançada

### Alterar Cores
No arquivo `css/style.css`, procure a seção `:root` e altere as variáveis de cor:

```css
:root {
    --rose-gold: #D4AF37;      /* Gold accents */
    --burgundy: #4A0E0E;       /* Dark red */
    --deep-purple: #1A0B2E;    /* Purple background */
    --midnight: #0D0D1A;       /* Darkest background */
    --soft-pink: #FFB6C1;      /* Pink accents */
    --cream: #FFFDD0;          /* Text color */
    --card-bg: rgba(26, 11, 46, 0.9); /* Card backgrounds */
}
```

### Alterar Fontes
O projeto usa Google Fonts:
- **Playfair Display**: para títulos (serifada elegante)
- **Lato**: para texto (sans-serif legível)

Para alterar, modifique o link do Google Fonts no `<head>` e as classes CSS.

### Ajustar Animações
- Velocidade das partículas: altere `animationDuration` na função `createParticles()` em `js/script.js`
- Frequência de partículas: altere o valor em `setInterval(addParticle, 500)`
- Duração do fade-in: altere `transition` na classe `.fade-in` em `css/style.css`
- Posicionamento das fotos: altere as regras `.gallery-item:nth-child()` em `css/style.css`

## 📱 Compatibilidade

- ✅ Chrome/Edge (recomendado)
- ✅ Firefox
- ✅ Safari
- ✅ Navegadores móveis (iOS Safari, Chrome Mobile)
- ✅ Responsivo para todos os tamanhos de tela

## 🔧 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilização customizada com variáveis CSS
- **Vanilla JavaScript**: Interatividade e lógica
- **Tailwind CSS**: Utilitários via CDN
- **Google Fonts**: Tipografia elegante
- **CSS Animations**: Animações suaves e transições
- **Web Share API**: Compartilhamento nativo

## 💡 Dicas

1. **Fotos**: Use fotos de alta qualidade para melhor visualização
2. **Música**: Escolha uma música que tenha significado especial para o casal
3. **Mensagens**: Seja sincero e pessoal nas cartas interativas
4. **Quiz**: Crie perguntas que testemmem memórias especiais e divertidas
5. **Teste**: Teste o site em diferentes dispositivos antes de apresentar

## 🎁 Surpresa Final

Quando ela acertar todas as perguntas do quiz, o site exibirá:
- Uma mensagem de parabéns especial
- Efeito de confetti celebratório
- Um "Vale-Presente" virtual customizado
- Você pode personalizar o vale-presente editando o HTML na seção `.voucher`

## 📝 Notas Importantes

- O projeto está separado em 3 arquivos: `index.html`, `css/style.css` e `js/script.js`
- Não é necessário instalar dependências ou fazer build
- O site funciona offline após o primeiro carregamento (exceto pelas imagens e áudio que precisam estar na pasta assets)
- Para melhor performance, comprima as imagens antes de fazer upload
- O tema escuro romântico usa gold accents para um visual elegante e moderno

## ❤️ Créditos

Criado com amor para celebrar o dia dos namorados.

---

**Desejo que esse presente especial traga muitos sorrisos e momentos inesquecíveis! 💕**
