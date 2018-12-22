module.exports = {
  'root': true,
  'env': {
    'node': true
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
    // 禁用在属性打点调用前留空格
    'no-whitespace-before-property': 'error',
    // 对象中的属性打点调用时, 点必须在下一行
    'dot-location': [ 'error', 'property' ],
    "vue": {
      "script-indent": [
        "error",
        "tab",
        {
          "baseIndent": 1
        }
      ]
    },
    // 缩进间距
    'indent': [
      'error',
      2,
      {
        'SwitchCase': 1,
        'ArrayExpression': 1,
        'ObjectExpression': 1
      },
    ],
    // 禁止多余的缩进(if 判断内的前后空格一致)
    'no-multi-spaces': 'error',
    // forin 中必须排除遍历原型
    'guard-for-in': 'error',
    // 判断时变量必须在字符串前面
    'yoda': [
      'error',
      'never',
      {
        'exceptRange': true
      }
    ],
    // 字面量正则必须用括号包裹起来
    'wrap-regex': 'error',
    // 函数名称后的空格
    'space-before-function-paren': [ 'error', 'always' ],
    // 没有 await 函数中禁用 async
    'require-await': 'error',
    // 用 `` 替换 + 拼接
    'prefer-template': 'error',
    // 简短回调函数替换成箭头函数
    'prefer-arrow-callback': 'error',
    // 禁止在对象中使用不必要的计算属性
    'no-useless-computed-key': 'error',
    // 禁用必须要的 return
    'no-useless-return': 'error',
    // 禁用使用 var 声明
    'no-var': 'error',
    // 禁用继承空构造函数
    'no-useless-constructor': 'error',
    // 禁止不必要的三木判断
    'no-unneeded-ternary': [
      'error',
      {
        'defaultAssignment': false
      }
    ],
    // ifelse 之类的花括号前后必须有空格
    'keyword-spacing': [
      'error',
      {
        'before': true,
        'after': true
      }
    ],
    // switch 中禁止用 let const 等申明(可以用 {} 包裹形成作用域来避免)
    'no-case-declarations': 'error',
    // 块作用域前后必须要有空格
    'block-spacing': [ 2, 'always' ],
    // 连续空行
    'no-multiple-empty-lines': [
      1,
      {
        'max': 1
      }
    ],
    // 不能有声明后不能使用的变量或参数, ignoreRestSiblings(允许忽略结构中 reset 前的变量)
    'no-unused-vars': [
      2,
      {
        'vars': 'all',
        'args': 'after-used',
        'ignoreRestSiblings': true
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
  'parserOptions': {
    'parser': 'typescript-eslint-parser'
  },
};
