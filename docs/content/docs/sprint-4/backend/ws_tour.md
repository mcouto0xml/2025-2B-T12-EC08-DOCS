# Documentação do Endpoint WebSocket: `/ws/tour/check`

## Visão Geral

### Objetivo do Endpoint
Este endpoint fornece verificações em tempo real sobre tours ativos através de comunicação WebSocket. Os clientes podem enviar requisições contendo data e horário, e o servidor responde informando se existe um tour ativo naquele momento, incluindo suas perguntas e respostas já registradas.

### Protocolo de Comunicação
- **Tipo**: WebSocket
- **Formato de Dados**: JSON
- **Direção**: Bidirecional (cliente ↔ servidor)

---

## Estrutura das Mensagens

### Requisição do Cliente

Os clientes devem enviar uma mensagem JSON contendo os seguintes campos:

```json
{
  "data_local": "2024-12-18",
  "horario_verificacao": "14:30:00"
}
```

**Campos da Requisição:**

| Campo | Tipo | Formato | Obrigatório | Descrição |
|-------|------|---------|-------------|-----------|
| `data_local` | String | YYYY-MM-DD | Sim | Data para verificação do tour |
| `horario_verificacao` | String | HH:MM:SS | Sim | Horário específico da verificação |

---

## Respostas do Servidor

### Tour Ativo

Quando existe um tour ativo no horário especificado, o servidor retorna:

```json
{
  "status": "active",
  "tour_id": 123,
  "codigo": "XXX001",
  "perguntas": [
    {
      "id_pergunta": 45,
      "texto_pergunta": "Qual os cursos do Inteli?",
      "checkpoint": 3,
      "texto_resposta": "Engenharia de computação, engenharia de software, ciência da computação e sistemas da informação"
    },
    {
      "id_pergunta": 46,
      "texto_pergunta": "Como funciona o processo seletivo",
      "checkpoint": 3,
      "texto_resposta": "O processo dividido nos eixos prova, perfil e dinâmica em grupo"
    }
  ]
}
```

**Campos da Resposta (Tour Ativo):**

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `status` | String | Sempre "active" para tours em andamento |
| `tour_id` | Integer | Identificador único do tour |
| `codigo` | String | Código alfanumérico do tour |
| `perguntas` | Array | Lista de perguntas e respostas do tour |
| `perguntas[].id_pergunta` | Integer | Identificador único da pergunta |
| `perguntas[].texto_pergunta` | String | Conteúdo da pergunta |
| `perguntas[].checkpoint` | Integer | Número do checkpoint associado |
| `perguntas[].texto_resposta` | String | Resposta mais recente para a pergunta |

### Tour Inativo

Quando não existe tour ativo no horário especificado:

```json
{
  "status": "inactive"
}
```

**Campos da Resposta (Tour Inativo):**

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `status` | String | Sempre "inactive" quando nenhum tour está em andamento |

---

## Conclusão

O endpoint `/ws/tour/check` oferece uma solução eficiente e em tempo real para verificação de tours ativos. Através da comunicação WebSocket e formato JSON padronizado, o sistema permite que aplicações cliente monitorem o status de tours de forma responsiva e confiável.