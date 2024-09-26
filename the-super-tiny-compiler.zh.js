'use strict';

/**
 * TTTTTTTTTTTTTTTTTTTTTTTHHHHHHHHH     HHHHHHHHHEEEEEEEEEEEEEEEEEEEEEE
 * T:::::::::::::::::::::TH:::::::H     H:::::::HE::::::::::::::::::::E
 * T:::::::::::::::::::::TH:::::::H     H:::::::HE::::::::::::::::::::E
 * T:::::TT:::::::TT:::::THH::::::H     H::::::HHEE::::::EEEEEEEEE::::E
 * TTTTTT  T:::::T  TTTTTT  H:::::H     H:::::H    E:::::E       EEEEEE
 *         T:::::T          H:::::H     H:::::H    E:::::E
 *         T:::::T          H::::::HHHHH::::::H    E::::::EEEEEEEEEE
 *         T:::::T          H:::::::::::::::::H    E:::::::::::::::E
 *         T:::::T          H:::::::::::::::::H    E:::::::::::::::E
 *         T:::::T          H::::::HHHHH::::::H    E::::::EEEEEEEEEE
 *         T:::::T          H:::::H     H:::::H    E:::::E
 *         T:::::T          H:::::H     H:::::H    E:::::E       EEEEEE
 *       TT:::::::TT      HH::::::H     H::::::HHEE::::::EEEEEEEE:::::E
 *       T:::::::::T      H:::::::H     H:::::::HE::::::::::::::::::::E
 *       T:::::::::T      H:::::::H     H:::::::HE::::::::::::::::::::E
 *       TTTTTTTTTTT      HHHHHHHHH     HHHHHHHHHEEEEEEEEEEEEEEEEEEEEEE
 *
 *    SSSSSSSSSSSSSSS UUUUUUUU     UUUUUUUUPPPPPPPPPPPPPPPPP   EEEEEEEEEEEEEEEEEEEEEERRRRRRRRRRRRRRRRR
 *  SS:::::::::::::::SU::::::U     U::::::UP::::::::::::::::P  E::::::::::::::::::::ER::::::::::::::::R
 * S:::::SSSSSS::::::SU::::::U     U::::::UP::::::PPPPPP:::::P E::::::::::::::::::::ER::::::RRRRRR:::::R
 * S:::::S     SSSSSSSUU:::::U     U:::::UUPP:::::P     P:::::PEE::::::EEEEEEEEE::::ERR:::::R     R:::::R
 * S:::::S             U:::::U     U:::::U   P::::P     P:::::P  E:::::E       EEEEEE  R::::R     R:::::R
 * S:::::S             U:::::U     U:::::U   P::::P     P:::::P  E:::::E               R::::R     R:::::R
 *  S::::SSSS          U:::::U     U:::::U   P::::PPPPPP:::::P   E::::::EEEEEEEEEE     R::::RRRRRR:::::R
 *   SS::::::SSSSS     U:::::U     U:::::U   P:::::::::::::PP    E:::::::::::::::E     R:::::::::::::RR
 *     SSS::::::::SS   U:::::U     U:::::U   P::::PPPPPPPPP      E:::::::::::::::E     R::::RRRRRR:::::R
 *        SSSSSS::::S  U:::::U     U:::::U   P::::P              E::::::EEEEEEEEEE     R::::R     R:::::R
 *             S:::::S U:::::U     U:::::U   P::::P              E:::::E               R::::R     R:::::R
 *             S:::::S U::::::U   U::::::U   P::::P              E:::::E       EEEEEE  R::::R     R:::::R
 * SSSSSSS     S:::::S U:::::::UUU:::::::U PP::::::PP          EE::::::EEEEEEEE:::::ERR:::::R     R:::::R
 * S::::::SSSSSS:::::S  UU:::::::::::::UU  P::::::::P          E::::::::::::::::::::ER::::::R     R:::::R
 * S:::::::::::::::SS     UU:::::::::UU    P::::::::P          E::::::::::::::::::::ER::::::R     R:::::R
 *  SSSSSSSSSSSSSSS         UUUUUUUUU      PPPPPPPPPP          EEEEEEEEEEEEEEEEEEEEEERRRRRRRR     RRRRRRR
 *
 * TTTTTTTTTTTTTTTTTTTTTTTIIIIIIIIIINNNNNNNN        NNNNNNNNYYYYYYY       YYYYYYY
 * T:::::::::::::::::::::TI::::::::IN:::::::N       N::::::NY:::::Y       Y:::::Y
 * T:::::::::::::::::::::TI::::::::IN::::::::N      N::::::NY:::::Y       Y:::::Y
 * T:::::TT:::::::TT:::::TII::::::IIN:::::::::N     N::::::NY::::::Y     Y::::::Y
 * TTTTTT  T:::::T  TTTTTT  I::::I  N::::::::::N    N::::::NYYY:::::Y   Y:::::YYY
 *         T:::::T          I::::I  N:::::::::::N   N::::::N   Y:::::Y Y:::::Y
 *         T:::::T          I::::I  N:::::::N::::N  N::::::N    Y:::::Y:::::Y
 *         T:::::T          I::::I  N::::::N N::::N N::::::N     Y:::::::::Y
 *         T:::::T          I::::I  N::::::N  N::::N:::::::N      Y:::::::Y
 *         T:::::T          I::::I  N::::::N   N:::::::::::N       Y:::::Y
 *         T:::::T          I::::I  N::::::N    N::::::::::N       Y:::::Y
 *         T:::::T          I::::I  N::::::N     N:::::::::N       Y:::::Y
 *       TT:::::::TT      II::::::IIN::::::N      N::::::::N       Y:::::Y
 *       T:::::::::T      I::::::::IN::::::N       N:::::::N    YYYY:::::YYYY
 *       T:::::::::T      I::::::::IN::::::N        N::::::N    Y:::::::::::Y
 *       TTTTTTTTTTT      IIIIIIIIIINNNNNNNN         NNNNNNN    YYYYYYYYYYYYY
 *
 *         CCCCCCCCCCCCC     OOOOOOOOO     MMMMMMMM               MMMMMMMMPPPPPPPPPPPPPPPPP   IIIIIIIIIILLLLLLLLLLL             EEEEEEEEEEEEEEEEEEEEEERRRRRRRRRRRRRRRRR
 *      CCC::::::::::::C   OO:::::::::OO   M:::::::M             M:::::::MP::::::::::::::::P  I::::::::IL:::::::::L             E::::::::::::::::::::ER::::::::::::::::R
 *    CC:::::::::::::::C OO:::::::::::::OO M::::::::M           M::::::::MP::::::PPPPPP:::::P I::::::::IL:::::::::L             E::::::::::::::::::::ER::::::RRRRRR:::::R
 *   C:::::CCCCCCCC::::CO:::::::OOO:::::::OM:::::::::M         M:::::::::MPP:::::P     P:::::PII::::::IILL:::::::LL             EE::::::EEEEEEEEE::::ERR:::::R     R:::::R
 *  C:::::C       CCCCCCO::::::O   O::::::OM::::::::::M       M::::::::::M  P::::P     P:::::P  I::::I    L:::::L                 E:::::E       EEEEEE  R::::R     R:::::R
 * C:::::C              O:::::O     O:::::OM:::::::::::M     M:::::::::::M  P::::P     P:::::P  I::::I    L:::::L                 E:::::E               R::::R     R:::::R
 * C:::::C              O:::::O     O:::::OM:::::::M::::M   M::::M:::::::M  P::::PPPPPP:::::P   I::::I    L:::::L                 E::::::EEEEEEEEEE     R::::RRRRRR:::::R
 * C:::::C              O:::::O     O:::::OM::::::M M::::M M::::M M::::::M  P:::::::::::::PP    I::::I    L:::::L                 E:::::::::::::::E     R:::::::::::::RR
 * C:::::C              O:::::O     O:::::OM::::::M  M::::M::::M  M::::::M  P::::PPPPPPPPP      I::::I    L:::::L                 E:::::::::::::::E     R::::RRRRRR:::::R
 * C:::::C              O:::::O     O:::::OM::::::M   M:::::::M   M::::::M  P::::P              I::::I    L:::::L                 E::::::EEEEEEEEEE     R::::R     R:::::R
 * C:::::C              O:::::O     O:::::OM::::::M    M:::::M    M::::::M  P::::P              I::::I    L:::::L                 E:::::E               R::::R     R:::::R
 *  C:::::C       CCCCCCO::::::O   O::::::OM::::::M     MMMMM     M::::::M  P::::P              I::::I    L:::::L         LLLLLL  E:::::E       EEEEEE  R::::R     R:::::R
 *   C:::::CCCCCCCC::::CO:::::::OOO:::::::OM::::::M               M::::::MPP::::::PP          II::::::IILL:::::::LLLLLLLLL:::::LEE::::::EEEEEEEE:::::ERR:::::R     R:::::R
 *    CC:::::::::::::::C OO:::::::::::::OO M::::::M               M::::::MP::::::::P          I::::::::IL::::::::::::::::::::::LE::::::::::::::::::::ER::::::R     R:::::R
 *      CCC::::::::::::C   OO:::::::::OO   M::::::M               M::::::MP::::::::P          I::::::::IL::::::::::::::::::::::LE::::::::::::::::::::ER::::::R     R:::::R
 *         CCCCCCCCCCCCC     OOOOOOOOO     MMMMMMMM               MMMMMMMMPPPPPPPPPP          IIIIIIIIIILLLLLLLLLLLLLLLLLLLLLLLLEEEEEEEEEEEEEEEEEEEEEERRRRRRRR     RRRRRRR
 *
 * =======================================================================================================================================================================
 * =======================================================================================================================================================================
 * =======================================================================================================================================================================
 * =======================================================================================================================================================================
 */

