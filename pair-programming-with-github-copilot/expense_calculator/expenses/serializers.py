from rest_framework import serializers

from .models import Expense

class ExpenseSerializer(serializers.ModelSerializer):
    """
    exposes Expense model fields
    """
    class Meta:
        model = Expense
        fields = ('id', 'name', 'amount', 'timestamp', 'category')