# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        
        def deep(node):
            if node == None:
                return 0
            left = deep(node.left)
            right = deep(node.right)
            return left + 1 if left > right else right + 1
        return deep(root)