/**
 * 今天我们将一起编写一个编译器。但不是普通的编译器……
 * 一个超级迷你的小编译器！一个如此之小的编译器，以至于如果你
 * 删除所有注释，这个文件的实际代码只有大约 200 行。
 *
 * 我们将把一些类似 LISP 的函数调用编译成一些类似 C 的函数调用。
 *
 * 如果你不熟悉其中之一，我会给你一个快速介绍。
 *
 * 如果我们有两个函数 `add` 和 `subtract`，它们会这样写：
 *
 *                  LISP                      C
 *
 *   2 + 2          (add 2 2)                 add(2, 2)
 *   4 - 2          (subtract 4 2)            subtract(4, 2)
 *   2 + (4 - 2)    (add 2 (subtract 4 2))    add(2, subtract(4, 2))
 *
 * 简单吧，对吧？
 *
 * 好的，因为这正是我们要编译的内容。虽然这既不是完整的 LISP 
 * 语法，也不是 C 语法，但它的语法足以展示现代编译器的许多主要部分。
 */

/**
 * 大多数编译器分为三个主要阶段：解析、转换和代码生成。
 *
 * 1. *解析* 是将原始代码转换为代码的更抽象表示。
 *
 * 2. *转换* 对这种抽象表示进行操作，以实现编译器想要的功能。
 *
 * 3. *代码生成* 将转换后的代码表示转换为新的代码。
 */

