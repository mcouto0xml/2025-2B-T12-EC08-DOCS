---
sidebar_position: 1
title: analise-de-impacto-etico
---

# Análise de Impacto Ético 

## **Análise de Impactos Éticos e Sociais: Robô de Serviço Autônomo Unitree Go2 no Inteli**

## **1. Introdução**
O presente documento apresenta uma análise abrangente dos impactos éticos e sociais da implementação de um robô quadrúpede Unitree Go2 equipado com inteligência artificial generativa para realização de tours educacionais no campus do Instituto de Tecnologia e Liderança. O projeto visa automatizar a apresentação do campus para estudantes de ensino médio, proporcionando uma experiência interativa e inovadora. Esta análise examina dimensões críticas como equidade e justiça, responsabilidade social, viés e discriminação, entre outras.

## **2. Responsabilidade Social**
Esta seção examina o alinhamento do projeto com os Objetivos de Desenvolvimento Sustentável (ODS), analisando impactos sociais positivos e negativos. Um impacto negativo notável é a dependência de tecnologia importada; o Unitree Go2 é fabricado na China, fazendo com que o investimento financeiro flua para fora do Brasil e não apoie a indústria de robótica doméstica.

### **2.1. ODS promovidas**

#### **2.1.1. Alinhamento com ODS 9 (Indústria, Inovação e Infraestrutura)**
O projeto tem um forte alinhamento com a ODS 9. Ele estabelece o Inteli como um centro de excelência em robótica de serviço e cria um "testbed" para pesquisa aplicada em interação humano-robô e mitigação de viés algorítmico. No contexto brasileiro, que possui uma baixa densidade de robôs (10 por 10.000 trabalhadores contra a média global de 74), a exposição de milhares de estudantes à robótica avançada contribui para a normalização da tecnologia e para a construção de um pipeline de talentos em engenharia e computação.

#### **2.1.2. Alinhamento com ODS 4 (Educação de Qualidade)**
O projeto alinha-se com a ODS 4. Seu impacto educacional positivo pode estender-se além dos tours diretos. A disponibilização de materiais educacionais *open-source* sobre o projeto (documentação técnica, *templates* de políticas de privacidade, etc.) permite que outras instituições brasileiras se beneficiem do investimento do Inteli.

### **2.2. Possíveis ODS que a solução pode ferir**

#### **2.2.1. Alinhamento com ODS 4.5 (Referente à eliminação de disparidades na educação)**
Embora promova a ODS 4, o projeto pode, paradoxalmente, ferir a meta de equidade educacional (implícita na ODS 4.5) se não for implementado com cuidado. "Se não houver mediação humana cuidadosa e design inclusivo intencional, o robô pode tornar-se mais uma tecnologia que amplia, ao invés de reduzir, gaps educacionais existentes".

## **3. Equidade e Justiça**
As barreiras de acessibilidade para pessoas com deficiências são consideradas o conjunto mais crítico de considerações de equidade, pois podem levar à exclusão total.

#### **3.1. Normas NBR de acessbilidade**
A Lei Brasileira de Inclusão (LBI, Lei 13.146 de 2015) e a norma técnica NBR 9050:2020 operacionalizam os princípios de acessibilidade. Elas exigem "Design Universal" e destacam o "princípio de dois sentidos", que determina que a informação essencial deve ser fornecida em pelo menos duas modalidades sensoriais (visual, sonora, tátil).

## **3.2. Deficiências**

### **3.2.1. Visual**
Para pessoas cegas ou com baixa visão, o robô visual representa uma barreira significativa. Mais criticamente, por operar silenciosamente, o robô constitui um risco de segurança e colisão. A acessibilidade adequada exige um sistema de narração com áudio espacial, controles de volume e, crucialmente, "Incluir presença de auxiliar para se certificar de que o robô não irá andar/colidir com pessoas com deficiência".

### **3.2.2. Auditiva**
Para pessoas surdas ou com perda auditiva, um robô que se comunica verbalmente sem alternativas visuais "efetivamente silencia visitantes surdos". A solução requer um *display* visual em altura acessível, apresentando texto sincronizado com a fala, em alto contraste e fonte apropriada.

### **3.2.3. Mobilidade**
Visitantes com mobilidade reduzida (usuários de cadeira de rodas, próteses, etc.) enfrentam barreiras relacionadas à velocidade. O robô pode atingir 5 m/s, muito superior à velocidade de caminhada confortável. A conformidade com a NBR 9050 exige que os usuários tenham controle sobre o ritmo do tour (pausar/retomar) e controle de velocidade ajustável (entre 0,3 e 1,2 m/s).

*(Nota: O documento de análise também menciona necessidades para deficiências cognitivas, como interfaces radicalmente simplificadas, linguagem literal e comportamento previsível para evitar sobrecarga sensorial).*

## **3.3. Elitização (pessoas periféricas desconfortáveis de lidar com o robô)**
A exclusão digital pode ser sutil.
* Visitantes com menor familiaridade tecnológica podem sentir-se intimidados ao interagir vocalmente com o robô.
* A terminologia técnica pode ser "completamente opaca" para alunos de escolas com recursos limitados.
* Estilos de comunicação (comandos diretos e assertivos) podem ser culturalmente desconfortáveis para jovens de *backgrounds* específicos.
* O próprio ato de "fazer perguntas a um robô" exige uma alfabetização digital mínima que não pode ser presumida como universal.

## **3.4. Sotaques (xenofobia)**
Sistemas de reconhecimento de fala (ASR) apresentam taxas de erro sistematicamente maiores para sotaques não-padrão, como nordestinos, nortistas ou do interior rural, em comparação ao "padrão" paulistano. Falantes não-nativos e adolescentes com gírias também podem ser mal compreendidos. Cada falha ("Desculpe, não entendi") "não é meramente inconveniente técnico, mas comunicação simbólica de 'você não pertence aqui'", o que pode desestimular jovens de *backgrounds* marginalizados.

## **4. Conclusão**
A análise conclui que o projeto possui um potencial significativo de impacto educacional positivo, alinhando-se às ODS 4 e 9. Contudo, para mitigar os riscos substanciais identificados, o projeto exige uma "implementação rigorosa de salvaguardas éticas, conformidade regulatória com a LGPD e Lei Brasileira de Inclusão, e compromisso institucional com equidade e transparência radical".
