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
    // 禁止多余的封号
    'no-extra-semi': 'error',
    // 逗号后面必须有空格
    'comma-spacing': [
      2,
      {
        'before': false,
        'after': true
      }
    ],
    // @fixable 禁止在行首写逗号
    'comma-style': [
      'error',
      'last'
    ],
    // @fixable 用作对象的计算属性时，中括号内的首尾禁止有空格
    'computed-property-spacing': [
      'error',
      'never'
    ],
    // 函数赋值给变量的时候，函数名必须与变量名一致
    'func-name-matching': [
      'error',
      'always',
      {
        'includeCommonJSModuleExports': false
      }
    ],
    // @fixable 函数名和执行它的括号之间禁止有空格
    'func-call-spacing': [
      'error',
      'never'
    ],
    // 统一缩进类型(例如空格或 tab 只能其一)
    'no-mixed-spaces-and-tabs': 'error',
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
    // @fixable 禁止 if 后面不加大括号而写两行代码
    'nonblock-statement-body-position': [
      'error',
      'beside',
      {
        'overrides': {
          'while': 'below'
        }
      }
    ],
    // 对象中的属性打点调用时, 点必须在下一行
    'dot-location': [ 'error', 'property' ],
    // 缩进间距
    'indent': [
      'error',
      2,
      {
        'SwitchCase': 1,
        'flatTernaryExpressions': true
      },
    ],
    // @fixable 对象字面量中冒号前面禁止有空格，后面必须有空格
    'key-spacing': [
      'error',
      {
        'beforeColon': false,
        'afterColon': true,
        'mode': 'strict',
      }
    ],
    // @fixable 关键字前后必须有空格
    'keyword-spacing': [
      'error',
      {
        'before': true,
        'after': true
      }
    ],
    // 代码块嵌套的深度禁止超过 5 层
    'max-depth': [
      'error',
      5
    ],
    // @fixable 必须使用单引号，禁止使用双引号
    'quotes': [
      'error',
      'single',
      {
        'avoidEscape': true,
        'allowTemplateLiterals': true
      }
    ],
    // @fixable 一行有多个语句时，分号前面禁止有空格，分号后面必须有空格
    'semi-spacing': [
      'error',
      {
        'before': false,
        'after': true
      }
    ],
    // @fixable 分号必须写在行尾，禁止在行首出现
    'semi-style': [
      'error',
      'last'
    ],
    // @fixable jsx 中的属性必须用双引号
    'jsx-quotes': [
      'error',
      'prefer-double'
    ],
    // 回调函数嵌套禁止超过 3 层，多了请用 async await 替代
    'max-nested-callbacks': [
      'error',
      3
    ],
    // new 后面的类名必须首字母大写
    'new-cap': [
      'error',
      {
        'newIsCap': true,
        'capIsNew': false,
        'properties': true
      }
    ],
    // 链式调用必须换行
    // @off 没必要限制
    'newline-per-chained-call': 'off',
    // @fixable new 后面的类必须有小括号
    'new-parens': 'error',
    // 禁止使用 Array 构造函数
    'no-array-constructor': 'error',
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
    // @fixable if, function 等的大括号之前必须要有空格，比如 if (a) {
    'space-before-blocks': [
      'error',
      'always'
    ],
    // @fixable function 的小括号之前必须要有空格
    'space-before-function-paren': [
      'error',
      {
        'anonymous': 'ignore',
        'named': 'never',
        'asyncArrow': 'always'
      }
    ],
    // @fixable 小括号内的首尾禁止有空格
    'space-in-parens': [
      'error',
      'never'
    ],
    // @fixable case 的冒号前禁止有空格，冒号后必须有空格
    'switch-colon-spacing': [
      'error',
      {
        'after': true,
        'before': false
      }
    ],
    // @fixable new, typeof 等后面必须有空格，++, -- 等禁止有空格，比如：
    // let foo = new Person();
    // bar = bar++;
    'space-unary-ops': [
      'error',
      {
        'words': true,
        'nonwords': false
      }
    ],
    // @fixable 模版字符串的 tag 之后禁止有空格，比如 tag`Hello World`
    'template-tag-spacing': [
      'error',
      'never'
    ],
    // @fixable 文件开头禁止有 BOM
    'unicode-bom': [
      'error',
      'never'
    ],
    // @fixable 操作符左右必须有空格，比如 let sum = 1 + 2;
    'space-infix-ops': 'error',
    // 没有 await 函数中禁用 async
    'require-await': 'error',
    // 用 `` 替换 + 拼接
    'prefer-template': 'off',
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
    // 展开运算符与表达式之间禁止留空白
    'rest-spread-spacing': ['error', 'never'],
    // @fixable 大括号内的首尾必须有换行
    'object-curly-newline': [
      'error',
      {
        'multiline': true,
        'consistent': true
      }
    ],
    // 对象属性必须统一在一行或非一行
    'object-property-newline': [
      'error',
      {
        'allowMultiplePropertiesPerLine': true,
      }
    ],
    // 对象同名属性简写
    'object-shorthand': 'error',
    // 块作用域前后必须要有空格
    'block-spacing': [ 'error', 'always' ],
    // 禁止使用 tabs
    'no-tabs': 'error',
    // 连续空行
    'no-multiple-empty-lines': [
      'error',
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
        'caughtErrors': 'none',
        'ignoreRestSiblings': true
      }
    ],
    // 变量必须先定义后使用
    'no-use-before-define': [
      'error',
      {
        'functions': false,
        'classes': false,
        'variables': false
      }
    ],
    // 禁止重复路径导入
    'no-duplicate-imports': [
      2,
      {
        'includeExports': true
      }
    ],
    // 禁止在普通字符串中出现模版字符串里的变量形式，如 'Hello ${name}!'
    'no-template-curly-in-string': 'error',
    // typeof 表达式比较的对象必须是 'undefined', 'object', 'boolean', 'number', 'string', 'function' 或 'symbol'
    'valid-typeof': 'error',
    // setter 必须有对应的 getter，getter 可以没有对应的 setter
    'accessor-pairs': [
      'error',
      {
        'setWithoutGet': true,
        'getWithoutSet': false
      }
    ],
    // 禁止函数的循环复杂度超过 20，https://en.wikipedia.org/wiki/Cyclomatic_complexity
    'complexity': [
      'error',
      {
        'max': 20
      }
    ],
    // 不允许有空函数，除非是将一个空函数设置为某个项的默认值
    'no-empty-function': [
      'error',
      {
        'allow': [
          'functions',
          'arrowFunctions'
        ]
      }
    ],
    // 禁止解构中出现空 {} 或 []
    'no-empty-pattern': 'error',
    // @fixable if 后面必须要有 {，除非是单行 if
    'curly': [
      'error',
      'multi-line',
      'consistent'
    ],
    // @fixable 禁止出现没必要的 bind
    'no-extra-bind': 'error',
    // @fixable 禁止出现没必要的 label
    'no-extra-label': 'error',
    // switch 的 case 内必须有 break, return 或 throw
    'no-fallthrough': 'error',
    // 正则中禁止使用空字符串 []
    'no-empty-character-class': 'error',
    // 禁止在 RegExp 构造函数中出现非法的正则表达式
    'no-invalid-regexp': 'error',
    // @fixable 禁止出现连续的多个空格，除非是注释前，或对齐对象的属性、变量定义、import 等
    'no-multi-spaces': [
      'error',
      {
        'ignoreEOLComments': true,
        'exceptions': {
          'Property': true,
          'BinaryExpression': false,
          'VariableDeclarator': true,
          'ImportDeclaration': true
        }
      }
    ],
    // 禁止无用的表达式
    'no-unused-expressions': [
      'error',
      {
        'allowShortCircuit': true,
        'allowTernary': true,
        'allowTaggedTemplates': true
      }
    ],
    // 禁止出现没必要的 call 或 apply
    'no-useless-call': 'error',
    // 禁止使用 delete
    'no-delete-var': 'error',
    // 禁止直接 new 一个类而不赋值
    'no-new': 'error',
    // 禁止使用 new Function，比如 let x = new Function("a", "b", "return a + b");
    'no-new-func': 'error',
    // 禁止使用 new 来生成 String, Number 或 Boolean
    'no-new-wrappers': 'error',
    // 禁止使用保留字作为变量名
    'no-shadow-restricted-names': 'error',
    // 禁止使用未定义的变量
    'no-undef': [
      'error',
      {
        'typeof': false
      }
    ],
    // @fixable 禁止将 undefined 赋值给变量
    'no-undef-init': 'error',
    // 禁止对 undefined 重新赋值
    'no-undefined': 'error',
    // 禁止使用特殊空白符（比如全角空格），除非是出现在字符串、正则表达式或模版字符串中
    'no-irregular-whitespace': [
      'error',
      {
        'skipStrings': true,
        'skipComments': false,
        'skipRegExps': true,
        'skipTemplates': true
      }
    ],
    // @fixable 禁止在正则表达式中出现连续的空格，必须使用 /foo {3}bar/ 代替
    'no-regex-spaces': 'error',
    // 禁止在数组中出现连续的逗号，如 let foo = [,,]
    'no-sparse-arrays': 'error',
    // 禁止空代码块 -> catch 例外
    'no-empty': [
      'error',
      {
        'allowEmptyCatch': true
      }
    ],
    // @fixable 箭头函数能够省略 return 的时候，必须省略，比如必须写成 () => 0，禁止写成 () => { return 0 }
    'arrow-body-style': 'error',
    // @fixable 箭头函数的箭头前后必须有空格
    'arrow-spacing': [
      'error',
      {
        'before': true,
        'after': true
      }
    ],
    // constructor 中必须有 super
    'constructor-super': 'error',
    // @fixable generator 的 * 前面禁止有空格，后面必须有空格
    'generator-star-spacing': [
      'error',
      {
        'before': false,
        'after': true
      }
    ],
    // 禁止对定义过的 class 重新赋值
    'no-class-assign': 'error',
    // 禁止在 super 被调用之前使用 this 或 super
    'no-this-before-super': 'error',
    // 禁止出现没必要的 constructor，比如 constructor(value) { super(value) }
    'no-useless-constructor': 'error',
    // @fixable 禁止解构时出现同样名字的的重命名，比如 let { foo: foo } = bar;
    'no-useless-rename': 'error',
    // generator 函数内必须有 yield
    'require-yield': 'error',
    // 创建 Symbol 时必须传入参数
    'symbol-description': 'error',
    // @fixable ${name} 内的首尾禁止有空格
    'template-curly-spacing': [
      'error',
      'never'
    ],
    // @fixable yield* 后面必须要有空格
    'yield-star-spacing': [
      'error',
      'after'
    ],
    // 以下是配置 ts 语法的(参考) -> https://github.com/bradzacher/eslint-plugin-typescript/tree/0.14.0
    // 类和接口的命名必须遵守帕斯卡命名法
    'typescript/class-name-casing': 'error',
    // 禁止未使用的变量声明 -> 不起作用, 官方代码有问题
    'typescript/no-unused-vars': 'error',
    // 在定义变量之前不允许使用变量
    'typescript/no-use-before-define': 'error',
    // 要求类型注释周围的间距一致
    'typescript/type-annotation-spacing': 'error',
  },
  'parserOptions': {
    'parser': 'typescript-eslint-parser'
  },
};
