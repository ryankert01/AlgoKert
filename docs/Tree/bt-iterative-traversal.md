---
title: Binary Tree Interative Traversal # leetcode problem title
editLink: true
description: leetcode Preorder Inorder Postorder
---

# {{ $frontmatter.title }}

## Preorder Traversal

```cpp
vector<int> preorderTraversal(TreeNode* root) {
	if(!root) return {};
	vector<int> res;
	stack<TreeNode*> s;
	s.push(root);
	while(!s.empty()) {
		TreeNode* n = s.top();
		s.pop();
		res.push_back(n->val);
		if(n->right) s.push(n->right);
		if(n->left) s.push(n->left);
	}
	return res;
}
```

## Inorder Traversal

```cpp
vector<int> inorderTraversal(TreeNode* root) {
	if(!root) return {};
	vector<int> res;
	stack<TreeNode*> s;
	while(root || !s.empty()) {
		while(root) {
			s.push(root);
			root = root->left;
		}
		root = s.top();
		res.push_back(root->val);
		s.pop();
		root = root->right;
	}
	return res;
}
```

## Postorder Traversal

```cpp
vector<int> postorderTraversal(TreeNode* root) {
	if(!root) return {};
	stack<TreeNode*> s1,s2;
	s1.push(root);
	vector<int> res;
	while(!s1.empty()) {
		TreeNode* n = s1.top();
		s1.pop();
		s2.push(n);
		if(n->left) s1.push(n->left);
		if(n->right) s1.push(n->right);
	}
	while(!s2.empty()) {
		res.push_back(s2.top()->val);
		s2.pop();
	}
	return res;
}
```