/**
 * 解析
 * ------
 *
 * 解析通常分为两个阶段：词法分析和语法分析。
 *
 * 1. *词法分析* 将原始代码拆分成称为令牌的部分，通过一个称为词法分析器（或词法分析器）的工具完成。
 *
 *    令牌是一个包含小对象的数组，它们描述了语法的一个独立部分。它们可以是数字、标签、标点符号、运算符等。
 *
 * 2. *语法分析* 将令牌重新格式化为一种表示，描述语法的每个部分及其相互关系。这被称为中间表示或抽象语法树。
 *
 *    抽象语法树（简称 AST）是一个深度嵌套的对象，以一种既易于处理又包含大量信息的方式表示代码。
 *
 * 对于以下语法：
 *
 *   (add 2 (subtract 4 2))
 *
 * 令牌可能看起来像这样：
 *
 *   [
 *     { type: 'paren',  value: '('        },
 *     { type: 'name',   value: 'add'      },
 *     { type: 'number', value: '2'        },
 *     { type: 'paren',  value: '('        },
 *     { type: 'name',   value: 'subtract' },
 *     { type: 'number', value: '4'        },
 *     { type: 'number', value: '2'        },
 *     { type: 'paren',  value: ')'        },
 *     { type: 'paren',  value: ')'        },
 *   ]
 *
 * 而抽象语法树（AST）可能看起来像这样：
 *
 *   {
 *     type: 'Program',
 *     body: [{
 *       type: 'CallExpression',
 *       name: 'add',
 *       params: [{
 *         type: 'NumberLiteral',
 *         value: '2',
 *       }, {
 *         type: 'CallExpression',
 *         name: 'subtract',
 *         params: [{
 *           type: 'NumberLiteral',
 *           value: '4',
 *         }, {
 *           type: 'NumberLiteral',
 *           value: '2',
 *         }]
 *       }]
 *     }]
 *   }
 */

