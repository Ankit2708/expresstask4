class Node {
    constructor(val) {
        this.key = val;
        this.left = null;
        this.right = null;
    }
}
 
    var temp;
 
    
    function preorder(temp) {
        if (temp == null)
            return;
        document.write(temp.key + " ");
        preorder(temp.left);
        
        inorder(temp.right);
    }
 
    /* function to insert element in binary tree */
    function insert(temp , key) {
 
        if (temp == null) {
            root = new Node(key);
            return;
        }
        var q = [];
        q.push(temp);
 
        
        while (q.length!=0) {
            temp = q.pop();
             
 
            if (temp.left == null) {
                temp.left = new Node(key);
                break;
            } else
                q.push(temp.left);
 
            if (temp.right == null) {
                temp.right = new Node(key);
                break;
            } else
                q.push(temp.right);
        }
    }
 
    
var root = new Node(10);
root.left = new Node(11);
root.left.left = new Node(7);
root.right = new Node(9);
root.right.left = new Node(15);
root.right.right = new Node(8);

document.write("Preorder traversal before insertion:");
preorder(root);

var key = 12;
insert(root, key);

document.write("<br\>Inorder traversal after insertion:");
preorder(root);



        // Iterative approach
       
 
