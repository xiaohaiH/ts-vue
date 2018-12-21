module.exports = {
  root: true,
  env: {
    node: true,
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 必须有封号
    'semi': [ 2, "always" ],
    // 逗号后面必须有空格
    'comma-spacing': [
      2,
      {
        'before': false,
        'after': true,
      },
    ],
    // 计算属性内是否有间距 e.g(a[a])
    "computed-property-spacing": 2,
    // 统一缩进类型(例如空格或 tab 只能其一)
    "no-mixed-spaces-and-tabs": 2,
    // 数组空格
    "array-bracket-spacing": [
      "error",
      "always",
      {
        'objectsInArrays': true,
        'arraysInArrays': true,
      },
    ],
    // 尾随逗号
    "comma-dangle": [ 2, 'always-multiline' ],
    // 连续空行
    "no-multiple-empty-lines": [
      1,
      {
        "max": 1,
      },
    ],
    // 不能有声明后不能使用的变量或参数
    "no-unused-vars": [
      2,
      {
        vars: 'all',
        args: 'after-used',
      },
    ],
    // 配置导入时路径是否重复导入之类 -> 需配合 eslint-plugin-import
    "settings": {
      "flowtype": {
        "onlyFilesWithFlowAnnotation": true
      },
      "import/resolver": {
        "node": {
          "moduleDirectory": [
            "node_modules",
            "src/"
          ]
        }
      }
    }
  },
  parserOptions: {
    parser: 'typescript-eslint-parser',
  },
};