/**
 * 转换
 * ------
 *
 * 编译器的下一个阶段是转换。再次强调，这只是对上一步的 AST 进行修改。它可以在同一种语言中操作 AST，也可以将其翻译成完全新的语言。
 *
 * 让我们看看如何转换一个 AST。
 *
 * 你可能会注意到我们的 AST 中有一些看起来非常相似的元素。
 * 这些对象都有一个类型属性。每个这样的对象称为一个 AST 节点。这些节点上定义了描述树中一个独立部分的属性。
 *
 * 我们可以有一个表示 "NumberLiteral" 的节点：
 *
 *   {
 *     type: 'NumberLiteral',
 *     value: '2',
 *   }
 *
 * 或者一个表示 "CallExpression" 的节点：
 *
 *   {
 *     type: 'CallExpression',
 *     name: 'subtract',
 *     params: [...嵌套节点在这里...],
 *   }
 *
 * 在转换 AST 时，我们可以通过添加/删除/替换属性来操作节点，
 * 可以添加新节点、删除节点，或者可以保持现有的 AST 不变，
 * 基于它创建一个全新的 AST。
 *
 * 由于我们要针对一种新语言，我们将专注于创建一个特定于目标语言的全新 AST。
 *
 * 遍历
 * ------
 *
 * 为了在所有这些节点中导航，我们需要能够遍历它们。这个遍历过程以深度优先的方式访问 AST 中的每个节点。
 *
 *   {
 *     type: 'Program',
 *     body: [{
 *       type: 'CallExpression',
 *       name: 'add',
 *       params: [{
 *         type: 'NumberLiteral',
 *         value: '2'
 *       }, {
 *         type: 'CallExpression',
 *         name: 'subtract',
 *         params: [{
 *           type: 'NumberLiteral',
 *           value: '4'
 *         }, {
 *           type: 'NumberLiteral',
 *           value: '2'
 *         }]
 *       }]
 *     }]
 *   }
 *
 * 所以对于上面的 AST，我们会这样进行：
 *
 *   1. Program - 从 AST 的顶层开始
 *   2. CallExpression (add) - 移动到 Program 主体的第一个元素
 *   3. NumberLiteral (2) - 移动到 CallExpression 参数的第一个元素
 *   4. CallExpression (subtract) - 移动到 CallExpression 参数的第二个元素
 *   5. NumberLiteral (4) - 移动到 CallExpression 参数的第一个元素
 *   6. NumberLiteral (2) - 移动到 CallExpression 参数的第二个元素
 *
 * 如果我们直接操作这个 AST，而不是创建一个单独的 AST，
 * 我们可能会在这里引入各种抽象。但仅仅访问树中的每个节点就足够了。
 *
 * 我使用“访问”这个词的原因是因为有一种模式用于表示对象结构中元素的操作。
 *
 * 访问者
 * --------
 *
 * 这里的基本思想是我们将创建一个“访问者”对象，它有方法来接收不同的节点类型。
 *
 *   var visitor = {
 *     NumberLiteral() {},
 *     CallExpression() {},
 *   };
 *
 * 当我们遍历 AST 时，每当我们“进入”一个匹配类型的节点时，
 * 我们将调用访问者上的方法。
 *
 * 为了使其有用，我们还将传递节点和对父节点的引用。
 *
 *   var visitor = {
 *     NumberLiteral(node, parent) {},
 *     CallExpression(node, parent) {},
 *   };
 *
 * 但是，也可以在“退出”时调用方法。想象一下我们之前的树结构以列表形式展示：
 *
 *   - Program
 *     - CallExpression
 *       - NumberLiteral
 *       - CallExpression
 *         - NumberLiteral
 *         - NumberLiteral
 *
 * 当我们向下遍历时，会达到死胡同的分支。当我们完成树的每个分支时，我们就会“退出”它。所以在向下遍历树时，我们“进入”每个节点，而在返回时则“退出”。
 *
 *   -> Program (进入)
 *     -> CallExpression (进入)
 *       -> Number Literal (进入)
 *       <- Number Literal (退出)
 *       -> CallExpression (进入)
 *          -> Number Literal (进入)
 *          <- Number Literal (退出)
 *          -> Number Literal (进入)
 *          <- Number Literal (退出)
 *       <- CallExpression (退出)
 *     <- CallExpression (退出)
 *   <- Program (退出)
 *
 * 为了支持这一点，我们的访问者的最终形式将如下所示：
 *
 *   var visitor = {
 *     NumberLiteral: {
 *       enter(node, parent) {},
 *       exit(node, parent) {},
 *     }
 *   };
 */

/**
 * 代码生成
 * ---------
 *
 * 编译器的最后一个阶段是代码生成。有时编译器会与转换重叠，
 * 但大多数情况下，代码生成只是意味着将我们的 AST 转换为代码字符串。
 *
 * 代码生成器的工作方式有几种，有些编译器会重用早期的令牌，
 * 其他编译器会创建代码的单独表示，以便能够线性打印节点，
 * 但从我了解的情况来看，大多数编译器将使用我们刚创建的 AST，
 * 这是我们将重点关注的部分。
 *
 * 实际上，我们的代码生成器将知道如何“打印” AST 的所有不同节点类型，
 * 并将递归调用自身以打印嵌套节点，直到所有内容都打印为一长串代码。
 */

/**
 * 就这样！这就是编译器的所有不同组成部分。
 *
 * 这并不是说每个编译器都完全如我所描述的那样。
 * 编译器服务于许多不同的目的，可能需要比我详细介绍的更多步骤。
 *
 * 但现在你应该对大多数编译器的整体高层次有一个大致的了解。
 *
 * 现在我解释了这些，你们都准备好去写自己的编译器了吧？
 *
 * 开玩笑的，这正是我来帮助你们的原因 :P
 *
 * 那么让我们开始吧……
 */

/**
 * ============================================================================
 *                                   (/^▽^)/
 *                                THE TOKENIZER!
 * ============================================================================
 */

/**
 * 我们将从解析的第一阶段，词法分析，开始，使用词法分析器。
 *
 * 我们将把代码字符串分解成一个令牌数组。
 *
 *   (add 2 (subtract 4 2))   =>   [{ type: 'paren', value: '(' }, ...]
 */

