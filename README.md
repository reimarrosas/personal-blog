# Autodidactics: A Personal Blog

## Introduction

This is the code for my personal blog called Autodidactics that contains what I'm currently learning, what I'm currently developing, and other random topics.

## Index

- [Introduction](#introduction)
- [Index](#index)
- [About](#about)
- [Technologies](#technologies)
- [Usage](#usage)
  - [Requirements](#requirements)
  - [Installation](#installation)
    - [Note](#note)
  - [Commands](#commands)
- [Resources](#resources)
- [Gallery](#gallery)

## About

This website either acts like a personal journal that will show my ideas or a record that can track my progress in programming. As mentioned previously, it contains any topics that I find interesting, especially the ones that help me in becoming a better developer.

## Technologies

- [NextJS](https://nextjs.org)
- [Supabase](https://supabase.com)

## Usage

### Requirements

- NodeJS >= 16.13.1

### Installation

1. Clone the website.

```
git clone https://github.com/reimarrosas/personal-blog
```

2. Navigate to the folder.

```
cd ./personal-blog
```

3. Install the dependencies.

```
npm install
```

4. Run the development environment.

```
npm run dev
```

#### Note

These steps will run the baseline project but it needs a `.env.local` that contains supabase credentials to run properly

```
NEXT_PUBLIC_SUPABASE_URL={your project's supabase url}
NEXT_PUBLIC_SUPABASE_ANON_KEY={your project's anon public key}
```

### Commands

- `npm run dev` - launches the application in development mode
- `npm run build` - creates an optimized production build for the project
- `"npm run" start` - launches the application in production mode. The application should be compiled with `"npm run" build` first.
- `"npm run" lint` - runs ESLint for all files in `pages`, `components` and `lib` directories.

## Resources

- [NextJS Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)

## Gallery

- Index Page

![Index Page of Autodidactics](https://i.imgur.com/zQCKr9T.png)

- Posts Page

![Posts Page of Autodidactics](https://i.imgur.com/p6mLu3i.png)

- Admin Login Page

![Admin Login Page of Autodidactics](https://i.imgur.com/ppoEL87.png)

- Admin Add/Edit Post Page

![Admin Add/Edit Page of Autodidactics](https://i.imgur.com/glpDQt9.png)

