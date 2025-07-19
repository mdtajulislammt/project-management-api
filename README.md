<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

# Project Management API

A full-featured project management backend built with NestJS, Prisma, and MongoDB.

## Table of Contents
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Docker](#docker)
- [Modules](#modules)
- [Testing](#testing)

## Project Structure

```
project-management-api/
├── Dockerfile
├── docker-compose.yml
├── nest-cli.json
├── package.json
├── tsconfig.json
├── tsconfig.build.json
├── yarn.lock
├── .env
├── .env.example
├── README.md
├── prisma/
│   ├── schema.prisma
│   └── migrations/
├── test/
│   └── auth.e2e-spec.ts
├── src/
│   ├── main.ts
│   ├── app.module.ts
│   ├── app.controller.ts
│   ├── app.service.ts
│   ├── config/
│   │   ├── app.config.ts
│   │   ├── db.config.ts
│   │   ├── jwt.config.ts
│   │   └── swagger.config.ts
│   ├── ability/
│   │   ├── ability.factory.ts
│   │   └── ability.module.ts
│   ├── command/
│   │   ├── seed.command.ts
│   │   └── command.module.ts
│   ├── common/
│   │   ├── decorators/
│   │   │   └── roles.decorator.ts
│   │   ├── guards/
│   │   │   ├── jwt-auth.guard.ts
│   │   │   └── roles.guard.ts
│   │   ├── interceptors/
│   │   │   └── logging.interceptor.ts
│   │   ├── filters/
│   │   │   └── http-exception.filter.ts
│   │   ├── pipes/
│   │   │   └── validation.pipe.ts
│   │   ├── constants/
│   │   │   ├── roles.enum.ts
│   │   │   └── task-status.enum.ts
│   │   └── utils/
│   │       └── generate-slug.ts
│   ├── prisma/
│   │   ├── prisma.module.ts
│   │   ├── prisma.service.ts
│   │   └── middleware/
│   │       └── soft-delete.middleware.ts
│   ├── modules/
│   │   ├── auth/
│   │   │   ├── auth.module.ts
│   │   │   ├── auth.controller.ts
│   │   │   ├── auth.service.ts
│   │   │   ├── dto/
│   │   │   │   ├── login.dto.ts
│   │   │   │   └── register.dto.ts
│   │   │   ├── strategies/
│   │   │   │   ├── jwt.strategy.ts
│   │   │   │   └── local.strategy.ts
│   │   │   └── guards/
│   │   │       └── local-auth.guard.ts
│   │   ├── application/
│   │   │   ├── task/
│   │   │   │   ├── task.module.ts
│   │   │   │   ├── task.controller.ts
│   │   │   │   ├── task.service.ts
│   │   │   │   ├── dto/
│   │   │   │   │   └── create-task.dto.ts
│   │   │   │   ├── scheduler/
│   │   │   │   │   └── topological-sort.ts
│   │   │   │   └── entity/
│   │   │   │       └── task.entity.ts
│   │   │   ├── project/
│   │   │   │   ├── project.module.ts
│   │   │   │   ├── project.controller.ts
│   │   │   │   ├── project.service.ts
│   │   │   │   ├── dto/
│   │   │   │   └── entity/
│   │   │   │       └── project.entity.ts
│   │   │   ├── comment/
│   │   │   │   ├── comment.module.ts
│   │   │   │   ├── comment.controller.ts
│   │   │   │   ├── comment.service.ts
│   │   │   │   └── dto/
│   │   │   │       └── create-comment.dto.ts
│   │   │   ├── notification/
│   │   │   │   ├── notification.module.ts
│   │   │   │   ├── notification.controller.ts
│   │   │   │   ├── notification.service.ts
│   │   │   │   ├── gateway/
│   │   │   │   │   └── notification.gateway.ts
│   │   │   │   └── dto/
│   │   │   │       └── send-notification.dto.ts
│   │   │   ├── analytics/
│   │   │   │   ├── analytics.module.ts
│   │   │   │   ├── analytics.controller.ts
│   │   │   │   ├── analytics.service.ts
│   │   │   │   └── utils/
│   │   │   │       └── report.generator.ts
│   │   │   ├── search/
│   │   │   │   ├── search.module.ts
│   │   │   │   ├── search.controller.ts
│   │   │   │   ├── search.service.ts
│   │   │   │   └── utils/
│   │   │   │       └── trie.ts
│   │   │   └── presence/
│   │   │       ├── presence.module.ts
│   │   │       ├── presence.gateway.ts
│   │   │       └── dto/
│   │   │           └── presence-update.dto.ts
```

> This project is being restructured for a full-featured NestJS + Prisma + MongoDB monorepo.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