// 我们首先接受一个代码输入字符串，并将设置两个东西……
function tokenizer(input) {

  // 一个 `current` 变量，用于跟踪我们在代码中的位置，就像一个光标。
  let current = 0;

  // 一个 `tokens` 数组，用于存放我们的令牌。
  let tokens = [];

  // 我们首先创建一个 `while` 循环，在循环内部设置我们的 `current` 变量可以被增量多次。
  //
  // 我们这样做是因为我们可能希望在单个循环内多次增量 `current`，因为我们的令牌可以是任意长度。
  while (current < input.length) {

    // 我们还将把 `current` 字符存储在 `input` 中。
    let char = input[current];

    // 我们要检查的第一件事是一个开括号。
    // 这将用于 `CallExpression`，但现在我们只关心这个字符。
    //
    // 我们检查是否有一个开括号：
    if (char === '(') {

      // 如果是这样，我们就推送一个类型为 `paren` 的新令牌，并将值设置为左括号。
      tokens.push({
        type: 'paren',
        value: '(',
      });

      // 然后我们增加 `current`。
      current++;

      // 然后我们 `continue` 进入循环的下一个周期。
      continue;
    }

    // 接下来我们要检查闭合括号。
    // 我们做的事情和之前完全一样：检查右括号，添加一个新令牌，增加 `current`，然后 `continue`。
    if (char === ')') {
      tokens.push({
        type: 'paren',
        value: ')',
      });
      current++;
      continue;
    }

    // 接下来，我们将检查空白字符。
    // 这很有趣，因为我们关心空白字符是否存在以分隔字符，但它实际上并不重要，因为我们不需要将其作为令牌存储。
    // 我们只会在后面丢弃它。
    // 
    // 所以在这里，我们只需测试其存在性，如果存在，我们将直接 `continue`。
    let WHITESPACE = /\s/;
    if (WHITESPACE.test(char)) {
      current++;
      continue;
    }

    // 下一个类型的令牌是数字。
    // 这与我们之前看到的不同，因为数字可以由任意数量的字符组成，我们希望将整个字符序列捕获为一个令牌。
    //
    //   (add 123 456)
    //        ^^^ ^^^
    //        只有两个单独的令牌
    //
    // 因此，当我们在序列中遇到第一个数字时，就开始这个过程。
    let NUMBERS = /[0-9]/;
    if (NUMBERS.test(char)) {

      // 我们将创建一个 `value` 字符串，用于存储字符。
      let value = '';

      // 然后，我们将遍历序列中的每个字符，
      // 直到遇到一个不是数字的字符，将每个数字字符推送到我们的 `value` 中，
      // 并在此过程中增加 `current`。
      while (NUMBERS.test(char)) {
        value += char;
        char = input[++current];
      }

      // 之后，我们将 `number` 令牌推送到 `tokens` 数组中。
      tokens.push({ type: 'number', value });

      // 然后我们继续。
      continue;
    }

    // 我们还将为我们的语言添加对字符串的支持，字符串是指任何被双引号（"）包围的文本。
    // 
    //   (concat "foo" "bar")
    //            ^^^   ^^^ 字符串令牌
    // 
    // 我们将首先检查开头的引号：
    if (char === '"') {
      // 保留一个 `value` 变量，用于构建我们的字符串令牌。
      let value = '';

      // 我们将在令牌中跳过开头的双引号。
      char = input[++current];

      // 然后我们将迭代每个字符，直到遇到另一个双引号。
      while (char !== '"') {
        value += char;
        char = input[++current];
      }

      // 跳过结尾的双引号。
      char = input[++current];

      // 并将我们的 `string` 令牌添加到 `tokens` 数组中。
      tokens.push({ type: 'string', value });

      continue;
    }

    // 最后一个类型的令牌将是 `name` 令牌。它是字母序列而不是数字，表示我们 lisp 语法中的函数名称。
    //
    //   (add 2 4)
    //    ^^^
    //    名称令牌
    //
    let LETTERS = /[a-z]/i;
    if (LETTERS.test(char)) {
      let value = '';

      // 同样，我们将遍历所有字母，将它们推送到一个值中。
      while (LETTERS.test(char)) {
        value += char;
        char = input[++current];
      }

      // 然后将该值作为类型为 `name` 的令牌推送，并继续。
      tokens.push({ type: 'name', value });

      continue;
    }

    // 最后，如果到现在为止我们还没有匹配到任何字符，我们将抛出一个错误并完全退出。
    throw new TypeError('I dont know what this character is: ' + char);
  }

  // 然后在 `tokenizer` 的末尾，我们只需返回 tokens 数组。
  return tokens;
}

/**
 * ============================================================================
 *                                 ヽ/❀o ل͜ o\ﾉ
 *                                THE PARSER!!!
 * ============================================================================
 */

/**
 * 对于我们的解析器，我们将把令牌数组转换为 AST（抽象语法树）。
 *
 *   [{ type: 'paren', value: '(' }, ...]   =>   { type: 'Program', body: [...] }
 */

