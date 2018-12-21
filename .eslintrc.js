module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript',
  ],
  'plugins': [
    'typescript',
  ],
  'rules': {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 必须有封号
    'semi': [ 2, 'always' ],
    // 逗号后面必须有空格
    'comma-spacing': [
      2,
      {
        'before': false,
        'after': true
      }
    ],
    // 计算属性内是否有间距 e.g(a[a])
    'computed-property-spacing': 2,
    // 统一缩进类型(例如空格或 tab 只能其一)
    'no-mixed-spaces-and-tabs': 2,
    // 数组空格
    'array-bracket-spacing': [
      'error',
      'always',
      {
        'objectsInArrays': true,
        'arraysInArrays': true
      }
    ],
    // 尾随逗号
    'comma-dangle': [ 2, 'always-multiline' ],
    // 对象中的属性打点调用时, 点必须在下一行
    'dot-location': [ 'error', 'property' ],
    // 缩进间距(还得细微配置下)
    'indent': [ 'error', 2 ],
    // 禁止多余的缩进(if 判断内的前后空格一致)
    'no-multi-spaces': 'error',
    // forin 中必须排除遍历原型
    'guard-for-in': 'error',
    // ifelse 之类的花括号前后必须有空格
    'keyword-spacing': [
      'error',
      {
        before: true,
        after: true
      }
    ],
    // switch 中禁止用 let const 等申明(可以用 {} 包裹形成作用域来避免)
    'no-case-declarations': 'error',
    'block-spacing': [ 2, 'always' ],
    // 连续空行
    'no-multiple-empty-lines': [
      1,
      {
        'max': 1
      }
    ],
    // 不能有声明后不能使用的变量或参数
    'no-unused-vars': [
      2,
      {
        vars: 'all',
        args: 'after-used'
      }
    ],
    // 禁止重复路径导入
    'no-duplicate-imports': [
      2,
      {
        'includeExports': true
      }
    ]
  },
  parserOptions: {
    parser: 'typescript-eslint-parser'
  },
};
