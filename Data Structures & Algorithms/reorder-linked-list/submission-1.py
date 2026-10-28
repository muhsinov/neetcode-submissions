class Solution:
    def reorderList(self, head: Optional[ListNode]) -> None:
        if not head or not head.next:
            return

        # 1. Middle topish
        slow = head
        fast = head

        while fast.next and fast.next.next:
            slow = slow.next
            fast = fast.next.next

        # 2. Listni ikkiga ajratish
        f1 = head
        f2 = slow.next
        slow.next = None

        # 3. Ikkinchi yarmini reverse qilish
        prev = None
        while f2:
            temp = f2.next
            f2.next = prev
            prev = f2
            f2 = temp

        f2 = prev

        # 4. Ikkala yarmini birlashtirish
        while f2:
            temp1 = f1.next
            temp2 = f2.next

            f1.next = f2
            f2.next = temp1

            f1 = temp1
            f2 = temp2