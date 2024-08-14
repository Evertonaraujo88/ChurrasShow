# ChurrasShow

**ChurrasShow** é um projeto desenvolvido para facilitar a organização e solicitações de orçamentos de churrascos, permitindo o gerenciamento de convidados, itens a serem comprados, e distribuição de tarefas.

## 🛠️ Tecnologias Utilizadas

- **Linguagem de Programação**: 
  - `C#`

- **Frameworks**:
  - `ASP.NET Core`
  - `Entity Framework Core`

- **Banco de Dados**:
  - `SQL Server`

- **Ferramentas**:
  - `Visual Studio 2022`
  - `SQL Server Management Studio (SSMS)`
  - `SQL Server Configuration Manager`

- **Bibliotecas**:
  - `xUnit` (para testes unitários)
  - `Moq` (para mocks em testes unitários)
  - `FluentAssertions` (para asserções mais expressivas nos testes)
  
- **Outras Dependências**:
  - `AutoMapper` (para mapeamento de objetos)
  - `Swashbuckle.AspNetCore` (para documentação da API com Swagger)
  
## 🚀 Instalação e Configuração

1. **Clonando o Repositório**:
   ```bash
   git clone https://github.com/Evertonaraujo88/ChurrasShow.git


2. **Configuração do Banco de Dados**:
   - `Certifique-se de que o SQL Server está instalado e configurado.`
   - `Atualize a string de conexão no arquivo appsettings.json com as credenciais do seu ambiente.`
   - `Execute as migrações do Entity Framework para criar o banco de dados:`
   ```bash
   dotnet ef database update

3. **Execução do Projeto**:
   - `Abra o projeto no Visual Studio.`
   - `Compile e execute o projeto.`
  
## 📄 Documentação da API

   - A documentação da API pode ser acessada através do Swagger, disponível na URL padrão:
     https://localhost:<porta>/swagger

## 🤝 Contribuição 

  - `Faça um fork do projeto.`
  - `Crie uma nova branch com a sua feature: `git checkout -b minha-feature``
  - `Commit suas alterações: `git commit -m 'Adicionar minha feature'`
  - `Faça um push para a branch: `git push origin minha-feature'`
  - `Envie um pull request.`

## 📜 Licença

- Este projeto está licenciado sob a Licença MIT. Veja o arquivo LICENSE para mais detalhes.

