const babel = require('babel-core')

// 我门的babel插件
let MyVisitor = function({ types: t }) {
  return {
    visitor: {
		
      BinaryExpression(path) {
		  
        if (path.node.operator !== "===") {
			return;
		}
		
		path.node.left = t.identifier("fanerge1");
		path.node.right = t.identifier("fanerge2");
      }
	  
    }
  };
}

const code = `yuzhenfan === wangkemei;`;

let demo = babel.transform(code, {
  // 使用我们的插件
  plugins: [MyVisitor]
})

console.log(demo);