// 好的，所以我们定义一个 `parser` 函数，该函数接受我们的 `tokens` 数组。
function parser(tokens) {

  // 同样，我们保留一个 `current` 变量，作为光标使用。
  let current = 0;

  // 但这次我们将使用递归而不是 `while` 循环。因此，我们定义一个 `walk` 函数。
  function walk() {

    // 在 `walk` 函数内部，我们首先获取 `current` 令牌。
    let token = tokens[current];

    // 我们将根据不同类型的令牌进入不同的代码路径，首先从 `number` 令牌开始。
    // 
    // 我们测试是否有 `number` 令牌。
    if (token.type === 'number') {

      // 如果有，我们将增加 `current`。
      current++;

      // 然后我们返回一个名为 `NumberLiteral` 的新 AST 节点，并将其值设置为我们令牌的值。
      return {
        type: 'NumberLiteral',
        value: token.value,
      };
    }

    // 如果我们有一个字符串，我们将与数字相同，创建一个 `StringLiteral` 节点。
    if (token.type === 'string') {
      current++;

      return {
        type: 'StringLiteral',
        value: token.value,
      };
    }

    // 接下来，我们将寻找 CallExpressions。当我们遇到一个开括号时就开始这个过程。
    if (
      token.type === 'paren' &&
      token.value === '('
    ) {

      // 我们将增加 `current` 来跳过括号，因为在我们的 AST 中我们不关心它。
      token = tokens[++current];

      // 我们创建一个类型为 `CallExpression` 的基础节点，
      // 并将名称设置为当前令牌的值，因为开括号后的下一个令牌是函数的名称。
      let node = {
        type: 'CallExpression',
        name: token.value,
        params: [],
      };

      // 我们再次增加 `current` 以跳过名称令牌。
      token = tokens[++current];

      // 现在我们想要遍历每个令牌，这些令牌将成为我们 `CallExpression` 的 `params`，直到遇到闭合括号。
      //
      // 这就是递归的用武之地。我们不尝试解析一个可能无限嵌套的节点集合，而是依赖递归来解决问题。
      //
      // 为了说明这一点，让我们来看一下我们的 Lisp 代码。
      // 你可以看到 `add` 的参数是一个数字和一个包含其自身数字的嵌套 `CallExpression`。
      //
      //   (add 2 (subtract 4 2))
      //
      // 你还会注意到，在我们的令牌数组中有多个闭合括号。
      //
      //   [
      //     { type: 'paren',  value: '('        },
      //     { type: 'name',   value: 'add'      },
      //     { type: 'number', value: '2'        },
      //     { type: 'paren',  value: '('        },
      //     { type: 'name',   value: 'subtract' },
      //     { type: 'number', value: '4'        },
      //     { type: 'number', value: '2'        },
      //     { type: 'paren',  value: ')'        }, <<< 闭合括号
      //     { type: 'paren',  value: ')'        }, <<< 闭合括号
      //   ]
      //
      // 我们将依赖嵌套的 `walk` 函数将 `current` 变量增加到任何嵌套的 `CallExpression` 之后。

      // 所以我们创建一个 `while` 循环，继续直到遇到 `type` 为 `'paren'` 且 `value` 为闭合括号的令牌。
      while (
        (token.type !== 'paren') ||
        (token.type === 'paren' && token.value !== ')')
      ) {
        // 我们将调用 `walk` 函数，它将返回一个 `node`，我们会将其推入我们的 `node.params` 中。
        node.params.push(walk());
        token = tokens[current];
      }

      // 最后，我们将最后一次增加 `current` 以跳过闭合括号。
      current++;

      // 并返回该节点。
      return node;
    }

    // 同样，如果到现在为止我们还没有识别出令牌类型，我们将抛出一个错误。
    throw new TypeError(token.type);
  }

  // 现在，我们将创建我们的 AST，它将有一个根节点，类型为 `Program`。
  let ast = {
    type: 'Program',
    body: [],
  };

  // 我们将启动我们的 `walk` 函数，将节点推送到我们的 `ast.body` 数组中。
  //
  // 我们在循环中这样做的原因是因为我们的程序可以有一个接一个的 `CallExpression`，而不是嵌套在一起。
  //
  //   (add 2 2)
  //   (subtract 4 2)
  //
  while (current < tokens.length) {
    ast.body.push(walk());
  }

  // 在我们的解析器末尾，我们将返回 AST。
  return ast;
}

/**
 * ============================================================================
 *                                 ⌒(❀>◞౪◟<❀)⌒
 *                               THE TRAVERSER!!!
 * ============================================================================
 */

/**
 * 所以现在我们有了 AST，我们希望能够通过访问者访问不同的节点。
 * 当我们遇到类型匹配的节点时，我们需要能够调用访问者上的方法。
 *
 *   traverse(ast, {
 *     Program: {
 *       enter(node, parent) {
 *         // ...
 *       },
 *       exit(node, parent) {
 *         // ...
 *       },
 *     },
 *
 *     CallExpression: {
 *       enter(node, parent) {
 *         // ...
 *       },
 *       exit(node, parent) {
 *         // ...
 *       },
 *     },
 *
 *     NumberLiteral: {
 *       enter(node, parent) {
 *         // ...
 *       },
 *       exit(node, parent) {
 *         // ...
 *       },
 *     },
 *   });
 */

