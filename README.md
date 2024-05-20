![Screen desktop website](screenshot-desktop.png)

# Theme Selector

Aplicação web que permir o usuário cadastrar, editar e deletar temas de cores da sua preferência. Estes temas podem ser aplicados mudando as cores da página. Também é possível filtrar temas pelo nome utilizando o campo de busca.

<br>

## ✨ O que foi feito?

- [x] Utilize JS Vanilla e CSS nativo para a estrutura HTML responsiva
- [x] Deve exibir uma lista com todos os temas do JSON de mock fornecido
- [x] Cada tema deve ter uma visualização em miniatura
- [x] Qualquer tema que não esteja aplicado no momento pode ser removido
- [x] Ao clicar em um tema, ele deve ser aplicado
- [x] Deve ser possível editar temas existentes
- [x] Deve haver um campo de filtro para pesquisar temas por nome
- [x] Deve haver um botão para criar um novo tema, direcionando para a página de
      edição/adicionar
- [x] Garanta a responsividade da aplicação em dispositivos desde mobile (320px) até
      desktop (1920px), aderindo às melhores práticas de usabilidade;
- [x] Deve exibir uma visualização do tema sendo adicionado
- [x] Deve ter seletores de cores para cada uma das cores do tema (de sua escolha)
- [x] As cores selecionadas devem ser salvas no formato de cor hexadecimal

<br>

## 💻 Tecnologias utilizadas no projeto

- JavaScript
- HTML
- CSS
- Fetch API
- Async / await
- JSON Server (v0.17.4)
- NodeJs (v20.11.1)

<br>

## 🛠️ Instruções de execução

- 🤖 Faça um clone deste repositório:

```bash
git clone https://github.com/marcelopoars/theme-selector.git
```

- 🤖 Instale as dependências:

```bash
npm install
```

> ℹ️ **NOTE:** Tive problemas com filtros na versão `v1.0.0 beta` do JSON Server, então recomendo utilizar a versão `v0.17.4` que foi utilizada neste projeto.

- 🤖 Para rodar o servidor execute o comando:

```bash
npm start
```

Será exibida uma mensagem em seu terminal, informando a url para acessar a aplicação e o endpoint de `themes`.

```bash
  \{^_^}/ hi!

  Loading db.json
  Done

  Resources
  http://localhost:3000/themes

  Home
  http://localhost:3000
```

- 🤖 Para rodar o projeto em modo `desenvolvimento`, rode o comando abaixo. Para obter `hot-reload`, recomendo utilizar a extensão `Live Server` para VS Code.

```bash
npm run dev:server
```

- 🤖 Todos os temas cadastrados serão gravados no arquivo `db.json` na rais do diretório deste projeto.
- 🤖 Deixei um backup de temas no arquivo `mock.json`. (Serve apenas como uma cópia para lembrar a estrutura padrão).

<br>

## 📚 Endpoint `Themes`

> URL: http://localhost:3000/themes

```bash
[
  {
    "id": "1",
    "name": "Tema Azul",
    "colors": {
      "primary": "#007bff",
      "secondary": "#6c757d",
      "success": "#28a745",
      "danger": "#dc3545",
      "warning": "#ffc107"
    }
  },
  {
    "id": "2",
    "name": "Tema Verde 2",
    "colors": {
      "primary": "#28a745",
      "secondary": "#6c757d",
      "success": "#218838",
      "danger": "#c82333",
      "warning": "#ffc107"
    }
  }
]
```

<br>

## 👨‍💻 Autor

### Olá! Eu sou Marcelo Pereira. 👋

Desenvolvedor Frontend apaixonado por criar interfaces web incríveis e acessíveis. Entusiasta de SEO, Acessibilidade e Inteligência Artificial. Minha missão é contribuir para uma web mais inclusiva e semântica, garantindo que todas as pessoas tenham acesso a uma experiência digital excepcional. 🤓🎉

<p>
    <img 
      align="left" 
      width=80 
      src="https://avatars.githubusercontent.com/u/3664022?v=4"
      style="margin-right: 16px;"
    />
    <strong>Marcelo Pereira</strong>
    <br>
    <a href="https://github.com/marcelopoars" target="_blank">
        GitHub
    </a>
    &nbsp;|&nbsp;
    <a href="https://linkedin.com/in/marcelopoars" target="_blank">LinkedIn</a>
    &nbsp;|&nbsp;
    <a href="https://instagram.com/dicadonerd" target="_blank">
        Instagram
    </a>
    &nbsp;|&nbsp;
    <a href="https://marcelopereira.dev" target="_blank">
        Website (Portfólio)
    </a>
<p>

<br>

---

Criado com 💜 por [Marcelo Pereira](https://github.com/marcelopoars)
