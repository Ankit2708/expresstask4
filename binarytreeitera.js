var preorderTraversal = function(root, acc = []) {
if (root == null) {
    return [];
  }

  const stack = [];
  const result = [];

  stack.push(root);

  while(stack.length > 0) {
    let current = stack.pop();
    result.push(current.val);

    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }

  return result;
}