// 因此，我们定义一个 traverser 函数，该函数接受一个 AST 和一个访问者。
// 在内部，我们将定义两个函数...
function traverser(ast, visitor) {

  // 一个 `traverseArray` 函数，允许我们遍历数组并调用我们将定义的下一个函数：`traverseNode`。
  function traverseArray(array, parent) {
    array.forEach(child => {
      traverseNode(child, parent);
    });
  }

  // `traverseNode` 将接受一个 `node` 及其 `parent` 节点，以便将两者传递给我们的访问者方法。
  function traverseNode(node, parent) {

    // 我们首先测试访问者中是否存在与 `type` 匹配的方法。
    let methods = visitor[node.type];

    // 如果该节点类型有一个 `enter` 方法，我们将用 `node` 和它的 `parent` 调用该方法。
    if (methods && methods.enter) {
      methods.enter(node, parent);
    }

    // 接下来，我们将根据当前节点类型将内容拆分开。
    switch (node.type) {

      // 我们将从顶层的 `Program` 开始。由于 Program 节点具有名为 body 的属性，该属性包含一个节点数组，因此我们将调用
      // `traverseArray` 来深入遍历这些节点。
      //
      // （请记住，`traverseArray` 将进一步调用 `traverseNode`，因此我们正在导致树的递归遍历）
      case 'Program':
        traverseArray(node.body, node);
        break;

      // 接下来，我们对 `CallExpression` 做同样的处理，遍历它们的 `params`。
      case 'CallExpression':
        traverseArray(node.params, node);
        break;

      // 对于 `NumberLiteral` 和 `StringLiteral`，我们没有任何子节点可以访问，因此我们直接退出。
      case 'NumberLiteral':
      case 'StringLiteral':
        break;

      // 同样，如果我们没有识别出节点类型，那么我们将抛出一个错误。
      default:
        throw new TypeError(node.type);
    }

    // 如果此节点类型有 `exit` 方法，我们将使用 `node` 和其 `parent` 调用该方法。
    if (methods && methods.exit) {
      methods.exit(node, parent);
    }
  }

  // 最后，我们通过调用 `traverseNode` 来启动遍历器，传入我们的 AST，并且没有 `parent`，因为 AST 的顶层没有父节点。
  traverseNode(ast, null);
}

/**
 * ============================================================================
 *                                   ⁽(◍˃̵͈̑ᴗ˂̵͈̑)⁽
 *                              THE TRANSFORMER!!!
 * ============================================================================
 */

/**
 * 接下来是转换器。我们的转换器将接收我们构建的 AST，并将其传递给我们的遍历函数，使用访问者，并创建一个新的 AST。
 *
 * ----------------------------------------------------------------------------
 *   原始 AST                     |   转换后的 AST
 * ----------------------------------------------------------------------------
 *   {                                |   {
 *     type: 'Program',               |     type: 'Program',
 *     body: [{                       |     body: [{
 *       type: 'CallExpression',      |       type: 'ExpressionStatement',
 *       name: 'add',                 |       expression: {
 *       params: [{                   |         type: 'CallExpression',
 *         type: 'NumberLiteral',     |         callee: {
 *         value: '2'                 |           type: 'Identifier',
 *       }, {                         |           name: 'add'
 *         type: 'CallExpression',    |         },
 *         name: 'subtract',          |         arguments: [{
 *         params: [{                 |           type: 'NumberLiteral',
 *           type: 'NumberLiteral',   |           value: '2'
 *           value: '4'               |         }, {
 *         }, {                       |           type: 'CallExpression',
 *           type: 'NumberLiteral',   |           callee: {
 *           value: '2'               |             type: 'Identifier',
 *         }]                         |             name: 'subtract'
 *       }]                           |           },
 *     }]                             |           arguments: [{
 *   }                                |             type: 'NumberLiteral',
 *                                    |             value: '4'
 * ---------------------------------- |           }, {
 *                                    |             type: 'NumberLiteral',
 *                                    |             value: '2'
 *                                    |           }]
 *  （抱歉，另一个更长。）               |         }
 *                                    |       }
 *                                    |     }]
 *                                    |   }
 * ----------------------------------------------------------------------------
 */

