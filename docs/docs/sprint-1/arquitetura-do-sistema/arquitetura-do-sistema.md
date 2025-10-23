A arquitetura do sistema consiste em um conjunto de módulos e serviços que orquestram a comunicação entre o robô, o banco de dados, os serviços de back-end (LLM API e API) e as interfaces de usuário (front-end) para visitantes e administradores. O sistema foi projetado para operar um robô de serviço autônomo com IA generativa, programado para realizar tours interativas de apresentação do campus do Inteli.

## Diagrama de arquitetura do sistema

<div style={{ textAlign: 'center' }}>
  <p><strong>Figura 1 - Diagrama de Arquitetura do Sistema</strong></p>
  <img
    src={'../../img/diagrama-arquitetura-sistema.png'}
    alt="Diagrama de Arquitetura do Sistema"
    title="Diagrama de Arquitetura do Sistema"
    style={{ maxWidth: '100%', height: 'auto' }}
   />
	 <p>Fonte: Elaborado pelos autores (2025)</p>
</div>

## Descrição da arquitetura do sistema

### Modelo

  - **Perguntas e respostas (chatbot)**: O modelo de perguntas e respostas deve ser um modelo com capacidade de tirar dúvidas sobre o processo de seleção, o programa de bolsas e o dia a dia no Campus, utilizando uma LLM open source pré-definida. O projeto não contempla o treinamento de modelos de processamento de linguagem natural, mas sim o uso de modelos pré-treinados.

  - **Transcrição em tempo real**: Módulo responsável por transcrever a fala do robô, a fala não será necessariamente transcrita em tempo real, o ideal é, após a idealização e definição da resposta, ela ser traduzida para outros idiomas, e apenas mostrar o texto ao mesmo tempo que o robô fala no idioma definido como principal. Conecta-se à LLM API de Transcrição e ao Banco de dados sequencial.

### Back-end

#### LLM API

  - **Perguntas**: Recebe a transcrição do front-end (Transcrição da fala do robô) e a entrada do front-end (Formulário de perguntas), e envia o contexto para o modelo de perguntas e respostas para processar as dúvidas e gerar respostas.
  - **Transcrição**: Recebe as falas do robô, sejam respostas para perguntas ou falas do roteiro, envia para o modelo de módulo de Transcrição em tempo real e os envia para o módulo de Transcrição do Back-end (LLM API) e para o Banco de dados sequencial.

#### API

  - **Logs da plataforma**: Serviço que coleta e armazena logs da plataforma de front-end, interage com o Banco de dados sequencial.
  - **Seção**: Serviço que gerencia o avanço entre as diferentes seções do tour, recebendo comandos da Interação para avançar seções do front-end (Visitante) e comunicando-se com o Robô.
  - **Controle do robô**: Serviço essencial que envia comandos de controle ao Robô, recebendo instruções do front-end (Controle emergencial do robô) e do serviço de Seção.
  - **Logs do robô**: Serviço que recebe e armazena logs específicos da operação e navegação do Robô, possivelmente utilizados para monitoramento e análise de desempenho. Interage com o Banco de dados sequencial.
  - **Analytics e Métricas**: Serviço que processa os logs da plataforma e do robô para gerar métricas e análises de desempenho e uso, as quais são visualizadas no Dashboard com analytics e logs do front-end (Administrador). Interage com o Banco de dados sequencial.
  - **Sistema de usuários**: Serviço responsável pelo gerenciamento de usuários, incluindo as funcionalidades de Cadastro e Login do front-end (Administrador).

### Front-end

#### Visitante

  - **Formulário de perguntas**: Interface onde os visitantes podem inserir dúvidas e perguntas, das quais são enviadas o modelo de Perguntas e Respostas (Chatbot).
  - **Transcrição da fala do robô**: Interface que exibe a transcrição do que o robô está falando, proporcionando uma experiência interativa e acessível.
  - **Interação para avançar seções**: Interface que permite aos visitantes sinalizar ou comandar o avanço para a próxima etapa do tour, comunicando-se com o serviço de Seção da API, da qual se comunica com o robô, permitindo que ele passe para a próxima seção.

#### Administrador

  - **Controle emergencial do robô**: Interface que permite aos administradores (equipe Inteli) intervir e controlar o robô em situações de emergência, comunicando-se com o serviço de Controle do robô.
  - **Dashboard com analytics e logs**: Interface de visualização que apresenta as métricas e análises geradas pelo serviço de Analytics e Métricas, e os logs do sistema, auxiliando no monitoramento da plataforma e do robô.
  - **Cadastro e Login**: Interface para autenticação de usuários administradores, interagindo com o serviço de Sistema de usuários.
