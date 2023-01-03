function generator(plop) {
  plop.setGenerator('icon', {
    description: 'Create an icon',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Icon name please',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../../components/icons/Icon{{pascalCase name}}.tsx',
        templateFile: './templates/icon.hbs',
      },
      {
        type: 'append',
        path: '../../components/icons/index.tsx',
        template: `export { default as Icon{{pascalCase name}} } from './Icon{{pascalCase name}}'\n`,
      },
    ],
  })
}

module.exports = generator