// 我们有了我们的转换器函数，它将接受 Lisp AST。
function transformer(ast) {

  // 我们将创建一个 `newAst`，它将像我们之前的 AST 一样包含一个程序节点。
  let newAst = {
    type: 'Program',
    body: [],
  };

  // 接下来，我将稍微耍个小花招，创建一个黑科技。
  // 我们将使用父节点上的一个名为 `context` 的属性，将节点推送到它们父节点的 `context` 中。
  // 通常你会有比这更好的抽象方式，但出于我们的目的，这样可以保持简单。
  //
  // 请注意，context 是从旧 AST 到新 AST 的引用。
  ast._context = newAst.body;

  // 我们将首先使用我们的 AST 和一个访问者调用遍历器函数。
  traverser(ast, {

    // 第一个访问者方法接受任何 `NumberLiteral`。
    NumberLiteral: {
      // 我们将在进入时访问它们。
      enter(node, parent) {
        // 我们将创建一个新的节点，也命名为 `NumberLiteral`，并将其推送到父上下文中。
        parent._context.push({
          type: 'NumberLiteral',
          value: node.value,
        });
      },
    },

    // 接下来是 `StringLiteral`
    StringLiteral: {
      enter(node, parent) {
        parent._context.push({
          type: 'StringLiteral',
          value: node.value,
        });
      },
    },

    // 接下来是 `CallExpression`。
    CallExpression: {
      enter(node, parent) {

        // 我们开始创建一个新的节点 `CallExpression`，并包含一个嵌套的 `Identifier`。
        let expression = {
          type: 'CallExpression',
          callee: {
            type: 'Identifier',
            name: node.name,
          },
          arguments: [],
        };

        // 接下来，我们将在原始 `CallExpression` 节点上定义一个新的上下文，
        // 该上下文将引用 `expression` 的参数，以便我们可以推送参数。
        node._context = expression.arguments;

        // 然后我们将检查父节点是否是 `CallExpression`。
        // 如果不是...
        if (parent.type !== 'CallExpression') {

          // 我们将用一个 `ExpressionStatement` 包裹我们的 `CallExpression` 节点。
          // 这样做是因为 JavaScript 中的顶层 `CallExpression` 实际上是语句。
          expression = {
            type: 'ExpressionStatement',
            expression: expression,
          };
        }

        // 最后，我们将（可能被包装的）`CallExpression` 推送到 `parent` 的 `context` 中。
        parent._context.push(expression);
      },
    }
  });

  // 在我们转换器函数的末尾，我们将返回刚刚创建的新 AST。
  return newAst;
}

/**
 * ============================================================================
 *                               ヾ（〃＾∇＾）ﾉ♪
 *                            THE CODE GENERATOR!!!!
 * ============================================================================
 */

/**
 * 现在让我们进入最后一个阶段：代码生成器。
 *
 * 我们的代码生成器将递归调用自身，将树中的每个节点打印到一个巨大的字符串中。
 */

function codeGenerator(node) {

  // 我们将根据 `node` 的 `type` 来拆分内容。
  switch (node.type) {

    // 如果我们有一个 `Program` 节点，我们将遍历 `body` 中的每个节点，
    // 并通过代码生成器处理它们，并用换行符连接。
    case 'Program':
      return node.body.map(codeGenerator)
        .join('\n');

    // 对于 `ExpressionStatement`，我们将对嵌套的表达式调用代码生成器，并添加一个分号...
    case 'ExpressionStatement':
      return (
        codeGenerator(node.expression) +
        ';' // << (...因为我们喜欢以 *正确* 的方式编码)
      );

    // 对于 `CallExpression`，我们将打印 `callee`，添加一个左括号，
    // 遍历 `arguments` 数组中的每个节点，使用代码生成器处理它们，并用逗号连接，
    // 然后添加一个右括号。
    case 'CallExpression':
      return (
        codeGenerator(node.callee) +
        '(' +
        node.arguments.map(codeGenerator)
          .join(', ') +
        ')'
      );

    // 对于 `Identifier`，我们将直接返回 `node` 的名称。
    case 'Identifier':
      return node.name;

    // 对于 `NumberLiteral`，我们将直接返回 `node` 的值。
    case 'NumberLiteral':
      return node.value;

    // 对于 `StringLiteral`，我们将为 `node` 的值添加引号。
    case 'StringLiteral':
      return '"' + node.value + '"';

    // 如果我们没有识别出节点，我们将抛出一个错误。
    default:
      throw new TypeError(node.type);
  }
}

/**
 * ============================================================================
 *                                  (۶* ‘ヮ’)۶”
 *                         !!!!!!!!THE COMPILER!!!!!!!!
 * ============================================================================
 */

/**
 * 最后！我们将创建我们的 `compiler` 函数。在这里我们将连接管道的每个部分。
 *
 *   1. input  => tokenizer   => tokens
 *   2. tokens => parser      => ast
 *   3. ast    => transformer => newAst
 *   4. newAst => generator   => output
 */

function compiler(input) {
  let tokens = tokenizer(input);
  let ast    = parser(tokens);
  let newAst = transformer(ast);
  let output = codeGenerator(newAst);

  // 并简单地返回输出！
  return output;
}

/**
 * ============================================================================
 *                                   (๑˃̵ᴗ˂̵)و
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 你做到了 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * ============================================================================
 */

// 现在我只是导出所有内容...
module.exports = {
  tokenizer,
  parser,
  traverser,
  transformer,
  codeGenerator,
  compiler,
};
