# Grupo

* Juan Torres
* Juliana Almeida
* Pedro Lucas
* Samuel Silva
* André Lourenço

# Opção escolhida

Trabalhar com a ideia do nosso projeto e desenvolver duas telas.

## Planin - organização de agendamento de serviços de profissionais autônomos

# Backend

Levamos parte do nosso backend para a pasta `/backend`.

# Fluxo de cadastro profissional

Aplicativo em React Native utilizando Expo, com fluxo de:

1. criação de conta profissional
2. cadastro de empresa

---

# Como usar

Instale as dependências:

```bash
npm install
```

ou

```bash
yarn
```

---

# Como iniciar o projeto

Inicie o servidor do Expo:

```bash
npx expo start
```

ou

```bash
npm start
```

Após iniciar, será exibido um QR Code no terminal.

Você pode:

* escanear com o aplicativo Expo Go no celular
* pressionar:

  * `a` para abrir no Android
  * `i` para abrir no iOS
  * `w` para abrir no navegador

---

# Como rodar no mobile

## Android

```bash
npx expo run:android
```

## iOS

```bash
npx expo run:ios
```

> Para iOS é necessário utilizar macOS.

---

# Como testar

Execute a suíte de testes:

```bash
npm test -- --runInBand
```

---

# Estrutura principal

* `App.tsx`: fluxo principal do app
* `src/screens`: telas do cadastro
* `src/components`: componentes reutilizáveis
* `src/utils`: funções de formatação e apoio
* `backend/`: backend separado do aplicativo mobile

---

# Tecnologias utilizadas

* React Native
* Expo
* TypeScript
* Jest
* React Navigation
