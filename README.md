# Boas vindas ao projeto Store Manager!

Esse projeto foi desenvolvido durante o curso de Desenvolvimento Web da Trybe.

Neste projeto foi desenvolvida uma API, (utilizando a arquitetura MSC) de um sistema de gerenciamento de vendas, onde será possível criar, visualizar, deletar e atualizar produtos e vendas.

## Habilidades

- Entender o funcionamento da camada de Model;
- Delegar responsabilidades específicas para essa camada;
- Conectar sua aplicação com diferentes bancos de dados;
- Estruturar uma aplicação em camadas;
- Delegar responsabilidades específicas para cada parte do seu app;
- Melhorar manutenibilidade e reusabilidade do seu código;
- Entender e aplicar os padrões REST;
- Escrever assinaturas para APIs intuitivas e facilmente entendíveis.

<details>
  <summary>
    <h3>
      Antes de começar a desenvolver
    </h3>
    </summary>

1. Clone o repositório

- `git clone https://github.com/mabiiak/store-manager.git`.
- Entre na pasta do repositório que você acabou de clonar:
  - `cd store-manager`

2. Instale as dependências

- `npm install`

Atenção :warning: Não rode o comando npm audit fix! Ele atualiza várias dependências do projeto, e essa atualização gera conflitos com o avaliador.

3. Crie uma branch a partir da branch `master`

- Verifique que você está na branch `master`
  - Exemplo: `git branch`
- Se não estiver, mude para a branch `master`
  - Exemplo: `git checkout master`
- Agora crie uma branch à qual você vai submeter os `commits` do seu projeto
  - Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-projeto`
  - Exemplo: `git checkout -b nome-store-manager`

4. Adicione as mudanças ao _stage_ do Git e faça um `commit`

- Verifique que as mudanças ainda não estão no _stage_
- Adicione o novo arquivo ao _stage_ do Git
  - Exemplo:
    - `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
    - `git status` (deve aparecer listado o arquivo _joaozinho/README.md_ em verde)
- Faça o `commit` inicial
  - Exemplo:
    - `git commit -m 'mensagem do commit'` (fazendo o primeiro commit)
    - `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

5. Adicione a sua branch com o novo `commit` ao repositório remoto

- Usando o exemplo anterior: `git push -u origin nome-store-manager`

6. Crie um novo `Pull Request` _(PR)_

- Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/mabiiak/store-manager/pulls)
- Clique no botão verde _"New pull request"_
- Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
- Clique no botão verde _"Create pull request"_
- Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_
- Volte até a [página de _Pull Requests_ do repositório](https://github.com/mabiiak/store-manager/pulls) e confira que o seu _Pull Request_ está criado

</details>

## Lista de requisitos

    ✅ 1 - Escreva testes para cobrir 35% das camadas da sua aplicação

    ✅ 2 - Crie endpoints para listar os produtos e as vendas

    ✅ 3 - Crie middlewares de validação para as rotas `/products` e `/sales`
  
    ✅ 4 - Crie um endpoint para o cadastro de produtos

    ✅ 5 - Crie um endpoint para atualizar um produto

    ✅ 6 - Crie um endpoint para deletar um produto

    ✅ 7 - Crie um endpoint para cadastrar vendas

    ✅ 8 - Crie um endpoint para atualizar uma venda

    ✅ 9 - Escreva testes para cobrir 40% das camadas da sua aplicação

## Bônus

    ✅ 10 - Crie um endpoint para deletar uma venda

    ❌ 11 - Atualize a quantidade de produtos

    ✅ 12 - Valide a quantidade de produtos

    ✅ 13 - Escreva testes para cobrir 50% das camadas da sua aplicação

    ✅ 14 - Escreva testes para cobrir 60% das camadas da sua aplicação
